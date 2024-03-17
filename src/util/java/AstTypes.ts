export enum AType {
  PACKAGE = 'package',
  IMPORT = 'import',
  CLASS = 'class',
  FIELD = 'field',
  INTERFACE = 'interface',
  ENUM = 'enum',
  _INVALID = '__Invalide__',
  _IGNORE = '__Ignore__',
  TYPE = 'type',
  TYPE_ARGUMENT = 'type_argument',
  VARAIBLE = 'variable',
}

export type ExpressionValue =
  AstBase
  | AstBase[]
  | string
  | any
  ;

export interface AstBase {
  type: string
  children?: AstBase[]
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

export interface AstField extends AstBase {
  packageName?: string
  isPublic: boolean
  name: string
}

export interface AstVariable extends AstBase {
  name: string
  defaultValue?: any
  isArray: boolean
  isField: boolean
  vtype?: AstBase
}

export const AST_NODE_IGNORE: AstBase = {
  type: AType._IGNORE
}

export const AST_NODE_INVALID: AstBase = {
  type: AType._INVALID
}