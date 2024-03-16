import { CharStreams, CommonTokenStream } from 'antlr4ts'
import {Java8Lexer} from '@/parser/Java8Lexer' // auto-generated
import {Java8Parser} from '@/parser/Java8Parser' // auto-generated
import JavaVisitor from './JavaVisitor'
import { ExpressionValue } from './AstTypes';

export function ParseJava(source:string):ExpressionValue{
    const lexer = new Java8Lexer(CharStreams.fromString(source))
    const parser = new Java8Parser(new CommonTokenStream(lexer))
    const tree = parser.compilationUnit()

    const visitor = new JavaVisitor()
    const result = visitor.visit(tree)
    return result
}