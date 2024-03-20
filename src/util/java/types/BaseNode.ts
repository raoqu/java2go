import { AType, AstBase } from "../AstTypes";

export default class BaseNode implements AstBase {
    type: string = AType._INVALID
    children?: AstBase[]

    constructor(type: string) {
        this.type = type
    }

    convert(): any {
        console.log('UNIMPLEMENTED CONVERTER:', this)
        return ''
    }

    toString(): string {
        return this.convert ? this.convert() as string : ''
    }
}