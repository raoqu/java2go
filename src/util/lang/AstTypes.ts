
export type ExpressionValue =
  AstBase
  | AstBase[]
  | string
  | any
  ;

export interface AstBase {
  type: string
}

export interface AstArray {
  array: AstBase[]
}

export interface AstPackage extends AstBase{
  packageName: string
}

export interface AstAnnotation {
  text: string
}