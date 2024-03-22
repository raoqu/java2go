import { Interval } from "antlr4ts/misc/Interval";
import { AST_NODE_INVALID, AstBase } from "../AstTypes";
import ExpressionNode, { ExpressionType } from "./Expression";
import { C, L } from "@/converter/GoConverter";

export default class ExpressionAssignNode extends ExpressionNode {
    left: AstBase = AST_NODE_INVALID
    operator: string = ''
    right: AstBase = AST_NODE_INVALID
    // convert?: () => string = this.convertAssign

    constructor() {
        super(ExpressionType.ASSIGNMENT)
    }

    public convert(): string[] {
        const str: string = this.left.toString() + ' ' + this.operator + ' ' + this.right.toString()
        return [str]
    }
} 