import { AType, AstBase } from "@/util/java/AstTypes";
import TypeNode, { TypeArgument } from "@/util/java/types/Type";
import { CONVERTER_CONFIG } from '@/converter/ConverterConfig'
import VariableNode from "@/util/java/types/Variable";
import CommentNode from "@/util/java/types/Comment";

const defaultAstNode = {
    type: AType._INVALID
}

interface TypeMapping {
    from: string
    to: string
}

interface ConverterContext {
    indents: string
    indentLevel: number
    lines: string[]
}

const GLOBAL_CONVERTER_CONTEXT: ConverterContext = {
    indents: '',
    indentLevel: 0,
    lines: []
}

let NOT_IN_USE_ARR: string[] = []
const DEFAULT_INDENT: string = '  '
const _INLINE_JOINS = ['{', 'else', ')']

export default class GoConverter {
    private indents: string = ''
    private indentLevel: number = 0
    private lines: string[] = []
    private buffered: string[] = []

    constructor() {
    }

    level(): number {
        return this.indentLevel ?? 0
    }

    addIndent(lvl: number) {
        this.indentLevel += lvl
        this.indents = this.indentLevel > 0 ? DEFAULT_INDENT.repeat(this.indentLevel) : ''
        return this
    }

    enter() {
        this.addIndent(1)
        return this
    }

    exit() {
        this.addIndent(-1)
        return this
    }

    appendInLine(str: string) {
        if (this.lines.length > 0) {
            this.lines[this.lines.length - 1] += str
        }
    }

    appendText(arr: string[], text: string): string[] {
        if (arr.length) {
            arr[arr.length - 1] += text
        }
        return arr
    }

    typename(t: AstBase | undefined): string {
        if (!t) return ''

        const vtype = t as TypeNode
        if (vtype.isGeneric) {
            return L(vtype.name + '['
                , this.argumentsString(vtype.typeArguments) // ? vtype.typeArguments.map(a => a.name()).join(', ') : ''
                , ']'
            ).join('')
        }
        return this.mappingType(vtype.name)
    }

    mappingType(s: string) {
        const types = CONVERTER_CONFIG.type.mapping as TypeMapping[]
        for (let t of types) {
            if (t.from == s) return t.to
        }
        return s
    }

    argumentsString(args: TypeArgument[] | undefined): string {
        return args ? args.map(a => this.mappingType(a.name())).join(', ') : ''
    }

    comments(cmts: CommentNode[] | undefined): string[] {
        return cmts ? L(...cmts.map(c => c.text)) : []
    }

    dotSuffix(pakcageName: string): string {
        const parts = pakcageName.split('.')
        return parts[parts.length - 1]
    }

    dotPrefix(pakcageName: string): string {
        const parts = pakcageName.split('.')
        let arr: string[] = []
        for (let i = 0; i < parts.length - 1; i++) {
            arr.push(parts[i])
        }
        return arr.join('.')
    }

    buffer(buf: string[]) {
        this.buffered = this.buffered.concat(buf)
    }

    popBuffered(): string[] {
        const buffered = this.buffered
        this.buffered = []
        return buffered
    }

    indent(arr: string[]): string[] {
        return arr.map(s => DEFAULT_INDENT + s)
    }

    innerConcat(arrArray: string[][]): string[] {
        let lines: string[] = []
        for (let i = 0; i < arrArray.length; i++) {
            const arr = arrArray[i]
            if (lines.length && arr.length && _INLINE_JOINS.includes(arr[0])) {
                lines[lines.length - 1] += (' ' + arr[0])
                lines = lines.concat(arr.slice(1))
                continue
            }

            lines = lines.concat(arr)
        }
        return lines
    }

    join(...arrArray: string[][]): string[] {
        return this.innerConcat(arrArray)
    }

    convert(obj: AstBase | AstBase[] | undefined): string[] {
        if (Array.isArray(obj)) {
            return this.innerConcat(
                (obj as AstBase[]).map(item => this.convert(item))
            )
        }

        const node = obj
        return node?.convert ? node.convert() : []
    }

    toText(obj: AstBase | undefined): string {
        if (obj === undefined) {
            return ''
        }
        if (Array.isArray(obj)) {
            return (obj as AstBase[]).map(item => this.convert(item)).join('\n')
        }

        const node = obj
        const result = node?.convert ? node.convert() : undefined
        if (Array.isArray(result)) {
            return result.join('\n')
        }
        return result || ''
    }

    prefix(arr: string[], prefix: string): string[] {
        return arr.map(s => prefix + s)
    }

    postfix(arr: string[], postfix: string): string[] {
        return arr.map(s => s + postfix)
    }
}

export abstract class LangConverter<T extends AstBase>  {
    node: AstBase = defaultAstNode

    constructor(node: T) {
        this.node = node
    }

    abstract convert(): string[]
}


export function L(...str: string[]): string[] {
    return str
}

export const C = new GoConverter()