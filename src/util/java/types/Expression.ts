import { AType } from "../AstTypes";
import BaseNode from "./BaseNode";

export enum ExpressionType {
    ASSIGNMENT = 0,
    FIELD_ACCESS = 1,
}

export default class ExpressionNode extends BaseNode {
    expressionType?: ExpressionType
    expression?: string

    constructor() {
        super(AType.EXPRESSION)
    }

    convert(): string[] {
        return [this.toString()]
    }

    toString(): string {
        return this.expression || ''
    }
}