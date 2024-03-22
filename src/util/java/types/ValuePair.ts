import { AType, AstBase } from "../AstTypes";

export default class ValuePair implements AstBase {
    type: string = AType.VALUE_PAIR
    key: string = ''
    val?: AstBase

    constructor(key:string) {
        this.key = key
    }

    convert(): string[] {
        return []
    }
}