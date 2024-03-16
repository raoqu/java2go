/* eslint-disable no-constant-condition */
function timeStrToMillis(timeStr: string): number {
    // Time string to Milliseconds
    const parts = timeStr.split(":");
    const hours = parseInt(parts[0], 10);
    const minutes = parseInt(parts[1], 10);
    const secondsParts = parts[2].split(".");
    const seconds = parseInt(secondsParts[0], 10);
    const millis = secondsParts.length > 1 ? parseInt(secondsParts[1], 10) : 0;
    return ((hours * 3600) + (minutes * 60) + seconds) * 1000 + millis;
}

function millisToTimeStr(millis: number): string {
    // Milliseconds to Time string
    const hours = Math.floor(millis / 3600000);
    millis -= hours * 3600000;
    const minutes = Math.floor(millis / 60000);
    millis -= minutes * 60000;
    const seconds = Math.floor(millis / 1000);
    millis -= seconds * 1000;
    let timeStr = `${padNumber(hours, 2)}:${padNumber(minutes, 2)}:${padNumber(seconds, 2)}`;
    if (millis > 0) {
        timeStr += `.${padNumber(millis, 3)}`;
    }
    return timeStr;
}

function padNumber(num: number, size: number): string {
    let s = num.toString();
    while (s.length < size) s = "0" + s;
    return s;
}

function splitStringByDelimiters(s: string, arr: string[]): [string, string | null][] {
    const result: [string, string | null][] = [];
    const splitInfo: { index: number; delimiter: string }[] = [];

    arr.forEach(delimiter => {
        let start = 0;
        while (true) {
            const index = s.indexOf(delimiter, start);
            if (index === -1) break;
            splitInfo.push({ index, delimiter });
            start = index + delimiter.length;
        }
    });

    splitInfo.sort((a, b) => a.index - b.index);

    let lastIndex = 0;
    splitInfo.forEach(({ index, delimiter }) => {
        if (index > lastIndex) {
            result.push([s.substring(lastIndex, index), delimiter]);
        }
        lastIndex = index + delimiter.length;
    });

    if (lastIndex < s.length) {
        result.push([s.substring(lastIndex), null]);
    }

    return result;
}

function isWindows(): boolean {
    return navigator.platform.startsWith('Win');
}

// // Example usage
// console.log(timeStrToMillis('00:23:55.880'));
// console.log(millisToTimeStr(222334));
// console.log(splitStringByDelimiters("apple--banana-orange/orange;pear", ["--", "/", ";"]));
// console.log(splitStringByDelimiters("This is an example.a", ["."]));
export {timeStrToMillis,millisToTimeStr,splitStringByDelimiters,isWindows}