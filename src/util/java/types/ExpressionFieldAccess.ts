import { CONVERTER_CONFIG } from "@/converter/ConverterConfig";
import ExpressionNode, { ExpressionType } from "./Expression";

export default class ExpressionFieldAccess extends ExpressionNode {
    super_: boolean = false
    name: string = ''
    prefix?: string

    constructor(name: string) {
        super()
        this.expressionType = ExpressionType.FIELD_ACCESS
        this.name = name
    }

    toString(): string {
        return this.prefix ? (this.translatePrefix(this.prefix) + '.' + this.name) : this.name
    }

    translatePrefix(s: string): string {
        return (s == 'this') ? CONVERTER_CONFIG.settings.thisName : s
    }
}