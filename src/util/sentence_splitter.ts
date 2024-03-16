export default class SentenceSplitter {
    // private _tuple: boolean = true;

    constructor() {
        // this._tuple = tuple;
    }

    split(s: string): ( [string, string | null])[] {
        let arr: [string, string | null][] = [[s, null]];
        arr = this.splitIntoTuplesByRule(arr, '(\\.(?=\\s|$))');
        arr = this.splitIntoTuplesByRule(arr, '(\\?(?=\\s|$))');
        arr = this.splitIntoTuplesByRule(arr, '(\\](?=\\s|$))');
        arr = this.splitIntoTuplesByRule(arr, '(。)');
        arr = this.splitIntoTuplesByRule(arr, '(？)');

        return arr;
    }

    private splitIntoTuplesByRule(arr: [string, string | null][], pattern: string): [string, string | null][] {
        const output: [string, string | null][] = [];
        arr.forEach(item => {
            const resultArr: [string, string | null][] = this.splitTuplesByRegex(item[0], pattern);
            if (resultArr.length > 0) {
                const lastOne = resultArr.pop()!;
                resultArr.push([lastOne[0], item[1] !== null ? item[1] : lastOne[1]]);
            }
            output.push(...resultArr);
        });
        return output;
    }

    // private toStringArray(tupleArr: [string, string | null][]): string[] {
    //     return tupleArr.map(item => item[1] === null ? item[0] : item[0] + item[1]);
    // }

    private splitTuplesByRegex(inputString: string, rx: string): [string, string | null][] {
        const regex = new RegExp(rx, 'g');
        const arr: [string, string | null][] = [];
        let match: RegExpExecArray | null;
        let lastIndex = 0;

        while ((match = regex.exec(inputString)) !== null) {
            const part1 = inputString.substring(lastIndex, match.index);
            const part2 = match[0];
            lastIndex = regex.lastIndex;

            if (part1.length > 0 || part2 !== null) {
                arr.push([part1, part2]);
            }
        }

        if (lastIndex < inputString.length) {
            arr.push([inputString.substring(lastIndex), null]);
        }

        return arr;
    }
}

// Example usage
// const splitter = new SentenceSplitter(true);
// const s = 'You can also come up here to the? to?p and ___ theres\'s version 1.0 up. abc 0.1 up. def hg c.';
// const arr = splitter.split(s);
// arr.forEach(item => {
//     if (typeof item === 'string') {
//         console.log(item);
//     } else {
//         console.log(item.join(''));
//     }
// });
