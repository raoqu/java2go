import { C, L } from "@/converter/GoConverter";
import { AType, AstBase } from "../AstTypes";
import TypeNode from "./Type";
import BaseNode from "./BaseNode";
import CommentNode from "./Comment";
import VariableNode from "./Variable";
import { CONVERTER_CONFIG } from "@/converter/ConverterConfig";

export default class MethodNode extends BaseNode {
    rtype?: TypeNode
    name: string = ''
    isField: boolean = false
    parameters: AstBase[] = [] // 
    body?: AstBase
    comments?: AstBase[]
    parentTypeName?: string
    annotations?: AstBase[]
    prefixes?: string[]

    constructor() {
        super(AType.METHOD)
    }

    convert(): string[] {
        C.buffer(L(
            ''
            , ...  this.convertMethod()
        ))
        return []
    }

    convertMethod(): string[] {
        const comments = C.comments(this.comments as CommentNode[])
        const annotations = C.prefix(C.convert(this.annotations), '// ')
        C.enter()
        const declare = [this.methodDeclare()]
        const body = C.convert(this.body)
        C.exit()
        return C.join(comments, annotations, declare, body)
    }

    methodDeclare(): string {
        return 'func ' + this.parentType() + this.methodName() + '(' + this.parametersString() + ')' + this.returnType()
    }

    parentType(): string {
        if (this.isField) {
            return '(' + CONVERTER_CONFIG.settings.thisName + ' *' + (this.parentTypeName || 'UNKNOWN') + ') '
        }
        return ''
    }

    returnType(): string {
        return ' ' + C.mappingType(this.rtype?.name ?? '')
    }

    parametersString(): string {

        const params = this.parameters as VariableNode[]
        params.map(par => C.context().add(par))

        return params.map(p => p.name + ' ' + C.typename(p.vtype)).join(', ')
    }

    methodName():string {
        return this.isPublic() ? this.capitalize(this.name): this.name
    }
}