import { C, L } from "@/converter/GoConverter";
import { AType, AstBase } from "../AstTypes";
import BaseNode from "./BaseNode";
import ValuePair from "./ValuePair";

export default class AnnotationNode extends BaseNode {
    name: string = ''
    values?: ValuePair[]
    valueOnly: boolean = false

    constructor(name: string) {
        super(AType.ANNOTATION)
        this.name = name
    }

    convert(): string[] {
        const pairs = this.valuePairs()
        const annotationLeft = '@' + this.name + (pairs.length ? '(' : '')
        const annotationRight = pairs.length ? ')' : ''
        let lines: string[] = []
        if (pairs.length) {
            if (pairs.length == 1) {
                lines.push(annotationLeft + pairs[0] + annotationRight)
            } else {
                lines = C.join([annotationLeft], pairs, [annotationRight])
            }
        } else {
            lines.push(annotationLeft)
        }
        return lines
    }

    toString(): string {
        return this.convert().join()
    }

    valuePairs(): string[] {
        if (this.values?.length) {
            return this.valueOnly ? this.valueString(this.values[0].val) :
                [this.values.map(pair => pair.key + ' = ' + this.valueString(pair.val)).join(', ')]
        }
        return []
    }

    valueString(val: any): string[] {
        if (val?.type) { // AstBase
            return C.convert(val)
        }
        return [val as string]
    }
}