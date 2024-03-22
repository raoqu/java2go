import { C, L } from "@/converter/GoConverter";
import { AType, AstBase, AstType } from "../AstTypes";
import BaseNode from "./BaseNode";
import { Result } from "antd";
import VariableNode from "./Variable";

export enum StateType {
    BLOCK,
    EXPRESSION,
    TRY,
    CATCH,
    RETURN,
    IF,
    EMPTY,
    METHOD_INVOCATION,
    LOCAL_DECLARE,
    FOR,
    THROW,
}

export default class StatementNode extends BaseNode {
    stateType: StateType = StateType.BLOCK
    expression?: AstBase // if, return, for | expression
    elseStatement?: AstBase // if - else (statement)
    block?: AstBase
    catches?: AstBase[] // for catch
    catchParameter?: AstBase // for catch
    statement?: AstBase // for if 
    arguments?: AstBase[] // for method invocation
    invocation?: AstBase // for method invocation
    vtype?: AstBase // local -declaration // children for declaration list
    variable?: AstBase
    for_?: AstBase
    comments?: AstBase[]

    constructor(stateType: StateType) {
        super(AType.STATEMENT)
        this.stateType = stateType
    }

    convert(): string[] {
        const lines = this.innerConvert()
        if ( this.comments ) {
            return C.join(C.convert(this.comments), lines)
        }
        return lines
    }

    innerConvert(): string[] {
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
            case StateType.LOCAL_DECLARE:
                return this.localState()
            case StateType.FOR:
                return C.convert(this.for_)
            case StateType.THROW:
                return this.throwState()
            default:
                console.log('unimplemented STATEMENT: ', this)
        }
        return []
    }

    tryState(): string[] {
        const prefix = L('result := util.Try( func() =>')
        const block = C.convert(this.block)
        const catches = C.convert(this.catches)

        const try_ = C.appendText(C.join(prefix, block), ')')
        return C.join(try_, catches)
    }

    catchState(): string[] {
        let parameter = C.convert(this.catchParameter).join()
        parameter = parameter || ''
        const prefix = L('', 'return util.Catch(result, ' + 'func (' + parameter + ') =>')
        const block = C.convert(this.block)
        return C.appendText(C.join(prefix, block), ')')
    }

    returnState(): string[] {
        return L('return ' + C.convert(this.expression))
    }

    ifState(): string[] {
        const prefix = L('if ' + C.convert(this.expression) + '')
        const statement = C.convert(this.statement)
        const else_ = this.elseStatement ? ['else'] : []
        const elseStatement = C.convert(this.elseStatement)
        return C.join(prefix, statement, else_, elseStatement)
    }

    invocationState(): string[] {
        const invocation = C.convert(this.invocation).join('')
        const args = C.convert(this.arguments).join(', ')
        return [invocation + '(' + args + ')']
    }

    localState(): string[] {
        return C.convert(this.variable)
    }

    throwState(): string[] {
        return ['return _, ' + C.toText(this.expression)]
    }
}