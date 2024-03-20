import { AType, AstBase } from "../AstTypes";
import BaseNode from "./BaseNode";
import { C, L } from "@/converter/GoConverter";

export default class PackageNode extends BaseNode {
    packageName: string = ''

    constructor(packageName: string) {
        super(AType.PACKAGE)
        this.packageName = packageName
    }

    convert(): string[] {
        return L('package ' + C.dotSuffix(this.packageName), '')
    }
}