import { AType, AstBase } from "../AstTypes";

export default class ValueNode implements AstBase {
    type: string = AType.VALUE
    children?: AstBase[] | undefined;
    
}