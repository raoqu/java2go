import { AType, AstBase, AstField } from "../AstTypes";

export default class AstFieldNode implements AstField {
    type: string = AType.FIELD
    chidren?: AstBase[] | undefined = []
    packageName?: string
    name: string
    isPublic: boolean = false

    constructor(packageName: string|undefined, name: string) {
        this.packageName = packageName
        this.name = name
    }
}