import { C, L } from "@/converter/GoConverter";
import { AType, AstBase, AstClass } from "../AstTypes";
import CommentNode from "./Comment";
import BaseNode from "./BaseNode";
import AnnotationNode from "./Annotation";

export default class ClassNode implements AstClass {
    type: string = AType.CLASS
    packageName?: string
    name: string = ''
    children?: AstBase[]
    comments?: AstBase[]
    annotations?: AnnotationNode[]
    prefixes?: string[]
    superInterfaces?: string[]

    constructor(packageName: string | undefined, name: string) {
        this.packageName = packageName
        this.name = name
    }

    convert(): string[] {
        return L(''
            , ... (this.comments ? C.comments(this.comments as CommentNode[]) : [])
            , ...C.prefix(C.convert(this.annotations), '// ')
            , 'type ' + this.name + ' struct {'
            , ...C.indent(C.postfix(this.superInterfaces || [], ' // interface'))
            , ...this.classBody()
            , '}'
            , ...C.popBuffered()
        )
    }

    private classBody(): string[] {
        let lines: string[] = []

        if (this.children) {
            const arr = this.children.map(node => classBodyParse(node)).filter(a => a.length > 0)
            lines = lines.concat(C.indent(C.join(...arr)))
        }

        return lines
    }
}

function classBodyParse(ast: AstBase): string[] {
    const node = ast as BaseNode
    if (node?.convert) {
        return node.convert() as string[]
    }

    console.log(ast)
    return []
}