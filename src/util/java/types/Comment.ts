import { AType, AstBase } from "../AstTypes";

export default class CommentNode implements AstBase {
    type: string = AType.COMMENT
    children?: AstBase[] | undefined;
    text: string = ''

    constructor(text: string) {
        this.text = text
    }

    convert(): string[] {
        return this.text.split('\n')
    }
}