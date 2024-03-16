export enum AType {
  PACKAGE = 'package',
  IMPORT = 'import',
}

export type ExpressionValue =
  AstBase
  | AstBase[]
  | AstPackage
  | AstImport
  | string
  | any
  ;

export interface AstBase {
  type: string
  chidren?: AstBase[]
}

export interface AstPackage extends AstBase{
  packageName: string
}

export interface AstImport extends AstBase {
  name: string
}

export interface AstAnnotation {
  text: string
}

export interface AstType extends AstBase{
  packageName?: string
  name: string
}