import { AType, AstBase } from "../AstTypes";
import { C, L } from "@/converter/GoConverter";

export class BlockNode implements AstBase {
    type: AType = AType.BLOCK
    children?: AstBase[]

    convert(): string[] {
        if (!this.children) return []

        C.enter()
        const arr = this.children.map(node => {
            return C.indent((node.convert ? node.convert() : []))
        })
        C.exit()
        return C.join(['{'], ...arr, ['}'])
    }
}