import { C } from "@/converter/GoConverter";
import { AType, AstBase } from "../AstTypes";
import BaseNode from "./BaseNode";
import VariableNode from "./Variable";

export default class ForNode extends BaseNode {
    init?: string
    update?: string
    expression?: AstBase
    statement?: AstBase
    range: boolean = false
    variable?: AstBase

    constructor() {
        super(AType.FOR)
    }

    convert(): string[] {
        var prefix: string
        if (this.range) {
            const v = this.variable as VariableNode
            prefix = 'for _, ' + v.name + ' := ' + this.expression
        } else {
            prefix = 'for ' + (this.init || '') + '; ' + C.toText(this.expression) + '; '
        }
        const statement = C.convert(this.statement)
        return C.join([prefix], statement)
    }
}