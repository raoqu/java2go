import { C, L } from "@/converter/GoConverter";
import { AType, AstBase, AstVariable } from "../AstTypes";
import BaseNode from "./BaseNode";
import TypeNode from "./Type";
import CommentNode from "./Comment";

export default class VariableNode extends BaseNode {
    name = ''
    defaultValue?: any
    isField = false
    vtype?: AstBase
    isArray = false
    declare = false
    initial?: AstBase
    comments?: AstBase[]

    constructor(name: string) {
        super(AType.VARIABLE)
        this.name = name
    }

    convert(): string[] {
        if (this.isField) {
            const comments = C.comments(this.comments as CommentNode[])
            // const annotations = C.prefix(C.convert(this.annotations), '// ')
            return C.join(comments, [this.fieldString()])
        }
        if (this.declare) return this.declares()

        return [this.vairableString(this)]
    }

    public vairableString(node: AstBase | undefined): string {
        if (!node) return ''

        return this.name + ' ' + C.typename((node as VariableNode).vtype)
    }

    public fieldString(): string {
        return this.name + ' *' + C.typename(this.vtype)
    }

    public declares(): string[] {
        let declare = ''
        const comments = C.comments(this.comments as CommentNode[])
        if (this.initial) {
            declare = this.name + ' := ' + C.toText(this.initial)
        } else {
            declare = 'var ' + this.name + ' ' + C.typename(this.vtype)
        }
        return C.join(comments, [declare])
    }
}