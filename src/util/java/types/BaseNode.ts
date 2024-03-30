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

    hasPrefix(prefix: string): boolean {
        const pfxArray = (this as any).prefixes
        if (pfxArray?.length) {
            for (let v of pfxArray) {
                if (v === prefix) {
                    return true
                }
            }
        }
        return false
    }

    isPublic(): boolean {
        return this.hasPrefix('public')
    }

    capitalize(str: string): string {
        if (str && str.length > 0) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
        return str;
    }
}