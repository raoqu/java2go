import { AType, AstBase, AstClass } from "../AstTypes";

export default class Class implements AstClass {
    type: string = AType.CLASS
    packageName?: string | undefined
    name: string = ''
    children?: AstBase[] | undefined

    constructor(packageName: string | undefined, name: string) {
        this.packageName = packageName
        this.name = name
    }
}