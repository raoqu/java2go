import { AType } from "../AstTypes";
import BaseNode from "./BaseNode";

export enum ExpressionType {
    DEFAULT,
    ASSIGNMENT = 0,
    FIELD_ACCESS = 1,
    ARRAY_INITIALIZER,
}

export default class ExpressionNode extends BaseNode {
    expressionType: ExpressionType = ExpressionType.DEFAULT
    expression?: string

    constructor(etype: ExpressionType) {
        super(AType.EXPRESSION)
        this.expressionType = etype
    }

    convert(): string[] {
        return [this.toString()]
    }

    toString(): string {
        // console.log('EXPRESSION:', this.expression||'')
        return this.expression || ''
    }
}