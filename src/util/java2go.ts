import { ExpressionValue,AType,AstBase, AstPackage,AstImport,AstType } from './java/AstTypes'
import {ParseJava} from './java/JavaParser'

const Java2Go = (java:string):string => {
    const javaAst:AstBase[] = ParseJava(java)
    return javaAst2Go(javaAst)
}

function javaAst2Go(javaAst:AstBase[]):string {
    const lines = javaAst.reduce<string[]>((acc, ast) => {
        return [...acc, ...ast2Go(ast)];
    }, []);
    return lines.join('\n')
}

function ast2Go(ast:AstBase):string[] {
    switch(ast.type) {
        case AType.PACKAGE:
            return goPackageCode(ast as AstPackage)
        case AType.IMPORT:
            return goImportCode(ast as AstImport)
        default:
            console.log(ast)
            console.log('ast2Go NOT IMPLEMENTED:', ast.type)
            break;
    }
    return []
}

function goPackageCode(ast:AstPackage):string[] {
    return L('package '+dotSuffix(ast.packageName), '')
}

function goImportCode(imp:AstImport): string[] {
    return L('import "' + imp.name + '"')
}

function L( ...str :string[] ):string[] {
    return str
}

function dotSuffix(pakcageName :string) : string {
    const parts = pakcageName.split('.')
    return parts[parts.length - 1]
}

function dotPrefix(pakcageName:string) : string {
    const parts = pakcageName.split('.')
    let arr:string[] = []
    for (let i = 0; i < parts.length-1; i ++) {
        arr.push(parts[i])
    }
    return arr.join('.')
}

export default Java2Go;