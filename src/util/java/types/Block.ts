import { AType, AstBase } from "../AstTypes";
import { C, L } from "@/converter/GoConverter";

export enum BlockType {
    BLOCK = 0,
    EMPTY = 1,
}

export class BlockNode implements AstBase {
    type: AType = AType.BLOCK
    children?: AstBase[]
    blockType: BlockType = BlockType.BLOCK

    convert(): string[] {
        if (!this.children) return []

        const arr = this.children.map(node => {
            return C.indent((node.convert ? node.convert() : []))
        })
        return C.Concat([['{'], ...arr, ['}']])
    }
}