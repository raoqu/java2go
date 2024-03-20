import { L } from '@/converter/GoConverter'
import { AstBase } from './java/AstTypes'
import { ParseJava } from './java/JavaParser'
import CommentNode from './java/types/Comment'
import TimeCost from './TimeCost'

const Java2Go = (java: string): string => {
    const costParse = new TimeCost('PARSE')
    const javaAst: AstBase[] = ParseJava(java)
    costParse.cost()
    console.log('parse result:', javaAst)

    const costConvert = new TimeCost('CONVERT')
    const converter = new Java2GoConveter()
    const lines = javaAst.reduce<string[]>((acc, ast) => {
        return [...acc, ...converter.convert(ast)];
    }, []);
    costConvert.cost()
    return lines.join('\n')
}

class Java2GoConveter {

    public convert(ast: AstBase): string[] {
        if (ast.convert) {
            const result = ast.convert()
            if (typeof result == 'string') {
                return [result]
            }
            if (Array.isArray(result)) {
                return result
            }
        }
        console.log('ast2Go NOT IMPLEMENTED:', ast)

        return []
        // switch (ast.type) {
        //     case AType.PACKAGE:
        //         return this.package(ast as AstPackage)
        //     case AType.IMPORT:
        //         return this.import(ast as AstImport)
        //     case AType.CLASS:
        //         return this.class(ast as AstClass)
        //     case AType.VARIABLE:
        //         return this.variable(ast as AstVariable)
        //     case AType.METHOD:
        //         return this.method(ast as MethodNode)
        //     default:
        //         break;
        // }
    }


    public comments(cmts: CommentNode[]): string[] {
        return this.L(...cmts.map(c => c.text))
    }

    L(...str: string[]): string[] {
        return str
    }
}

export default Java2Go;