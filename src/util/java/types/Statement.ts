import { C, L } from "@/converter/GoConverter";
import { AType, AstBase, AstType } from "../AstTypes";
import BaseNode from "./BaseNode";
import { Result } from "antd";

export enum StateType {
    BLOCK,
    EXPRESSION,
    TRY,
    CATCH,
    RETURN,
    IF,
    IF_ELSE,
    EMPTY,
    METHOD_INVOCATION,
}

export default class StatementNode extends BaseNode {
    stateType: StateType = StateType.BLOCK
    expression?: AstBase // if - return - expression
    block?: AstBase
    catches?: AstBase[] // for catch
    catchParameter?: AstBase // for catch
    statement?: AstBase // for if 
    arguments?: AstBase[] // for method invocation
    invocation?: AstBase // for method invocation

    constructor(stateType: StateType) {
        super(AType.STATEMENT)
        this.stateType = stateType
    }

    convert(): string[] {
        switch (this.stateType) {
            case StateType.EXPRESSION:
                return this.expression?.convert ? this.expression.convert() : []
            case StateType.TRY:
                return this.tryState()
            case StateType.CATCH:
                return this.catchState()
            case StateType.RETURN:
                return this.returnState()
            case StateType.IF:
                return this.ifState()
            case StateType.EMPTY:
                return []
            case StateType.METHOD_INVOCATION:
                return this.invocationState()
            default:
                console.log('unimplemented STATEMENT: ', this)
        }
        return []
    }

    tryState(): string[] {
        const prefix = L('result := util.Try( func() =>')
        const block = C.convert(this.block)
        const catches = C.convert(this.catches)

        const try_ = C.appendText(C.Concat([prefix, block]), ')')
        return C.Concat([try_, catches])
    }

    catchState(): string[] {
        const prefix = L('', 'return util.Catch(result, ' + 'func () =>')
        const block = C.convert(this.block)
        return C.appendText(C.Concat2(prefix, block), ')')
    }

    returnState(): string[] {
        return L('return ' + C.convert(this.expression))
    }

    ifState(): string[] {
        const prefix = L('if ' + C.convert(this.expression) + '')
        const statement = C.convert(this.statement)
        return C.Concat([prefix, statement])
    }

    invocationState(): string[] {
        const invocation = C.convert(this.invocation).join('')
        const args = C.convert(this.arguments).join(',')
        return [invocation + '(' + args + ')']
    }
}