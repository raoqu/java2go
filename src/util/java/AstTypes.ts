export enum AType {
  PACKAGE = 'package',
  IMPORT = 'import',
  CLASS = 'class',
  INTERFACE = 'interface',
  ENUM = 'enum',
  _DISCARD = 'discard',
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

// package
export interface AstPackage extends AstBase {
  packageName: string
}

// import
export interface AstImport extends AstBase {
  name: string
}

// class
export interface AstClass extends AstBase {
  packageName?: string
  name: string
}

// interface
export interface AstInterface extends AstBase {
  packgeName?: string
  name: string
}

// enum
export interface AstEnum extends AstBase {
  packageName?: string
  name: string
}

// @ - annotation
export interface AstAnnotation {
  text: string
}

export interface AstType extends AstBase {
  packageName?: string
  name: string
}