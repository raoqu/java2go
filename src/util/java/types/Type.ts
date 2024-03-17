import { AType, AstBase, AstType } from '../AstTypes'
import { AstNodes } from "../AstNodes";

export enum TypeCategory {
    ClassOrInterface = 0,
    Variable = 1,
}

export class TypeArgument implements AstBase {
    type: string = AType.TYPE_ARGUMENT
    children?: AstBase[]
    vtype?: AstType
    extends?: AstType
    super?: AstType
}

export default class TypeNode implements AstType {
    type: string = AType.TYPE
    packageName?: string
    name: string = ''
    children?: AstBase[]
    category: TypeCategory = TypeCategory.ClassOrInterface
    isGeneric: boolean = false
    typeArguments?: TypeArgument[] // arguments for generic type //@see TypeArgument

    constructor(name: string) {
        this.name = name
    }
}