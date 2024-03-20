import { C } from "@/converter/GoConverter";
import { AType } from "./AstTypes";
import BaseNode from "./types/BaseNode";
import TypeNode from "./types/Type";

export default class InvocationNode extends BaseNode {
    name: string = ''
    ttype?: TypeNode

    constructor() {
        super(AType.INVOCATION)
    }

    convert(): string[] {

        return [this.toString()]
    }

    toString(): string {
        const typename = C.typename(this.ttype)
        return typename ? (typename + '.' + this.name) : this.name
    }
}