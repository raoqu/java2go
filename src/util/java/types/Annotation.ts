import { AType, AstBase } from "../AstTypes";

export default class AnnnotationNode implements AstBase {
    type: string = AType.ANNOTATION;
    children?: AstBase[]
    
    name?: string 
}