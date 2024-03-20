export default class TimeCost {
    name: string = ''
    start: number = 0
    end: number = 0

    constructor(name: string) {
        this.name = name
        this.start = performance.now();
    }

    cost(): number {
        this.end = performance.now();
        const durationMs = this.end - this.start;
        console.log(`Cost for ` + this.name + ` : ${durationMs.toFixed(2)}ms`);
        return durationMs
    }

}