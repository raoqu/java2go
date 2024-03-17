import { AType, AstBase, AstVariable } from "../AstTypes";

export default class VariableNode implements AstVariable {
    type = AType.VARAIBLE
    name = ''
    defaultValue?: any
    isField = false
    vtype?: AstBase
    isArray = false

    constructor(name: string) {
        this.name = name
    }
}