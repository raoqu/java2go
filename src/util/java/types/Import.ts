import { C } from "@/converter/GoConverter";
import { AType } from "../AstTypes";
import BaseNode from "./BaseNode";

export default class ImportNode extends BaseNode {
    packageName: string = ''

    constructor(pkg: string) {
        super(AType.IMPORT)
        this.packageName = pkg
    }

    convert(): string[] {
        return ['// import "' + C.dotPrefix(this.packageName) + '" // ' + C.dotSuffix(this.packageName)]
    }
}