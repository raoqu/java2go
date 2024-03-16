import { timeStrToMillis, millisToTimeStr } from "@/util/time_str";
import SentenceSplitter from "@/util/sentence_splitter";

export interface SerialItem {
    start: string;
    end: string;
    content: string;
}

export default class TimeSerials {
    private static _pattern = /\[(\d{2}:\d{2}:\d{2}\.\d{3}) --> (\d{2}:\d{2}:\d{2}\.\d{3})\]\s+(.*)\s*/;
    public serials: SerialItem[] = [];
    private splitter: SentenceSplitter = new SentenceSplitter(); // Assuming the constructor accepts a boolean for 'tuple'
    private static MAX_SENTENCE_LENGTH = 360;
    private maxPieceLength: number = -1;

    constructor(maxPieceLength: number = -1) {
        this.maxPieceLength = maxPieceLength;
    }

    public parse(text: string): TimeSerials {
        const itemList: SerialItem[] = [];
        const isSerial = this.isSerialContent(text);
        const dummyTimestamp = millisToTimeStr(0);

        text.split("\n").forEach((line: string) => {
            if (isSerial) {
                const match = TimeSerials._pattern.exec(line);
                if (match) {
                    const [start, end, content] = match.slice(1);
                    this.append(start, end, content, itemList);
                }
            } else {
                const content = line.trim();
                if (content) {
                    this.append(dummyTimestamp, dummyTimestamp, content, itemList);
                }
            }
        });

        this.serials = itemList;
        return this
    }

    public toString(): string {
        const data = this.serials.map(item => `[${item.start} --> ${item.end}]   ${item.content}`).join("\n");
        return data;
    }

    public clone(): TimeSerials {
        const serials = new TimeSerials()
        this.serials.forEach((item) => {
            serials.append(item.start, item.end, item.content)
        })

        return serials
    }

    public reorganize(): TimeSerials {
        const itemList = this.serials;
        const newList: SerialItem[] = [];
        let start: string = '';
        let end: string = '';
        let joined = "";

        itemList.forEach((item) => {
            const arr = this.splitter.split(item.content);
            const itemStart = item.start;
            const itemEnd = item.end;
            const currentStartMillis = timeStrToMillis(item.start);
            const currentEndMillis = timeStrToMillis(item.end);
            const totalLength = this.totalLength(arr);

            if (!start) {
                start = itemStart;
            }

            let sumLength = 0;

            arr.forEach((splitted, i) => {
                const isLast = i === arr.length - 1;
                sumLength += splitted[0].length;

                joined += splitted[0];
                if (splitted[1] !== null) { // Assuming splitted is a tuple-like structure
                    sumLength += splitted[1].length;
                    joined += splitted[1];
                    const pieceEnd = isLast ? itemEnd : millisToTimeStr(
                        currentStartMillis + (currentEndMillis - currentStartMillis) * sumLength / totalLength
                    );
                    this.append(start, pieceEnd, joined, newList);

                    start = isLast ? '' : pieceEnd;
                    end = pieceEnd;
                    joined = "";
                } else if (joined.length >= TimeSerials.MAX_SENTENCE_LENGTH) {
                    const pieceEnd = isLast ? itemEnd : millisToTimeStr(
                        currentStartMillis + (currentEndMillis - currentStartMillis) * sumLength / totalLength
                    );
                    this.append(start, pieceEnd, joined, newList);
                    start = isLast ? '' : pieceEnd;
                    end = itemEnd;
                    joined = "";
                } else {
                    end = itemEnd;
                    joined += " ";
                }
            });

        });

        if (joined !== "") {
            this.append(start!, end!, joined, newList); // '!' asserts non-null for TypeScript
        }

        this.serials = newList;
        return this
    }

    private isSerialContent(text: string): boolean {
        for (const line of text.split("\n")) {
            if (line.trim()) {
                return TimeSerials._pattern.test(line);
            }
        }
        return false;
    }

    private append(start: string, end: string, content: string, arr: SerialItem[] = this.serials): void {
        if (arr.length > 0) {
            const lastItem = arr[arr.length - 1];
            if (lastItem.content.endsWith('.') && content.endsWith('.') && content.length < 15 && (lastItem.content.length < this.maxPieceLength || this.maxPieceLength < 0)) {
                lastItem.content += content;
                lastItem.end = end;
                return;
            }
        }

        arr.push({ start, end, content });
    }

    private totalLength(arr: [string, string | null][]): number {
        return arr.reduce((total, item) => total + item[0].length + (item[1] ? item[1].length : 0), 0);
    }

    public dump(): void {
        this.serials.forEach(item => console.log(`[${item.start} --> ${item.end}]   ${item.content}`));
    }
}