import { C, L } from "@/converter/GoConverter";
import { AType, AstBase, AstVariable } from "../AstTypes";
import BaseNode from "./BaseNode";
import TypeNode from "./Type";

export default class VariableNode extends BaseNode {
    name = ''
    defaultValue?: any
    isField = false
    vtype?: AstBase
    isArray = false

    constructor(name: string) {
        super(AType.VARIABLE)
        this.name = name
    }

    convert(): string[] {
        return L(...[this.variableDeclare(this)])
    }

    private variableDeclare(node: AstBase | undefined, inStatement: boolean = false): string {
        if (!node) return ''

        const variable = node as VariableNode
        const vtype = variable.vtype ? variable.vtype as TypeNode : new TypeNode('UNKNOWN')
        const typename = C.typename(vtype)
        if (variable.isField) {
            return variable.name + ' *' + typename
        }
        return inStatement ? 'var ' : '' + variable.name + ' : ' + typename
    }
}