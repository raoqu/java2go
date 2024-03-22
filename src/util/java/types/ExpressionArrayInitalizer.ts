import { CONVERTER_CONFIG } from "@/converter/ConverterConfig";
import ExpressionNode, { ExpressionType } from "./Expression";
import { C } from "@/converter/GoConverter";

export default class ExpressionArrayInitializer extends ExpressionNode {

    constructor() {
        super(ExpressionType.ARRAY_INITIALIZER)
    }

    convert(): string[] {
        const children = C.indent(this.children ? this.childlrenList() : [])
        return C.join(['{'], children, ['}'])
    }

    toString(): string {
        return this.convert().join('\n')
    }

    childlrenList(): string[] {
        let lines: string[] = []
        if (this.children) {
            for (let c of this.children) {
                lines = lines.concat(C.convert(c))
            }
        }
        return lines
    }
}