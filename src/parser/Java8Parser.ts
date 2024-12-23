// Generated from src/parser/Java8Parser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { Java8ParserVisitor } from "./Java8ParserVisitor";


export class Java8Parser extends Parser {
	public static readonly ABSTRACT = 1;
	public static readonly ASSERT = 2;
	public static readonly BOOLEAN = 3;
	public static readonly BREAK = 4;
	public static readonly BYTE = 5;
	public static readonly CASE = 6;
	public static readonly CATCH = 7;
	public static readonly CHAR = 8;
	public static readonly CLASS = 9;
	public static readonly CONST = 10;
	public static readonly CONTINUE = 11;
	public static readonly DEFAULT = 12;
	public static readonly DO = 13;
	public static readonly DOUBLE = 14;
	public static readonly ELSE = 15;
	public static readonly ENUM = 16;
	public static readonly EXTENDS = 17;
	public static readonly FINAL = 18;
	public static readonly FINALLY = 19;
	public static readonly FLOAT = 20;
	public static readonly FOR = 21;
	public static readonly IF = 22;
	public static readonly GOTO = 23;
	public static readonly IMPLEMENTS = 24;
	public static readonly IMPORT = 25;
	public static readonly INSTANCEOF = 26;
	public static readonly INT = 27;
	public static readonly INTERFACE = 28;
	public static readonly LONG = 29;
	public static readonly NATIVE = 30;
	public static readonly NEW = 31;
	public static readonly PACKAGE = 32;
	public static readonly PRIVATE = 33;
	public static readonly PROTECTED = 34;
	public static readonly PUBLIC = 35;
	public static readonly RETURN = 36;
	public static readonly SHORT = 37;
	public static readonly STATIC = 38;
	public static readonly STRICTFP = 39;
	public static readonly SUPER = 40;
	public static readonly SWITCH = 41;
	public static readonly SYNCHRONIZED = 42;
	public static readonly THIS = 43;
	public static readonly THROW = 44;
	public static readonly THROWS = 45;
	public static readonly TRANSIENT = 46;
	public static readonly TRY = 47;
	public static readonly VOID = 48;
	public static readonly VOLATILE = 49;
	public static readonly WHILE = 50;
	public static readonly IntegerLiteral = 51;
	public static readonly FloatingPointLiteral = 52;
	public static readonly BooleanLiteral = 53;
	public static readonly CharacterLiteral = 54;
	public static readonly StringLiteral = 55;
	public static readonly NullLiteral = 56;
	public static readonly LPAREN = 57;
	public static readonly RPAREN = 58;
	public static readonly LBRACE = 59;
	public static readonly RBRACE = 60;
	public static readonly LBRACK = 61;
	public static readonly RBRACK = 62;
	public static readonly SEMI = 63;
	public static readonly COMMA = 64;
	public static readonly DOT = 65;
	public static readonly ASSIGN = 66;
	public static readonly GT = 67;
	public static readonly LT = 68;
	public static readonly BANG = 69;
	public static readonly TILDE = 70;
	public static readonly QUESTION = 71;
	public static readonly COLON = 72;
	public static readonly EQUAL = 73;
	public static readonly LE = 74;
	public static readonly GE = 75;
	public static readonly NOTEQUAL = 76;
	public static readonly AND = 77;
	public static readonly OR = 78;
	public static readonly INC = 79;
	public static readonly DEC = 80;
	public static readonly ADD = 81;
	public static readonly SUB = 82;
	public static readonly MUL = 83;
	public static readonly DIV = 84;
	public static readonly BITAND = 85;
	public static readonly BITOR = 86;
	public static readonly CARET = 87;
	public static readonly MOD = 88;
	public static readonly ARROW = 89;
	public static readonly COLONCOLON = 90;
	public static readonly ADD_ASSIGN = 91;
	public static readonly SUB_ASSIGN = 92;
	public static readonly MUL_ASSIGN = 93;
	public static readonly DIV_ASSIGN = 94;
	public static readonly AND_ASSIGN = 95;
	public static readonly OR_ASSIGN = 96;
	public static readonly XOR_ASSIGN = 97;
	public static readonly MOD_ASSIGN = 98;
	public static readonly LSHIFT_ASSIGN = 99;
	public static readonly RSHIFT_ASSIGN = 100;
	public static readonly URSHIFT_ASSIGN = 101;
	public static readonly Identifier = 102;
	public static readonly AT = 103;
	public static readonly ELLIPSIS = 104;
	public static readonly WS = 105;
	public static readonly COMMENT = 106;
	public static readonly LINE_COMMENT = 107;
	public static readonly RULE_literal = 0;
	public static readonly RULE_primitiveType = 1;
	public static readonly RULE_numericType = 2;
	public static readonly RULE_integralType = 3;
	public static readonly RULE_floatingPointType = 4;
	public static readonly RULE_referenceType = 5;
	public static readonly RULE_classOrInterfaceType = 6;
	public static readonly RULE_classType = 7;
	public static readonly RULE_classType_lf_classOrInterfaceType = 8;
	public static readonly RULE_classType_lfno_classOrInterfaceType = 9;
	public static readonly RULE_interfaceType = 10;
	public static readonly RULE_interfaceType_lf_classOrInterfaceType = 11;
	public static readonly RULE_interfaceType_lfno_classOrInterfaceType = 12;
	public static readonly RULE_typeVariable = 13;
	public static readonly RULE_arrayType = 14;
	public static readonly RULE_dims = 15;
	public static readonly RULE_typeParameter = 16;
	public static readonly RULE_typeParameterModifier = 17;
	public static readonly RULE_typeBound = 18;
	public static readonly RULE_additionalBound = 19;
	public static readonly RULE_typeArguments = 20;
	public static readonly RULE_typeArgumentList = 21;
	public static readonly RULE_typeArgument = 22;
	public static readonly RULE_wildcard = 23;
	public static readonly RULE_wildcardBounds = 24;
	public static readonly RULE_packageName = 25;
	public static readonly RULE_typeName = 26;
	public static readonly RULE_packageOrTypeName = 27;
	public static readonly RULE_expressionName = 28;
	public static readonly RULE_methodName = 29;
	public static readonly RULE_ambiguousName = 30;
	public static readonly RULE_compilationUnit = 31;
	public static readonly RULE_packageDeclaration = 32;
	public static readonly RULE_packageModifier = 33;
	public static readonly RULE_importDeclaration = 34;
	public static readonly RULE_singleTypeImportDeclaration = 35;
	public static readonly RULE_typeImportOnDemandDeclaration = 36;
	public static readonly RULE_singleStaticImportDeclaration = 37;
	public static readonly RULE_staticImportOnDemandDeclaration = 38;
	public static readonly RULE_typeDeclaration = 39;
	public static readonly RULE_classDeclaration = 40;
	public static readonly RULE_normalClassDeclaration = 41;
	public static readonly RULE_classModifier = 42;
	public static readonly RULE_typeParameters = 43;
	public static readonly RULE_typeParameterList = 44;
	public static readonly RULE_superclass = 45;
	public static readonly RULE_superinterfaces = 46;
	public static readonly RULE_interfaceTypeList = 47;
	public static readonly RULE_classBody = 48;
	public static readonly RULE_classBodyDeclaration = 49;
	public static readonly RULE_classMemberDeclaration = 50;
	public static readonly RULE_fieldDeclaration = 51;
	public static readonly RULE_fieldModifier = 52;
	public static readonly RULE_variableDeclaratorList = 53;
	public static readonly RULE_variableDeclarator = 54;
	public static readonly RULE_variableDeclaratorId = 55;
	public static readonly RULE_variableInitializer = 56;
	public static readonly RULE_unannType = 57;
	public static readonly RULE_unannPrimitiveType = 58;
	public static readonly RULE_unannReferenceType = 59;
	public static readonly RULE_unannClassOrInterfaceType = 60;
	public static readonly RULE_unannClassType = 61;
	public static readonly RULE_unannClassType_lf_unannClassOrInterfaceType = 62;
	public static readonly RULE_unannClassType_lfno_unannClassOrInterfaceType = 63;
	public static readonly RULE_unannInterfaceType = 64;
	public static readonly RULE_unannInterfaceType_lf_unannClassOrInterfaceType = 65;
	public static readonly RULE_unannInterfaceType_lfno_unannClassOrInterfaceType = 66;
	public static readonly RULE_unannTypeVariable = 67;
	public static readonly RULE_unannArrayType = 68;
	public static readonly RULE_methodDeclaration = 69;
	public static readonly RULE_methodModifier = 70;
	public static readonly RULE_methodHeader = 71;
	public static readonly RULE_result = 72;
	public static readonly RULE_methodDeclarator = 73;
	public static readonly RULE_formalParameterList = 74;
	public static readonly RULE_formalParameters = 75;
	public static readonly RULE_formalParameter = 76;
	public static readonly RULE_variableModifier = 77;
	public static readonly RULE_lastFormalParameter = 78;
	public static readonly RULE_receiverParameter = 79;
	public static readonly RULE_throws_ = 80;
	public static readonly RULE_exceptionTypeList = 81;
	public static readonly RULE_exceptionType = 82;
	public static readonly RULE_methodBody = 83;
	public static readonly RULE_instanceInitializer = 84;
	public static readonly RULE_staticInitializer = 85;
	public static readonly RULE_constructorDeclaration = 86;
	public static readonly RULE_constructorModifier = 87;
	public static readonly RULE_constructorDeclarator = 88;
	public static readonly RULE_simpleTypeName = 89;
	public static readonly RULE_constructorBody = 90;
	public static readonly RULE_explicitConstructorInvocation = 91;
	public static readonly RULE_enumDeclaration = 92;
	public static readonly RULE_enumBody = 93;
	public static readonly RULE_enumConstantList = 94;
	public static readonly RULE_enumConstant = 95;
	public static readonly RULE_enumConstantModifier = 96;
	public static readonly RULE_enumBodyDeclarations = 97;
	public static readonly RULE_interfaceDeclaration = 98;
	public static readonly RULE_normalInterfaceDeclaration = 99;
	public static readonly RULE_interfaceModifier = 100;
	public static readonly RULE_extendsInterfaces = 101;
	public static readonly RULE_interfaceBody = 102;
	public static readonly RULE_interfaceMemberDeclaration = 103;
	public static readonly RULE_constantDeclaration = 104;
	public static readonly RULE_constantModifier = 105;
	public static readonly RULE_interfaceMethodDeclaration = 106;
	public static readonly RULE_interfaceMethodModifier = 107;
	public static readonly RULE_annotationTypeDeclaration = 108;
	public static readonly RULE_annotationTypeBody = 109;
	public static readonly RULE_annotationTypeMemberDeclaration = 110;
	public static readonly RULE_annotationTypeElementDeclaration = 111;
	public static readonly RULE_annotationTypeElementModifier = 112;
	public static readonly RULE_defaultValue = 113;
	public static readonly RULE_annotation = 114;
	public static readonly RULE_normalAnnotation = 115;
	public static readonly RULE_elementValuePairList = 116;
	public static readonly RULE_elementValuePair = 117;
	public static readonly RULE_elementValue = 118;
	public static readonly RULE_elementValueArrayInitializer = 119;
	public static readonly RULE_elementValueList = 120;
	public static readonly RULE_markerAnnotation = 121;
	public static readonly RULE_singleElementAnnotation = 122;
	public static readonly RULE_arrayInitializer = 123;
	public static readonly RULE_variableInitializerList = 124;
	public static readonly RULE_block = 125;
	public static readonly RULE_blockStatements = 126;
	public static readonly RULE_blockStatement = 127;
	public static readonly RULE_localVariableDeclarationStatement = 128;
	public static readonly RULE_localVariableDeclaration = 129;
	public static readonly RULE_statement = 130;
	public static readonly RULE_statementNoShortIf = 131;
	public static readonly RULE_statementWithoutTrailingSubstatement = 132;
	public static readonly RULE_emptyStatement_ = 133;
	public static readonly RULE_labeledStatement = 134;
	public static readonly RULE_labeledStatementNoShortIf = 135;
	public static readonly RULE_expressionStatement = 136;
	public static readonly RULE_statementExpression = 137;
	public static readonly RULE_ifThenStatement = 138;
	public static readonly RULE_ifThenElseStatement = 139;
	public static readonly RULE_ifThenElseStatementNoShortIf = 140;
	public static readonly RULE_assertStatement = 141;
	public static readonly RULE_switchStatement = 142;
	public static readonly RULE_switchBlock = 143;
	public static readonly RULE_switchBlockStatementGroup = 144;
	public static readonly RULE_switchLabels = 145;
	public static readonly RULE_switchLabel = 146;
	public static readonly RULE_enumConstantName = 147;
	public static readonly RULE_whileStatement = 148;
	public static readonly RULE_whileStatementNoShortIf = 149;
	public static readonly RULE_doStatement = 150;
	public static readonly RULE_forStatement = 151;
	public static readonly RULE_forStatementNoShortIf = 152;
	public static readonly RULE_basicForStatement = 153;
	public static readonly RULE_basicForStatementNoShortIf = 154;
	public static readonly RULE_forInit = 155;
	public static readonly RULE_forUpdate = 156;
	public static readonly RULE_statementExpressionList = 157;
	public static readonly RULE_enhancedForStatement = 158;
	public static readonly RULE_enhancedForStatementNoShortIf = 159;
	public static readonly RULE_breakStatement = 160;
	public static readonly RULE_continueStatement = 161;
	public static readonly RULE_returnStatement = 162;
	public static readonly RULE_throwStatement = 163;
	public static readonly RULE_synchronizedStatement = 164;
	public static readonly RULE_tryStatement = 165;
	public static readonly RULE_catches = 166;
	public static readonly RULE_catchClause = 167;
	public static readonly RULE_catchFormalParameter = 168;
	public static readonly RULE_catchType = 169;
	public static readonly RULE_finally_ = 170;
	public static readonly RULE_tryWithResourcesStatement = 171;
	public static readonly RULE_resourceSpecification = 172;
	public static readonly RULE_resourceList = 173;
	public static readonly RULE_resource = 174;
	public static readonly RULE_primary = 175;
	public static readonly RULE_primaryNoNewArray = 176;
	public static readonly RULE_primaryNoNewArray_lf_arrayAccess = 177;
	public static readonly RULE_primaryNoNewArray_lfno_arrayAccess = 178;
	public static readonly RULE_primaryNoNewArray_lf_primary = 179;
	public static readonly RULE_primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary = 180;
	public static readonly RULE_primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary = 181;
	public static readonly RULE_primaryNoNewArray_lfno_primary = 182;
	public static readonly RULE_primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary = 183;
	public static readonly RULE_primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary = 184;
	public static readonly RULE_classInstanceCreationExpression = 185;
	public static readonly RULE_classInstanceCreationExpression_lf_primary = 186;
	public static readonly RULE_classInstanceCreationExpression_lfno_primary = 187;
	public static readonly RULE_typeArgumentsOrDiamond = 188;
	public static readonly RULE_fieldAccess = 189;
	public static readonly RULE_fieldAccess_lf_primary = 190;
	public static readonly RULE_fieldAccess_lfno_primary = 191;
	public static readonly RULE_arrayAccess = 192;
	public static readonly RULE_arrayAccess_lf_primary = 193;
	public static readonly RULE_arrayAccess_lfno_primary = 194;
	public static readonly RULE_methodInvocation = 195;
	public static readonly RULE_methodInvocation_lf_primary = 196;
	public static readonly RULE_methodInvocation_lfno_primary = 197;
	public static readonly RULE_argumentList = 198;
	public static readonly RULE_methodReference = 199;
	public static readonly RULE_methodReference_lf_primary = 200;
	public static readonly RULE_methodReference_lfno_primary = 201;
	public static readonly RULE_arrayCreationExpression = 202;
	public static readonly RULE_dimExprs = 203;
	public static readonly RULE_dimExpr = 204;
	public static readonly RULE_constantExpression = 205;
	public static readonly RULE_expression = 206;
	public static readonly RULE_lambdaExpression = 207;
	public static readonly RULE_lambdaParameters = 208;
	public static readonly RULE_inferredFormalParameterList = 209;
	public static readonly RULE_lambdaBody = 210;
	public static readonly RULE_assignmentExpression = 211;
	public static readonly RULE_assignment = 212;
	public static readonly RULE_leftHandSide = 213;
	public static readonly RULE_assignmentOperator = 214;
	public static readonly RULE_conditionalExpression = 215;
	public static readonly RULE_conditionalOrExpression = 216;
	public static readonly RULE_conditionalAndExpression = 217;
	public static readonly RULE_inclusiveOrExpression = 218;
	public static readonly RULE_exclusiveOrExpression = 219;
	public static readonly RULE_andExpression = 220;
	public static readonly RULE_equalityExpression = 221;
	public static readonly RULE_relationalExpression = 222;
	public static readonly RULE_shiftExpression = 223;
	public static readonly RULE_additiveExpression = 224;
	public static readonly RULE_multiplicativeExpression = 225;
	public static readonly RULE_unaryExpression = 226;
	public static readonly RULE_preIncrementExpression = 227;
	public static readonly RULE_preDecrementExpression = 228;
	public static readonly RULE_unaryExpressionNotPlusMinus = 229;
	public static readonly RULE_postfixExpression = 230;
	public static readonly RULE_postIncrementExpression = 231;
	public static readonly RULE_postIncrementExpression_lf_postfixExpression = 232;
	public static readonly RULE_postDecrementExpression = 233;
	public static readonly RULE_postDecrementExpression_lf_postfixExpression = 234;
	public static readonly RULE_castExpression = 235;
	public static readonly RULE_comments = 236;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"literal", "primitiveType", "numericType", "integralType", "floatingPointType", 
		"referenceType", "classOrInterfaceType", "classType", "classType_lf_classOrInterfaceType", 
		"classType_lfno_classOrInterfaceType", "interfaceType", "interfaceType_lf_classOrInterfaceType", 
		"interfaceType_lfno_classOrInterfaceType", "typeVariable", "arrayType", 
		"dims", "typeParameter", "typeParameterModifier", "typeBound", "additionalBound", 
		"typeArguments", "typeArgumentList", "typeArgument", "wildcard", "wildcardBounds", 
		"packageName", "typeName", "packageOrTypeName", "expressionName", "methodName", 
		"ambiguousName", "compilationUnit", "packageDeclaration", "packageModifier", 
		"importDeclaration", "singleTypeImportDeclaration", "typeImportOnDemandDeclaration", 
		"singleStaticImportDeclaration", "staticImportOnDemandDeclaration", "typeDeclaration", 
		"classDeclaration", "normalClassDeclaration", "classModifier", "typeParameters", 
		"typeParameterList", "superclass", "superinterfaces", "interfaceTypeList", 
		"classBody", "classBodyDeclaration", "classMemberDeclaration", "fieldDeclaration", 
		"fieldModifier", "variableDeclaratorList", "variableDeclarator", "variableDeclaratorId", 
		"variableInitializer", "unannType", "unannPrimitiveType", "unannReferenceType", 
		"unannClassOrInterfaceType", "unannClassType", "unannClassType_lf_unannClassOrInterfaceType", 
		"unannClassType_lfno_unannClassOrInterfaceType", "unannInterfaceType", 
		"unannInterfaceType_lf_unannClassOrInterfaceType", "unannInterfaceType_lfno_unannClassOrInterfaceType", 
		"unannTypeVariable", "unannArrayType", "methodDeclaration", "methodModifier", 
		"methodHeader", "result", "methodDeclarator", "formalParameterList", "formalParameters", 
		"formalParameter", "variableModifier", "lastFormalParameter", "receiverParameter", 
		"throws_", "exceptionTypeList", "exceptionType", "methodBody", "instanceInitializer", 
		"staticInitializer", "constructorDeclaration", "constructorModifier", 
		"constructorDeclarator", "simpleTypeName", "constructorBody", "explicitConstructorInvocation", 
		"enumDeclaration", "enumBody", "enumConstantList", "enumConstant", "enumConstantModifier", 
		"enumBodyDeclarations", "interfaceDeclaration", "normalInterfaceDeclaration", 
		"interfaceModifier", "extendsInterfaces", "interfaceBody", "interfaceMemberDeclaration", 
		"constantDeclaration", "constantModifier", "interfaceMethodDeclaration", 
		"interfaceMethodModifier", "annotationTypeDeclaration", "annotationTypeBody", 
		"annotationTypeMemberDeclaration", "annotationTypeElementDeclaration", 
		"annotationTypeElementModifier", "defaultValue", "annotation", "normalAnnotation", 
		"elementValuePairList", "elementValuePair", "elementValue", "elementValueArrayInitializer", 
		"elementValueList", "markerAnnotation", "singleElementAnnotation", "arrayInitializer", 
		"variableInitializerList", "block", "blockStatements", "blockStatement", 
		"localVariableDeclarationStatement", "localVariableDeclaration", "statement", 
		"statementNoShortIf", "statementWithoutTrailingSubstatement", "emptyStatement_", 
		"labeledStatement", "labeledStatementNoShortIf", "expressionStatement", 
		"statementExpression", "ifThenStatement", "ifThenElseStatement", "ifThenElseStatementNoShortIf", 
		"assertStatement", "switchStatement", "switchBlock", "switchBlockStatementGroup", 
		"switchLabels", "switchLabel", "enumConstantName", "whileStatement", "whileStatementNoShortIf", 
		"doStatement", "forStatement", "forStatementNoShortIf", "basicForStatement", 
		"basicForStatementNoShortIf", "forInit", "forUpdate", "statementExpressionList", 
		"enhancedForStatement", "enhancedForStatementNoShortIf", "breakStatement", 
		"continueStatement", "returnStatement", "throwStatement", "synchronizedStatement", 
		"tryStatement", "catches", "catchClause", "catchFormalParameter", "catchType", 
		"finally_", "tryWithResourcesStatement", "resourceSpecification", "resourceList", 
		"resource", "primary", "primaryNoNewArray", "primaryNoNewArray_lf_arrayAccess", 
		"primaryNoNewArray_lfno_arrayAccess", "primaryNoNewArray_lf_primary", 
		"primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary", "primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary", 
		"primaryNoNewArray_lfno_primary", "primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary", 
		"primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary", "classInstanceCreationExpression", 
		"classInstanceCreationExpression_lf_primary", "classInstanceCreationExpression_lfno_primary", 
		"typeArgumentsOrDiamond", "fieldAccess", "fieldAccess_lf_primary", "fieldAccess_lfno_primary", 
		"arrayAccess", "arrayAccess_lf_primary", "arrayAccess_lfno_primary", "methodInvocation", 
		"methodInvocation_lf_primary", "methodInvocation_lfno_primary", "argumentList", 
		"methodReference", "methodReference_lf_primary", "methodReference_lfno_primary", 
		"arrayCreationExpression", "dimExprs", "dimExpr", "constantExpression", 
		"expression", "lambdaExpression", "lambdaParameters", "inferredFormalParameterList", 
		"lambdaBody", "assignmentExpression", "assignment", "leftHandSide", "assignmentOperator", 
		"conditionalExpression", "conditionalOrExpression", "conditionalAndExpression", 
		"inclusiveOrExpression", "exclusiveOrExpression", "andExpression", "equalityExpression", 
		"relationalExpression", "shiftExpression", "additiveExpression", "multiplicativeExpression", 
		"unaryExpression", "preIncrementExpression", "preDecrementExpression", 
		"unaryExpressionNotPlusMinus", "postfixExpression", "postIncrementExpression", 
		"postIncrementExpression_lf_postfixExpression", "postDecrementExpression", 
		"postDecrementExpression_lf_postfixExpression", "castExpression", "comments",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'abstract'", "'assert'", "'boolean'", "'break'", "'byte'", 
		"'case'", "'catch'", "'char'", "'class'", "'const'", "'continue'", "'default'", 
		"'do'", "'double'", "'else'", "'enum'", "'extends'", "'final'", "'finally'", 
		"'float'", "'for'", "'if'", "'goto'", "'implements'", "'import'", "'instanceof'", 
		"'int'", "'interface'", "'long'", "'native'", "'new'", "'package'", "'private'", 
		"'protected'", "'public'", "'return'", "'short'", "'static'", "'strictfp'", 
		"'super'", "'switch'", "'synchronized'", "'this'", "'throw'", "'throws'", 
		"'transient'", "'try'", "'void'", "'volatile'", "'while'", undefined, 
		undefined, undefined, undefined, undefined, "'null'", "'('", "')'", "'{'", 
		"'}'", "'['", "']'", "';'", "','", "'.'", "'='", "'>'", "'<'", "'!'", 
		"'~'", "'?'", "':'", "'=='", "'<='", "'>='", "'!='", "'&&'", "'||'", "'++'", 
		"'--'", "'+'", "'-'", "'*'", "'/'", "'&'", "'|'", "'^'", "'%'", "'->'", 
		"'::'", "'+='", "'-='", "'*='", "'/='", "'&='", "'|='", "'^='", "'%='", 
		"'<<='", "'>>='", "'>>>='", undefined, "'@'", "'...'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ABSTRACT", "ASSERT", "BOOLEAN", "BREAK", "BYTE", "CASE", "CATCH", 
		"CHAR", "CLASS", "CONST", "CONTINUE", "DEFAULT", "DO", "DOUBLE", "ELSE", 
		"ENUM", "EXTENDS", "FINAL", "FINALLY", "FLOAT", "FOR", "IF", "GOTO", "IMPLEMENTS", 
		"IMPORT", "INSTANCEOF", "INT", "INTERFACE", "LONG", "NATIVE", "NEW", "PACKAGE", 
		"PRIVATE", "PROTECTED", "PUBLIC", "RETURN", "SHORT", "STATIC", "STRICTFP", 
		"SUPER", "SWITCH", "SYNCHRONIZED", "THIS", "THROW", "THROWS", "TRANSIENT", 
		"TRY", "VOID", "VOLATILE", "WHILE", "IntegerLiteral", "FloatingPointLiteral", 
		"BooleanLiteral", "CharacterLiteral", "StringLiteral", "NullLiteral", 
		"LPAREN", "RPAREN", "LBRACE", "RBRACE", "LBRACK", "RBRACK", "SEMI", "COMMA", 
		"DOT", "ASSIGN", "GT", "LT", "BANG", "TILDE", "QUESTION", "COLON", "EQUAL", 
		"LE", "GE", "NOTEQUAL", "AND", "OR", "INC", "DEC", "ADD", "SUB", "MUL", 
		"DIV", "BITAND", "BITOR", "CARET", "MOD", "ARROW", "COLONCOLON", "ADD_ASSIGN", 
		"SUB_ASSIGN", "MUL_ASSIGN", "DIV_ASSIGN", "AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN", 
		"MOD_ASSIGN", "LSHIFT_ASSIGN", "RSHIFT_ASSIGN", "URSHIFT_ASSIGN", "Identifier", 
		"AT", "ELLIPSIS", "WS", "COMMENT", "LINE_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(Java8Parser._LITERAL_NAMES, Java8Parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return Java8Parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Java8Parser.g4"; }

	// @Override
	public get ruleNames(): string[] { return Java8Parser.ruleNames; }

	// @Override
	public get serializedATN(): string { return Java8Parser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(Java8Parser._ATN, this);
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, Java8Parser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 474;
			_la = this._input.LA(1);
			if (!(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (Java8Parser.IntegerLiteral - 51)) | (1 << (Java8Parser.FloatingPointLiteral - 51)) | (1 << (Java8Parser.BooleanLiteral - 51)) | (1 << (Java8Parser.CharacterLiteral - 51)) | (1 << (Java8Parser.StringLiteral - 51)) | (1 << (Java8Parser.NullLiteral - 51)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primitiveType(): PrimitiveTypeContext {
		let _localctx: PrimitiveTypeContext = new PrimitiveTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, Java8Parser.RULE_primitiveType);
		let _la: number;
		try {
			this.state = 490;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 479;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java8Parser.AT) {
					{
					{
					this.state = 476;
					this.annotation();
					}
					}
					this.state = 481;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 482;
				this.numericType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 486;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java8Parser.AT) {
					{
					{
					this.state = 483;
					this.annotation();
					}
					}
					this.state = 488;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 489;
				this.match(Java8Parser.BOOLEAN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public numericType(): NumericTypeContext {
		let _localctx: NumericTypeContext = new NumericTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, Java8Parser.RULE_numericType);
		try {
			this.state = 494;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java8Parser.BYTE:
			case Java8Parser.CHAR:
			case Java8Parser.INT:
			case Java8Parser.LONG:
			case Java8Parser.SHORT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 492;
				this.integralType();
				}
				break;
			case Java8Parser.DOUBLE:
			case Java8Parser.FLOAT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 493;
				this.floatingPointType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public integralType(): IntegralTypeContext {
		let _localctx: IntegralTypeContext = new IntegralTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, Java8Parser.RULE_integralType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 496;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG))) !== 0) || _la === Java8Parser.SHORT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public floatingPointType(): FloatingPointTypeContext {
		let _localctx: FloatingPointTypeContext = new FloatingPointTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, Java8Parser.RULE_floatingPointType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 498;
			_la = this._input.LA(1);
			if (!(_la === Java8Parser.DOUBLE || _la === Java8Parser.FLOAT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public referenceType(): ReferenceTypeContext {
		let _localctx: ReferenceTypeContext = new ReferenceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, Java8Parser.RULE_referenceType);
		try {
			this.state = 503;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 500;
				this.classOrInterfaceType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 501;
				this.typeVariable();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 502;
				this.arrayType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classOrInterfaceType(): ClassOrInterfaceTypeContext {
		let _localctx: ClassOrInterfaceTypeContext = new ClassOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, Java8Parser.RULE_classOrInterfaceType);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 507;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				this.state = 505;
				this.classType_lfno_classOrInterfaceType();
				}
				break;

			case 2:
				{
				this.state = 506;
				this.interfaceType_lfno_classOrInterfaceType();
				}
				break;
			}
			this.state = 513;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 511;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
					case 1:
						{
						this.state = 509;
						this.classType_lf_classOrInterfaceType();
						}
						break;

					case 2:
						{
						this.state = 510;
						this.interfaceType_lf_classOrInterfaceType();
						}
						break;
					}
					}
				}
				this.state = 515;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classType(): ClassTypeContext {
		let _localctx: ClassTypeContext = new ClassTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, Java8Parser.RULE_classType);
		let _la: number;
		try {
			this.state = 538;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 519;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java8Parser.AT) {
					{
					{
					this.state = 516;
					this.annotation();
					}
					}
					this.state = 521;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 522;
				this.match(Java8Parser.Identifier);
				this.state = 524;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java8Parser.LT) {
					{
					this.state = 523;
					this.typeArguments();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 526;
				this.classOrInterfaceType();
				this.state = 527;
				this.match(Java8Parser.DOT);
				this.state = 531;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java8Parser.AT) {
					{
					{
					this.state = 528;
					this.annotation();
					}
					}
					this.state = 533;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 534;
				this.match(Java8Parser.Identifier);
				this.state = 536;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java8Parser.LT) {
					{
					this.state = 535;
					this.typeArguments();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classType_lf_classOrInterfaceType(): ClassType_lf_classOrInterfaceTypeContext {
		let _localctx: ClassType_lf_classOrInterfaceTypeContext = new ClassType_lf_classOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, Java8Parser.RULE_classType_lf_classOrInterfaceType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 540;
			this.match(Java8Parser.DOT);
			this.state = 544;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java8Parser.AT) {
				{
				{
				this.state = 541;
				this.annotation();
				}
				}
				this.state = 546;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 547;
			this.match(Java8Parser.Identifier);
			this.state = 549;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 548;
				this.typeArguments();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classType_lfno_classOrInterfaceType(): ClassType_lfno_classOrInterfaceTypeContext {
		let _localctx: ClassType_lfno_classOrInterfaceTypeContext = new ClassType_lfno_classOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, Java8Parser.RULE_classType_lfno_classOrInterfaceType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 554;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java8Parser.AT) {
				{
				{
				this.state = 551;
				this.annotation();
				}
				}
				this.state = 556;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 557;
			this.match(Java8Parser.Identifier);
			this.state = 559;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 558;
				this.typeArguments();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceType(): InterfaceTypeContext {
		let _localctx: InterfaceTypeContext = new InterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, Java8Parser.RULE_interfaceType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 561;
			this.classType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceType_lf_classOrInterfaceType(): InterfaceType_lf_classOrInterfaceTypeContext {
		let _localctx: InterfaceType_lf_classOrInterfaceTypeContext = new InterfaceType_lf_classOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, Java8Parser.RULE_interfaceType_lf_classOrInterfaceType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 563;
			this.classType_lf_classOrInterfaceType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceType_lfno_classOrInterfaceType(): InterfaceType_lfno_classOrInterfaceTypeContext {
		let _localctx: InterfaceType_lfno_classOrInterfaceTypeContext = new InterfaceType_lfno_classOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, Java8Parser.RULE_interfaceType_lfno_classOrInterfaceType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 565;
			this.classType_lfno_classOrInterfaceType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeVariable(): TypeVariableContext {
		let _localctx: TypeVariableContext = new TypeVariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, Java8Parser.RULE_typeVariable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 570;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java8Parser.AT) {
				{
				{
				this.state = 567;
				this.annotation();
				}
				}
				this.state = 572;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 573;
			this.match(Java8Parser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayType(): ArrayTypeContext {
		let _localctx: ArrayTypeContext = new ArrayTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, Java8Parser.RULE_arrayType);
		try {
			this.state = 584;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 575;
				this.primitiveType();
				this.state = 576;
				this.dims();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 578;
				this.classOrInterfaceType();
				this.state = 579;
				this.dims();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 581;
				this.typeVariable();
				this.state = 582;
				this.dims();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dims(): DimsContext {
		let _localctx: DimsContext = new DimsContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, Java8Parser.RULE_dims);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 589;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java8Parser.AT) {
				{
				{
				this.state = 586;
				this.annotation();
				}
				}
				this.state = 591;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 592;
			this.match(Java8Parser.LBRACK);
			this.state = 593;
			this.match(Java8Parser.RBRACK);
			this.state = 604;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 597;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === Java8Parser.AT) {
						{
						{
						this.state = 594;
						this.annotation();
						}
						}
						this.state = 599;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 600;
					this.match(Java8Parser.LBRACK);
					this.state = 601;
					this.match(Java8Parser.RBRACK);
					}
					}
				}
				this.state = 606;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameter(): TypeParameterContext {
		let _localctx: TypeParameterContext = new TypeParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, Java8Parser.RULE_typeParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 610;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java8Parser.AT) {
				{
				{
				this.state = 607;
				this.typeParameterModifier();
				}
				}
				this.state = 612;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 613;
			this.match(Java8Parser.Identifier);
			this.state = 615;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java8Parser.EXTENDS) {
				{
				this.state = 614;
				this.typeBound();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameterModifier(): TypeParameterModifierContext {
		let _localctx: TypeParameterModifierContext = new TypeParameterModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, Java8Parser.RULE_typeParameterModifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 617;
			this.annotation();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeBound(): TypeBoundContext {
		let _localctx: TypeBoundContext = new TypeBoundContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, Java8Parser.RULE_typeBound);
		let _la: number;
		try {
			this.state = 629;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 619;
				this.match(Java8Parser.EXTENDS);
				this.state = 620;
				this.typeVariable();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 621;
				this.match(Java8Parser.EXTENDS);
				this.state = 622;
				this.classOrInterfaceType();
				this.state = 626;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java8Parser.BITAND) {
					{
					{
					this.state = 623;
					this.additionalBound();
					}
					}
					this.state = 628;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public additionalBound(): AdditionalBoundContext {
		let _localctx: AdditionalBoundContext = new AdditionalBoundContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, Java8Parser.RULE_additionalBound);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 631;
			this.match(Java8Parser.BITAND);
			this.state = 632;
			this.interfaceType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArguments(): TypeArgumentsContext {
		let _localctx: TypeArgumentsContext = new TypeArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, Java8Parser.RULE_typeArguments);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 634;
			this.match(Java8Parser.LT);
			this.state = 635;
			this.typeArgumentList();
			this.state = 636;
			this.match(Java8Parser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArgumentList(): TypeArgumentListContext {
		let _localctx: TypeArgumentListContext = new TypeArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, Java8Parser.RULE_typeArgumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 638;
			this.typeArgument();
			this.state = 643;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java8Parser.COMMA) {
				{
				{
				this.state = 639;
				this.match(Java8Parser.COMMA);
				this.state = 640;
				this.typeArgument();
				}
				}
				this.state = 645;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArgument(): TypeArgumentContext {
		let _localctx: TypeArgumentContext = new TypeArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, Java8Parser.RULE_typeArgument);
		try {
			this.state = 648;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 646;
				this.referenceType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 647;
				this.wildcard();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public wildcard(): WildcardContext {
		let _localctx: WildcardContext = new WildcardContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, Java8Parser.RULE_wildcard);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 653;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java8Parser.AT) {
				{
				{
				this.state = 650;
				this.annotation();
				}
				}
				this.state = 655;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 656;
			this.match(Java8Parser.QUESTION);
			this.state = 658;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java8Parser.EXTENDS || _la === Java8Parser.SUPER) {
				{
				this.state = 657;
				this.wildcardBounds();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public wildcardBounds(): WildcardBoundsContext {
		let _localctx: WildcardBoundsContext = new WildcardBoundsContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, Java8Parser.RULE_wildcardBounds);
		try {
			this.state = 664;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java8Parser.EXTENDS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 660;
				this.match(Java8Parser.EXTENDS);
				this.state = 661;
				this.referenceType();
				}
				break;
			case Java8Parser.SUPER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 662;
				this.match(Java8Parser.SUPER);
				this.state = 663;
				this.referenceType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public packageName(): PackageNameContext;
	public packageName(_p: number): PackageNameContext;
	// @RuleVersion(0)
	public packageName(_p?: number): PackageNameContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PackageNameContext = new PackageNameContext(this._ctx, _parentState);
		let _prevctx: PackageNameContext = _localctx;
		let _startState: number = 50;
		this.enterRecursionRule(_localctx, 50, Java8Parser.RULE_packageName, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 667;
			this.match(Java8Parser.Identifier);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 674;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new PackageNameContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, Java8Parser.RULE_packageName);
					this.state = 669;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 670;
					this.match(Java8Parser.DOT);
					this.state = 671;
					this.match(Java8Parser.Identifier);
					}
					}
				}
				this.state = 676;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeName(): TypeNameContext {
		let _localctx: TypeNameContext = new TypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, Java8Parser.RULE_typeName);
		try {
			this.state = 682;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 677;
				this.match(Java8Parser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 678;
				this.packageOrTypeName(0);
				this.state = 679;
				this.match(Java8Parser.DOT);
				this.state = 680;
				this.match(Java8Parser.Identifier);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public packageOrTypeName(): PackageOrTypeNameContext;
	public packageOrTypeName(_p: number): PackageOrTypeNameContext;
	// @RuleVersion(0)
	public packageOrTypeName(_p?: number): PackageOrTypeNameContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PackageOrTypeNameContext = new PackageOrTypeNameContext(this._ctx, _parentState);
		let _prevctx: PackageOrTypeNameContext = _localctx;
		let _startState: number = 54;
		this.enterRecursionRule(_localctx, 54, Java8Parser.RULE_packageOrTypeName, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 685;
			this.match(Java8Parser.Identifier);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 692;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new PackageOrTypeNameContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, Java8Parser.RULE_packageOrTypeName);
					this.state = 687;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 688;
					this.match(Java8Parser.DOT);
					this.state = 689;
					this.match(Java8Parser.Identifier);
					}
					}
				}
				this.state = 694;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionName(): ExpressionNameContext {
		let _localctx: ExpressionNameContext = new ExpressionNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, Java8Parser.RULE_expressionName);
		try {
			this.state = 700;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 695;
				this.match(Java8Parser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 696;
				this.ambiguousName(0);
				this.state = 697;
				this.match(Java8Parser.DOT);
				this.state = 698;
				this.match(Java8Parser.Identifier);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodName(): MethodNameContext {
		let _localctx: MethodNameContext = new MethodNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, Java8Parser.RULE_methodName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 702;
			this.match(Java8Parser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public ambiguousName(): AmbiguousNameContext;
	public ambiguousName(_p: number): AmbiguousNameContext;
	// @RuleVersion(0)
	public ambiguousName(_p?: number): AmbiguousNameContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: AmbiguousNameContext = new AmbiguousNameContext(this._ctx, _parentState);
		let _prevctx: AmbiguousNameContext = _localctx;
		let _startState: number = 60;
		this.enterRecursionRule(_localctx, 60, Java8Parser.RULE_ambiguousName, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 705;
			this.match(Java8Parser.Identifier);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 712;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new AmbiguousNameContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, Java8Parser.RULE_ambiguousName);
					this.state = 707;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 708;
					this.match(Java8Parser.DOT);
					this.state = 709;
					this.match(Java8Parser.Identifier);
					}
					}
				}
				this.state = 714;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, Java8Parser.RULE_compilationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 716;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				{
				this.state = 715;
				this.packageDeclaration();
				}
				break;
			}
			this.state = 721;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java8Parser.IMPORT) {
				{
				{
				this.state = 718;
				this.importDeclaration();
				}
				}
				this.state = 723;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 727;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.ABSTRACT) | (1 << Java8Parser.ASSERT) | (1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BREAK) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.CLASS) | (1 << Java8Parser.CONTINUE) | (1 << Java8Parser.DO) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.ENUM) | (1 << Java8Parser.FINAL) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.FOR) | (1 << Java8Parser.IF) | (1 << Java8Parser.INT) | (1 << Java8Parser.INTERFACE) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NATIVE) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Java8Parser.PRIVATE - 33)) | (1 << (Java8Parser.PROTECTED - 33)) | (1 << (Java8Parser.PUBLIC - 33)) | (1 << (Java8Parser.RETURN - 33)) | (1 << (Java8Parser.SHORT - 33)) | (1 << (Java8Parser.STATIC - 33)) | (1 << (Java8Parser.STRICTFP - 33)) | (1 << (Java8Parser.SUPER - 33)) | (1 << (Java8Parser.SWITCH - 33)) | (1 << (Java8Parser.SYNCHRONIZED - 33)) | (1 << (Java8Parser.THIS - 33)) | (1 << (Java8Parser.THROW - 33)) | (1 << (Java8Parser.TRANSIENT - 33)) | (1 << (Java8Parser.TRY - 33)) | (1 << (Java8Parser.VOID - 33)) | (1 << (Java8Parser.VOLATILE - 33)) | (1 << (Java8Parser.WHILE - 33)) | (1 << (Java8Parser.IntegerLiteral - 33)) | (1 << (Java8Parser.FloatingPointLiteral - 33)) | (1 << (Java8Parser.BooleanLiteral - 33)) | (1 << (Java8Parser.CharacterLiteral - 33)) | (1 << (Java8Parser.StringLiteral - 33)) | (1 << (Java8Parser.NullLiteral - 33)) | (1 << (Java8Parser.LPAREN - 33)) | (1 << (Java8Parser.LBRACE - 33)) | (1 << (Java8Parser.SEMI - 33)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (Java8Parser.LT - 68)) | (1 << (Java8Parser.INC - 68)) | (1 << (Java8Parser.DEC - 68)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (Java8Parser.Identifier - 102)) | (1 << (Java8Parser.AT - 102)) | (1 << (Java8Parser.COMMENT - 102)) | (1 << (Java8Parser.LINE_COMMENT - 102)))) !== 0)) {
				{
				{
				this.state = 724;
				this.typeDeclaration();
				}
				}
				this.state = 729;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 730;
			this.match(Java8Parser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public packageDeclaration(): PackageDeclarationContext {
		let _localctx: PackageDeclarationContext = new PackageDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, Java8Parser.RULE_packageDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 735;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java8Parser.AT) {
				{
				{
				this.state = 732;
				this.packageModifier();
				}
				}
				this.state = 737;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 738;
			this.match(Java8Parser.PACKAGE);
			this.state = 739;
			this.packageName(0);
			this.state = 740;
			this.match(Java8Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public packageModifier(): PackageModifierContext {
		let _localctx: PackageModifierContext = new PackageModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, Java8Parser.RULE_packageModifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 742;
			this.annotation();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importDeclaration(): ImportDeclarationContext {
		let _localctx: ImportDeclarationContext = new ImportDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, Java8Parser.RULE_importDeclaration);
		try {
			this.state = 748;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 744;
				this.singleTypeImportDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 745;
				this.typeImportOnDemandDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 746;
				this.singleStaticImportDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 747;
				this.staticImportOnDemandDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public singleTypeImportDeclaration(): SingleTypeImportDeclarationContext {
		let _localctx: SingleTypeImportDeclarationContext = new SingleTypeImportDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, Java8Parser.RULE_singleTypeImportDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 750;
			this.match(Java8Parser.IMPORT);
			this.state = 751;
			this.typeName();
			this.state = 752;
			this.match(Java8Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeImportOnDemandDeclaration(): TypeImportOnDemandDeclarationContext {
		let _localctx: TypeImportOnDemandDeclarationContext = new TypeImportOnDemandDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, Java8Parser.RULE_typeImportOnDemandDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 754;
			this.match(Java8Parser.IMPORT);
			this.state = 755;
			this.packageOrTypeName(0);
			this.state = 756;
			this.match(Java8Parser.DOT);
			this.state = 757;
			this.match(Java8Parser.MUL);
			this.state = 758;
			this.match(Java8Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public singleStaticImportDeclaration(): SingleStaticImportDeclarationContext {
		let _localctx: SingleStaticImportDeclarationContext = new SingleStaticImportDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, Java8Parser.RULE_singleStaticImportDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 760;
			this.match(Java8Parser.IMPORT);
			this.state = 761;
			this.match(Java8Parser.STATIC);
			this.state = 762;
			this.typeName();
			this.state = 763;
			this.match(Java8Parser.DOT);
			this.state = 764;
			this.match(Java8Parser.Identifier);
			this.state = 765;
			this.match(Java8Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public staticImportOnDemandDeclaration(): StaticImportOnDemandDeclarationContext {
		let _localctx: StaticImportOnDemandDeclarationContext = new StaticImportOnDemandDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, Java8Parser.RULE_staticImportOnDemandDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 767;
			this.match(Java8Parser.IMPORT);
			this.state = 768;
			this.match(Java8Parser.STATIC);
			this.state = 769;
			this.typeName();
			this.state = 770;
			this.match(Java8Parser.DOT);
			this.state = 771;
			this.match(Java8Parser.MUL);
			this.state = 772;
			this.match(Java8Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeDeclaration(): TypeDeclarationContext {
		let _localctx: TypeDeclarationContext = new TypeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, Java8Parser.RULE_typeDeclaration);
		try {
			this.state = 777;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 774;
				this.classDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 775;
				this.interfaceDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 776;
				this.match(Java8Parser.SEMI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classDeclaration(): ClassDeclarationContext {
		let _localctx: ClassDeclarationContext = new ClassDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, Java8Parser.RULE_classDeclaration);
		try {
			this.state = 781;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 779;
				this.normalClassDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 780;
				this.enumDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public normalClassDeclaration(): NormalClassDeclarationContext {
		let _localctx: NormalClassDeclarationContext = new NormalClassDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, Java8Parser.RULE_normalClassDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 784;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				{
				this.state = 783;
				this.comments();
				}
				break;
			}
			this.state = 789;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java8Parser.ABSTRACT || _la === Java8Parser.FINAL || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Java8Parser.PRIVATE - 33)) | (1 << (Java8Parser.PROTECTED - 33)) | (1 << (Java8Parser.PUBLIC - 33)) | (1 << (Java8Parser.STATIC - 33)) | (1 << (Java8Parser.STRICTFP - 33)))) !== 0) || _la === Java8Parser.AT) {
				{
				{
				this.state = 786;
				this.classModifier();
				}
				}
				this.state = 791;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 792;
			this.match(Java8Parser.CLASS);
			this.state = 793;
			this.match(Java8Parser.Identifier);
			this.state = 795;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java8Parser.LT) {
				{
				this.state = 794;
				this.typeParameters();
				}
			}

			this.state = 798;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java8Parser.EXTENDS) {
				{
				this.state = 797;
				this.superclass();
				}
			}

			this.state = 801;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java8Parser.IMPLEMENTS) {
				{
				this.state = 800;
				this.superinterfaces();
				}
			}

			this.state = 803;
			this.classBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classModifier(): ClassModifierContext {
		let _localctx: ClassModifierContext = new ClassModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, Java8Parser.RULE_classModifier);
		try {
			this.state = 813;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java8Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 805;
				this.annotation();
				}
				break;
			case Java8Parser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 806;
				this.match(Java8Parser.PUBLIC);
				}
				break;
			case Java8Parser.PROTECTED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 807;
				this.match(Java8Parser.PROTECTED);
				}
				break;
			case Java8Parser.PRIVATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 808;
				this.match(Java8Parser.PRIVATE);
				}
				break;
			case Java8Parser.ABSTRACT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 809;
				this.match(Java8Parser.ABSTRACT);
				}
				break;
			case Java8Parser.STATIC:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 810;
				this.match(Java8Parser.STATIC);
				}
				break;
			case Java8Parser.FINAL:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 811;
				this.match(Java8Parser.FINAL);
				}
				break;
			case Java8Parser.STRICTFP:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 812;
				this.match(Java8Parser.STRICTFP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameters(): TypeParametersContext {
		let _localctx: TypeParametersContext = new TypeParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, Java8Parser.RULE_typeParameters);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 815;
			this.match(Java8Parser.LT);
			this.state = 816;
			this.typeParameterList();
			this.state = 817;
			this.match(Java8Parser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameterList(): TypeParameterListContext {
		let _localctx: TypeParameterListContext = new TypeParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, Java8Parser.RULE_typeParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 819;
			this.typeParameter();
			this.state = 824;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java8Parser.COMMA) {
				{
				{
				this.state = 820;
				this.match(Java8Parser.COMMA);
				this.state = 821;
				this.typeParameter();
				}
				}
				this.state = 826;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public superclass(): SuperclassContext {
		let _localctx: SuperclassContext = new SuperclassContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, Java8Parser.RULE_superclass);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 827;
			this.match(Java8Parser.EXTENDS);
			this.state = 828;
			this.classType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public superinterfaces(): SuperinterfacesContext {
		let _localctx: SuperinterfacesContext = new SuperinterfacesContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, Java8Parser.RULE_superinterfaces);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 830;
			this.match(Java8Parser.IMPLEMENTS);
			this.state = 831;
			this.interfaceTypeList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceTypeList(): InterfaceTypeListContext {
		let _localctx: InterfaceTypeListContext = new InterfaceTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, Java8Parser.RULE_interfaceTypeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 833;
			this.interfaceType();
			this.state = 838;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java8Parser.COMMA) {
				{
				{
				this.state = 834;
				this.match(Java8Parser.COMMA);
				this.state = 835;
				this.interfaceType();
				}
				}
				this.state = 840;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classBody(): ClassBodyContext {
		let _localctx: ClassBodyContext = new ClassBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, Java8Parser.RULE_classBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 841;
			this.match(Java8Parser.LBRACE);
			this.state = 845;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.ABSTRACT) | (1 << Java8Parser.ASSERT) | (1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BREAK) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.CLASS) | (1 << Java8Parser.CONTINUE) | (1 << Java8Parser.DO) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.ENUM) | (1 << Java8Parser.FINAL) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.FOR) | (1 << Java8Parser.IF) | (1 << Java8Parser.INT) | (1 << Java8Parser.INTERFACE) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NATIVE) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Java8Parser.PRIVATE - 33)) | (1 << (Java8Parser.PROTECTED - 33)) | (1 << (Java8Parser.PUBLIC - 33)) | (1 << (Java8Parser.RETURN - 33)) | (1 << (Java8Parser.SHORT - 33)) | (1 << (Java8Parser.STATIC - 33)) | (1 << (Java8Parser.STRICTFP - 33)) | (1 << (Java8Parser.SUPER - 33)) | (1 << (Java8Parser.SWITCH - 33)) | (1 << (Java8Parser.SYNCHRONIZED - 33)) | (1 << (Java8Parser.THIS - 33)) | (1 << (Java8Parser.THROW - 33)) | (1 << (Java8Parser.TRANSIENT - 33)) | (1 << (Java8Parser.TRY - 33)) | (1 << (Java8Parser.VOID - 33)) | (1 << (Java8Parser.VOLATILE - 33)) | (1 << (Java8Parser.WHILE - 33)) | (1 << (Java8Parser.IntegerLiteral - 33)) | (1 << (Java8Parser.FloatingPointLiteral - 33)) | (1 << (Java8Parser.BooleanLiteral - 33)) | (1 << (Java8Parser.CharacterLiteral - 33)) | (1 << (Java8Parser.StringLiteral - 33)) | (1 << (Java8Parser.NullLiteral - 33)) | (1 << (Java8Parser.LPAREN - 33)) | (1 << (Java8Parser.LBRACE - 33)) | (1 << (Java8Parser.SEMI - 33)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (Java8Parser.LT - 68)) | (1 << (Java8Parser.INC - 68)) | (1 << (Java8Parser.DEC - 68)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (Java8Parser.Identifier - 102)) | (1 << (Java8Parser.AT - 102)) | (1 << (Java8Parser.COMMENT - 102)) | (1 << (Java8Parser.LINE_COMMENT - 102)))) !== 0)) {
				{
				{
				this.state = 842;
				this.classBodyDeclaration();
				}
				}
				this.state = 847;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 848;
			this.match(Java8Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classBodyDeclaration(): ClassBodyDeclarationContext {
		let _localctx: ClassBodyDeclarationContext = new ClassBodyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, Java8Parser.RULE_classBodyDeclaration);
		try {
			this.state = 854;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 850;
				this.classMemberDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 851;
				this.instanceInitializer();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 852;
				this.staticInitializer();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 853;
				this.constructorDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classMemberDeclaration(): ClassMemberDeclarationContext {
		let _localctx: ClassMemberDeclarationContext = new ClassMemberDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, Java8Parser.RULE_classMemberDeclaration);
		try {
			this.state = 861;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 856;
				this.fieldDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 857;
				this.methodDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 858;
				this.classDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 859;
				this.interfaceDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 860;
				this.match(Java8Parser.SEMI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldDeclaration(): FieldDeclarationContext {
		let _localctx: FieldDeclarationContext = new FieldDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, Java8Parser.RULE_fieldDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 864;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				{
				this.state = 863;
				this.comments();
				}
				break;
			}
			this.state = 869;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (Java8Parser.FINAL - 18)) | (1 << (Java8Parser.PRIVATE - 18)) | (1 << (Java8Parser.PROTECTED - 18)) | (1 << (Java8Parser.PUBLIC - 18)) | (1 << (Java8Parser.STATIC - 18)) | (1 << (Java8Parser.TRANSIENT - 18)) | (1 << (Java8Parser.VOLATILE - 18)))) !== 0) || _la === Java8Parser.AT) {
				{
				{
				this.state = 866;
				this.fieldModifier();
				}
				}
				this.state = 871;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 872;
			this.unannType();
			this.state = 873;
			this.variableDeclaratorList();
			this.state = 874;
			this.match(Java8Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldModifier(): FieldModifierContext {
		let _localctx: FieldModifierContext = new FieldModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, Java8Parser.RULE_fieldModifier);
		try {
			this.state = 884;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java8Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 876;
				this.annotation();
				}
				break;
			case Java8Parser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 877;
				this.match(Java8Parser.PUBLIC);
				}
				break;
			case Java8Parser.PROTECTED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 878;
				this.match(Java8Parser.PROTECTED);
				}
				break;
			case Java8Parser.PRIVATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 879;
				this.match(Java8Parser.PRIVATE);
				}
				break;
			case Java8Parser.STATIC:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 880;
				this.match(Java8Parser.STATIC);
				}
				break;
			case Java8Parser.FINAL:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 881;
				this.match(Java8Parser.FINAL);
				}
				break;
			case Java8Parser.TRANSIENT:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 882;
				this.match(Java8Parser.TRANSIENT);
				}
				break;
			case Java8Parser.VOLATILE:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 883;
				this.match(Java8Parser.VOLATILE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaratorList(): VariableDeclaratorListContext {
		let _localctx: VariableDeclaratorListContext = new VariableDeclaratorListContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, Java8Parser.RULE_variableDeclaratorList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 886;
			this.variableDeclarator();
			this.state = 891;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java8Parser.COMMA) {
				{
				{
				this.state = 887;
				this.match(Java8Parser.COMMA);
				this.state = 888;
				this.variableDeclarator();
				}
				}
				this.state = 893;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclarator(): VariableDeclaratorContext {
		let _localctx: VariableDeclaratorContext = new VariableDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, Java8Parser.RULE_variableDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 894;
			this.variableDeclaratorId();
			this.state = 897;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java8Parser.ASSIGN) {
				{
				this.state = 895;
				this.match(Java8Parser.ASSIGN);
				this.state = 896;
				this.variableInitializer();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		let _localctx: VariableDeclaratorIdContext = new VariableDeclaratorIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, Java8Parser.RULE_variableDeclaratorId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 899;
			this.match(Java8Parser.Identifier);
			this.state = 901;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java8Parser.LBRACK || _la === Java8Parser.AT) {
				{
				this.state = 900;
				this.dims();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableInitializer(): VariableInitializerContext {
		let _localctx: VariableInitializerContext = new VariableInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, Java8Parser.RULE_variableInitializer);
		try {
			this.state = 905;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java8Parser.BOOLEAN:
			case Java8Parser.BYTE:
			case Java8Parser.CHAR:
			case Java8Parser.DOUBLE:
			case Java8Parser.FLOAT:
			case Java8Parser.INT:
			case Java8Parser.LONG:
			case Java8Parser.NEW:
			case Java8Parser.SHORT:
			case Java8Parser.SUPER:
			case Java8Parser.THIS:
			case Java8Parser.VOID:
			case Java8Parser.IntegerLiteral:
			case Java8Parser.FloatingPointLiteral:
			case Java8Parser.BooleanLiteral:
			case Java8Parser.CharacterLiteral:
			case Java8Parser.StringLiteral:
			case Java8Parser.NullLiteral:
			case Java8Parser.LPAREN:
			case Java8Parser.BANG:
			case Java8Parser.TILDE:
			case Java8Parser.INC:
			case Java8Parser.DEC:
			case Java8Parser.ADD:
			case Java8Parser.SUB:
			case Java8Parser.Identifier:
			case Java8Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 903;
				this.expression();
				}
				break;
			case Java8Parser.LBRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 904;
				this.arrayInitializer();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unannType(): UnannTypeContext {
		let _localctx: UnannTypeContext = new UnannTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, Java8Parser.RULE_unannType);
		try {
			this.state = 909;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 61, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 907;
				this.unannPrimitiveType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 908;
				this.unannReferenceType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unannPrimitiveType(): UnannPrimitiveTypeContext {
		let _localctx: UnannPrimitiveTypeContext = new UnannPrimitiveTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, Java8Parser.RULE_unannPrimitiveType);
		try {
			this.state = 913;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java8Parser.BYTE:
			case Java8Parser.CHAR:
			case Java8Parser.DOUBLE:
			case Java8Parser.FLOAT:
			case Java8Parser.INT:
			case Java8Parser.LONG:
			case Java8Parser.SHORT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 911;
				this.numericType();
				}
				break;
			case Java8Parser.BOOLEAN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 912;
				this.match(Java8Parser.BOOLEAN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unannReferenceType(): UnannReferenceTypeContext {
		let _localctx: UnannReferenceTypeContext = new UnannReferenceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, Java8Parser.RULE_unannReferenceType);
		try {
			this.state = 918;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 915;
				this.unannClassOrInterfaceType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 916;
				this.unannTypeVariable();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 917;
				this.unannArrayType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unannClassOrInterfaceType(): UnannClassOrInterfaceTypeContext {
		let _localctx: UnannClassOrInterfaceTypeContext = new UnannClassOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, Java8Parser.RULE_unannClassOrInterfaceType);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 922;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
			case 1:
				{
				this.state = 920;
				this.unannClassType_lfno_unannClassOrInterfaceType();
				}
				break;

			case 2:
				{
				this.state = 921;
				this.unannInterfaceType_lfno_unannClassOrInterfaceType();
				}
				break;
			}
			this.state = 928;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 926;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
					case 1:
						{
						this.state = 924;
						this.unannClassType_lf_unannClassOrInterfaceType();
						}
						break;

					case 2:
						{
						this.state = 925;
						this.unannInterfaceType_lf_unannClassOrInterfaceType();
						}
						break;
					}
					}
				}
				this.state = 930;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unannClassType(): UnannClassTypeContext {
		let _localctx: UnannClassTypeContext = new UnannClassTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, Java8Parser.RULE_unannClassType);
		let _la: number;
		try {
			this.state = 947;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 931;
				this.match(Java8Parser.Identifier);
				this.state = 933;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java8Parser.LT) {
					{
					this.state = 932;
					this.typeArguments();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 935;
				this.unannClassOrInterfaceType();
				this.state = 936;
				this.match(Java8Parser.DOT);
				this.state = 940;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java8Parser.AT) {
					{
					{
					this.state = 937;
					this.annotation();
					}
					}
					this.state = 942;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 943;
				this.match(Java8Parser.Identifier);
				this.state = 945;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java8Parser.LT) {
					{
					this.state = 944;
					this.typeArguments();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unannClassType_lf_unannClassOrInterfaceType(): UnannClassType_lf_unannClassOrInterfaceTypeContext {
		let _localctx: UnannClassType_lf_unannClassOrInterfaceTypeContext = new UnannClassType_lf_unannClassOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, Java8Parser.RULE_unannClassType_lf_unannClassOrInterfaceType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 949;
			this.match(Java8Parser.DOT);
			this.state = 953;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java8Parser.AT) {
				{
				{
				this.state = 950;
				this.annotation();
				}
				}
				this.state = 955;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 956;
			this.match(Java8Parser.Identifier);
			this.state = 958;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java8Parser.LT) {
				{
				this.state = 957;
				this.typeArguments();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unannClassType_lfno_unannClassOrInterfaceType(): UnannClassType_lfno_unannClassOrInterfaceTypeContext {
		let _localctx: UnannClassType_lfno_unannClassOrInterfaceTypeContext = new UnannClassType_lfno_unannClassOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, Java8Parser.RULE_unannClassType_lfno_unannClassOrInterfaceType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 960;
			this.match(Java8Parser.Identifier);
			this.state = 962;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java8Parser.LT) {
				{
				this.state = 961;
				this.typeArguments();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unannInterfaceType(): UnannInterfaceTypeContext {
		let _localctx: UnannInterfaceTypeContext = new UnannInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, Java8Parser.RULE_unannInterfaceType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 964;
			this.unannClassType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unannInterfaceType_lf_unannClassOrInterfaceType(): UnannInterfaceType_lf_unannClassOrInterfaceTypeContext {
		let _localctx: UnannInterfaceType_lf_unannClassOrInterfaceTypeContext = new UnannInterfaceType_lf_unannClassOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, Java8Parser.RULE_unannInterfaceType_lf_unannClassOrInterfaceType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 966;
			this.unannClassType_lf_unannClassOrInterfaceType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unannInterfaceType_lfno_unannClassOrInterfaceType(): UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext {
		let _localctx: UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext = new UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, Java8Parser.RULE_unannInterfaceType_lfno_unannClassOrInterfaceType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 968;
			this.unannClassType_lfno_unannClassOrInterfaceType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unannTypeVariable(): UnannTypeVariableContext {
		let _localctx: UnannTypeVariableContext = new UnannTypeVariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, Java8Parser.RULE_unannTypeVariable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 970;
			this.match(Java8Parser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unannArrayType(): UnannArrayTypeContext {
		let _localctx: UnannArrayTypeContext = new UnannArrayTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, Java8Parser.RULE_unannArrayType);
		try {
			this.state = 981;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 972;
				this.unannPrimitiveType();
				this.state = 973;
				this.dims();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 975;
				this.unannClassOrInterfaceType();
				this.state = 976;
				this.dims();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 978;
				this.unannTypeVariable();
				this.state = 979;
				this.dims();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodDeclaration(): MethodDeclarationContext {
		let _localctx: MethodDeclarationContext = new MethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, Java8Parser.RULE_methodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 984;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
			case 1:
				{
				this.state = 983;
				this.comments();
				}
				break;
			}
			this.state = 989;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.ABSTRACT) | (1 << Java8Parser.FINAL) | (1 << Java8Parser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Java8Parser.PRIVATE - 33)) | (1 << (Java8Parser.PROTECTED - 33)) | (1 << (Java8Parser.PUBLIC - 33)) | (1 << (Java8Parser.STATIC - 33)) | (1 << (Java8Parser.STRICTFP - 33)) | (1 << (Java8Parser.SYNCHRONIZED - 33)))) !== 0) || _la === Java8Parser.AT) {
				{
				{
				this.state = 986;
				this.methodModifier();
				}
				}
				this.state = 991;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 992;
			this.methodHeader();
			this.state = 993;
			this.methodBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodModifier(): MethodModifierContext {
		let _localctx: MethodModifierContext = new MethodModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, Java8Parser.RULE_methodModifier);
		try {
			this.state = 1005;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java8Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 995;
				this.annotation();
				}
				break;
			case Java8Parser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 996;
				this.match(Java8Parser.PUBLIC);
				}
				break;
			case Java8Parser.PROTECTED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 997;
				this.match(Java8Parser.PROTECTED);
				}
				break;
			case Java8Parser.PRIVATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 998;
				this.match(Java8Parser.PRIVATE);
				}
				break;
			case Java8Parser.ABSTRACT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 999;
				this.match(Java8Parser.ABSTRACT);
				}
				break;
			case Java8Parser.STATIC:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1000;
				this.match(Java8Parser.STATIC);
				}
				break;
			case Java8Parser.FINAL:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1001;
				this.match(Java8Parser.FINAL);
				}
				break;
			case Java8Parser.SYNCHRONIZED:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1002;
				this.match(Java8Parser.SYNCHRONIZED);
				}
				break;
			case Java8Parser.NATIVE:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1003;
				this.match(Java8Parser.NATIVE);
				}
				break;
			case Java8Parser.STRICTFP:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1004;
				this.match(Java8Parser.STRICTFP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodHeader(): MethodHeaderContext {
		let _localctx: MethodHeaderContext = new MethodHeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, Java8Parser.RULE_methodHeader);
		let _la: number;
		try {
			this.state = 1024;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java8Parser.BOOLEAN:
			case Java8Parser.BYTE:
			case Java8Parser.CHAR:
			case Java8Parser.DOUBLE:
			case Java8Parser.FLOAT:
			case Java8Parser.INT:
			case Java8Parser.LONG:
			case Java8Parser.SHORT:
			case Java8Parser.VOID:
			case Java8Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1007;
				this.result();
				this.state = 1008;
				this.methodDeclarator();
				this.state = 1010;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java8Parser.THROWS) {
					{
					this.state = 1009;
					this.throws_();
					}
				}

				}
				break;
			case Java8Parser.LT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1012;
				this.typeParameters();
				this.state = 1016;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java8Parser.AT) {
					{
					{
					this.state = 1013;
					this.annotation();
					}
					}
					this.state = 1018;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1019;
				this.result();
				this.state = 1020;
				this.methodDeclarator();
				this.state = 1022;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java8Parser.THROWS) {
					{
					this.state = 1021;
					this.throws_();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public result(): ResultContext {
		let _localctx: ResultContext = new ResultContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, Java8Parser.RULE_result);
		try {
			this.state = 1028;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java8Parser.BOOLEAN:
			case Java8Parser.BYTE:
			case Java8Parser.CHAR:
			case Java8Parser.DOUBLE:
			case Java8Parser.FLOAT:
			case Java8Parser.INT:
			case Java8Parser.LONG:
			case Java8Parser.SHORT:
			case Java8Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1026;
				this.unannType();
				}
				break;
			case Java8Parser.VOID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1027;
				this.match(Java8Parser.VOID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodDeclarator(): MethodDeclaratorContext {
		let _localctx: MethodDeclaratorContext = new MethodDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, Java8Parser.RULE_methodDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1030;
			this.match(Java8Parser.Identifier);
			this.state = 1031;
			this.match(Java8Parser.LPAREN);
			this.state = 1033;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FINAL) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG))) !== 0) || _la === Java8Parser.SHORT || _la === Java8Parser.Identifier || _la === Java8Parser.AT) {
				{
				this.state = 1032;
				this.formalParameterList();
				}
			}

			this.state = 1035;
			this.match(Java8Parser.RPAREN);
			this.state = 1037;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java8Parser.LBRACK || _la === Java8Parser.AT) {
				{
				this.state = 1036;
				this.dims();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameterList(): FormalParameterListContext {
		let _localctx: FormalParameterListContext = new FormalParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, Java8Parser.RULE_formalParameterList);
		try {
			this.state = 1045;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 85, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1039;
				this.receiverParameter();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1040;
				this.formalParameters();
				this.state = 1041;
				this.match(Java8Parser.COMMA);
				this.state = 1042;
				this.lastFormalParameter();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1044;
				this.lastFormalParameter();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameters(): FormalParametersContext {
		let _localctx: FormalParametersContext = new FormalParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, Java8Parser.RULE_formalParameters);
		try {
			let _alt: number;
			this.state = 1063;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1047;
				this.formalParameter();
				this.state = 1052;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1048;
						this.match(Java8Parser.COMMA);
						this.state = 1049;
						this.formalParameter();
						}
						}
					}
					this.state = 1054;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1055;
				this.receiverParameter();
				this.state = 1060;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1056;
						this.match(Java8Parser.COMMA);
						this.state = 1057;
						this.formalParameter();
						}
						}
					}
					this.state = 1062;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameter(): FormalParameterContext {
		let _localctx: FormalParameterContext = new FormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, Java8Parser.RULE_formalParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1068;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java8Parser.FINAL || _la === Java8Parser.AT) {
				{
				{
				this.state = 1065;
				this.variableModifier();
				}
				}
				this.state = 1070;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1071;
			this.unannType();
			this.state = 1072;
			this.variableDeclaratorId();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableModifier(): VariableModifierContext {
		let _localctx: VariableModifierContext = new VariableModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, Java8Parser.RULE_variableModifier);
		try {
			this.state = 1076;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java8Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1074;
				this.annotation();
				}
				break;
			case Java8Parser.FINAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1075;
				this.match(Java8Parser.FINAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lastFormalParameter(): LastFormalParameterContext {
		let _localctx: LastFormalParameterContext = new LastFormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, Java8Parser.RULE_lastFormalParameter);
		let _la: number;
		try {
			this.state = 1095;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 93, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1081;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java8Parser.FINAL || _la === Java8Parser.AT) {
					{
					{
					this.state = 1078;
					this.variableModifier();
					}
					}
					this.state = 1083;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1084;
				this.unannType();
				this.state = 1088;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java8Parser.AT) {
					{
					{
					this.state = 1085;
					this.annotation();
					}
					}
					this.state = 1090;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1091;
				this.match(Java8Parser.ELLIPSIS);
				this.state = 1092;
				this.variableDeclaratorId();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1094;
				this.formalParameter();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public receiverParameter(): ReceiverParameterContext {
		let _localctx: ReceiverParameterContext = new ReceiverParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, Java8Parser.RULE_receiverParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1100;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java8Parser.AT) {
				{
				{
				this.state = 1097;
				this.annotation();
				}
				}
				this.state = 1102;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1103;
			this.unannType();
			this.state = 1106;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java8Parser.Identifier) {
				{
				this.state = 1104;
				this.match(Java8Parser.Identifier);
				this.state = 1105;
				this.match(Java8Parser.DOT);
				}
			}

			this.state = 1108;
			this.match(Java8Parser.THIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public throws_(): Throws_Context {
		let _localctx: Throws_Context = new Throws_Context(this._ctx, this.state);
		this.enterRule(_localctx, 160, Java8Parser.RULE_throws_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1110;
			this.match(Java8Parser.THROWS);
			this.state = 1111;
			this.exceptionTypeList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exceptionTypeList(): ExceptionTypeListContext {
		let _localctx: ExceptionTypeListContext = new ExceptionTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, Java8Parser.RULE_exceptionTypeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1113;
			this.exceptionType();
			this.state = 1118;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java8Parser.COMMA) {
				{
				{
				this.state = 1114;
				this.match(Java8Parser.COMMA);
				this.state = 1115;
				this.exceptionType();
				}
				}
				this.state = 1120;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exceptionType(): ExceptionTypeContext {
		let _localctx: ExceptionTypeContext = new ExceptionTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, Java8Parser.RULE_exceptionType);
		try {
			this.state = 1123;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 97, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1121;
				this.classType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1122;
				this.typeVariable();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodBody(): MethodBodyContext {
		let _localctx: MethodBodyContext = new MethodBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, Java8Parser.RULE_methodBody);
		try {
			this.state = 1127;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java8Parser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1125;
				this.block();
				}
				break;
			case Java8Parser.SEMI:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1126;
				this.match(Java8Parser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instanceInitializer(): InstanceInitializerContext {
		let _localctx: InstanceInitializerContext = new InstanceInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, Java8Parser.RULE_instanceInitializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1129;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public staticInitializer(): StaticInitializerContext {
		let _localctx: StaticInitializerContext = new StaticInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, Java8Parser.RULE_staticInitializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1131;
			this.match(Java8Parser.STATIC);
			this.state = 1132;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constructorDeclaration(): ConstructorDeclarationContext {
		let _localctx: ConstructorDeclarationContext = new ConstructorDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, Java8Parser.RULE_constructorDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1137;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Java8Parser.PRIVATE - 33)) | (1 << (Java8Parser.PROTECTED - 33)) | (1 << (Java8Parser.PUBLIC - 33)))) !== 0) || _la === Java8Parser.AT) {
				{
				{
				this.state = 1134;
				this.constructorModifier();
				}
				}
				this.state = 1139;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1140;
			this.constructorDeclarator();
			this.state = 1142;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java8Parser.THROWS) {
				{
				this.state = 1141;
				this.throws_();
				}
			}

			this.state = 1144;
			this.constructorBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constructorModifier(): ConstructorModifierContext {
		let _localctx: ConstructorModifierContext = new ConstructorModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, Java8Parser.RULE_constructorModifier);
		try {
			this.state = 1150;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java8Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1146;
				this.annotation();
				}
				break;
			case Java8Parser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1147;
				this.match(Java8Parser.PUBLIC);
				}
				break;
			case Java8Parser.PROTECTED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1148;
				this.match(Java8Parser.PROTECTED);
				}
				break;
			case Java8Parser.PRIVATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1149;
				this.match(Java8Parser.PRIVATE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constructorDeclarator(): ConstructorDeclaratorContext {
		let _localctx: ConstructorDeclaratorContext = new ConstructorDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, Java8Parser.RULE_constructorDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1153;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java8Parser.LT) {
				{
				this.state = 1152;
				this.typeParameters();
				}
			}

			this.state = 1155;
			this.simpleTypeName();
			this.state = 1156;
			this.match(Java8Parser.LPAREN);
			this.state = 1158;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FINAL) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG))) !== 0) || _la === Java8Parser.SHORT || _la === Java8Parser.Identifier || _la === Java8Parser.AT) {
				{
				this.state = 1157;
				this.formalParameterList();
				}
			}

			this.state = 1160;
			this.match(Java8Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simpleTypeName(): SimpleTypeNameContext {
		let _localctx: SimpleTypeNameContext = new SimpleTypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, Java8Parser.RULE_simpleTypeName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1162;
			this.match(Java8Parser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constructorBody(): ConstructorBodyContext {
		let _localctx: ConstructorBodyContext = new ConstructorBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, Java8Parser.RULE_constructorBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1164;
			this.match(Java8Parser.LBRACE);
			this.state = 1166;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 104, this._ctx) ) {
			case 1:
				{
				this.state = 1165;
				this.explicitConstructorInvocation();
				}
				break;
			}
			this.state = 1169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.ABSTRACT) | (1 << Java8Parser.ASSERT) | (1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BREAK) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.CLASS) | (1 << Java8Parser.CONTINUE) | (1 << Java8Parser.DO) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.ENUM) | (1 << Java8Parser.FINAL) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.FOR) | (1 << Java8Parser.IF) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NATIVE) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Java8Parser.PRIVATE - 33)) | (1 << (Java8Parser.PROTECTED - 33)) | (1 << (Java8Parser.PUBLIC - 33)) | (1 << (Java8Parser.RETURN - 33)) | (1 << (Java8Parser.SHORT - 33)) | (1 << (Java8Parser.STATIC - 33)) | (1 << (Java8Parser.STRICTFP - 33)) | (1 << (Java8Parser.SUPER - 33)) | (1 << (Java8Parser.SWITCH - 33)) | (1 << (Java8Parser.SYNCHRONIZED - 33)) | (1 << (Java8Parser.THIS - 33)) | (1 << (Java8Parser.THROW - 33)) | (1 << (Java8Parser.TRANSIENT - 33)) | (1 << (Java8Parser.TRY - 33)) | (1 << (Java8Parser.VOID - 33)) | (1 << (Java8Parser.VOLATILE - 33)) | (1 << (Java8Parser.WHILE - 33)) | (1 << (Java8Parser.IntegerLiteral - 33)) | (1 << (Java8Parser.FloatingPointLiteral - 33)) | (1 << (Java8Parser.BooleanLiteral - 33)) | (1 << (Java8Parser.CharacterLiteral - 33)) | (1 << (Java8Parser.StringLiteral - 33)) | (1 << (Java8Parser.NullLiteral - 33)) | (1 << (Java8Parser.LPAREN - 33)) | (1 << (Java8Parser.LBRACE - 33)) | (1 << (Java8Parser.SEMI - 33)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (Java8Parser.LT - 68)) | (1 << (Java8Parser.INC - 68)) | (1 << (Java8Parser.DEC - 68)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (Java8Parser.Identifier - 102)) | (1 << (Java8Parser.AT - 102)) | (1 << (Java8Parser.COMMENT - 102)) | (1 << (Java8Parser.LINE_COMMENT - 102)))) !== 0)) {
				{
				this.state = 1168;
				this.blockStatements();
				}
			}

			this.state = 1171;
			this.match(Java8Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public explicitConstructorInvocation(): ExplicitConstructorInvocationContext {
		let _localctx: ExplicitConstructorInvocationContext = new ExplicitConstructorInvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, Java8Parser.RULE_explicitConstructorInvocation);
		let _la: number;
		try {
			this.state = 1219;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1174;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java8Parser.LT) {
					{
					this.state = 1173;
					this.typeArguments();
					}
				}

				this.state = 1176;
				this.match(Java8Parser.THIS);
				this.state = 1177;
				this.match(Java8Parser.LPAREN);
				this.state = 1179;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la === Java8Parser.Identifier || _la === Java8Parser.AT) {
					{
					this.state = 1178;
					this.argumentList();
					}
				}

				this.state = 1181;
				this.match(Java8Parser.RPAREN);
				this.state = 1182;
				this.match(Java8Parser.SEMI);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1184;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java8Parser.LT) {
					{
					this.state = 1183;
					this.typeArguments();
					}
				}

				this.state = 1186;
				this.match(Java8Parser.SUPER);
				this.state = 1187;
				this.match(Java8Parser.LPAREN);
				this.state = 1189;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la === Java8Parser.Identifier || _la === Java8Parser.AT) {
					{
					this.state = 1188;
					this.argumentList();
					}
				}

				this.state = 1191;
				this.match(Java8Parser.RPAREN);
				this.state = 1192;
				this.match(Java8Parser.SEMI);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1193;
				this.expressionName();
				this.state = 1194;
				this.match(Java8Parser.DOT);
				this.state = 1196;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java8Parser.LT) {
					{
					this.state = 1195;
					this.typeArguments();
					}
				}

				this.state = 1198;
				this.match(Java8Parser.SUPER);
				this.state = 1199;
				this.match(Java8Parser.LPAREN);
				this.state = 1201;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la === Java8Parser.Identifier || _la === Java8Parser.AT) {
					{
					this.state = 1200;
					this.argumentList();
					}
				}

				this.state = 1203;
				this.match(Java8Parser.RPAREN);
				this.state = 1204;
				this.match(Java8Parser.SEMI);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1206;
				this.primary();
				this.state = 1207;
				this.match(Java8Parser.DOT);
				this.state = 1209;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java8Parser.LT) {
					{
					this.state = 1208;
					this.typeArguments();
					}
				}

				this.state = 1211;
				this.match(Java8Parser.SUPER);
				this.state = 1212;
				this.match(Java8Parser.LPAREN);
				this.state = 1214;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la === Java8Parser.Identifier || _la === Java8Parser.AT) {
					{
					this.state = 1213;
					this.argumentList();
					}
				}

				this.state = 1216;
				this.match(Java8Parser.RPAREN);
				this.state = 1217;
				this.match(Java8Parser.SEMI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumDeclaration(): EnumDeclarationContext {
		let _localctx: EnumDeclarationContext = new EnumDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, Java8Parser.RULE_enumDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1224;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java8Parser.ABSTRACT || _la === Java8Parser.FINAL || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Java8Parser.PRIVATE - 33)) | (1 << (Java8Parser.PROTECTED - 33)) | (1 << (Java8Parser.PUBLIC - 33)) | (1 << (Java8Parser.STATIC - 33)) | (1 << (Java8Parser.STRICTFP - 33)))) !== 0) || _la === Java8Parser.AT) {
				{
				{
				this.state = 1221;
				this.classModifier();
				}
				}
				this.state = 1226;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1227;
			this.match(Java8Parser.ENUM);
			this.state = 1228;
			this.match(Java8Parser.Identifier);
			this.state = 1230;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java8Parser.IMPLEMENTS) {
				{
				this.state = 1229;
				this.superinterfaces();
				}
			}

			this.state = 1232;
			this.enumBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumBody(): EnumBodyContext {
		let _localctx: EnumBodyContext = new EnumBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, Java8Parser.RULE_enumBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1234;
			this.match(Java8Parser.LBRACE);
			this.state = 1236;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java8Parser.Identifier || _la === Java8Parser.AT) {
				{
				this.state = 1235;
				this.enumConstantList();
				}
			}

			this.state = 1239;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java8Parser.COMMA) {
				{
				this.state = 1238;
				this.match(Java8Parser.COMMA);
				}
			}

			this.state = 1242;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java8Parser.SEMI) {
				{
				this.state = 1241;
				this.enumBodyDeclarations();
				}
			}

			this.state = 1244;
			this.match(Java8Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumConstantList(): EnumConstantListContext {
		let _localctx: EnumConstantListContext = new EnumConstantListContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, Java8Parser.RULE_enumConstantList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1246;
			this.enumConstant();
			this.state = 1251;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1247;
					this.match(Java8Parser.COMMA);
					this.state = 1248;
					this.enumConstant();
					}
					}
				}
				this.state = 1253;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumConstant(): EnumConstantContext {
		let _localctx: EnumConstantContext = new EnumConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, Java8Parser.RULE_enumConstant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1257;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java8Parser.AT) {
				{
				{
				this.state = 1254;
				this.enumConstantModifier();
				}
				}
				this.state = 1259;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1260;
			this.match(Java8Parser.Identifier);
			this.state = 1266;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java8Parser.LPAREN) {
				{
				this.state = 1261;
				this.match(Java8Parser.LPAREN);
				this.state = 1263;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la === Java8Parser.Identifier || _la === Java8Parser.AT) {
					{
					this.state = 1262;
					this.argumentList();
					}
				}

				this.state = 1265;
				this.match(Java8Parser.RPAREN);
				}
			}

			this.state = 1269;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java8Parser.LBRACE) {
				{
				this.state = 1268;
				this.classBody();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumConstantModifier(): EnumConstantModifierContext {
		let _localctx: EnumConstantModifierContext = new EnumConstantModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, Java8Parser.RULE_enumConstantModifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1271;
			this.annotation();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumBodyDeclarations(): EnumBodyDeclarationsContext {
		let _localctx: EnumBodyDeclarationsContext = new EnumBodyDeclarationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, Java8Parser.RULE_enumBodyDeclarations);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1273;
			this.match(Java8Parser.SEMI);
			this.state = 1277;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.ABSTRACT) | (1 << Java8Parser.ASSERT) | (1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BREAK) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.CLASS) | (1 << Java8Parser.CONTINUE) | (1 << Java8Parser.DO) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.ENUM) | (1 << Java8Parser.FINAL) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.FOR) | (1 << Java8Parser.IF) | (1 << Java8Parser.INT) | (1 << Java8Parser.INTERFACE) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NATIVE) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Java8Parser.PRIVATE - 33)) | (1 << (Java8Parser.PROTECTED - 33)) | (1 << (Java8Parser.PUBLIC - 33)) | (1 << (Java8Parser.RETURN - 33)) | (1 << (Java8Parser.SHORT - 33)) | (1 << (Java8Parser.STATIC - 33)) | (1 << (Java8Parser.STRICTFP - 33)) | (1 << (Java8Parser.SUPER - 33)) | (1 << (Java8Parser.SWITCH - 33)) | (1 << (Java8Parser.SYNCHRONIZED - 33)) | (1 << (Java8Parser.THIS - 33)) | (1 << (Java8Parser.THROW - 33)) | (1 << (Java8Parser.TRANSIENT - 33)) | (1 << (Java8Parser.TRY - 33)) | (1 << (Java8Parser.VOID - 33)) | (1 << (Java8Parser.VOLATILE - 33)) | (1 << (Java8Parser.WHILE - 33)) | (1 << (Java8Parser.IntegerLiteral - 33)) | (1 << (Java8Parser.FloatingPointLiteral - 33)) | (1 << (Java8Parser.BooleanLiteral - 33)) | (1 << (Java8Parser.CharacterLiteral - 33)) | (1 << (Java8Parser.StringLiteral - 33)) | (1 << (Java8Parser.NullLiteral - 33)) | (1 << (Java8Parser.LPAREN - 33)) | (1 << (Java8Parser.LBRACE - 33)) | (1 << (Java8Parser.SEMI - 33)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (Java8Parser.LT - 68)) | (1 << (Java8Parser.INC - 68)) | (1 << (Java8Parser.DEC - 68)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (Java8Parser.Identifier - 102)) | (1 << (Java8Parser.AT - 102)) | (1 << (Java8Parser.COMMENT - 102)) | (1 << (Java8Parser.LINE_COMMENT - 102)))) !== 0)) {
				{
				{
				this.state = 1274;
				this.classBodyDeclaration();
				}
				}
				this.state = 1279;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceDeclaration(): InterfaceDeclarationContext {
		let _localctx: InterfaceDeclarationContext = new InterfaceDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, Java8Parser.RULE_interfaceDeclaration);
		try {
			this.state = 1282;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 126, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1280;
				this.normalInterfaceDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1281;
				this.annotationTypeDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public normalInterfaceDeclaration(): NormalInterfaceDeclarationContext {
		let _localctx: NormalInterfaceDeclarationContext = new NormalInterfaceDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, Java8Parser.RULE_normalInterfaceDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1287;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java8Parser.ABSTRACT || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Java8Parser.PRIVATE - 33)) | (1 << (Java8Parser.PROTECTED - 33)) | (1 << (Java8Parser.PUBLIC - 33)) | (1 << (Java8Parser.STATIC - 33)) | (1 << (Java8Parser.STRICTFP - 33)))) !== 0) || _la === Java8Parser.AT) {
				{
				{
				this.state = 1284;
				this.interfaceModifier();
				}
				}
				this.state = 1289;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1290;
			this.match(Java8Parser.INTERFACE);
			this.state = 1291;
			this.match(Java8Parser.Identifier);
			this.state = 1293;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java8Parser.LT) {
				{
				this.state = 1292;
				this.typeParameters();
				}
			}

			this.state = 1296;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java8Parser.EXTENDS) {
				{
				this.state = 1295;
				this.extendsInterfaces();
				}
			}

			this.state = 1298;
			this.interfaceBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceModifier(): InterfaceModifierContext {
		let _localctx: InterfaceModifierContext = new InterfaceModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, Java8Parser.RULE_interfaceModifier);
		try {
			this.state = 1307;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java8Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1300;
				this.annotation();
				}
				break;
			case Java8Parser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1301;
				this.match(Java8Parser.PUBLIC);
				}
				break;
			case Java8Parser.PROTECTED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1302;
				this.match(Java8Parser.PROTECTED);
				}
				break;
			case Java8Parser.PRIVATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1303;
				this.match(Java8Parser.PRIVATE);
				}
				break;
			case Java8Parser.ABSTRACT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1304;
				this.match(Java8Parser.ABSTRACT);
				}
				break;
			case Java8Parser.STATIC:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1305;
				this.match(Java8Parser.STATIC);
				}
				break;
			case Java8Parser.STRICTFP:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1306;
				this.match(Java8Parser.STRICTFP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public extendsInterfaces(): ExtendsInterfacesContext {
		let _localctx: ExtendsInterfacesContext = new ExtendsInterfacesContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, Java8Parser.RULE_extendsInterfaces);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1309;
			this.match(Java8Parser.EXTENDS);
			this.state = 1310;
			this.interfaceTypeList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceBody(): InterfaceBodyContext {
		let _localctx: InterfaceBodyContext = new InterfaceBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, Java8Parser.RULE_interfaceBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1312;
			this.match(Java8Parser.LBRACE);
			this.state = 1316;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.ABSTRACT) | (1 << Java8Parser.ASSERT) | (1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BREAK) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.CLASS) | (1 << Java8Parser.CONTINUE) | (1 << Java8Parser.DEFAULT) | (1 << Java8Parser.DO) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.ENUM) | (1 << Java8Parser.FINAL) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.FOR) | (1 << Java8Parser.IF) | (1 << Java8Parser.INT) | (1 << Java8Parser.INTERFACE) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NATIVE) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Java8Parser.PRIVATE - 33)) | (1 << (Java8Parser.PROTECTED - 33)) | (1 << (Java8Parser.PUBLIC - 33)) | (1 << (Java8Parser.RETURN - 33)) | (1 << (Java8Parser.SHORT - 33)) | (1 << (Java8Parser.STATIC - 33)) | (1 << (Java8Parser.STRICTFP - 33)) | (1 << (Java8Parser.SUPER - 33)) | (1 << (Java8Parser.SWITCH - 33)) | (1 << (Java8Parser.SYNCHRONIZED - 33)) | (1 << (Java8Parser.THIS - 33)) | (1 << (Java8Parser.THROW - 33)) | (1 << (Java8Parser.TRANSIENT - 33)) | (1 << (Java8Parser.TRY - 33)) | (1 << (Java8Parser.VOID - 33)) | (1 << (Java8Parser.VOLATILE - 33)) | (1 << (Java8Parser.WHILE - 33)) | (1 << (Java8Parser.IntegerLiteral - 33)) | (1 << (Java8Parser.FloatingPointLiteral - 33)) | (1 << (Java8Parser.BooleanLiteral - 33)) | (1 << (Java8Parser.CharacterLiteral - 33)) | (1 << (Java8Parser.StringLiteral - 33)) | (1 << (Java8Parser.NullLiteral - 33)) | (1 << (Java8Parser.LPAREN - 33)) | (1 << (Java8Parser.LBRACE - 33)) | (1 << (Java8Parser.SEMI - 33)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (Java8Parser.LT - 68)) | (1 << (Java8Parser.INC - 68)) | (1 << (Java8Parser.DEC - 68)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (Java8Parser.Identifier - 102)) | (1 << (Java8Parser.AT - 102)) | (1 << (Java8Parser.COMMENT - 102)) | (1 << (Java8Parser.LINE_COMMENT - 102)))) !== 0)) {
				{
				{
				this.state = 1313;
				this.interfaceMemberDeclaration();
				}
				}
				this.state = 1318;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1319;
			this.match(Java8Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceMemberDeclaration(): InterfaceMemberDeclarationContext {
		let _localctx: InterfaceMemberDeclarationContext = new InterfaceMemberDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, Java8Parser.RULE_interfaceMemberDeclaration);
		try {
			this.state = 1326;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 132, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1321;
				this.constantDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1322;
				this.interfaceMethodDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1323;
				this.classDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1324;
				this.interfaceDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1325;
				this.match(Java8Parser.SEMI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constantDeclaration(): ConstantDeclarationContext {
		let _localctx: ConstantDeclarationContext = new ConstantDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, Java8Parser.RULE_constantDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1331;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (Java8Parser.FINAL - 18)) | (1 << (Java8Parser.PUBLIC - 18)) | (1 << (Java8Parser.STATIC - 18)))) !== 0) || _la === Java8Parser.AT) {
				{
				{
				this.state = 1328;
				this.constantModifier();
				}
				}
				this.state = 1333;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1334;
			this.unannType();
			this.state = 1335;
			this.variableDeclaratorList();
			this.state = 1336;
			this.match(Java8Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constantModifier(): ConstantModifierContext {
		let _localctx: ConstantModifierContext = new ConstantModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, Java8Parser.RULE_constantModifier);
		try {
			this.state = 1342;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java8Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1338;
				this.annotation();
				}
				break;
			case Java8Parser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1339;
				this.match(Java8Parser.PUBLIC);
				}
				break;
			case Java8Parser.STATIC:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1340;
				this.match(Java8Parser.STATIC);
				}
				break;
			case Java8Parser.FINAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1341;
				this.match(Java8Parser.FINAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext {
		let _localctx: InterfaceMethodDeclarationContext = new InterfaceMethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, Java8Parser.RULE_interfaceMethodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1347;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java8Parser.ABSTRACT || _la === Java8Parser.DEFAULT || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (Java8Parser.PUBLIC - 35)) | (1 << (Java8Parser.STATIC - 35)) | (1 << (Java8Parser.STRICTFP - 35)))) !== 0) || _la === Java8Parser.AT) {
				{
				{
				this.state = 1344;
				this.interfaceMethodModifier();
				}
				}
				this.state = 1349;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1350;
			this.methodHeader();
			this.state = 1351;
			this.methodBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceMethodModifier(): InterfaceMethodModifierContext {
		let _localctx: InterfaceMethodModifierContext = new InterfaceMethodModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, Java8Parser.RULE_interfaceMethodModifier);
		try {
			this.state = 1359;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java8Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1353;
				this.annotation();
				}
				break;
			case Java8Parser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1354;
				this.match(Java8Parser.PUBLIC);
				}
				break;
			case Java8Parser.ABSTRACT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1355;
				this.match(Java8Parser.ABSTRACT);
				}
				break;
			case Java8Parser.DEFAULT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1356;
				this.match(Java8Parser.DEFAULT);
				}
				break;
			case Java8Parser.STATIC:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1357;
				this.match(Java8Parser.STATIC);
				}
				break;
			case Java8Parser.STRICTFP:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1358;
				this.match(Java8Parser.STRICTFP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext {
		let _localctx: AnnotationTypeDeclarationContext = new AnnotationTypeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, Java8Parser.RULE_annotationTypeDeclaration);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1364;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1361;
					this.interfaceModifier();
					}
					}
				}
				this.state = 1366;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
			}
			this.state = 1367;
			this.match(Java8Parser.AT);
			this.state = 1368;
			this.match(Java8Parser.INTERFACE);
			this.state = 1369;
			this.match(Java8Parser.Identifier);
			this.state = 1370;
			this.annotationTypeBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationTypeBody(): AnnotationTypeBodyContext {
		let _localctx: AnnotationTypeBodyContext = new AnnotationTypeBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, Java8Parser.RULE_annotationTypeBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1372;
			this.match(Java8Parser.LBRACE);
			this.state = 1376;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.ABSTRACT) | (1 << Java8Parser.ASSERT) | (1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BREAK) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.CLASS) | (1 << Java8Parser.CONTINUE) | (1 << Java8Parser.DO) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.ENUM) | (1 << Java8Parser.FINAL) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.FOR) | (1 << Java8Parser.IF) | (1 << Java8Parser.INT) | (1 << Java8Parser.INTERFACE) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NATIVE) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Java8Parser.PRIVATE - 33)) | (1 << (Java8Parser.PROTECTED - 33)) | (1 << (Java8Parser.PUBLIC - 33)) | (1 << (Java8Parser.RETURN - 33)) | (1 << (Java8Parser.SHORT - 33)) | (1 << (Java8Parser.STATIC - 33)) | (1 << (Java8Parser.STRICTFP - 33)) | (1 << (Java8Parser.SUPER - 33)) | (1 << (Java8Parser.SWITCH - 33)) | (1 << (Java8Parser.SYNCHRONIZED - 33)) | (1 << (Java8Parser.THIS - 33)) | (1 << (Java8Parser.THROW - 33)) | (1 << (Java8Parser.TRANSIENT - 33)) | (1 << (Java8Parser.TRY - 33)) | (1 << (Java8Parser.VOID - 33)) | (1 << (Java8Parser.VOLATILE - 33)) | (1 << (Java8Parser.WHILE - 33)) | (1 << (Java8Parser.IntegerLiteral - 33)) | (1 << (Java8Parser.FloatingPointLiteral - 33)) | (1 << (Java8Parser.BooleanLiteral - 33)) | (1 << (Java8Parser.CharacterLiteral - 33)) | (1 << (Java8Parser.StringLiteral - 33)) | (1 << (Java8Parser.NullLiteral - 33)) | (1 << (Java8Parser.LPAREN - 33)) | (1 << (Java8Parser.LBRACE - 33)) | (1 << (Java8Parser.SEMI - 33)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (Java8Parser.LT - 68)) | (1 << (Java8Parser.INC - 68)) | (1 << (Java8Parser.DEC - 68)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (Java8Parser.Identifier - 102)) | (1 << (Java8Parser.AT - 102)) | (1 << (Java8Parser.COMMENT - 102)) | (1 << (Java8Parser.LINE_COMMENT - 102)))) !== 0)) {
				{
				{
				this.state = 1373;
				this.annotationTypeMemberDeclaration();
				}
				}
				this.state = 1378;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1379;
			this.match(Java8Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationTypeMemberDeclaration(): AnnotationTypeMemberDeclarationContext {
		let _localctx: AnnotationTypeMemberDeclarationContext = new AnnotationTypeMemberDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, Java8Parser.RULE_annotationTypeMemberDeclaration);
		try {
			this.state = 1386;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 139, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1381;
				this.annotationTypeElementDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1382;
				this.constantDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1383;
				this.classDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1384;
				this.interfaceDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1385;
				this.match(Java8Parser.SEMI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationTypeElementDeclaration(): AnnotationTypeElementDeclarationContext {
		let _localctx: AnnotationTypeElementDeclarationContext = new AnnotationTypeElementDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, Java8Parser.RULE_annotationTypeElementDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1391;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java8Parser.ABSTRACT || _la === Java8Parser.PUBLIC || _la === Java8Parser.AT) {
				{
				{
				this.state = 1388;
				this.annotationTypeElementModifier();
				}
				}
				this.state = 1393;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1394;
			this.unannType();
			this.state = 1395;
			this.match(Java8Parser.Identifier);
			this.state = 1396;
			this.match(Java8Parser.LPAREN);
			this.state = 1397;
			this.match(Java8Parser.RPAREN);
			this.state = 1399;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java8Parser.LBRACK || _la === Java8Parser.AT) {
				{
				this.state = 1398;
				this.dims();
				}
			}

			this.state = 1402;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java8Parser.DEFAULT) {
				{
				this.state = 1401;
				this.defaultValue();
				}
			}

			this.state = 1404;
			this.match(Java8Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationTypeElementModifier(): AnnotationTypeElementModifierContext {
		let _localctx: AnnotationTypeElementModifierContext = new AnnotationTypeElementModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, Java8Parser.RULE_annotationTypeElementModifier);
		try {
			this.state = 1409;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java8Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1406;
				this.annotation();
				}
				break;
			case Java8Parser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1407;
				this.match(Java8Parser.PUBLIC);
				}
				break;
			case Java8Parser.ABSTRACT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1408;
				this.match(Java8Parser.ABSTRACT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public defaultValue(): DefaultValueContext {
		let _localctx: DefaultValueContext = new DefaultValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, Java8Parser.RULE_defaultValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1411;
			this.match(Java8Parser.DEFAULT);
			this.state = 1412;
			this.elementValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation(): AnnotationContext {
		let _localctx: AnnotationContext = new AnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, Java8Parser.RULE_annotation);
		try {
			this.state = 1417;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 144, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1414;
				this.normalAnnotation();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1415;
				this.markerAnnotation();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1416;
				this.singleElementAnnotation();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public normalAnnotation(): NormalAnnotationContext {
		let _localctx: NormalAnnotationContext = new NormalAnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, Java8Parser.RULE_normalAnnotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1419;
			this.match(Java8Parser.AT);
			this.state = 1420;
			this.typeName();
			this.state = 1421;
			this.match(Java8Parser.LPAREN);
			this.state = 1423;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java8Parser.Identifier) {
				{
				this.state = 1422;
				this.elementValuePairList();
				}
			}

			this.state = 1425;
			this.match(Java8Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValuePairList(): ElementValuePairListContext {
		let _localctx: ElementValuePairListContext = new ElementValuePairListContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, Java8Parser.RULE_elementValuePairList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1427;
			this.elementValuePair();
			this.state = 1432;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java8Parser.COMMA) {
				{
				{
				this.state = 1428;
				this.match(Java8Parser.COMMA);
				this.state = 1429;
				this.elementValuePair();
				}
				}
				this.state = 1434;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValuePair(): ElementValuePairContext {
		let _localctx: ElementValuePairContext = new ElementValuePairContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, Java8Parser.RULE_elementValuePair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1435;
			this.match(Java8Parser.Identifier);
			this.state = 1436;
			this.match(Java8Parser.ASSIGN);
			this.state = 1437;
			this.elementValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValue(): ElementValueContext {
		let _localctx: ElementValueContext = new ElementValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, Java8Parser.RULE_elementValue);
		try {
			this.state = 1442;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 147, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1439;
				this.conditionalExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1440;
				this.elementValueArrayInitializer();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1441;
				this.annotation();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValueArrayInitializer(): ElementValueArrayInitializerContext {
		let _localctx: ElementValueArrayInitializerContext = new ElementValueArrayInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, Java8Parser.RULE_elementValueArrayInitializer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1444;
			this.match(Java8Parser.LBRACE);
			this.state = 1446;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)) | (1 << (Java8Parser.LBRACE - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la === Java8Parser.Identifier || _la === Java8Parser.AT) {
				{
				this.state = 1445;
				this.elementValueList();
				}
			}

			this.state = 1449;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java8Parser.COMMA) {
				{
				this.state = 1448;
				this.match(Java8Parser.COMMA);
				}
			}

			this.state = 1451;
			this.match(Java8Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValueList(): ElementValueListContext {
		let _localctx: ElementValueListContext = new ElementValueListContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, Java8Parser.RULE_elementValueList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1453;
			this.elementValue();
			this.state = 1458;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 150, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1454;
					this.match(Java8Parser.COMMA);
					this.state = 1455;
					this.elementValue();
					}
					}
				}
				this.state = 1460;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 150, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public markerAnnotation(): MarkerAnnotationContext {
		let _localctx: MarkerAnnotationContext = new MarkerAnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, Java8Parser.RULE_markerAnnotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1461;
			this.match(Java8Parser.AT);
			this.state = 1462;
			this.typeName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public singleElementAnnotation(): SingleElementAnnotationContext {
		let _localctx: SingleElementAnnotationContext = new SingleElementAnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, Java8Parser.RULE_singleElementAnnotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1464;
			this.match(Java8Parser.AT);
			this.state = 1465;
			this.typeName();
			this.state = 1466;
			this.match(Java8Parser.LPAREN);
			this.state = 1467;
			this.elementValue();
			this.state = 1468;
			this.match(Java8Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayInitializer(): ArrayInitializerContext {
		let _localctx: ArrayInitializerContext = new ArrayInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, Java8Parser.RULE_arrayInitializer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1470;
			this.match(Java8Parser.LBRACE);
			this.state = 1472;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)) | (1 << (Java8Parser.LBRACE - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la === Java8Parser.Identifier || _la === Java8Parser.AT) {
				{
				this.state = 1471;
				this.variableInitializerList();
				}
			}

			this.state = 1475;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java8Parser.COMMA) {
				{
				this.state = 1474;
				this.match(Java8Parser.COMMA);
				}
			}

			this.state = 1477;
			this.match(Java8Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableInitializerList(): VariableInitializerListContext {
		let _localctx: VariableInitializerListContext = new VariableInitializerListContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, Java8Parser.RULE_variableInitializerList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1479;
			this.variableInitializer();
			this.state = 1484;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 153, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1480;
					this.match(Java8Parser.COMMA);
					this.state = 1481;
					this.variableInitializer();
					}
					}
				}
				this.state = 1486;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 153, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, Java8Parser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1487;
			this.match(Java8Parser.LBRACE);
			this.state = 1489;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.ABSTRACT) | (1 << Java8Parser.ASSERT) | (1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BREAK) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.CLASS) | (1 << Java8Parser.CONTINUE) | (1 << Java8Parser.DO) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.ENUM) | (1 << Java8Parser.FINAL) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.FOR) | (1 << Java8Parser.IF) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NATIVE) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Java8Parser.PRIVATE - 33)) | (1 << (Java8Parser.PROTECTED - 33)) | (1 << (Java8Parser.PUBLIC - 33)) | (1 << (Java8Parser.RETURN - 33)) | (1 << (Java8Parser.SHORT - 33)) | (1 << (Java8Parser.STATIC - 33)) | (1 << (Java8Parser.STRICTFP - 33)) | (1 << (Java8Parser.SUPER - 33)) | (1 << (Java8Parser.SWITCH - 33)) | (1 << (Java8Parser.SYNCHRONIZED - 33)) | (1 << (Java8Parser.THIS - 33)) | (1 << (Java8Parser.THROW - 33)) | (1 << (Java8Parser.TRANSIENT - 33)) | (1 << (Java8Parser.TRY - 33)) | (1 << (Java8Parser.VOID - 33)) | (1 << (Java8Parser.VOLATILE - 33)) | (1 << (Java8Parser.WHILE - 33)) | (1 << (Java8Parser.IntegerLiteral - 33)) | (1 << (Java8Parser.FloatingPointLiteral - 33)) | (1 << (Java8Parser.BooleanLiteral - 33)) | (1 << (Java8Parser.CharacterLiteral - 33)) | (1 << (Java8Parser.StringLiteral - 33)) | (1 << (Java8Parser.NullLiteral - 33)) | (1 << (Java8Parser.LPAREN - 33)) | (1 << (Java8Parser.LBRACE - 33)) | (1 << (Java8Parser.SEMI - 33)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (Java8Parser.LT - 68)) | (1 << (Java8Parser.INC - 68)) | (1 << (Java8Parser.DEC - 68)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (Java8Parser.Identifier - 102)) | (1 << (Java8Parser.AT - 102)) | (1 << (Java8Parser.COMMENT - 102)) | (1 << (Java8Parser.LINE_COMMENT - 102)))) !== 0)) {
				{
				this.state = 1488;
				this.blockStatements();
				}
			}

			this.state = 1491;
			this.match(Java8Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockStatements(): BlockStatementsContext {
		let _localctx: BlockStatementsContext = new BlockStatementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, Java8Parser.RULE_blockStatements);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1494;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1493;
				this.blockStatement();
				}
				}
				this.state = 1496;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.ABSTRACT) | (1 << Java8Parser.ASSERT) | (1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BREAK) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.CLASS) | (1 << Java8Parser.CONTINUE) | (1 << Java8Parser.DO) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.ENUM) | (1 << Java8Parser.FINAL) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.FOR) | (1 << Java8Parser.IF) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NATIVE) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (Java8Parser.PRIVATE - 33)) | (1 << (Java8Parser.PROTECTED - 33)) | (1 << (Java8Parser.PUBLIC - 33)) | (1 << (Java8Parser.RETURN - 33)) | (1 << (Java8Parser.SHORT - 33)) | (1 << (Java8Parser.STATIC - 33)) | (1 << (Java8Parser.STRICTFP - 33)) | (1 << (Java8Parser.SUPER - 33)) | (1 << (Java8Parser.SWITCH - 33)) | (1 << (Java8Parser.SYNCHRONIZED - 33)) | (1 << (Java8Parser.THIS - 33)) | (1 << (Java8Parser.THROW - 33)) | (1 << (Java8Parser.TRANSIENT - 33)) | (1 << (Java8Parser.TRY - 33)) | (1 << (Java8Parser.VOID - 33)) | (1 << (Java8Parser.VOLATILE - 33)) | (1 << (Java8Parser.WHILE - 33)) | (1 << (Java8Parser.IntegerLiteral - 33)) | (1 << (Java8Parser.FloatingPointLiteral - 33)) | (1 << (Java8Parser.BooleanLiteral - 33)) | (1 << (Java8Parser.CharacterLiteral - 33)) | (1 << (Java8Parser.StringLiteral - 33)) | (1 << (Java8Parser.NullLiteral - 33)) | (1 << (Java8Parser.LPAREN - 33)) | (1 << (Java8Parser.LBRACE - 33)) | (1 << (Java8Parser.SEMI - 33)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (Java8Parser.LT - 68)) | (1 << (Java8Parser.INC - 68)) | (1 << (Java8Parser.DEC - 68)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (Java8Parser.Identifier - 102)) | (1 << (Java8Parser.AT - 102)) | (1 << (Java8Parser.COMMENT - 102)) | (1 << (Java8Parser.LINE_COMMENT - 102)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockStatement(): BlockStatementContext {
		let _localctx: BlockStatementContext = new BlockStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, Java8Parser.RULE_blockStatement);
		try {
			this.state = 1504;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 157, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1498;
				this.localVariableDeclarationStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1499;
				this.classDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1501;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 156, this._ctx) ) {
				case 1:
					{
					this.state = 1500;
					this.comments();
					}
					break;
				}
				this.state = 1503;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localVariableDeclarationStatement(): LocalVariableDeclarationStatementContext {
		let _localctx: LocalVariableDeclarationStatementContext = new LocalVariableDeclarationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, Java8Parser.RULE_localVariableDeclarationStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1506;
			this.localVariableDeclaration();
			this.state = 1507;
			this.match(Java8Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		let _localctx: LocalVariableDeclarationContext = new LocalVariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 258, Java8Parser.RULE_localVariableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1510;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 158, this._ctx) ) {
			case 1:
				{
				this.state = 1509;
				this.comments();
				}
				break;
			}
			this.state = 1515;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java8Parser.FINAL || _la === Java8Parser.AT) {
				{
				{
				this.state = 1512;
				this.variableModifier();
				}
				}
				this.state = 1517;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1518;
			this.unannType();
			this.state = 1519;
			this.variableDeclaratorList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 260, Java8Parser.RULE_statement);
		try {
			this.state = 1527;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 160, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1521;
				this.statementWithoutTrailingSubstatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1522;
				this.labeledStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1523;
				this.ifThenStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1524;
				this.ifThenElseStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1525;
				this.whileStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1526;
				this.forStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statementNoShortIf(): StatementNoShortIfContext {
		let _localctx: StatementNoShortIfContext = new StatementNoShortIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 262, Java8Parser.RULE_statementNoShortIf);
		try {
			this.state = 1534;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 161, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1529;
				this.statementWithoutTrailingSubstatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1530;
				this.labeledStatementNoShortIf();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1531;
				this.ifThenElseStatementNoShortIf();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1532;
				this.whileStatementNoShortIf();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1533;
				this.forStatementNoShortIf();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statementWithoutTrailingSubstatement(): StatementWithoutTrailingSubstatementContext {
		let _localctx: StatementWithoutTrailingSubstatementContext = new StatementWithoutTrailingSubstatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 264, Java8Parser.RULE_statementWithoutTrailingSubstatement);
		try {
			this.state = 1548;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java8Parser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1536;
				this.block();
				}
				break;
			case Java8Parser.SEMI:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1537;
				this.emptyStatement_();
				}
				break;
			case Java8Parser.BOOLEAN:
			case Java8Parser.BYTE:
			case Java8Parser.CHAR:
			case Java8Parser.DOUBLE:
			case Java8Parser.FLOAT:
			case Java8Parser.INT:
			case Java8Parser.LONG:
			case Java8Parser.NEW:
			case Java8Parser.SHORT:
			case Java8Parser.SUPER:
			case Java8Parser.THIS:
			case Java8Parser.VOID:
			case Java8Parser.IntegerLiteral:
			case Java8Parser.FloatingPointLiteral:
			case Java8Parser.BooleanLiteral:
			case Java8Parser.CharacterLiteral:
			case Java8Parser.StringLiteral:
			case Java8Parser.NullLiteral:
			case Java8Parser.LPAREN:
			case Java8Parser.INC:
			case Java8Parser.DEC:
			case Java8Parser.Identifier:
			case Java8Parser.AT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1538;
				this.expressionStatement();
				}
				break;
			case Java8Parser.ASSERT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1539;
				this.assertStatement();
				}
				break;
			case Java8Parser.SWITCH:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1540;
				this.switchStatement();
				}
				break;
			case Java8Parser.DO:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1541;
				this.doStatement();
				}
				break;
			case Java8Parser.BREAK:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1542;
				this.breakStatement();
				}
				break;
			case Java8Parser.CONTINUE:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1543;
				this.continueStatement();
				}
				break;
			case Java8Parser.RETURN:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1544;
				this.returnStatement();
				}
				break;
			case Java8Parser.SYNCHRONIZED:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1545;
				this.synchronizedStatement();
				}
				break;
			case Java8Parser.THROW:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1546;
				this.throwStatement();
				}
				break;
			case Java8Parser.TRY:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1547;
				this.tryStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public emptyStatement_(): EmptyStatement_Context {
		let _localctx: EmptyStatement_Context = new EmptyStatement_Context(this._ctx, this.state);
		this.enterRule(_localctx, 266, Java8Parser.RULE_emptyStatement_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1550;
			this.match(Java8Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public labeledStatement(): LabeledStatementContext {
		let _localctx: LabeledStatementContext = new LabeledStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 268, Java8Parser.RULE_labeledStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1552;
			this.match(Java8Parser.Identifier);
			this.state = 1553;
			this.match(Java8Parser.COLON);
			this.state = 1554;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public labeledStatementNoShortIf(): LabeledStatementNoShortIfContext {
		let _localctx: LabeledStatementNoShortIfContext = new LabeledStatementNoShortIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, Java8Parser.RULE_labeledStatementNoShortIf);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1556;
			this.match(Java8Parser.Identifier);
			this.state = 1557;
			this.match(Java8Parser.COLON);
			this.state = 1558;
			this.statementNoShortIf();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 272, Java8Parser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1560;
			this.statementExpression();
			this.state = 1561;
			this.match(Java8Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statementExpression(): StatementExpressionContext {
		let _localctx: StatementExpressionContext = new StatementExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 274, Java8Parser.RULE_statementExpression);
		try {
			this.state = 1570;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 163, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1563;
				this.assignment();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1564;
				this.preIncrementExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1565;
				this.preDecrementExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1566;
				this.postIncrementExpression();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1567;
				this.postDecrementExpression();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1568;
				this.methodInvocation();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1569;
				this.classInstanceCreationExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifThenStatement(): IfThenStatementContext {
		let _localctx: IfThenStatementContext = new IfThenStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 276, Java8Parser.RULE_ifThenStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1572;
			this.match(Java8Parser.IF);
			this.state = 1573;
			this.match(Java8Parser.LPAREN);
			this.state = 1574;
			this.expression();
			this.state = 1575;
			this.match(Java8Parser.RPAREN);
			this.state = 1576;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifThenElseStatement(): IfThenElseStatementContext {
		let _localctx: IfThenElseStatementContext = new IfThenElseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 278, Java8Parser.RULE_ifThenElseStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1578;
			this.match(Java8Parser.IF);
			this.state = 1579;
			this.match(Java8Parser.LPAREN);
			this.state = 1580;
			this.expression();
			this.state = 1581;
			this.match(Java8Parser.RPAREN);
			this.state = 1582;
			this.statementNoShortIf();
			this.state = 1583;
			this.match(Java8Parser.ELSE);
			this.state = 1584;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifThenElseStatementNoShortIf(): IfThenElseStatementNoShortIfContext {
		let _localctx: IfThenElseStatementNoShortIfContext = new IfThenElseStatementNoShortIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 280, Java8Parser.RULE_ifThenElseStatementNoShortIf);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1586;
			this.match(Java8Parser.IF);
			this.state = 1587;
			this.match(Java8Parser.LPAREN);
			this.state = 1588;
			this.expression();
			this.state = 1589;
			this.match(Java8Parser.RPAREN);
			this.state = 1590;
			this.statementNoShortIf();
			this.state = 1591;
			this.match(Java8Parser.ELSE);
			this.state = 1592;
			this.statementNoShortIf();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assertStatement(): AssertStatementContext {
		let _localctx: AssertStatementContext = new AssertStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 282, Java8Parser.RULE_assertStatement);
		try {
			this.state = 1604;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 164, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1594;
				this.match(Java8Parser.ASSERT);
				this.state = 1595;
				this.expression();
				this.state = 1596;
				this.match(Java8Parser.SEMI);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1598;
				this.match(Java8Parser.ASSERT);
				this.state = 1599;
				this.expression();
				this.state = 1600;
				this.match(Java8Parser.COLON);
				this.state = 1601;
				this.expression();
				this.state = 1602;
				this.match(Java8Parser.SEMI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchStatement(): SwitchStatementContext {
		let _localctx: SwitchStatementContext = new SwitchStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 284, Java8Parser.RULE_switchStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1606;
			this.match(Java8Parser.SWITCH);
			this.state = 1607;
			this.match(Java8Parser.LPAREN);
			this.state = 1608;
			this.expression();
			this.state = 1609;
			this.match(Java8Parser.RPAREN);
			this.state = 1610;
			this.switchBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchBlock(): SwitchBlockContext {
		let _localctx: SwitchBlockContext = new SwitchBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 286, Java8Parser.RULE_switchBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1612;
			this.match(Java8Parser.LBRACE);
			this.state = 1616;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 165, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1613;
					this.switchBlockStatementGroup();
					}
					}
				}
				this.state = 1618;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 165, this._ctx);
			}
			this.state = 1622;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java8Parser.CASE || _la === Java8Parser.DEFAULT) {
				{
				{
				this.state = 1619;
				this.switchLabel();
				}
				}
				this.state = 1624;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1625;
			this.match(Java8Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchBlockStatementGroup(): SwitchBlockStatementGroupContext {
		let _localctx: SwitchBlockStatementGroupContext = new SwitchBlockStatementGroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 288, Java8Parser.RULE_switchBlockStatementGroup);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1627;
			this.switchLabels();
			this.state = 1628;
			this.blockStatements();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchLabels(): SwitchLabelsContext {
		let _localctx: SwitchLabelsContext = new SwitchLabelsContext(this._ctx, this.state);
		this.enterRule(_localctx, 290, Java8Parser.RULE_switchLabels);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1630;
			this.switchLabel();
			this.state = 1634;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java8Parser.CASE || _la === Java8Parser.DEFAULT) {
				{
				{
				this.state = 1631;
				this.switchLabel();
				}
				}
				this.state = 1636;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchLabel(): SwitchLabelContext {
		let _localctx: SwitchLabelContext = new SwitchLabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 292, Java8Parser.RULE_switchLabel);
		try {
			this.state = 1647;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 168, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1637;
				this.match(Java8Parser.CASE);
				this.state = 1638;
				this.constantExpression();
				this.state = 1639;
				this.match(Java8Parser.COLON);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1641;
				this.match(Java8Parser.CASE);
				this.state = 1642;
				this.enumConstantName();
				this.state = 1643;
				this.match(Java8Parser.COLON);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1645;
				this.match(Java8Parser.DEFAULT);
				this.state = 1646;
				this.match(Java8Parser.COLON);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumConstantName(): EnumConstantNameContext {
		let _localctx: EnumConstantNameContext = new EnumConstantNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 294, Java8Parser.RULE_enumConstantName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1649;
			this.match(Java8Parser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whileStatement(): WhileStatementContext {
		let _localctx: WhileStatementContext = new WhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 296, Java8Parser.RULE_whileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1651;
			this.match(Java8Parser.WHILE);
			this.state = 1652;
			this.match(Java8Parser.LPAREN);
			this.state = 1653;
			this.expression();
			this.state = 1654;
			this.match(Java8Parser.RPAREN);
			this.state = 1655;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whileStatementNoShortIf(): WhileStatementNoShortIfContext {
		let _localctx: WhileStatementNoShortIfContext = new WhileStatementNoShortIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 298, Java8Parser.RULE_whileStatementNoShortIf);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1657;
			this.match(Java8Parser.WHILE);
			this.state = 1658;
			this.match(Java8Parser.LPAREN);
			this.state = 1659;
			this.expression();
			this.state = 1660;
			this.match(Java8Parser.RPAREN);
			this.state = 1661;
			this.statementNoShortIf();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public doStatement(): DoStatementContext {
		let _localctx: DoStatementContext = new DoStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 300, Java8Parser.RULE_doStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1663;
			this.match(Java8Parser.DO);
			this.state = 1664;
			this.statement();
			this.state = 1665;
			this.match(Java8Parser.WHILE);
			this.state = 1666;
			this.match(Java8Parser.LPAREN);
			this.state = 1667;
			this.expression();
			this.state = 1668;
			this.match(Java8Parser.RPAREN);
			this.state = 1669;
			this.match(Java8Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forStatement(): ForStatementContext {
		let _localctx: ForStatementContext = new ForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 302, Java8Parser.RULE_forStatement);
		try {
			this.state = 1673;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 169, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1671;
				this.basicForStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1672;
				this.enhancedForStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forStatementNoShortIf(): ForStatementNoShortIfContext {
		let _localctx: ForStatementNoShortIfContext = new ForStatementNoShortIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 304, Java8Parser.RULE_forStatementNoShortIf);
		try {
			this.state = 1677;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 170, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1675;
				this.basicForStatementNoShortIf();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1676;
				this.enhancedForStatementNoShortIf();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public basicForStatement(): BasicForStatementContext {
		let _localctx: BasicForStatementContext = new BasicForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 306, Java8Parser.RULE_basicForStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1679;
			this.match(Java8Parser.FOR);
			this.state = 1680;
			this.match(Java8Parser.LPAREN);
			this.state = 1682;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 171, this._ctx) ) {
			case 1:
				{
				this.state = 1681;
				this.forInit();
				}
				break;
			}
			this.state = 1684;
			this.match(Java8Parser.SEMI);
			this.state = 1686;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la === Java8Parser.Identifier || _la === Java8Parser.AT) {
				{
				this.state = 1685;
				this.expression();
				}
			}

			this.state = 1688;
			this.match(Java8Parser.SEMI);
			this.state = 1690;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (Java8Parser.INC - 79)) | (1 << (Java8Parser.DEC - 79)) | (1 << (Java8Parser.Identifier - 79)) | (1 << (Java8Parser.AT - 79)))) !== 0)) {
				{
				this.state = 1689;
				this.forUpdate();
				}
			}

			this.state = 1692;
			this.match(Java8Parser.RPAREN);
			this.state = 1693;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public basicForStatementNoShortIf(): BasicForStatementNoShortIfContext {
		let _localctx: BasicForStatementNoShortIfContext = new BasicForStatementNoShortIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 308, Java8Parser.RULE_basicForStatementNoShortIf);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1695;
			this.match(Java8Parser.FOR);
			this.state = 1696;
			this.match(Java8Parser.LPAREN);
			this.state = 1698;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 174, this._ctx) ) {
			case 1:
				{
				this.state = 1697;
				this.forInit();
				}
				break;
			}
			this.state = 1700;
			this.match(Java8Parser.SEMI);
			this.state = 1702;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la === Java8Parser.Identifier || _la === Java8Parser.AT) {
				{
				this.state = 1701;
				this.expression();
				}
			}

			this.state = 1704;
			this.match(Java8Parser.SEMI);
			this.state = 1706;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (Java8Parser.INC - 79)) | (1 << (Java8Parser.DEC - 79)) | (1 << (Java8Parser.Identifier - 79)) | (1 << (Java8Parser.AT - 79)))) !== 0)) {
				{
				this.state = 1705;
				this.forUpdate();
				}
			}

			this.state = 1708;
			this.match(Java8Parser.RPAREN);
			this.state = 1709;
			this.statementNoShortIf();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forInit(): ForInitContext {
		let _localctx: ForInitContext = new ForInitContext(this._ctx, this.state);
		this.enterRule(_localctx, 310, Java8Parser.RULE_forInit);
		try {
			this.state = 1713;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 177, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1711;
				this.statementExpressionList();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1712;
				this.localVariableDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forUpdate(): ForUpdateContext {
		let _localctx: ForUpdateContext = new ForUpdateContext(this._ctx, this.state);
		this.enterRule(_localctx, 312, Java8Parser.RULE_forUpdate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1715;
			this.statementExpressionList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statementExpressionList(): StatementExpressionListContext {
		let _localctx: StatementExpressionListContext = new StatementExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 314, Java8Parser.RULE_statementExpressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1717;
			this.statementExpression();
			this.state = 1722;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java8Parser.COMMA) {
				{
				{
				this.state = 1718;
				this.match(Java8Parser.COMMA);
				this.state = 1719;
				this.statementExpression();
				}
				}
				this.state = 1724;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enhancedForStatement(): EnhancedForStatementContext {
		let _localctx: EnhancedForStatementContext = new EnhancedForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 316, Java8Parser.RULE_enhancedForStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1725;
			this.match(Java8Parser.FOR);
			this.state = 1726;
			this.match(Java8Parser.LPAREN);
			this.state = 1730;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java8Parser.FINAL || _la === Java8Parser.AT) {
				{
				{
				this.state = 1727;
				this.variableModifier();
				}
				}
				this.state = 1732;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1733;
			this.unannType();
			this.state = 1734;
			this.variableDeclaratorId();
			this.state = 1735;
			this.match(Java8Parser.COLON);
			this.state = 1736;
			this.expression();
			this.state = 1737;
			this.match(Java8Parser.RPAREN);
			this.state = 1738;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enhancedForStatementNoShortIf(): EnhancedForStatementNoShortIfContext {
		let _localctx: EnhancedForStatementNoShortIfContext = new EnhancedForStatementNoShortIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 318, Java8Parser.RULE_enhancedForStatementNoShortIf);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1740;
			this.match(Java8Parser.FOR);
			this.state = 1741;
			this.match(Java8Parser.LPAREN);
			this.state = 1745;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java8Parser.FINAL || _la === Java8Parser.AT) {
				{
				{
				this.state = 1742;
				this.variableModifier();
				}
				}
				this.state = 1747;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1748;
			this.unannType();
			this.state = 1749;
			this.variableDeclaratorId();
			this.state = 1750;
			this.match(Java8Parser.COLON);
			this.state = 1751;
			this.expression();
			this.state = 1752;
			this.match(Java8Parser.RPAREN);
			this.state = 1753;
			this.statementNoShortIf();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public breakStatement(): BreakStatementContext {
		let _localctx: BreakStatementContext = new BreakStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 320, Java8Parser.RULE_breakStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1755;
			this.match(Java8Parser.BREAK);
			this.state = 1757;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java8Parser.Identifier) {
				{
				this.state = 1756;
				this.match(Java8Parser.Identifier);
				}
			}

			this.state = 1759;
			this.match(Java8Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public continueStatement(): ContinueStatementContext {
		let _localctx: ContinueStatementContext = new ContinueStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 322, Java8Parser.RULE_continueStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1761;
			this.match(Java8Parser.CONTINUE);
			this.state = 1763;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java8Parser.Identifier) {
				{
				this.state = 1762;
				this.match(Java8Parser.Identifier);
				}
			}

			this.state = 1765;
			this.match(Java8Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 324, Java8Parser.RULE_returnStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1767;
			this.match(Java8Parser.RETURN);
			this.state = 1769;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la === Java8Parser.Identifier || _la === Java8Parser.AT) {
				{
				this.state = 1768;
				this.expression();
				}
			}

			this.state = 1771;
			this.match(Java8Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public throwStatement(): ThrowStatementContext {
		let _localctx: ThrowStatementContext = new ThrowStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 326, Java8Parser.RULE_throwStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1773;
			this.match(Java8Parser.THROW);
			this.state = 1774;
			this.expression();
			this.state = 1775;
			this.match(Java8Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public synchronizedStatement(): SynchronizedStatementContext {
		let _localctx: SynchronizedStatementContext = new SynchronizedStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 328, Java8Parser.RULE_synchronizedStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1777;
			this.match(Java8Parser.SYNCHRONIZED);
			this.state = 1778;
			this.match(Java8Parser.LPAREN);
			this.state = 1779;
			this.expression();
			this.state = 1780;
			this.match(Java8Parser.RPAREN);
			this.state = 1781;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tryStatement(): TryStatementContext {
		let _localctx: TryStatementContext = new TryStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 330, Java8Parser.RULE_tryStatement);
		let _la: number;
		try {
			this.state = 1795;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 185, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1783;
				this.match(Java8Parser.TRY);
				this.state = 1784;
				this.block();
				this.state = 1785;
				this.catches();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1787;
				this.match(Java8Parser.TRY);
				this.state = 1788;
				this.block();
				this.state = 1790;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java8Parser.CATCH) {
					{
					this.state = 1789;
					this.catches();
					}
				}

				this.state = 1792;
				this.finally_();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1794;
				this.tryWithResourcesStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catches(): CatchesContext {
		let _localctx: CatchesContext = new CatchesContext(this._ctx, this.state);
		this.enterRule(_localctx, 332, Java8Parser.RULE_catches);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1797;
			this.catchClause();
			this.state = 1801;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java8Parser.CATCH) {
				{
				{
				this.state = 1798;
				this.catchClause();
				}
				}
				this.state = 1803;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchClause(): CatchClauseContext {
		let _localctx: CatchClauseContext = new CatchClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 334, Java8Parser.RULE_catchClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1804;
			this.match(Java8Parser.CATCH);
			this.state = 1805;
			this.match(Java8Parser.LPAREN);
			this.state = 1806;
			this.catchFormalParameter();
			this.state = 1807;
			this.match(Java8Parser.RPAREN);
			this.state = 1808;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchFormalParameter(): CatchFormalParameterContext {
		let _localctx: CatchFormalParameterContext = new CatchFormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 336, Java8Parser.RULE_catchFormalParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1813;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java8Parser.FINAL || _la === Java8Parser.AT) {
				{
				{
				this.state = 1810;
				this.variableModifier();
				}
				}
				this.state = 1815;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1816;
			this.catchType();
			this.state = 1817;
			this.variableDeclaratorId();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchType(): CatchTypeContext {
		let _localctx: CatchTypeContext = new CatchTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 338, Java8Parser.RULE_catchType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1819;
			this.unannClassType();
			this.state = 1824;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java8Parser.BITOR) {
				{
				{
				this.state = 1820;
				this.match(Java8Parser.BITOR);
				this.state = 1821;
				this.classType();
				}
				}
				this.state = 1826;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public finally_(): Finally_Context {
		let _localctx: Finally_Context = new Finally_Context(this._ctx, this.state);
		this.enterRule(_localctx, 340, Java8Parser.RULE_finally_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1827;
			this.match(Java8Parser.FINALLY);
			this.state = 1828;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tryWithResourcesStatement(): TryWithResourcesStatementContext {
		let _localctx: TryWithResourcesStatementContext = new TryWithResourcesStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 342, Java8Parser.RULE_tryWithResourcesStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1830;
			this.match(Java8Parser.TRY);
			this.state = 1831;
			this.resourceSpecification();
			this.state = 1832;
			this.block();
			this.state = 1834;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java8Parser.CATCH) {
				{
				this.state = 1833;
				this.catches();
				}
			}

			this.state = 1837;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java8Parser.FINALLY) {
				{
				this.state = 1836;
				this.finally_();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resourceSpecification(): ResourceSpecificationContext {
		let _localctx: ResourceSpecificationContext = new ResourceSpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 344, Java8Parser.RULE_resourceSpecification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1839;
			this.match(Java8Parser.LPAREN);
			this.state = 1840;
			this.resourceList();
			this.state = 1842;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java8Parser.SEMI) {
				{
				this.state = 1841;
				this.match(Java8Parser.SEMI);
				}
			}

			this.state = 1844;
			this.match(Java8Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resourceList(): ResourceListContext {
		let _localctx: ResourceListContext = new ResourceListContext(this._ctx, this.state);
		this.enterRule(_localctx, 346, Java8Parser.RULE_resourceList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1846;
			this.resource();
			this.state = 1851;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 192, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1847;
					this.match(Java8Parser.SEMI);
					this.state = 1848;
					this.resource();
					}
					}
				}
				this.state = 1853;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 192, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resource(): ResourceContext {
		let _localctx: ResourceContext = new ResourceContext(this._ctx, this.state);
		this.enterRule(_localctx, 348, Java8Parser.RULE_resource);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1857;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java8Parser.FINAL || _la === Java8Parser.AT) {
				{
				{
				this.state = 1854;
				this.variableModifier();
				}
				}
				this.state = 1859;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1860;
			this.unannType();
			this.state = 1861;
			this.variableDeclaratorId();
			this.state = 1862;
			this.match(Java8Parser.ASSIGN);
			this.state = 1863;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primary(): PrimaryContext {
		let _localctx: PrimaryContext = new PrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 350, Java8Parser.RULE_primary);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1867;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 194, this._ctx) ) {
			case 1:
				{
				this.state = 1865;
				this.primaryNoNewArray_lfno_primary();
				}
				break;

			case 2:
				{
				this.state = 1866;
				this.arrayCreationExpression();
				}
				break;
			}
			this.state = 1872;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 195, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1869;
					this.primaryNoNewArray_lf_primary();
					}
					}
				}
				this.state = 1874;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 195, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryNoNewArray(): PrimaryNoNewArrayContext {
		let _localctx: PrimaryNoNewArrayContext = new PrimaryNoNewArrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 352, Java8Parser.RULE_primaryNoNewArray);
		let _la: number;
		try {
			this.state = 1904;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 197, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1875;
				this.literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1876;
				this.typeName();
				this.state = 1881;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java8Parser.LBRACK) {
					{
					{
					this.state = 1877;
					this.match(Java8Parser.LBRACK);
					this.state = 1878;
					this.match(Java8Parser.RBRACK);
					}
					}
					this.state = 1883;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1884;
				this.match(Java8Parser.DOT);
				this.state = 1885;
				this.match(Java8Parser.CLASS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1887;
				this.match(Java8Parser.VOID);
				this.state = 1888;
				this.match(Java8Parser.DOT);
				this.state = 1889;
				this.match(Java8Parser.CLASS);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1890;
				this.match(Java8Parser.THIS);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1891;
				this.typeName();
				this.state = 1892;
				this.match(Java8Parser.DOT);
				this.state = 1893;
				this.match(Java8Parser.THIS);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1895;
				this.match(Java8Parser.LPAREN);
				this.state = 1896;
				this.expression();
				this.state = 1897;
				this.match(Java8Parser.RPAREN);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1899;
				this.classInstanceCreationExpression();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1900;
				this.fieldAccess();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1901;
				this.arrayAccess();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1902;
				this.methodInvocation();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1903;
				this.methodReference();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryNoNewArray_lf_arrayAccess(): PrimaryNoNewArray_lf_arrayAccessContext {
		let _localctx: PrimaryNoNewArray_lf_arrayAccessContext = new PrimaryNoNewArray_lf_arrayAccessContext(this._ctx, this.state);
		this.enterRule(_localctx, 354, Java8Parser.RULE_primaryNoNewArray_lf_arrayAccess);
		try {
			this.enterOuterAlt(_localctx, 1);
			// tslint:disable-next-line:no-empty
			{
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryNoNewArray_lfno_arrayAccess(): PrimaryNoNewArray_lfno_arrayAccessContext {
		let _localctx: PrimaryNoNewArray_lfno_arrayAccessContext = new PrimaryNoNewArray_lfno_arrayAccessContext(this._ctx, this.state);
		this.enterRule(_localctx, 356, Java8Parser.RULE_primaryNoNewArray_lfno_arrayAccess);
		let _la: number;
		try {
			this.state = 1936;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 199, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1908;
				this.literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1909;
				this.typeName();
				this.state = 1914;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java8Parser.LBRACK) {
					{
					{
					this.state = 1910;
					this.match(Java8Parser.LBRACK);
					this.state = 1911;
					this.match(Java8Parser.RBRACK);
					}
					}
					this.state = 1916;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1917;
				this.match(Java8Parser.DOT);
				this.state = 1918;
				this.match(Java8Parser.CLASS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1920;
				this.match(Java8Parser.VOID);
				this.state = 1921;
				this.match(Java8Parser.DOT);
				this.state = 1922;
				this.match(Java8Parser.CLASS);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1923;
				this.match(Java8Parser.THIS);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1924;
				this.typeName();
				this.state = 1925;
				this.match(Java8Parser.DOT);
				this.state = 1926;
				this.match(Java8Parser.THIS);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1928;
				this.match(Java8Parser.LPAREN);
				this.state = 1929;
				this.expression();
				this.state = 1930;
				this.match(Java8Parser.RPAREN);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1932;
				this.classInstanceCreationExpression();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1933;
				this.fieldAccess();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1934;
				this.methodInvocation();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1935;
				this.methodReference();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryNoNewArray_lf_primary(): PrimaryNoNewArray_lf_primaryContext {
		let _localctx: PrimaryNoNewArray_lf_primaryContext = new PrimaryNoNewArray_lf_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 358, Java8Parser.RULE_primaryNoNewArray_lf_primary);
		try {
			this.state = 1943;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 200, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1938;
				this.classInstanceCreationExpression_lf_primary();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1939;
				this.fieldAccess_lf_primary();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1940;
				this.arrayAccess_lf_primary();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1941;
				this.methodInvocation_lf_primary();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1942;
				this.methodReference_lf_primary();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary(): PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext {
		let _localctx: PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext = new PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 360, Java8Parser.RULE_primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary);
		try {
			this.enterOuterAlt(_localctx, 1);
			// tslint:disable-next-line:no-empty
			{
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary(): PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext {
		let _localctx: PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext = new PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 362, Java8Parser.RULE_primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary);
		try {
			this.state = 1951;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 201, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1947;
				this.classInstanceCreationExpression_lf_primary();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1948;
				this.fieldAccess_lf_primary();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1949;
				this.methodInvocation_lf_primary();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1950;
				this.methodReference_lf_primary();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryNoNewArray_lfno_primary(): PrimaryNoNewArray_lfno_primaryContext {
		let _localctx: PrimaryNoNewArray_lfno_primaryContext = new PrimaryNoNewArray_lfno_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 364, Java8Parser.RULE_primaryNoNewArray_lfno_primary);
		let _la: number;
		try {
			this.state = 1993;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 204, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1953;
				this.literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1954;
				this.typeName();
				this.state = 1959;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java8Parser.LBRACK) {
					{
					{
					this.state = 1955;
					this.match(Java8Parser.LBRACK);
					this.state = 1956;
					this.match(Java8Parser.RBRACK);
					}
					}
					this.state = 1961;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1962;
				this.match(Java8Parser.DOT);
				this.state = 1963;
				this.match(Java8Parser.CLASS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1965;
				this.unannPrimitiveType();
				this.state = 1970;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java8Parser.LBRACK) {
					{
					{
					this.state = 1966;
					this.match(Java8Parser.LBRACK);
					this.state = 1967;
					this.match(Java8Parser.RBRACK);
					}
					}
					this.state = 1972;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1973;
				this.match(Java8Parser.DOT);
				this.state = 1974;
				this.match(Java8Parser.CLASS);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1976;
				this.match(Java8Parser.VOID);
				this.state = 1977;
				this.match(Java8Parser.DOT);
				this.state = 1978;
				this.match(Java8Parser.CLASS);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1979;
				this.match(Java8Parser.THIS);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1980;
				this.typeName();
				this.state = 1981;
				this.match(Java8Parser.DOT);
				this.state = 1982;
				this.match(Java8Parser.THIS);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1984;
				this.match(Java8Parser.LPAREN);
				this.state = 1985;
				this.expression();
				this.state = 1986;
				this.match(Java8Parser.RPAREN);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1988;
				this.classInstanceCreationExpression_lfno_primary();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1989;
				this.fieldAccess_lfno_primary();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1990;
				this.arrayAccess_lfno_primary();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1991;
				this.methodInvocation_lfno_primary();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1992;
				this.methodReference_lfno_primary();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary(): PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext {
		let _localctx: PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext = new PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 366, Java8Parser.RULE_primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary);
		try {
			this.enterOuterAlt(_localctx, 1);
			// tslint:disable-next-line:no-empty
			{
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary(): PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext {
		let _localctx: PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext = new PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 368, Java8Parser.RULE_primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary);
		let _la: number;
		try {
			this.state = 2036;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 207, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1997;
				this.literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1998;
				this.typeName();
				this.state = 2003;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java8Parser.LBRACK) {
					{
					{
					this.state = 1999;
					this.match(Java8Parser.LBRACK);
					this.state = 2000;
					this.match(Java8Parser.RBRACK);
					}
					}
					this.state = 2005;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2006;
				this.match(Java8Parser.DOT);
				this.state = 2007;
				this.match(Java8Parser.CLASS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2009;
				this.unannPrimitiveType();
				this.state = 2014;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java8Parser.LBRACK) {
					{
					{
					this.state = 2010;
					this.match(Java8Parser.LBRACK);
					this.state = 2011;
					this.match(Java8Parser.RBRACK);
					}
					}
					this.state = 2016;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2017;
				this.match(Java8Parser.DOT);
				this.state = 2018;
				this.match(Java8Parser.CLASS);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2020;
				this.match(Java8Parser.VOID);
				this.state = 2021;
				this.match(Java8Parser.DOT);
				this.state = 2022;
				this.match(Java8Parser.CLASS);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2023;
				this.match(Java8Parser.THIS);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2024;
				this.typeName();
				this.state = 2025;
				this.match(Java8Parser.DOT);
				this.state = 2026;
				this.match(Java8Parser.THIS);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2028;
				this.match(Java8Parser.LPAREN);
				this.state = 2029;
				this.expression();
				this.state = 2030;
				this.match(Java8Parser.RPAREN);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2032;
				this.classInstanceCreationExpression_lfno_primary();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2033;
				this.fieldAccess_lfno_primary();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 2034;
				this.methodInvocation_lfno_primary();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 2035;
				this.methodReference_lfno_primary();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classInstanceCreationExpression(): ClassInstanceCreationExpressionContext {
		let _localctx: ClassInstanceCreationExpressionContext = new ClassInstanceCreationExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 370, Java8Parser.RULE_classInstanceCreationExpression);
		let _la: number;
		try {
			this.state = 2121;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 225, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2038;
				this.match(Java8Parser.NEW);
				this.state = 2040;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java8Parser.LT) {
					{
					this.state = 2039;
					this.typeArguments();
					}
				}

				this.state = 2045;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java8Parser.AT) {
					{
					{
					this.state = 2042;
					this.annotation();
					}
					}
					this.state = 2047;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2048;
				this.match(Java8Parser.Identifier);
				this.state = 2059;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java8Parser.DOT) {
					{
					{
					this.state = 2049;
					this.match(Java8Parser.DOT);
					this.state = 2053;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === Java8Parser.AT) {
						{
						{
						this.state = 2050;
						this.annotation();
						}
						}
						this.state = 2055;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2056;
					this.match(Java8Parser.Identifier);
					}
					}
					this.state = 2061;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2063;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java8Parser.LT) {
					{
					this.state = 2062;
					this.typeArgumentsOrDiamond();
					}
				}

				this.state = 2065;
				this.match(Java8Parser.LPAREN);
				this.state = 2067;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la === Java8Parser.Identifier || _la === Java8Parser.AT) {
					{
					this.state = 2066;
					this.argumentList();
					}
				}

				this.state = 2069;
				this.match(Java8Parser.RPAREN);
				this.state = 2071;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java8Parser.LBRACE) {
					{
					this.state = 2070;
					this.classBody();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2073;
				this.expressionName();
				this.state = 2074;
				this.match(Java8Parser.DOT);
				this.state = 2075;
				this.match(Java8Parser.NEW);
				this.state = 2077;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java8Parser.LT) {
					{
					this.state = 2076;
					this.typeArguments();
					}
				}

				this.state = 2082;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java8Parser.AT) {
					{
					{
					this.state = 2079;
					this.annotation();
					}
					}
					this.state = 2084;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2085;
				this.match(Java8Parser.Identifier);
				this.state = 2087;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java8Parser.LT) {
					{
					this.state = 2086;
					this.typeArgumentsOrDiamond();
					}
				}

				this.state = 2089;
				this.match(Java8Parser.LPAREN);
				this.state = 2091;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la === Java8Parser.Identifier || _la === Java8Parser.AT) {
					{
					this.state = 2090;
					this.argumentList();
					}
				}

				this.state = 2093;
				this.match(Java8Parser.RPAREN);
				this.state = 2095;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java8Parser.LBRACE) {
					{
					this.state = 2094;
					this.classBody();
					}
				}

				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2097;
				this.primary();
				this.state = 2098;
				this.match(Java8Parser.DOT);
				this.state = 2099;
				this.match(Java8Parser.NEW);
				this.state = 2101;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java8Parser.LT) {
					{
					this.state = 2100;
					this.typeArguments();
					}
				}

				this.state = 2106;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java8Parser.AT) {
					{
					{
					this.state = 2103;
					this.annotation();
					}
					}
					this.state = 2108;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2109;
				this.match(Java8Parser.Identifier);
				this.state = 2111;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java8Parser.LT) {
					{
					this.state = 2110;
					this.typeArgumentsOrDiamond();
					}
				}

				this.state = 2113;
				this.match(Java8Parser.LPAREN);
				this.state = 2115;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la === Java8Parser.Identifier || _la === Java8Parser.AT) {
					{
					this.state = 2114;
					this.argumentList();
					}
				}

				this.state = 2117;
				this.match(Java8Parser.RPAREN);
				this.state = 2119;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java8Parser.LBRACE) {
					{
					this.state = 2118;
					this.classBody();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classInstanceCreationExpression_lf_primary(): ClassInstanceCreationExpression_lf_primaryContext {
		let _localctx: ClassInstanceCreationExpression_lf_primaryContext = new ClassInstanceCreationExpression_lf_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 372, Java8Parser.RULE_classInstanceCreationExpression_lf_primary);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2123;
			this.match(Java8Parser.DOT);
			this.state = 2124;
			this.match(Java8Parser.NEW);
			this.state = 2126;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java8Parser.LT) {
				{
				this.state = 2125;
				this.typeArguments();
				}
			}

			this.state = 2131;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java8Parser.AT) {
				{
				{
				this.state = 2128;
				this.annotation();
				}
				}
				this.state = 2133;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2134;
			this.match(Java8Parser.Identifier);
			this.state = 2136;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java8Parser.LT) {
				{
				this.state = 2135;
				this.typeArgumentsOrDiamond();
				}
			}

			this.state = 2138;
			this.match(Java8Parser.LPAREN);
			this.state = 2140;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la === Java8Parser.Identifier || _la === Java8Parser.AT) {
				{
				this.state = 2139;
				this.argumentList();
				}
			}

			this.state = 2142;
			this.match(Java8Parser.RPAREN);
			this.state = 2144;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 230, this._ctx) ) {
			case 1:
				{
				this.state = 2143;
				this.classBody();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classInstanceCreationExpression_lfno_primary(): ClassInstanceCreationExpression_lfno_primaryContext {
		let _localctx: ClassInstanceCreationExpression_lfno_primaryContext = new ClassInstanceCreationExpression_lfno_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 374, Java8Parser.RULE_classInstanceCreationExpression_lfno_primary);
		let _la: number;
		try {
			this.state = 2205;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java8Parser.NEW:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2146;
				this.match(Java8Parser.NEW);
				this.state = 2148;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java8Parser.LT) {
					{
					this.state = 2147;
					this.typeArguments();
					}
				}

				this.state = 2153;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java8Parser.AT) {
					{
					{
					this.state = 2150;
					this.annotation();
					}
					}
					this.state = 2155;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2156;
				this.match(Java8Parser.Identifier);
				this.state = 2167;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java8Parser.DOT) {
					{
					{
					this.state = 2157;
					this.match(Java8Parser.DOT);
					this.state = 2161;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === Java8Parser.AT) {
						{
						{
						this.state = 2158;
						this.annotation();
						}
						}
						this.state = 2163;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2164;
					this.match(Java8Parser.Identifier);
					}
					}
					this.state = 2169;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java8Parser.LT) {
					{
					this.state = 2170;
					this.typeArgumentsOrDiamond();
					}
				}

				this.state = 2173;
				this.match(Java8Parser.LPAREN);
				this.state = 2175;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la === Java8Parser.Identifier || _la === Java8Parser.AT) {
					{
					this.state = 2174;
					this.argumentList();
					}
				}

				this.state = 2177;
				this.match(Java8Parser.RPAREN);
				this.state = 2179;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 237, this._ctx) ) {
				case 1:
					{
					this.state = 2178;
					this.classBody();
					}
					break;
				}
				}
				break;
			case Java8Parser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2181;
				this.expressionName();
				this.state = 2182;
				this.match(Java8Parser.DOT);
				this.state = 2183;
				this.match(Java8Parser.NEW);
				this.state = 2185;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java8Parser.LT) {
					{
					this.state = 2184;
					this.typeArguments();
					}
				}

				this.state = 2190;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java8Parser.AT) {
					{
					{
					this.state = 2187;
					this.annotation();
					}
					}
					this.state = 2192;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2193;
				this.match(Java8Parser.Identifier);
				this.state = 2195;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java8Parser.LT) {
					{
					this.state = 2194;
					this.typeArgumentsOrDiamond();
					}
				}

				this.state = 2197;
				this.match(Java8Parser.LPAREN);
				this.state = 2199;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la === Java8Parser.Identifier || _la === Java8Parser.AT) {
					{
					this.state = 2198;
					this.argumentList();
					}
				}

				this.state = 2201;
				this.match(Java8Parser.RPAREN);
				this.state = 2203;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 242, this._ctx) ) {
				case 1:
					{
					this.state = 2202;
					this.classBody();
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext {
		let _localctx: TypeArgumentsOrDiamondContext = new TypeArgumentsOrDiamondContext(this._ctx, this.state);
		this.enterRule(_localctx, 376, Java8Parser.RULE_typeArgumentsOrDiamond);
		try {
			this.state = 2210;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 244, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2207;
				this.typeArguments();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2208;
				this.match(Java8Parser.LT);
				this.state = 2209;
				this.match(Java8Parser.GT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldAccess(): FieldAccessContext {
		let _localctx: FieldAccessContext = new FieldAccessContext(this._ctx, this.state);
		this.enterRule(_localctx, 378, Java8Parser.RULE_fieldAccess);
		try {
			this.state = 2225;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 245, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2212;
				this.primary();
				this.state = 2213;
				this.match(Java8Parser.DOT);
				this.state = 2214;
				this.match(Java8Parser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2216;
				this.match(Java8Parser.SUPER);
				this.state = 2217;
				this.match(Java8Parser.DOT);
				this.state = 2218;
				this.match(Java8Parser.Identifier);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2219;
				this.typeName();
				this.state = 2220;
				this.match(Java8Parser.DOT);
				this.state = 2221;
				this.match(Java8Parser.SUPER);
				this.state = 2222;
				this.match(Java8Parser.DOT);
				this.state = 2223;
				this.match(Java8Parser.Identifier);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldAccess_lf_primary(): FieldAccess_lf_primaryContext {
		let _localctx: FieldAccess_lf_primaryContext = new FieldAccess_lf_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 380, Java8Parser.RULE_fieldAccess_lf_primary);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2227;
			this.match(Java8Parser.DOT);
			this.state = 2228;
			this.match(Java8Parser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldAccess_lfno_primary(): FieldAccess_lfno_primaryContext {
		let _localctx: FieldAccess_lfno_primaryContext = new FieldAccess_lfno_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 382, Java8Parser.RULE_fieldAccess_lfno_primary);
		try {
			this.state = 2239;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java8Parser.SUPER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2230;
				this.match(Java8Parser.SUPER);
				this.state = 2231;
				this.match(Java8Parser.DOT);
				this.state = 2232;
				this.match(Java8Parser.Identifier);
				}
				break;
			case Java8Parser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2233;
				this.typeName();
				this.state = 2234;
				this.match(Java8Parser.DOT);
				this.state = 2235;
				this.match(Java8Parser.SUPER);
				this.state = 2236;
				this.match(Java8Parser.DOT);
				this.state = 2237;
				this.match(Java8Parser.Identifier);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayAccess(): ArrayAccessContext {
		let _localctx: ArrayAccessContext = new ArrayAccessContext(this._ctx, this.state);
		this.enterRule(_localctx, 384, Java8Parser.RULE_arrayAccess);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2251;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 247, this._ctx) ) {
			case 1:
				{
				this.state = 2241;
				this.expressionName();
				this.state = 2242;
				this.match(Java8Parser.LBRACK);
				this.state = 2243;
				this.expression();
				this.state = 2244;
				this.match(Java8Parser.RBRACK);
				}
				break;

			case 2:
				{
				this.state = 2246;
				this.primaryNoNewArray_lfno_arrayAccess();
				this.state = 2247;
				this.match(Java8Parser.LBRACK);
				this.state = 2248;
				this.expression();
				this.state = 2249;
				this.match(Java8Parser.RBRACK);
				}
				break;
			}
			this.state = 2260;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java8Parser.LBRACK) {
				{
				{
				this.state = 2253;
				this.primaryNoNewArray_lf_arrayAccess();
				this.state = 2254;
				this.match(Java8Parser.LBRACK);
				this.state = 2255;
				this.expression();
				this.state = 2256;
				this.match(Java8Parser.RBRACK);
				}
				}
				this.state = 2262;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayAccess_lf_primary(): ArrayAccess_lf_primaryContext {
		let _localctx: ArrayAccess_lf_primaryContext = new ArrayAccess_lf_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 386, Java8Parser.RULE_arrayAccess_lf_primary);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2263;
			this.primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary();
			this.state = 2264;
			this.match(Java8Parser.LBRACK);
			this.state = 2265;
			this.expression();
			this.state = 2266;
			this.match(Java8Parser.RBRACK);
			this.state = 2274;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 249, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2267;
					this.primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary();
					this.state = 2268;
					this.match(Java8Parser.LBRACK);
					this.state = 2269;
					this.expression();
					this.state = 2270;
					this.match(Java8Parser.RBRACK);
					}
					}
				}
				this.state = 2276;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 249, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayAccess_lfno_primary(): ArrayAccess_lfno_primaryContext {
		let _localctx: ArrayAccess_lfno_primaryContext = new ArrayAccess_lfno_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 388, Java8Parser.RULE_arrayAccess_lfno_primary);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2287;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 250, this._ctx) ) {
			case 1:
				{
				this.state = 2277;
				this.expressionName();
				this.state = 2278;
				this.match(Java8Parser.LBRACK);
				this.state = 2279;
				this.expression();
				this.state = 2280;
				this.match(Java8Parser.RBRACK);
				}
				break;

			case 2:
				{
				this.state = 2282;
				this.primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary();
				this.state = 2283;
				this.match(Java8Parser.LBRACK);
				this.state = 2284;
				this.expression();
				this.state = 2285;
				this.match(Java8Parser.RBRACK);
				}
				break;
			}
			this.state = 2296;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 251, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2289;
					this.primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary();
					this.state = 2290;
					this.match(Java8Parser.LBRACK);
					this.state = 2291;
					this.expression();
					this.state = 2292;
					this.match(Java8Parser.RBRACK);
					}
					}
				}
				this.state = 2298;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 251, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodInvocation(): MethodInvocationContext {
		let _localctx: MethodInvocationContext = new MethodInvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 390, Java8Parser.RULE_methodInvocation);
		let _la: number;
		try {
			this.state = 2367;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 263, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2299;
				this.methodName();
				this.state = 2300;
				this.match(Java8Parser.LPAREN);
				this.state = 2302;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la === Java8Parser.Identifier || _la === Java8Parser.AT) {
					{
					this.state = 2301;
					this.argumentList();
					}
				}

				this.state = 2304;
				this.match(Java8Parser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2306;
				this.typeName();
				this.state = 2307;
				this.match(Java8Parser.DOT);
				this.state = 2309;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java8Parser.LT) {
					{
					this.state = 2308;
					this.typeArguments();
					}
				}

				this.state = 2311;
				this.match(Java8Parser.Identifier);
				this.state = 2312;
				this.match(Java8Parser.LPAREN);
				this.state = 2314;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la === Java8Parser.Identifier || _la === Java8Parser.AT) {
					{
					this.state = 2313;
					this.argumentList();
					}
				}

				this.state = 2316;
				this.match(Java8Parser.RPAREN);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2318;
				this.expressionName();
				this.state = 2319;
				this.match(Java8Parser.DOT);
				this.state = 2321;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java8Parser.LT) {
					{
					this.state = 2320;
					this.typeArguments();
					}
				}

				this.state = 2323;
				this.match(Java8Parser.Identifier);
				this.state = 2324;
				this.match(Java8Parser.LPAREN);
				this.state = 2326;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la === Java8Parser.Identifier || _la === Java8Parser.AT) {
					{
					this.state = 2325;
					this.argumentList();
					}
				}

				this.state = 2328;
				this.match(Java8Parser.RPAREN);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2330;
				this.primary();
				this.state = 2331;
				this.match(Java8Parser.DOT);
				this.state = 2333;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java8Parser.LT) {
					{
					this.state = 2332;
					this.typeArguments();
					}
				}

				this.state = 2335;
				this.match(Java8Parser.Identifier);
				this.state = 2336;
				this.match(Java8Parser.LPAREN);
				this.state = 2338;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la === Java8Parser.Identifier || _la === Java8Parser.AT) {
					{
					this.state = 2337;
					this.argumentList();
					}
				}

				this.state = 2340;
				this.match(Java8Parser.RPAREN);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2342;
				this.match(Java8Parser.SUPER);
				this.state = 2343;
				this.match(Java8Parser.DOT);
				this.state = 2345;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java8Parser.LT) {
					{
					this.state = 2344;
					this.typeArguments();
					}
				}

				this.state = 2347;
				this.match(Java8Parser.Identifier);
				this.state = 2348;
				this.match(Java8Parser.LPAREN);
				this.state = 2350;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la === Java8Parser.Identifier || _la === Java8Parser.AT) {
					{
					this.state = 2349;
					this.argumentList();
					}
				}

				this.state = 2352;
				this.match(Java8Parser.RPAREN);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2353;
				this.typeName();
				this.state = 2354;
				this.match(Java8Parser.DOT);
				this.state = 2355;
				this.match(Java8Parser.SUPER);
				this.state = 2356;
				this.match(Java8Parser.DOT);
				this.state = 2358;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java8Parser.LT) {
					{
					this.state = 2357;
					this.typeArguments();
					}
				}

				this.state = 2360;
				this.match(Java8Parser.Identifier);
				this.state = 2361;
				this.match(Java8Parser.LPAREN);
				this.state = 2363;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la === Java8Parser.Identifier || _la === Java8Parser.AT) {
					{
					this.state = 2362;
					this.argumentList();
					}
				}

				this.state = 2365;
				this.match(Java8Parser.RPAREN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodInvocation_lf_primary(): MethodInvocation_lf_primaryContext {
		let _localctx: MethodInvocation_lf_primaryContext = new MethodInvocation_lf_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 392, Java8Parser.RULE_methodInvocation_lf_primary);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2369;
			this.match(Java8Parser.DOT);
			this.state = 2371;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java8Parser.LT) {
				{
				this.state = 2370;
				this.typeArguments();
				}
			}

			this.state = 2373;
			this.match(Java8Parser.Identifier);
			this.state = 2374;
			this.match(Java8Parser.LPAREN);
			this.state = 2376;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la === Java8Parser.Identifier || _la === Java8Parser.AT) {
				{
				this.state = 2375;
				this.argumentList();
				}
			}

			this.state = 2378;
			this.match(Java8Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodInvocation_lfno_primary(): MethodInvocation_lfno_primaryContext {
		let _localctx: MethodInvocation_lfno_primaryContext = new MethodInvocation_lfno_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 394, Java8Parser.RULE_methodInvocation_lfno_primary);
		let _la: number;
		try {
			this.state = 2436;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 275, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2380;
				this.methodName();
				this.state = 2381;
				this.match(Java8Parser.LPAREN);
				this.state = 2383;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la === Java8Parser.Identifier || _la === Java8Parser.AT) {
					{
					this.state = 2382;
					this.argumentList();
					}
				}

				this.state = 2385;
				this.match(Java8Parser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2387;
				this.typeName();
				this.state = 2388;
				this.match(Java8Parser.DOT);
				this.state = 2390;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java8Parser.LT) {
					{
					this.state = 2389;
					this.typeArguments();
					}
				}

				this.state = 2392;
				this.match(Java8Parser.Identifier);
				this.state = 2393;
				this.match(Java8Parser.LPAREN);
				this.state = 2395;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la === Java8Parser.Identifier || _la === Java8Parser.AT) {
					{
					this.state = 2394;
					this.argumentList();
					}
				}

				this.state = 2397;
				this.match(Java8Parser.RPAREN);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2399;
				this.expressionName();
				this.state = 2400;
				this.match(Java8Parser.DOT);
				this.state = 2402;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java8Parser.LT) {
					{
					this.state = 2401;
					this.typeArguments();
					}
				}

				this.state = 2404;
				this.match(Java8Parser.Identifier);
				this.state = 2405;
				this.match(Java8Parser.LPAREN);
				this.state = 2407;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la === Java8Parser.Identifier || _la === Java8Parser.AT) {
					{
					this.state = 2406;
					this.argumentList();
					}
				}

				this.state = 2409;
				this.match(Java8Parser.RPAREN);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2411;
				this.match(Java8Parser.SUPER);
				this.state = 2412;
				this.match(Java8Parser.DOT);
				this.state = 2414;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java8Parser.LT) {
					{
					this.state = 2413;
					this.typeArguments();
					}
				}

				this.state = 2416;
				this.match(Java8Parser.Identifier);
				this.state = 2417;
				this.match(Java8Parser.LPAREN);
				this.state = 2419;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la === Java8Parser.Identifier || _la === Java8Parser.AT) {
					{
					this.state = 2418;
					this.argumentList();
					}
				}

				this.state = 2421;
				this.match(Java8Parser.RPAREN);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2422;
				this.typeName();
				this.state = 2423;
				this.match(Java8Parser.DOT);
				this.state = 2424;
				this.match(Java8Parser.SUPER);
				this.state = 2425;
				this.match(Java8Parser.DOT);
				this.state = 2427;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java8Parser.LT) {
					{
					this.state = 2426;
					this.typeArguments();
					}
				}

				this.state = 2429;
				this.match(Java8Parser.Identifier);
				this.state = 2430;
				this.match(Java8Parser.LPAREN);
				this.state = 2432;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG) | (1 << Java8Parser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java8Parser.SHORT - 37)) | (1 << (Java8Parser.SUPER - 37)) | (1 << (Java8Parser.THIS - 37)) | (1 << (Java8Parser.VOID - 37)) | (1 << (Java8Parser.IntegerLiteral - 37)) | (1 << (Java8Parser.FloatingPointLiteral - 37)) | (1 << (Java8Parser.BooleanLiteral - 37)) | (1 << (Java8Parser.CharacterLiteral - 37)) | (1 << (Java8Parser.StringLiteral - 37)) | (1 << (Java8Parser.NullLiteral - 37)) | (1 << (Java8Parser.LPAREN - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Java8Parser.BANG - 69)) | (1 << (Java8Parser.TILDE - 69)) | (1 << (Java8Parser.INC - 69)) | (1 << (Java8Parser.DEC - 69)) | (1 << (Java8Parser.ADD - 69)) | (1 << (Java8Parser.SUB - 69)))) !== 0) || _la === Java8Parser.Identifier || _la === Java8Parser.AT) {
					{
					this.state = 2431;
					this.argumentList();
					}
				}

				this.state = 2434;
				this.match(Java8Parser.RPAREN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argumentList(): ArgumentListContext {
		let _localctx: ArgumentListContext = new ArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 396, Java8Parser.RULE_argumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2438;
			this.expression();
			this.state = 2443;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java8Parser.COMMA) {
				{
				{
				this.state = 2439;
				this.match(Java8Parser.COMMA);
				this.state = 2440;
				this.expression();
				}
				}
				this.state = 2445;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodReference(): MethodReferenceContext {
		let _localctx: MethodReferenceContext = new MethodReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 398, Java8Parser.RULE_methodReference);
		let _la: number;
		try {
			this.state = 2493;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 283, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2446;
				this.expressionName();
				this.state = 2447;
				this.match(Java8Parser.COLONCOLON);
				this.state = 2449;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java8Parser.LT) {
					{
					this.state = 2448;
					this.typeArguments();
					}
				}

				this.state = 2451;
				this.match(Java8Parser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2453;
				this.referenceType();
				this.state = 2454;
				this.match(Java8Parser.COLONCOLON);
				this.state = 2456;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java8Parser.LT) {
					{
					this.state = 2455;
					this.typeArguments();
					}
				}

				this.state = 2458;
				this.match(Java8Parser.Identifier);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2460;
				this.primary();
				this.state = 2461;
				this.match(Java8Parser.COLONCOLON);
				this.state = 2463;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java8Parser.LT) {
					{
					this.state = 2462;
					this.typeArguments();
					}
				}

				this.state = 2465;
				this.match(Java8Parser.Identifier);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2467;
				this.match(Java8Parser.SUPER);
				this.state = 2468;
				this.match(Java8Parser.COLONCOLON);
				this.state = 2470;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java8Parser.LT) {
					{
					this.state = 2469;
					this.typeArguments();
					}
				}

				this.state = 2472;
				this.match(Java8Parser.Identifier);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2473;
				this.typeName();
				this.state = 2474;
				this.match(Java8Parser.DOT);
				this.state = 2475;
				this.match(Java8Parser.SUPER);
				this.state = 2476;
				this.match(Java8Parser.COLONCOLON);
				this.state = 2478;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java8Parser.LT) {
					{
					this.state = 2477;
					this.typeArguments();
					}
				}

				this.state = 2480;
				this.match(Java8Parser.Identifier);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2482;
				this.classType();
				this.state = 2483;
				this.match(Java8Parser.COLONCOLON);
				this.state = 2485;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java8Parser.LT) {
					{
					this.state = 2484;
					this.typeArguments();
					}
				}

				this.state = 2487;
				this.match(Java8Parser.NEW);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2489;
				this.arrayType();
				this.state = 2490;
				this.match(Java8Parser.COLONCOLON);
				this.state = 2491;
				this.match(Java8Parser.NEW);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodReference_lf_primary(): MethodReference_lf_primaryContext {
		let _localctx: MethodReference_lf_primaryContext = new MethodReference_lf_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 400, Java8Parser.RULE_methodReference_lf_primary);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2495;
			this.match(Java8Parser.COLONCOLON);
			this.state = 2497;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java8Parser.LT) {
				{
				this.state = 2496;
				this.typeArguments();
				}
			}

			this.state = 2499;
			this.match(Java8Parser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodReference_lfno_primary(): MethodReference_lfno_primaryContext {
		let _localctx: MethodReference_lfno_primaryContext = new MethodReference_lfno_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 402, Java8Parser.RULE_methodReference_lfno_primary);
		let _la: number;
		try {
			this.state = 2541;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 290, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2501;
				this.expressionName();
				this.state = 2502;
				this.match(Java8Parser.COLONCOLON);
				this.state = 2504;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java8Parser.LT) {
					{
					this.state = 2503;
					this.typeArguments();
					}
				}

				this.state = 2506;
				this.match(Java8Parser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2508;
				this.referenceType();
				this.state = 2509;
				this.match(Java8Parser.COLONCOLON);
				this.state = 2511;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java8Parser.LT) {
					{
					this.state = 2510;
					this.typeArguments();
					}
				}

				this.state = 2513;
				this.match(Java8Parser.Identifier);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2515;
				this.match(Java8Parser.SUPER);
				this.state = 2516;
				this.match(Java8Parser.COLONCOLON);
				this.state = 2518;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java8Parser.LT) {
					{
					this.state = 2517;
					this.typeArguments();
					}
				}

				this.state = 2520;
				this.match(Java8Parser.Identifier);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2521;
				this.typeName();
				this.state = 2522;
				this.match(Java8Parser.DOT);
				this.state = 2523;
				this.match(Java8Parser.SUPER);
				this.state = 2524;
				this.match(Java8Parser.COLONCOLON);
				this.state = 2526;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java8Parser.LT) {
					{
					this.state = 2525;
					this.typeArguments();
					}
				}

				this.state = 2528;
				this.match(Java8Parser.Identifier);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2530;
				this.classType();
				this.state = 2531;
				this.match(Java8Parser.COLONCOLON);
				this.state = 2533;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java8Parser.LT) {
					{
					this.state = 2532;
					this.typeArguments();
					}
				}

				this.state = 2535;
				this.match(Java8Parser.NEW);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2537;
				this.arrayType();
				this.state = 2538;
				this.match(Java8Parser.COLONCOLON);
				this.state = 2539;
				this.match(Java8Parser.NEW);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayCreationExpression(): ArrayCreationExpressionContext {
		let _localctx: ArrayCreationExpressionContext = new ArrayCreationExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 404, Java8Parser.RULE_arrayCreationExpression);
		try {
			this.state = 2565;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 293, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2543;
				this.match(Java8Parser.NEW);
				this.state = 2544;
				this.primitiveType();
				this.state = 2545;
				this.dimExprs();
				this.state = 2547;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 291, this._ctx) ) {
				case 1:
					{
					this.state = 2546;
					this.dims();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2549;
				this.match(Java8Parser.NEW);
				this.state = 2550;
				this.classOrInterfaceType();
				this.state = 2551;
				this.dimExprs();
				this.state = 2553;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 292, this._ctx) ) {
				case 1:
					{
					this.state = 2552;
					this.dims();
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2555;
				this.match(Java8Parser.NEW);
				this.state = 2556;
				this.primitiveType();
				this.state = 2557;
				this.dims();
				this.state = 2558;
				this.arrayInitializer();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2560;
				this.match(Java8Parser.NEW);
				this.state = 2561;
				this.classOrInterfaceType();
				this.state = 2562;
				this.dims();
				this.state = 2563;
				this.arrayInitializer();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dimExprs(): DimExprsContext {
		let _localctx: DimExprsContext = new DimExprsContext(this._ctx, this.state);
		this.enterRule(_localctx, 406, Java8Parser.RULE_dimExprs);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2567;
			this.dimExpr();
			this.state = 2571;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 294, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2568;
					this.dimExpr();
					}
					}
				}
				this.state = 2573;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 294, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dimExpr(): DimExprContext {
		let _localctx: DimExprContext = new DimExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 408, Java8Parser.RULE_dimExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2577;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java8Parser.AT) {
				{
				{
				this.state = 2574;
				this.annotation();
				}
				}
				this.state = 2579;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2580;
			this.match(Java8Parser.LBRACK);
			this.state = 2581;
			this.expression();
			this.state = 2582;
			this.match(Java8Parser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constantExpression(): ConstantExpressionContext {
		let _localctx: ConstantExpressionContext = new ConstantExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 410, Java8Parser.RULE_constantExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2584;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 412, Java8Parser.RULE_expression);
		try {
			this.state = 2588;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 296, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2586;
				this.lambdaExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2587;
				this.assignmentExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaExpression(): LambdaExpressionContext {
		let _localctx: LambdaExpressionContext = new LambdaExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 414, Java8Parser.RULE_lambdaExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2590;
			this.lambdaParameters();
			this.state = 2591;
			this.match(Java8Parser.ARROW);
			this.state = 2592;
			this.lambdaBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaParameters(): LambdaParametersContext {
		let _localctx: LambdaParametersContext = new LambdaParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 416, Java8Parser.RULE_lambdaParameters);
		let _la: number;
		try {
			this.state = 2604;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 298, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2594;
				this.match(Java8Parser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2595;
				this.match(Java8Parser.LPAREN);
				this.state = 2597;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java8Parser.BOOLEAN) | (1 << Java8Parser.BYTE) | (1 << Java8Parser.CHAR) | (1 << Java8Parser.DOUBLE) | (1 << Java8Parser.FINAL) | (1 << Java8Parser.FLOAT) | (1 << Java8Parser.INT) | (1 << Java8Parser.LONG))) !== 0) || _la === Java8Parser.SHORT || _la === Java8Parser.Identifier || _la === Java8Parser.AT) {
					{
					this.state = 2596;
					this.formalParameterList();
					}
				}

				this.state = 2599;
				this.match(Java8Parser.RPAREN);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2600;
				this.match(Java8Parser.LPAREN);
				this.state = 2601;
				this.inferredFormalParameterList();
				this.state = 2602;
				this.match(Java8Parser.RPAREN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inferredFormalParameterList(): InferredFormalParameterListContext {
		let _localctx: InferredFormalParameterListContext = new InferredFormalParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 418, Java8Parser.RULE_inferredFormalParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2606;
			this.match(Java8Parser.Identifier);
			this.state = 2611;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java8Parser.COMMA) {
				{
				{
				this.state = 2607;
				this.match(Java8Parser.COMMA);
				this.state = 2608;
				this.match(Java8Parser.Identifier);
				}
				}
				this.state = 2613;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaBody(): LambdaBodyContext {
		let _localctx: LambdaBodyContext = new LambdaBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 420, Java8Parser.RULE_lambdaBody);
		try {
			this.state = 2616;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java8Parser.BOOLEAN:
			case Java8Parser.BYTE:
			case Java8Parser.CHAR:
			case Java8Parser.DOUBLE:
			case Java8Parser.FLOAT:
			case Java8Parser.INT:
			case Java8Parser.LONG:
			case Java8Parser.NEW:
			case Java8Parser.SHORT:
			case Java8Parser.SUPER:
			case Java8Parser.THIS:
			case Java8Parser.VOID:
			case Java8Parser.IntegerLiteral:
			case Java8Parser.FloatingPointLiteral:
			case Java8Parser.BooleanLiteral:
			case Java8Parser.CharacterLiteral:
			case Java8Parser.StringLiteral:
			case Java8Parser.NullLiteral:
			case Java8Parser.LPAREN:
			case Java8Parser.BANG:
			case Java8Parser.TILDE:
			case Java8Parser.INC:
			case Java8Parser.DEC:
			case Java8Parser.ADD:
			case Java8Parser.SUB:
			case Java8Parser.Identifier:
			case Java8Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2614;
				this.expression();
				}
				break;
			case Java8Parser.LBRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2615;
				this.block();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentExpression(): AssignmentExpressionContext {
		let _localctx: AssignmentExpressionContext = new AssignmentExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 422, Java8Parser.RULE_assignmentExpression);
		try {
			this.state = 2620;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 301, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2618;
				this.conditionalExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2619;
				this.assignment();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 424, Java8Parser.RULE_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2622;
			this.leftHandSide();
			this.state = 2623;
			this.assignmentOperator();
			this.state = 2624;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public leftHandSide(): LeftHandSideContext {
		let _localctx: LeftHandSideContext = new LeftHandSideContext(this._ctx, this.state);
		this.enterRule(_localctx, 426, Java8Parser.RULE_leftHandSide);
		try {
			this.state = 2629;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 302, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2626;
				this.expressionName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2627;
				this.fieldAccess();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2628;
				this.arrayAccess();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentOperator(): AssignmentOperatorContext {
		let _localctx: AssignmentOperatorContext = new AssignmentOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 428, Java8Parser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2631;
			_la = this._input.LA(1);
			if (!(((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (Java8Parser.ASSIGN - 66)) | (1 << (Java8Parser.ADD_ASSIGN - 66)) | (1 << (Java8Parser.SUB_ASSIGN - 66)) | (1 << (Java8Parser.MUL_ASSIGN - 66)) | (1 << (Java8Parser.DIV_ASSIGN - 66)) | (1 << (Java8Parser.AND_ASSIGN - 66)) | (1 << (Java8Parser.OR_ASSIGN - 66)) | (1 << (Java8Parser.XOR_ASSIGN - 66)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (Java8Parser.MOD_ASSIGN - 98)) | (1 << (Java8Parser.LSHIFT_ASSIGN - 98)) | (1 << (Java8Parser.RSHIFT_ASSIGN - 98)) | (1 << (Java8Parser.URSHIFT_ASSIGN - 98)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionalExpression(): ConditionalExpressionContext {
		let _localctx: ConditionalExpressionContext = new ConditionalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 430, Java8Parser.RULE_conditionalExpression);
		try {
			this.state = 2640;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 303, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2633;
				this.conditionalOrExpression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2634;
				this.conditionalOrExpression(0);
				this.state = 2635;
				this.match(Java8Parser.QUESTION);
				this.state = 2636;
				this.expression();
				this.state = 2637;
				this.match(Java8Parser.COLON);
				this.state = 2638;
				this.conditionalExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public conditionalOrExpression(): ConditionalOrExpressionContext;
	public conditionalOrExpression(_p: number): ConditionalOrExpressionContext;
	// @RuleVersion(0)
	public conditionalOrExpression(_p?: number): ConditionalOrExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ConditionalOrExpressionContext = new ConditionalOrExpressionContext(this._ctx, _parentState);
		let _prevctx: ConditionalOrExpressionContext = _localctx;
		let _startState: number = 432;
		this.enterRecursionRule(_localctx, 432, Java8Parser.RULE_conditionalOrExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2643;
			this.conditionalAndExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2650;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 304, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ConditionalOrExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, Java8Parser.RULE_conditionalOrExpression);
					this.state = 2645;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2646;
					this.match(Java8Parser.OR);
					this.state = 2647;
					this.conditionalAndExpression(0);
					}
					}
				}
				this.state = 2652;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 304, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public conditionalAndExpression(): ConditionalAndExpressionContext;
	public conditionalAndExpression(_p: number): ConditionalAndExpressionContext;
	// @RuleVersion(0)
	public conditionalAndExpression(_p?: number): ConditionalAndExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ConditionalAndExpressionContext = new ConditionalAndExpressionContext(this._ctx, _parentState);
		let _prevctx: ConditionalAndExpressionContext = _localctx;
		let _startState: number = 434;
		this.enterRecursionRule(_localctx, 434, Java8Parser.RULE_conditionalAndExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2654;
			this.inclusiveOrExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2661;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 305, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ConditionalAndExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, Java8Parser.RULE_conditionalAndExpression);
					this.state = 2656;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2657;
					this.match(Java8Parser.AND);
					this.state = 2658;
					this.inclusiveOrExpression(0);
					}
					}
				}
				this.state = 2663;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 305, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public inclusiveOrExpression(): InclusiveOrExpressionContext;
	public inclusiveOrExpression(_p: number): InclusiveOrExpressionContext;
	// @RuleVersion(0)
	public inclusiveOrExpression(_p?: number): InclusiveOrExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: InclusiveOrExpressionContext = new InclusiveOrExpressionContext(this._ctx, _parentState);
		let _prevctx: InclusiveOrExpressionContext = _localctx;
		let _startState: number = 436;
		this.enterRecursionRule(_localctx, 436, Java8Parser.RULE_inclusiveOrExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2665;
			this.exclusiveOrExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2672;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 306, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new InclusiveOrExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, Java8Parser.RULE_inclusiveOrExpression);
					this.state = 2667;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2668;
					this.match(Java8Parser.BITOR);
					this.state = 2669;
					this.exclusiveOrExpression(0);
					}
					}
				}
				this.state = 2674;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 306, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public exclusiveOrExpression(): ExclusiveOrExpressionContext;
	public exclusiveOrExpression(_p: number): ExclusiveOrExpressionContext;
	// @RuleVersion(0)
	public exclusiveOrExpression(_p?: number): ExclusiveOrExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExclusiveOrExpressionContext = new ExclusiveOrExpressionContext(this._ctx, _parentState);
		let _prevctx: ExclusiveOrExpressionContext = _localctx;
		let _startState: number = 438;
		this.enterRecursionRule(_localctx, 438, Java8Parser.RULE_exclusiveOrExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2676;
			this.andExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2683;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 307, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ExclusiveOrExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, Java8Parser.RULE_exclusiveOrExpression);
					this.state = 2678;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2679;
					this.match(Java8Parser.CARET);
					this.state = 2680;
					this.andExpression(0);
					}
					}
				}
				this.state = 2685;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 307, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public andExpression(): AndExpressionContext;
	public andExpression(_p: number): AndExpressionContext;
	// @RuleVersion(0)
	public andExpression(_p?: number): AndExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: AndExpressionContext = new AndExpressionContext(this._ctx, _parentState);
		let _prevctx: AndExpressionContext = _localctx;
		let _startState: number = 440;
		this.enterRecursionRule(_localctx, 440, Java8Parser.RULE_andExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2687;
			this.equalityExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2694;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 308, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new AndExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, Java8Parser.RULE_andExpression);
					this.state = 2689;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2690;
					this.match(Java8Parser.BITAND);
					this.state = 2691;
					this.equalityExpression(0);
					}
					}
				}
				this.state = 2696;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 308, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public equalityExpression(): EqualityExpressionContext;
	public equalityExpression(_p: number): EqualityExpressionContext;
	// @RuleVersion(0)
	public equalityExpression(_p?: number): EqualityExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: EqualityExpressionContext = new EqualityExpressionContext(this._ctx, _parentState);
		let _prevctx: EqualityExpressionContext = _localctx;
		let _startState: number = 442;
		this.enterRecursionRule(_localctx, 442, Java8Parser.RULE_equalityExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2698;
			this.relationalExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2708;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 310, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 2706;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 309, this._ctx) ) {
					case 1:
						{
						_localctx = new EqualityExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java8Parser.RULE_equalityExpression);
						this.state = 2700;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 2701;
						this.match(Java8Parser.EQUAL);
						this.state = 2702;
						this.relationalExpression(0);
						}
						break;

					case 2:
						{
						_localctx = new EqualityExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java8Parser.RULE_equalityExpression);
						this.state = 2703;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 2704;
						this.match(Java8Parser.NOTEQUAL);
						this.state = 2705;
						this.relationalExpression(0);
						}
						break;
					}
					}
				}
				this.state = 2710;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 310, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public relationalExpression(): RelationalExpressionContext;
	public relationalExpression(_p: number): RelationalExpressionContext;
	// @RuleVersion(0)
	public relationalExpression(_p?: number): RelationalExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: RelationalExpressionContext = new RelationalExpressionContext(this._ctx, _parentState);
		let _prevctx: RelationalExpressionContext = _localctx;
		let _startState: number = 444;
		this.enterRecursionRule(_localctx, 444, Java8Parser.RULE_relationalExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2712;
			this.shiftExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2731;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 312, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 2729;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 311, this._ctx) ) {
					case 1:
						{
						_localctx = new RelationalExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java8Parser.RULE_relationalExpression);
						this.state = 2714;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 2715;
						this.match(Java8Parser.LT);
						this.state = 2716;
						this.shiftExpression(0);
						}
						break;

					case 2:
						{
						_localctx = new RelationalExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java8Parser.RULE_relationalExpression);
						this.state = 2717;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 2718;
						this.match(Java8Parser.GT);
						this.state = 2719;
						this.shiftExpression(0);
						}
						break;

					case 3:
						{
						_localctx = new RelationalExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java8Parser.RULE_relationalExpression);
						this.state = 2720;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 2721;
						this.match(Java8Parser.LE);
						this.state = 2722;
						this.shiftExpression(0);
						}
						break;

					case 4:
						{
						_localctx = new RelationalExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java8Parser.RULE_relationalExpression);
						this.state = 2723;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 2724;
						this.match(Java8Parser.GE);
						this.state = 2725;
						this.shiftExpression(0);
						}
						break;

					case 5:
						{
						_localctx = new RelationalExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java8Parser.RULE_relationalExpression);
						this.state = 2726;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 2727;
						this.match(Java8Parser.INSTANCEOF);
						this.state = 2728;
						this.referenceType();
						}
						break;
					}
					}
				}
				this.state = 2733;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 312, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public shiftExpression(): ShiftExpressionContext;
	public shiftExpression(_p: number): ShiftExpressionContext;
	// @RuleVersion(0)
	public shiftExpression(_p?: number): ShiftExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ShiftExpressionContext = new ShiftExpressionContext(this._ctx, _parentState);
		let _prevctx: ShiftExpressionContext = _localctx;
		let _startState: number = 446;
		this.enterRecursionRule(_localctx, 446, Java8Parser.RULE_shiftExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2735;
			this.additiveExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2752;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 314, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 2750;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 313, this._ctx) ) {
					case 1:
						{
						_localctx = new ShiftExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java8Parser.RULE_shiftExpression);
						this.state = 2737;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 2738;
						this.match(Java8Parser.LT);
						this.state = 2739;
						this.match(Java8Parser.LT);
						this.state = 2740;
						this.additiveExpression(0);
						}
						break;

					case 2:
						{
						_localctx = new ShiftExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java8Parser.RULE_shiftExpression);
						this.state = 2741;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 2742;
						this.match(Java8Parser.GT);
						this.state = 2743;
						this.match(Java8Parser.GT);
						this.state = 2744;
						this.additiveExpression(0);
						}
						break;

					case 3:
						{
						_localctx = new ShiftExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java8Parser.RULE_shiftExpression);
						this.state = 2745;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 2746;
						this.match(Java8Parser.GT);
						this.state = 2747;
						this.match(Java8Parser.GT);
						this.state = 2748;
						this.match(Java8Parser.GT);
						this.state = 2749;
						this.additiveExpression(0);
						}
						break;
					}
					}
				}
				this.state = 2754;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 314, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public additiveExpression(): AdditiveExpressionContext;
	public additiveExpression(_p: number): AdditiveExpressionContext;
	// @RuleVersion(0)
	public additiveExpression(_p?: number): AdditiveExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: AdditiveExpressionContext = new AdditiveExpressionContext(this._ctx, _parentState);
		let _prevctx: AdditiveExpressionContext = _localctx;
		let _startState: number = 448;
		this.enterRecursionRule(_localctx, 448, Java8Parser.RULE_additiveExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2756;
			this.multiplicativeExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2766;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 316, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 2764;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 315, this._ctx) ) {
					case 1:
						{
						_localctx = new AdditiveExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java8Parser.RULE_additiveExpression);
						this.state = 2758;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 2759;
						this.match(Java8Parser.ADD);
						this.state = 2760;
						this.multiplicativeExpression(0);
						}
						break;

					case 2:
						{
						_localctx = new AdditiveExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java8Parser.RULE_additiveExpression);
						this.state = 2761;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 2762;
						this.match(Java8Parser.SUB);
						this.state = 2763;
						this.multiplicativeExpression(0);
						}
						break;
					}
					}
				}
				this.state = 2768;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 316, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public multiplicativeExpression(): MultiplicativeExpressionContext;
	public multiplicativeExpression(_p: number): MultiplicativeExpressionContext;
	// @RuleVersion(0)
	public multiplicativeExpression(_p?: number): MultiplicativeExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: MultiplicativeExpressionContext = new MultiplicativeExpressionContext(this._ctx, _parentState);
		let _prevctx: MultiplicativeExpressionContext = _localctx;
		let _startState: number = 450;
		this.enterRecursionRule(_localctx, 450, Java8Parser.RULE_multiplicativeExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2770;
			this.unaryExpression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2783;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 318, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 2781;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 317, this._ctx) ) {
					case 1:
						{
						_localctx = new MultiplicativeExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java8Parser.RULE_multiplicativeExpression);
						this.state = 2772;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 2773;
						this.match(Java8Parser.MUL);
						this.state = 2774;
						this.unaryExpression();
						}
						break;

					case 2:
						{
						_localctx = new MultiplicativeExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java8Parser.RULE_multiplicativeExpression);
						this.state = 2775;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 2776;
						this.match(Java8Parser.DIV);
						this.state = 2777;
						this.unaryExpression();
						}
						break;

					case 3:
						{
						_localctx = new MultiplicativeExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java8Parser.RULE_multiplicativeExpression);
						this.state = 2778;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 2779;
						this.match(Java8Parser.MOD);
						this.state = 2780;
						this.unaryExpression();
						}
						break;
					}
					}
				}
				this.state = 2785;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 318, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryExpression(): UnaryExpressionContext {
		let _localctx: UnaryExpressionContext = new UnaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 452, Java8Parser.RULE_unaryExpression);
		try {
			this.state = 2793;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java8Parser.INC:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2786;
				this.preIncrementExpression();
				}
				break;
			case Java8Parser.DEC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2787;
				this.preDecrementExpression();
				}
				break;
			case Java8Parser.ADD:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2788;
				this.match(Java8Parser.ADD);
				this.state = 2789;
				this.unaryExpression();
				}
				break;
			case Java8Parser.SUB:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2790;
				this.match(Java8Parser.SUB);
				this.state = 2791;
				this.unaryExpression();
				}
				break;
			case Java8Parser.BOOLEAN:
			case Java8Parser.BYTE:
			case Java8Parser.CHAR:
			case Java8Parser.DOUBLE:
			case Java8Parser.FLOAT:
			case Java8Parser.INT:
			case Java8Parser.LONG:
			case Java8Parser.NEW:
			case Java8Parser.SHORT:
			case Java8Parser.SUPER:
			case Java8Parser.THIS:
			case Java8Parser.VOID:
			case Java8Parser.IntegerLiteral:
			case Java8Parser.FloatingPointLiteral:
			case Java8Parser.BooleanLiteral:
			case Java8Parser.CharacterLiteral:
			case Java8Parser.StringLiteral:
			case Java8Parser.NullLiteral:
			case Java8Parser.LPAREN:
			case Java8Parser.BANG:
			case Java8Parser.TILDE:
			case Java8Parser.Identifier:
			case Java8Parser.AT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2792;
				this.unaryExpressionNotPlusMinus();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public preIncrementExpression(): PreIncrementExpressionContext {
		let _localctx: PreIncrementExpressionContext = new PreIncrementExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 454, Java8Parser.RULE_preIncrementExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2795;
			this.match(Java8Parser.INC);
			this.state = 2796;
			this.unaryExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public preDecrementExpression(): PreDecrementExpressionContext {
		let _localctx: PreDecrementExpressionContext = new PreDecrementExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 456, Java8Parser.RULE_preDecrementExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2798;
			this.match(Java8Parser.DEC);
			this.state = 2799;
			this.unaryExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryExpressionNotPlusMinus(): UnaryExpressionNotPlusMinusContext {
		let _localctx: UnaryExpressionNotPlusMinusContext = new UnaryExpressionNotPlusMinusContext(this._ctx, this.state);
		this.enterRule(_localctx, 458, Java8Parser.RULE_unaryExpressionNotPlusMinus);
		try {
			this.state = 2807;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 320, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2801;
				this.postfixExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2802;
				this.match(Java8Parser.TILDE);
				this.state = 2803;
				this.unaryExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2804;
				this.match(Java8Parser.BANG);
				this.state = 2805;
				this.unaryExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2806;
				this.castExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public postfixExpression(): PostfixExpressionContext {
		let _localctx: PostfixExpressionContext = new PostfixExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 460, Java8Parser.RULE_postfixExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2811;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 321, this._ctx) ) {
			case 1:
				{
				this.state = 2809;
				this.primary();
				}
				break;

			case 2:
				{
				this.state = 2810;
				this.expressionName();
				}
				break;
			}
			this.state = 2817;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 323, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 2815;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case Java8Parser.INC:
						{
						this.state = 2813;
						this.postIncrementExpression_lf_postfixExpression();
						}
						break;
					case Java8Parser.DEC:
						{
						this.state = 2814;
						this.postDecrementExpression_lf_postfixExpression();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 2819;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 323, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public postIncrementExpression(): PostIncrementExpressionContext {
		let _localctx: PostIncrementExpressionContext = new PostIncrementExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 462, Java8Parser.RULE_postIncrementExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2820;
			this.postfixExpression();
			this.state = 2821;
			this.match(Java8Parser.INC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public postIncrementExpression_lf_postfixExpression(): PostIncrementExpression_lf_postfixExpressionContext {
		let _localctx: PostIncrementExpression_lf_postfixExpressionContext = new PostIncrementExpression_lf_postfixExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 464, Java8Parser.RULE_postIncrementExpression_lf_postfixExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2823;
			this.match(Java8Parser.INC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public postDecrementExpression(): PostDecrementExpressionContext {
		let _localctx: PostDecrementExpressionContext = new PostDecrementExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 466, Java8Parser.RULE_postDecrementExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2825;
			this.postfixExpression();
			this.state = 2826;
			this.match(Java8Parser.DEC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public postDecrementExpression_lf_postfixExpression(): PostDecrementExpression_lf_postfixExpressionContext {
		let _localctx: PostDecrementExpression_lf_postfixExpressionContext = new PostDecrementExpression_lf_postfixExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 468, Java8Parser.RULE_postDecrementExpression_lf_postfixExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2828;
			this.match(Java8Parser.DEC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public castExpression(): CastExpressionContext {
		let _localctx: CastExpressionContext = new CastExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 470, Java8Parser.RULE_castExpression);
		let _la: number;
		try {
			this.state = 2857;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 326, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2830;
				this.match(Java8Parser.LPAREN);
				this.state = 2831;
				this.primitiveType();
				this.state = 2832;
				this.match(Java8Parser.RPAREN);
				this.state = 2833;
				this.unaryExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2835;
				this.match(Java8Parser.LPAREN);
				this.state = 2836;
				this.referenceType();
				this.state = 2840;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java8Parser.BITAND) {
					{
					{
					this.state = 2837;
					this.additionalBound();
					}
					}
					this.state = 2842;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2843;
				this.match(Java8Parser.RPAREN);
				this.state = 2844;
				this.unaryExpressionNotPlusMinus();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2846;
				this.match(Java8Parser.LPAREN);
				this.state = 2847;
				this.referenceType();
				this.state = 2851;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java8Parser.BITAND) {
					{
					{
					this.state = 2848;
					this.additionalBound();
					}
					}
					this.state = 2853;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2854;
				this.match(Java8Parser.RPAREN);
				this.state = 2855;
				this.lambdaExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comments(): CommentsContext {
		let _localctx: CommentsContext = new CommentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 472, Java8Parser.RULE_comments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2862;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java8Parser.COMMENT || _la === Java8Parser.LINE_COMMENT) {
				{
				{
				this.state = 2859;
				_la = this._input.LA(1);
				if (!(_la === Java8Parser.COMMENT || _la === Java8Parser.LINE_COMMENT)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				}
				this.state = 2864;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 25:
			return this.packageName_sempred(_localctx as PackageNameContext, predIndex);

		case 27:
			return this.packageOrTypeName_sempred(_localctx as PackageOrTypeNameContext, predIndex);

		case 30:
			return this.ambiguousName_sempred(_localctx as AmbiguousNameContext, predIndex);

		case 216:
			return this.conditionalOrExpression_sempred(_localctx as ConditionalOrExpressionContext, predIndex);

		case 217:
			return this.conditionalAndExpression_sempred(_localctx as ConditionalAndExpressionContext, predIndex);

		case 218:
			return this.inclusiveOrExpression_sempred(_localctx as InclusiveOrExpressionContext, predIndex);

		case 219:
			return this.exclusiveOrExpression_sempred(_localctx as ExclusiveOrExpressionContext, predIndex);

		case 220:
			return this.andExpression_sempred(_localctx as AndExpressionContext, predIndex);

		case 221:
			return this.equalityExpression_sempred(_localctx as EqualityExpressionContext, predIndex);

		case 222:
			return this.relationalExpression_sempred(_localctx as RelationalExpressionContext, predIndex);

		case 223:
			return this.shiftExpression_sempred(_localctx as ShiftExpressionContext, predIndex);

		case 224:
			return this.additiveExpression_sempred(_localctx as AdditiveExpressionContext, predIndex);

		case 225:
			return this.multiplicativeExpression_sempred(_localctx as MultiplicativeExpressionContext, predIndex);
		}
		return true;
	}
	private packageName_sempred(_localctx: PackageNameContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private packageOrTypeName_sempred(_localctx: PackageOrTypeNameContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private ambiguousName_sempred(_localctx: AmbiguousNameContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private conditionalOrExpression_sempred(_localctx: ConditionalOrExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private conditionalAndExpression_sempred(_localctx: ConditionalAndExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private inclusiveOrExpression_sempred(_localctx: InclusiveOrExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private exclusiveOrExpression_sempred(_localctx: ExclusiveOrExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private andExpression_sempred(_localctx: AndExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 7:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private equalityExpression_sempred(_localctx: EqualityExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return this.precpred(this._ctx, 2);

		case 9:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private relationalExpression_sempred(_localctx: RelationalExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 10:
			return this.precpred(this._ctx, 5);

		case 11:
			return this.precpred(this._ctx, 4);

		case 12:
			return this.precpred(this._ctx, 3);

		case 13:
			return this.precpred(this._ctx, 2);

		case 14:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private shiftExpression_sempred(_localctx: ShiftExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 15:
			return this.precpred(this._ctx, 3);

		case 16:
			return this.precpred(this._ctx, 2);

		case 17:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private additiveExpression_sempred(_localctx: AdditiveExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 18:
			return this.precpred(this._ctx, 2);

		case 19:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private multiplicativeExpression_sempred(_localctx: MultiplicativeExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 20:
			return this.precpred(this._ctx, 3);

		case 21:
			return this.precpred(this._ctx, 2);

		case 22:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 6;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03m\u0B34\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
		"{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
		"\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86" +
		"\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B" +
		"\x04\x8C\t\x8C\x04\x8D\t\x8D\x04\x8E\t\x8E\x04\x8F\t\x8F\x04\x90\t\x90" +
		"\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x04\x95\t\x95" +
		"\x04\x96\t\x96\x04\x97\t\x97\x04\x98\t\x98\x04\x99\t\x99\x04\x9A\t\x9A" +
		"\x04\x9B\t\x9B\x04\x9C\t\x9C\x04\x9D\t\x9D\x04\x9E\t\x9E\x04\x9F\t\x9F" +
		"\x04\xA0\t\xA0\x04\xA1\t\xA1\x04\xA2\t\xA2\x04\xA3\t\xA3\x04\xA4\t\xA4" +
		"\x04\xA5\t\xA5\x04\xA6\t\xA6\x04\xA7\t\xA7\x04\xA8\t\xA8\x04\xA9\t\xA9" +
		"\x04\xAA\t\xAA\x04\xAB\t\xAB\x04\xAC\t\xAC\x04\xAD\t\xAD\x04\xAE\t\xAE" +
		"\x04\xAF\t\xAF\x04\xB0\t\xB0\x04\xB1\t\xB1\x04\xB2\t\xB2\x04\xB3\t\xB3" +
		"\x04\xB4\t\xB4\x04\xB5\t\xB5\x04\xB6\t\xB6\x04\xB7\t\xB7\x04\xB8\t\xB8" +
		"\x04\xB9\t\xB9\x04\xBA\t\xBA\x04\xBB\t\xBB\x04\xBC\t\xBC\x04\xBD\t\xBD" +
		"\x04\xBE\t\xBE\x04\xBF\t\xBF\x04\xC0\t\xC0\x04\xC1\t\xC1\x04\xC2\t\xC2" +
		"\x04\xC3\t\xC3\x04\xC4\t\xC4\x04\xC5\t\xC5\x04\xC6\t\xC6\x04\xC7\t\xC7" +
		"\x04\xC8\t\xC8\x04\xC9\t\xC9\x04\xCA\t\xCA\x04\xCB\t\xCB\x04\xCC\t\xCC" +
		"\x04\xCD\t\xCD\x04\xCE\t\xCE\x04\xCF\t\xCF\x04\xD0\t\xD0\x04\xD1\t\xD1" +
		"\x04\xD2\t\xD2\x04\xD3\t\xD3\x04\xD4\t\xD4\x04\xD5\t\xD5\x04\xD6\t\xD6" +
		"\x04\xD7\t\xD7\x04\xD8\t\xD8\x04\xD9\t\xD9\x04\xDA\t\xDA\x04\xDB\t\xDB" +
		"\x04\xDC\t\xDC\x04\xDD\t\xDD\x04\xDE\t\xDE\x04\xDF\t\xDF\x04\xE0\t\xE0" +
		"\x04\xE1\t\xE1\x04\xE2\t\xE2\x04\xE3\t\xE3\x04\xE4\t\xE4\x04\xE5\t\xE5" +
		"\x04\xE6\t\xE6\x04\xE7\t\xE7\x04\xE8\t\xE8\x04\xE9\t\xE9\x04\xEA\t\xEA" +
		"\x04\xEB\t\xEB\x04\xEC\t\xEC\x04\xED\t\xED\x04\xEE\t\xEE\x03\x02\x03\x02" +
		"\x03\x03\x07\x03\u01E0\n\x03\f\x03\x0E\x03\u01E3\v\x03\x03\x03\x03\x03" +
		"\x07\x03\u01E7\n\x03\f\x03\x0E\x03\u01EA\v\x03\x03\x03\x05\x03\u01ED\n" +
		"\x03\x03\x04\x03\x04\x05\x04\u01F1\n\x04\x03\x05\x03\x05\x03\x06\x03\x06" +
		"\x03\x07\x03\x07\x03\x07\x05\x07\u01FA\n\x07\x03\b\x03\b\x05\b\u01FE\n" +
		"\b\x03\b\x03\b\x07\b\u0202\n\b\f\b\x0E\b\u0205\v\b\x03\t\x07\t\u0208\n" +
		"\t\f\t\x0E\t\u020B\v\t\x03\t\x03\t\x05\t\u020F\n\t\x03\t\x03\t\x03\t\x07" +
		"\t\u0214\n\t\f\t\x0E\t\u0217\v\t\x03\t\x03\t\x05\t\u021B\n\t\x05\t\u021D" +
		"\n\t\x03\n\x03\n\x07\n\u0221\n\n\f\n\x0E\n\u0224\v\n\x03\n\x03\n\x05\n" +
		"\u0228\n\n\x03\v\x07\v\u022B\n\v\f\v\x0E\v\u022E\v\v\x03\v\x03\v\x05\v" +
		"\u0232\n\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x07\x0F\u023B" +
		"\n\x0F\f\x0F\x0E\x0F\u023E\v\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u024B\n\x10\x03" +
		"\x11\x07\x11\u024E\n\x11\f\x11\x0E\x11\u0251\v\x11\x03\x11\x03\x11\x03" +
		"\x11\x07\x11\u0256\n\x11\f\x11\x0E\x11\u0259\v\x11\x03\x11\x03\x11\x07" +
		"\x11\u025D\n\x11\f\x11\x0E\x11\u0260\v\x11\x03\x12\x07\x12\u0263\n\x12" +
		"\f\x12\x0E\x12\u0266\v\x12\x03\x12\x03\x12\x05\x12\u026A\n\x12\x03\x13" +
		"\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14\u0273\n\x14\f" +
		"\x14\x0E\x14\u0276\v\x14\x05\x14\u0278\n\x14\x03\x15\x03\x15\x03\x15\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x07\x17\u0284\n\x17" +
		"\f\x17\x0E\x17\u0287\v\x17\x03\x18\x03\x18\x05\x18\u028B\n\x18\x03\x19" +
		"\x07\x19\u028E\n\x19\f\x19\x0E\x19\u0291\v\x19\x03\x19\x03\x19\x05\x19" +
		"\u0295\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u029B\n\x1A\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u02A3\n\x1B\f\x1B\x0E" +
		"\x1B\u02A6\v\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u02AD" +
		"\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u02B5\n" +
		"\x1D\f\x1D\x0E\x1D\u02B8\v\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x05\x1E\u02BF\n\x1E\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x07" +
		" \u02C9\n \f \x0E \u02CC\v \x03!\x05!\u02CF\n!\x03!\x07!\u02D2\n!\f!\x0E" +
		"!\u02D5\v!\x03!\x07!\u02D8\n!\f!\x0E!\u02DB\v!\x03!\x03!\x03\"\x07\"\u02E0" +
		"\n\"\f\"\x0E\"\u02E3\v\"\x03\"\x03\"\x03\"\x03\"\x03#\x03#\x03$\x03$\x03" +
		"$\x03$\x05$\u02EF\n$\x03%\x03%\x03%\x03%\x03&\x03&\x03&\x03&\x03&\x03" +
		"&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x03" +
		"(\x03(\x03)\x03)\x03)\x05)\u030C\n)\x03*\x03*\x05*\u0310\n*\x03+\x05+" +
		"\u0313\n+\x03+\x07+\u0316\n+\f+\x0E+\u0319\v+\x03+\x03+\x03+\x05+\u031E" +
		"\n+\x03+\x05+\u0321\n+\x03+\x05+\u0324\n+\x03+\x03+\x03,\x03,\x03,\x03" +
		",\x03,\x03,\x03,\x03,\x05,\u0330\n,\x03-\x03-\x03-\x03-\x03.\x03.\x03" +
		".\x07.\u0339\n.\f.\x0E.\u033C\v.\x03/\x03/\x03/\x030\x030\x030\x031\x03" +
		"1\x031\x071\u0347\n1\f1\x0E1\u034A\v1\x032\x032\x072\u034E\n2\f2\x0E2" +
		"\u0351\v2\x032\x032\x033\x033\x033\x033\x053\u0359\n3\x034\x034\x034\x03" +
		"4\x034\x054\u0360\n4\x035\x055\u0363\n5\x035\x075\u0366\n5\f5\x0E5\u0369" +
		"\v5\x035\x035\x035\x035\x036\x036\x036\x036\x036\x036\x036\x036\x056\u0377" +
		"\n6\x037\x037\x037\x077\u037C\n7\f7\x0E7\u037F\v7\x038\x038\x038\x058" +
		"\u0384\n8\x039\x039\x059\u0388\n9\x03:\x03:\x05:\u038C\n:\x03;\x03;\x05" +
		";\u0390\n;\x03<\x03<\x05<\u0394\n<\x03=\x03=\x03=\x05=\u0399\n=\x03>\x03" +
		">\x05>\u039D\n>\x03>\x03>\x07>\u03A1\n>\f>\x0E>\u03A4\v>\x03?\x03?\x05" +
		"?\u03A8\n?\x03?\x03?\x03?\x07?\u03AD\n?\f?\x0E?\u03B0\v?\x03?\x03?\x05" +
		"?\u03B4\n?\x05?\u03B6\n?\x03@\x03@\x07@\u03BA\n@\f@\x0E@\u03BD\v@\x03" +
		"@\x03@\x05@\u03C1\n@\x03A\x03A\x05A\u03C5\nA\x03B\x03B\x03C\x03C\x03D" +
		"\x03D\x03E\x03E\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x05F\u03D8" +
		"\nF\x03G\x05G\u03DB\nG\x03G\x07G\u03DE\nG\fG\x0EG\u03E1\vG\x03G\x03G\x03" +
		"G\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x05H\u03F0\nH\x03" +
		"I\x03I\x03I\x05I\u03F5\nI\x03I\x03I\x07I\u03F9\nI\fI\x0EI\u03FC\vI\x03" +
		"I\x03I\x03I\x05I\u0401\nI\x05I\u0403\nI\x03J\x03J\x05J\u0407\nJ\x03K\x03" +
		"K\x03K\x05K\u040C\nK\x03K\x03K\x05K\u0410\nK\x03L\x03L\x03L\x03L\x03L" +
		"\x03L\x05L\u0418\nL\x03M\x03M\x03M\x07M\u041D\nM\fM\x0EM\u0420\vM\x03" +
		"M\x03M\x03M\x07M\u0425\nM\fM\x0EM\u0428\vM\x05M\u042A\nM\x03N\x07N\u042D" +
		"\nN\fN\x0EN\u0430\vN\x03N\x03N\x03N\x03O\x03O\x05O\u0437\nO\x03P\x07P" +
		"\u043A\nP\fP\x0EP\u043D\vP\x03P\x03P\x07P\u0441\nP\fP\x0EP\u0444\vP\x03" +
		"P\x03P\x03P\x03P\x05P\u044A\nP\x03Q\x07Q\u044D\nQ\fQ\x0EQ\u0450\vQ\x03" +
		"Q\x03Q\x03Q\x05Q\u0455\nQ\x03Q\x03Q\x03R\x03R\x03R\x03S\x03S\x03S\x07" +
		"S\u045F\nS\fS\x0ES\u0462\vS\x03T\x03T\x05T\u0466\nT\x03U\x03U\x05U\u046A" +
		"\nU\x03V\x03V\x03W\x03W\x03W\x03X\x07X\u0472\nX\fX\x0EX\u0475\vX\x03X" +
		"\x03X\x05X\u0479\nX\x03X\x03X\x03Y\x03Y\x03Y\x03Y\x05Y\u0481\nY\x03Z\x05" +
		"Z\u0484\nZ\x03Z\x03Z\x03Z\x05Z\u0489\nZ\x03Z\x03Z\x03[\x03[\x03\\\x03" +
		"\\\x05\\\u0491\n\\\x03\\\x05\\\u0494\n\\\x03\\\x03\\\x03]\x05]\u0499\n" +
		"]\x03]\x03]\x03]\x05]\u049E\n]\x03]\x03]\x03]\x05]\u04A3\n]\x03]\x03]" +
		"\x03]\x05]\u04A8\n]\x03]\x03]\x03]\x03]\x03]\x05]\u04AF\n]\x03]\x03]\x03" +
		"]\x05]\u04B4\n]\x03]\x03]\x03]\x03]\x03]\x03]\x05]\u04BC\n]\x03]\x03]" +
		"\x03]\x05]\u04C1\n]\x03]\x03]\x03]\x05]\u04C6\n]\x03^\x07^\u04C9\n^\f" +
		"^\x0E^\u04CC\v^\x03^\x03^\x03^\x05^\u04D1\n^\x03^\x03^\x03_\x03_\x05_" +
		"\u04D7\n_\x03_\x05_\u04DA\n_\x03_\x05_\u04DD\n_\x03_\x03_\x03`\x03`\x03" +
		"`\x07`\u04E4\n`\f`\x0E`\u04E7\v`\x03a\x07a\u04EA\na\fa\x0Ea\u04ED\va\x03" +
		"a\x03a\x03a\x05a\u04F2\na\x03a\x05a\u04F5\na\x03a\x05a\u04F8\na\x03b\x03" +
		"b\x03c\x03c\x07c\u04FE\nc\fc\x0Ec\u0501\vc\x03d\x03d\x05d\u0505\nd\x03" +
		"e\x07e\u0508\ne\fe\x0Ee\u050B\ve\x03e\x03e\x03e\x05e\u0510\ne\x03e\x05" +
		"e\u0513\ne\x03e\x03e\x03f\x03f\x03f\x03f\x03f\x03f\x03f\x05f\u051E\nf" +
		"\x03g\x03g\x03g\x03h\x03h\x07h\u0525\nh\fh\x0Eh\u0528\vh\x03h\x03h\x03" +
		"i\x03i\x03i\x03i\x03i\x05i\u0531\ni\x03j\x07j\u0534\nj\fj\x0Ej\u0537\v" +
		"j\x03j\x03j\x03j\x03j\x03k\x03k\x03k\x03k\x05k\u0541\nk\x03l\x07l\u0544" +
		"\nl\fl\x0El\u0547\vl\x03l\x03l\x03l\x03m\x03m\x03m\x03m\x03m\x03m\x05" +
		"m\u0552\nm\x03n\x07n\u0555\nn\fn\x0En\u0558\vn\x03n\x03n\x03n\x03n\x03" +
		"n\x03o\x03o\x07o\u0561\no\fo\x0Eo\u0564\vo\x03o\x03o\x03p\x03p\x03p\x03" +
		"p\x03p\x05p\u056D\np\x03q\x07q\u0570\nq\fq\x0Eq\u0573\vq\x03q\x03q\x03" +
		"q\x03q\x03q\x05q\u057A\nq\x03q\x05q\u057D\nq\x03q\x03q\x03r\x03r\x03r" +
		"\x05r\u0584\nr\x03s\x03s\x03s\x03t\x03t\x03t\x05t\u058C\nt\x03u\x03u\x03" +
		"u\x03u\x05u\u0592\nu\x03u\x03u\x03v\x03v\x03v\x07v\u0599\nv\fv\x0Ev\u059C" +
		"\vv\x03w\x03w\x03w\x03w\x03x\x03x\x03x\x05x\u05A5\nx\x03y\x03y\x05y\u05A9" +
		"\ny\x03y\x05y\u05AC\ny\x03y\x03y\x03z\x03z\x03z\x07z\u05B3\nz\fz\x0Ez" +
		"\u05B6\vz\x03{\x03{\x03{\x03|\x03|\x03|\x03|\x03|\x03|\x03}\x03}\x05}" +
		"\u05C3\n}\x03}\x05}\u05C6\n}\x03}\x03}\x03~\x03~\x03~\x07~\u05CD\n~\f" +
		"~\x0E~\u05D0\v~\x03\x7F\x03\x7F\x05\x7F\u05D4\n\x7F\x03\x7F\x03\x7F\x03" +
		"\x80\x06\x80\u05D9\n\x80\r\x80\x0E\x80\u05DA\x03\x81\x03\x81\x03\x81\x05" +
		"\x81\u05E0\n\x81\x03\x81\x05\x81\u05E3\n\x81\x03\x82\x03\x82\x03\x82\x03" +
		"\x83\x05\x83\u05E9\n\x83\x03\x83\x07\x83\u05EC\n\x83\f\x83\x0E\x83\u05EF" +
		"\v\x83\x03\x83\x03\x83\x03\x83\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84" +
		"\x03\x84\x05\x84\u05FA\n\x84\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x05" +
		"\x85\u0601\n\x85\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86" +
		"\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86\x05\x86\u060F\n\x86\x03\x87\x03" +
		"\x87\x03\x88\x03\x88\x03\x88\x03\x88\x03\x89\x03\x89\x03\x89\x03\x89\x03" +
		"\x8A\x03\x8A\x03\x8A\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03" +
		"\x8B\x05\x8B\u0625\n\x8B\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C" +
		"\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x03\x8E" +
		"\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8F\x03\x8F" +
		"\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x05\x8F" +
		"\u0647\n\x8F\x03\x90\x03\x90\x03\x90\x03\x90\x03\x90\x03\x90\x03\x91\x03" +
		"\x91\x07\x91\u0651\n\x91\f\x91\x0E\x91\u0654\v\x91\x03\x91\x07\x91\u0657" +
		"\n\x91\f\x91\x0E\x91\u065A\v\x91\x03\x91\x03\x91\x03\x92\x03\x92\x03\x92" +
		"\x03\x93\x03\x93\x07\x93\u0663\n\x93\f\x93\x0E\x93\u0666\v\x93\x03\x94" +
		"\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94" +
		"\x05\x94\u0672\n\x94\x03\x95\x03\x95\x03\x96\x03\x96\x03\x96\x03\x96\x03" +
		"\x96\x03\x96\x03\x97\x03\x97\x03\x97\x03\x97\x03\x97\x03\x97\x03\x98\x03" +
		"\x98\x03\x98\x03\x98\x03\x98\x03\x98\x03\x98\x03\x98\x03\x99\x03\x99\x05" +
		"\x99\u068C\n\x99\x03\x9A\x03\x9A\x05\x9A\u0690\n\x9A\x03\x9B\x03\x9B\x03" +
		"\x9B\x05\x9B\u0695\n\x9B\x03\x9B\x03\x9B\x05\x9B\u0699\n\x9B\x03\x9B\x03" +
		"\x9B\x05\x9B\u069D\n\x9B\x03\x9B\x03\x9B\x03\x9B\x03\x9C\x03\x9C\x03\x9C" +
		"\x05\x9C\u06A5\n\x9C\x03\x9C\x03\x9C\x05\x9C\u06A9\n\x9C\x03\x9C\x03\x9C" +
		"\x05\x9C\u06AD\n\x9C\x03\x9C\x03\x9C\x03\x9C\x03\x9D\x03\x9D\x05\x9D\u06B4" +
		"\n\x9D\x03\x9E\x03\x9E\x03\x9F\x03\x9F\x03\x9F\x07\x9F\u06BB\n\x9F\f\x9F" +
		"\x0E\x9F\u06BE\v\x9F\x03\xA0\x03\xA0\x03\xA0\x07\xA0\u06C3\n\xA0\f\xA0" +
		"\x0E\xA0\u06C6\v\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03" +
		"\xA0\x03\xA1\x03\xA1\x03\xA1\x07\xA1\u06D2\n\xA1\f\xA1\x0E\xA1\u06D5\v" +
		"\xA1\x03\xA1\x03\xA1\x03\xA1\x03\xA1\x03\xA1\x03\xA1\x03\xA1\x03\xA2\x03" +
		"\xA2\x05\xA2\u06E0\n\xA2\x03\xA2\x03\xA2\x03\xA3\x03\xA3\x05\xA3\u06E6" +
		"\n\xA3\x03\xA3\x03\xA3\x03\xA4\x03\xA4\x05\xA4\u06EC\n\xA4\x03\xA4\x03" +
		"\xA4\x03\xA5\x03\xA5\x03\xA5\x03\xA5\x03\xA6\x03\xA6\x03\xA6\x03\xA6\x03" +
		"\xA6\x03\xA6\x03\xA7\x03\xA7\x03\xA7\x03\xA7\x03\xA7\x03\xA7\x03\xA7\x05" +
		"\xA7\u0701\n\xA7\x03\xA7\x03\xA7\x03\xA7\x05\xA7\u0706\n\xA7\x03\xA8\x03" +
		"\xA8\x07\xA8\u070A\n\xA8\f\xA8\x0E\xA8\u070D\v\xA8\x03\xA9\x03\xA9\x03" +
		"\xA9\x03\xA9\x03\xA9\x03\xA9\x03\xAA\x07\xAA\u0716\n\xAA\f\xAA\x0E\xAA" +
		"\u0719\v\xAA\x03\xAA\x03\xAA\x03\xAA\x03\xAB\x03\xAB\x03\xAB\x07\xAB\u0721" +
		"\n\xAB\f\xAB\x0E\xAB\u0724\v\xAB\x03\xAC\x03\xAC\x03\xAC\x03\xAD\x03\xAD" +
		"\x03\xAD\x03\xAD\x05\xAD\u072D\n\xAD\x03\xAD\x05\xAD\u0730\n\xAD\x03\xAE" +
		"\x03\xAE\x03\xAE\x05\xAE\u0735\n\xAE\x03\xAE\x03\xAE\x03\xAF\x03\xAF\x03" +
		"\xAF\x07\xAF\u073C\n\xAF\f\xAF\x0E\xAF\u073F\v\xAF\x03\xB0\x07\xB0\u0742" +
		"\n\xB0\f\xB0\x0E\xB0\u0745\v\xB0\x03\xB0\x03\xB0\x03\xB0\x03\xB0\x03\xB0" +
		"\x03\xB1\x03\xB1\x05\xB1\u074E\n\xB1\x03\xB1\x07\xB1\u0751\n\xB1\f\xB1" +
		"\x0E\xB1\u0754\v\xB1\x03\xB2\x03\xB2\x03\xB2\x03\xB2\x07\xB2\u075A\n\xB2" +
		"\f\xB2\x0E\xB2\u075D\v\xB2\x03\xB2\x03\xB2\x03\xB2\x03\xB2\x03\xB2\x03" +
		"\xB2\x03\xB2\x03\xB2\x03\xB2\x03\xB2\x03\xB2\x03\xB2\x03\xB2\x03\xB2\x03" +
		"\xB2\x03\xB2\x03\xB2\x03\xB2\x03\xB2\x03\xB2\x05\xB2\u0773\n\xB2\x03\xB3" +
		"\x03\xB3\x03\xB4\x03\xB4\x03\xB4\x03\xB4\x07\xB4\u077B\n\xB4\f\xB4\x0E" +
		"\xB4\u077E\v\xB4\x03\xB4\x03\xB4\x03\xB4\x03\xB4\x03\xB4\x03\xB4\x03\xB4" +
		"\x03\xB4\x03\xB4\x03\xB4\x03\xB4\x03\xB4\x03\xB4\x03\xB4\x03\xB4\x03\xB4" +
		"\x03\xB4\x03\xB4\x03\xB4\x05\xB4\u0793\n\xB4\x03\xB5\x03\xB5\x03\xB5\x03" +
		"\xB5\x03\xB5\x05\xB5\u079A\n\xB5\x03\xB6\x03\xB6\x03\xB7\x03\xB7\x03\xB7" +
		"\x03\xB7\x05\xB7\u07A2\n\xB7\x03\xB8\x03\xB8\x03\xB8\x03\xB8\x07\xB8\u07A8" +
		"\n\xB8\f\xB8\x0E\xB8\u07AB\v\xB8\x03\xB8\x03\xB8\x03\xB8\x03\xB8\x03\xB8" +
		"\x03\xB8\x07\xB8\u07B3\n\xB8\f\xB8\x0E\xB8\u07B6\v\xB8\x03\xB8\x03\xB8" +
		"\x03\xB8\x03\xB8\x03\xB8\x03\xB8\x03\xB8\x03\xB8\x03\xB8\x03\xB8\x03\xB8" +
		"\x03\xB8\x03\xB8\x03\xB8\x03\xB8\x03\xB8\x03\xB8\x03\xB8\x03\xB8\x03\xB8" +
		"\x05\xB8\u07CC\n\xB8\x03\xB9\x03\xB9\x03\xBA\x03\xBA\x03\xBA\x03\xBA\x07" +
		"\xBA\u07D4\n\xBA\f\xBA\x0E\xBA\u07D7\v\xBA\x03\xBA\x03\xBA\x03\xBA\x03" +
		"\xBA\x03\xBA\x03\xBA\x07\xBA\u07DF\n\xBA\f\xBA\x0E\xBA\u07E2\v\xBA\x03" +
		"\xBA\x03\xBA\x03\xBA\x03\xBA\x03\xBA\x03\xBA\x03\xBA\x03\xBA\x03\xBA\x03" +
		"\xBA\x03\xBA\x03\xBA\x03\xBA\x03\xBA\x03\xBA\x03\xBA\x03\xBA\x03\xBA\x03" +
		"\xBA\x05\xBA\u07F7\n\xBA\x03\xBB\x03\xBB\x05\xBB\u07FB\n\xBB\x03\xBB\x07" +
		"\xBB\u07FE\n\xBB\f\xBB\x0E\xBB\u0801\v\xBB\x03\xBB\x03\xBB\x03\xBB\x07" +
		"\xBB\u0806\n\xBB\f\xBB\x0E\xBB\u0809\v\xBB\x03\xBB\x07\xBB\u080C\n\xBB" +
		"\f\xBB\x0E\xBB\u080F\v\xBB\x03\xBB\x05\xBB\u0812\n\xBB\x03\xBB\x03\xBB" +
		"\x05\xBB\u0816\n\xBB\x03\xBB\x03\xBB\x05\xBB\u081A\n\xBB\x03\xBB\x03\xBB" +
		"\x03\xBB\x03\xBB\x05\xBB\u0820\n\xBB\x03\xBB\x07\xBB\u0823\n\xBB\f\xBB" +
		"\x0E\xBB\u0826\v\xBB\x03\xBB\x03\xBB\x05\xBB\u082A\n\xBB\x03\xBB\x03\xBB" +
		"\x05\xBB\u082E\n\xBB\x03\xBB\x03\xBB\x05\xBB\u0832\n\xBB\x03\xBB\x03\xBB" +
		"\x03\xBB\x03\xBB\x05\xBB\u0838\n\xBB\x03\xBB\x07\xBB\u083B\n\xBB\f\xBB" +
		"\x0E\xBB\u083E\v\xBB\x03\xBB\x03\xBB\x05\xBB\u0842\n\xBB\x03\xBB\x03\xBB" +
		"\x05\xBB\u0846\n\xBB\x03\xBB\x03\xBB\x05\xBB\u084A\n\xBB\x05\xBB\u084C" +
		"\n\xBB\x03\xBC\x03\xBC\x03\xBC\x05\xBC\u0851\n\xBC\x03\xBC\x07\xBC\u0854" +
		"\n\xBC\f\xBC\x0E\xBC\u0857\v\xBC\x03\xBC\x03\xBC\x05\xBC\u085B\n\xBC\x03" +
		"\xBC\x03\xBC\x05\xBC\u085F\n\xBC\x03\xBC\x03\xBC\x05\xBC\u0863\n\xBC\x03" +
		"\xBD\x03\xBD\x05\xBD\u0867\n\xBD\x03\xBD\x07\xBD\u086A\n\xBD\f\xBD\x0E" +
		"\xBD\u086D\v\xBD\x03\xBD\x03\xBD\x03\xBD\x07\xBD\u0872\n\xBD\f\xBD\x0E" +
		"\xBD\u0875\v\xBD\x03\xBD\x07\xBD\u0878\n\xBD\f\xBD\x0E\xBD\u087B\v\xBD" +
		"\x03\xBD\x05\xBD\u087E\n\xBD\x03\xBD\x03\xBD\x05\xBD\u0882\n\xBD\x03\xBD" +
		"\x03\xBD\x05\xBD\u0886\n\xBD\x03\xBD\x03\xBD\x03\xBD\x03\xBD\x05\xBD\u088C" +
		"\n\xBD\x03\xBD\x07\xBD\u088F\n\xBD\f\xBD\x0E\xBD\u0892\v\xBD\x03\xBD\x03" +
		"\xBD\x05\xBD\u0896\n\xBD\x03\xBD\x03\xBD\x05\xBD\u089A\n\xBD\x03\xBD\x03" +
		"\xBD\x05\xBD\u089E\n\xBD\x05\xBD\u08A0\n\xBD\x03\xBE\x03\xBE\x03\xBE\x05" +
		"\xBE\u08A5\n\xBE\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF" +
		"\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x05\xBF\u08B4\n\xBF\x03" +
		"\xC0\x03\xC0\x03\xC0\x03\xC1\x03\xC1\x03\xC1\x03\xC1\x03\xC1\x03\xC1\x03" +
		"\xC1\x03\xC1\x03\xC1\x05\xC1\u08C2\n\xC1\x03\xC2\x03\xC2\x03\xC2\x03\xC2" +
		"\x03\xC2\x03\xC2\x03\xC2\x03\xC2\x03\xC2\x03\xC2\x05\xC2\u08CE\n\xC2\x03" +
		"\xC2\x03\xC2\x03\xC2\x03\xC2\x03\xC2\x07\xC2\u08D5\n\xC2\f\xC2\x0E\xC2" +
		"\u08D8\v\xC2\x03\xC3\x03\xC3\x03\xC3\x03\xC3\x03\xC3\x03\xC3\x03\xC3\x03" +
		"\xC3\x03\xC3\x07\xC3\u08E3\n\xC3\f\xC3\x0E\xC3\u08E6\v\xC3\x03\xC4\x03" +
		"\xC4\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x05" +
		"\xC4\u08F2\n\xC4\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x07\xC4\u08F9" +
		"\n\xC4\f\xC4\x0E\xC4\u08FC\v\xC4\x03\xC5\x03\xC5\x03\xC5\x05\xC5\u0901" +
		"\n\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x05\xC5\u0908\n\xC5\x03" +
		"\xC5\x03\xC5\x03\xC5\x05\xC5\u090D\n\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5" +
		"\x03\xC5\x05\xC5\u0914\n\xC5\x03";
	private static readonly _serializedATNSegment1: string =
		"\xC5\x03\xC5\x03\xC5\x05\xC5\u0919\n\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5" +
		"\x03\xC5\x05\xC5\u0920\n\xC5\x03\xC5\x03\xC5\x03\xC5\x05\xC5\u0925\n\xC5" +
		"\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x05\xC5\u092C\n\xC5\x03\xC5\x03" +
		"\xC5\x03\xC5\x05\xC5\u0931\n\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5" +
		"\x03\xC5\x05\xC5\u0939\n\xC5\x03\xC5\x03\xC5\x03\xC5\x05\xC5\u093E\n\xC5" +
		"\x03\xC5\x03\xC5\x05\xC5\u0942\n\xC5\x03\xC6\x03\xC6\x05\xC6\u0946\n\xC6" +
		"\x03\xC6\x03\xC6\x03\xC6\x05\xC6\u094B\n\xC6\x03\xC6\x03\xC6\x03\xC7\x03" +
		"\xC7\x03\xC7\x05\xC7\u0952\n\xC7\x03\xC7\x03\xC7\x03\xC7\x03\xC7\x03\xC7" +
		"\x05\xC7\u0959\n\xC7\x03\xC7\x03\xC7\x03\xC7\x05\xC7\u095E\n\xC7\x03\xC7" +
		"\x03\xC7\x03\xC7\x03\xC7\x03\xC7\x05\xC7\u0965\n\xC7\x03\xC7\x03\xC7\x03" +
		"\xC7\x05\xC7\u096A\n\xC7\x03\xC7\x03\xC7\x03\xC7\x03\xC7\x03\xC7\x05\xC7" +
		"\u0971\n\xC7\x03\xC7\x03\xC7\x03\xC7\x05\xC7\u0976\n\xC7\x03\xC7\x03\xC7" +
		"\x03\xC7\x03\xC7\x03\xC7\x03\xC7\x05\xC7\u097E\n\xC7\x03\xC7\x03\xC7\x03" +
		"\xC7\x05\xC7\u0983\n\xC7\x03\xC7\x03\xC7\x05\xC7\u0987\n\xC7\x03\xC8\x03" +
		"\xC8\x03\xC8\x07\xC8\u098C\n\xC8\f\xC8\x0E\xC8\u098F\v\xC8\x03\xC9\x03" +
		"\xC9\x03\xC9\x05\xC9\u0994\n\xC9\x03\xC9\x03\xC9\x03\xC9\x03\xC9\x03\xC9" +
		"\x05\xC9\u099B\n\xC9\x03\xC9\x03\xC9\x03\xC9\x03\xC9\x03\xC9\x05\xC9\u09A2" +
		"\n\xC9\x03\xC9\x03\xC9\x03\xC9\x03\xC9\x03\xC9\x05\xC9\u09A9\n\xC9\x03" +
		"\xC9\x03\xC9\x03\xC9\x03\xC9\x03\xC9\x03\xC9\x05\xC9\u09B1\n\xC9\x03\xC9" +
		"\x03\xC9\x03\xC9\x03\xC9\x03\xC9\x05\xC9\u09B8\n\xC9\x03\xC9\x03\xC9\x03" +
		"\xC9\x03\xC9\x03\xC9\x03\xC9\x05\xC9\u09C0\n\xC9\x03\xCA\x03\xCA\x05\xCA" +
		"\u09C4\n\xCA\x03\xCA\x03\xCA\x03\xCB\x03\xCB\x03\xCB\x05\xCB\u09CB\n\xCB" +
		"\x03\xCB\x03\xCB\x03\xCB\x03\xCB\x03\xCB\x05\xCB\u09D2\n\xCB\x03\xCB\x03" +
		"\xCB\x03\xCB\x03\xCB\x03\xCB\x05\xCB\u09D9\n\xCB\x03\xCB\x03\xCB\x03\xCB" +
		"\x03\xCB\x03\xCB\x03\xCB\x05\xCB\u09E1\n\xCB\x03\xCB\x03\xCB\x03\xCB\x03" +
		"\xCB\x03\xCB\x05\xCB\u09E8\n\xCB\x03\xCB\x03\xCB\x03\xCB\x03\xCB\x03\xCB" +
		"\x03\xCB\x05\xCB\u09F0\n\xCB\x03\xCC\x03\xCC\x03\xCC\x03\xCC\x05\xCC\u09F6" +
		"\n\xCC\x03\xCC\x03\xCC\x03\xCC\x03\xCC\x05\xCC\u09FC\n\xCC\x03\xCC\x03" +
		"\xCC\x03\xCC\x03\xCC\x03\xCC\x03\xCC\x03\xCC\x03\xCC\x03\xCC\x03\xCC\x05" +
		"\xCC\u0A08\n\xCC\x03\xCD\x03\xCD\x07\xCD\u0A0C\n\xCD\f\xCD\x0E\xCD\u0A0F" +
		"\v\xCD\x03\xCE\x07\xCE\u0A12\n\xCE\f\xCE\x0E\xCE\u0A15\v\xCE\x03\xCE\x03" +
		"\xCE\x03\xCE\x03\xCE\x03\xCF\x03\xCF\x03\xD0\x03\xD0\x05\xD0\u0A1F\n\xD0" +
		"\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD2\x03\xD2\x03\xD2\x05\xD2\u0A28" +
		"\n\xD2\x03\xD2\x03\xD2\x03\xD2\x03\xD2\x03\xD2\x05\xD2\u0A2F\n\xD2\x03" +
		"\xD3\x03\xD3\x03\xD3\x07\xD3\u0A34\n\xD3\f\xD3\x0E\xD3\u0A37\v\xD3\x03" +
		"\xD4\x03\xD4\x05\xD4\u0A3B\n\xD4\x03\xD5\x03\xD5\x05\xD5\u0A3F\n\xD5\x03" +
		"\xD6\x03\xD6\x03\xD6\x03\xD6\x03\xD7\x03\xD7\x03\xD7\x05\xD7\u0A48\n\xD7" +
		"\x03\xD8\x03\xD8\x03\xD9\x03\xD9\x03\xD9\x03\xD9\x03\xD9\x03\xD9\x03\xD9" +
		"\x05\xD9\u0A53\n\xD9\x03\xDA\x03\xDA\x03\xDA\x03\xDA\x03\xDA\x03\xDA\x07" +
		"\xDA\u0A5B\n\xDA\f\xDA\x0E\xDA\u0A5E\v\xDA\x03\xDB\x03\xDB\x03\xDB\x03" +
		"\xDB\x03\xDB\x03\xDB\x07\xDB\u0A66\n\xDB\f\xDB\x0E\xDB\u0A69\v\xDB\x03" +
		"\xDC\x03\xDC\x03\xDC\x03\xDC\x03\xDC\x03\xDC\x07\xDC\u0A71\n\xDC\f\xDC" +
		"\x0E\xDC\u0A74\v\xDC\x03\xDD\x03\xDD\x03\xDD\x03\xDD\x03\xDD\x03\xDD\x07" +
		"\xDD\u0A7C\n\xDD\f\xDD\x0E\xDD\u0A7F\v\xDD\x03\xDE\x03\xDE\x03\xDE\x03" +
		"\xDE\x03\xDE\x03\xDE\x07\xDE\u0A87\n\xDE\f\xDE\x0E\xDE\u0A8A\v\xDE\x03" +
		"\xDF\x03\xDF\x03\xDF\x03\xDF\x03\xDF\x03\xDF\x03\xDF\x03\xDF\x03\xDF\x07" +
		"\xDF\u0A95\n\xDF\f\xDF\x0E\xDF\u0A98\v\xDF\x03\xE0\x03\xE0\x03\xE0\x03" +
		"\xE0\x03\xE0\x03\xE0\x03\xE0\x03\xE0\x03\xE0\x03\xE0\x03\xE0\x03\xE0\x03" +
		"\xE0\x03\xE0\x03\xE0\x03\xE0\x03\xE0\x03\xE0\x07\xE0\u0AAC\n\xE0\f\xE0" +
		"\x0E\xE0\u0AAF\v\xE0\x03\xE1\x03\xE1\x03\xE1\x03\xE1\x03\xE1\x03\xE1\x03" +
		"\xE1\x03\xE1\x03\xE1\x03\xE1\x03\xE1\x03\xE1\x03\xE1\x03\xE1\x03\xE1\x03" +
		"\xE1\x07\xE1\u0AC1\n\xE1\f\xE1\x0E\xE1\u0AC4\v\xE1\x03\xE2\x03\xE2\x03" +
		"\xE2\x03\xE2\x03\xE2\x03\xE2\x03\xE2\x03\xE2\x03\xE2\x07\xE2\u0ACF\n\xE2" +
		"\f\xE2\x0E\xE2\u0AD2\v\xE2\x03\xE3\x03\xE3\x03\xE3\x03\xE3\x03\xE3\x03" +
		"\xE3\x03\xE3\x03\xE3\x03\xE3\x03\xE3\x03\xE3\x03\xE3\x07\xE3\u0AE0\n\xE3" +
		"\f\xE3\x0E\xE3\u0AE3\v\xE3\x03\xE4\x03\xE4\x03\xE4\x03\xE4\x03\xE4\x03" +
		"\xE4\x03\xE4\x05\xE4\u0AEC\n\xE4\x03\xE5\x03\xE5\x03\xE5\x03\xE6\x03\xE6" +
		"\x03\xE6\x03\xE7\x03\xE7\x03\xE7\x03\xE7\x03\xE7\x03\xE7\x05\xE7\u0AFA" +
		"\n\xE7\x03\xE8\x03\xE8\x05\xE8\u0AFE\n\xE8\x03\xE8\x03\xE8\x07\xE8\u0B02" +
		"\n\xE8\f\xE8\x0E\xE8\u0B05\v\xE8\x03\xE9\x03\xE9\x03\xE9\x03\xEA\x03\xEA" +
		"\x03\xEB\x03\xEB\x03\xEB\x03\xEC\x03\xEC\x03\xED\x03\xED\x03\xED\x03\xED" +
		"\x03\xED\x03\xED\x03\xED\x03\xED\x07\xED\u0B19\n\xED\f\xED\x0E\xED\u0B1C" +
		"\v\xED\x03\xED\x03\xED\x03\xED\x03\xED\x03\xED\x03\xED\x07\xED\u0B24\n" +
		"\xED\f\xED\x0E\xED\u0B27\v\xED\x03\xED\x03\xED\x03\xED\x05\xED\u0B2C\n" +
		"\xED\x03\xEE\x07\xEE\u0B2F\n\xEE\f\xEE\x0E\xEE\u0B32\v\xEE\x03\xEE\x02" +
		"\x02\x0F48>\u01B2\u01B4\u01B6\u01B8\u01BA\u01BC\u01BE\u01C0\u01C2\u01C4" +
		"\xEF\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02" +
		"\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02" +
		"(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02" +
		"D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02" +
		"`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02" +
		"|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E" +
		"\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0" +
		"\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2" +
		"\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4" +
		"\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6" +
		"\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6\x02\xE8" +
		"\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8\x02\xFA" +
		"\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104\x02\u0106\x02\u0108\x02" +
		"\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112\x02\u0114\x02\u0116\x02" +
		"\u0118\x02\u011A\x02\u011C\x02\u011E\x02\u0120\x02\u0122\x02\u0124\x02" +
		"\u0126\x02\u0128\x02\u012A\x02\u012C\x02\u012E\x02\u0130\x02\u0132\x02" +
		"\u0134\x02\u0136\x02\u0138\x02\u013A\x02\u013C\x02\u013E\x02\u0140\x02" +
		"\u0142\x02\u0144\x02\u0146\x02\u0148\x02\u014A\x02\u014C\x02\u014E\x02" +
		"\u0150\x02\u0152\x02\u0154\x02\u0156\x02\u0158\x02\u015A\x02\u015C\x02" +
		"\u015E\x02\u0160\x02\u0162\x02\u0164\x02\u0166\x02\u0168\x02\u016A\x02" +
		"\u016C\x02\u016E\x02\u0170\x02\u0172\x02\u0174\x02\u0176\x02\u0178\x02" +
		"\u017A\x02\u017C\x02\u017E\x02\u0180\x02\u0182\x02\u0184\x02\u0186\x02" +
		"\u0188\x02\u018A\x02\u018C\x02\u018E\x02\u0190\x02\u0192\x02\u0194\x02" +
		"\u0196\x02\u0198\x02\u019A\x02\u019C\x02\u019E\x02\u01A0\x02\u01A2\x02" +
		"\u01A4\x02\u01A6\x02\u01A8\x02\u01AA\x02\u01AC\x02\u01AE\x02\u01B0\x02" +
		"\u01B2\x02\u01B4\x02\u01B6\x02\u01B8\x02\u01BA\x02\u01BC\x02\u01BE\x02" +
		"\u01C0\x02\u01C2\x02\u01C4\x02\u01C6\x02\u01C8\x02\u01CA\x02\u01CC\x02" +
		"\u01CE\x02\u01D0\x02\u01D2\x02\u01D4\x02\u01D6\x02\u01D8\x02\u01DA\x02" +
		"\x02\x07\x03\x025:\x07\x02\x07\x07\n\n\x1D\x1D\x1F\x1F\'\'\x04\x02\x10" +
		"\x10\x16\x16\x04\x02DD]g\x03\x02lm\x02\u0C2A\x02\u01DC\x03\x02\x02\x02" +
		"\x04\u01EC\x03\x02\x02\x02\x06\u01F0\x03\x02\x02\x02\b\u01F2\x03\x02\x02" +
		"\x02\n\u01F4\x03\x02\x02\x02\f\u01F9\x03\x02\x02\x02\x0E\u01FD\x03\x02" +
		"\x02\x02\x10\u021C\x03\x02\x02\x02\x12\u021E\x03\x02\x02\x02\x14\u022C" +
		"\x03\x02\x02\x02\x16\u0233\x03\x02\x02\x02\x18\u0235\x03\x02\x02\x02\x1A" +
		"\u0237\x03\x02\x02\x02\x1C\u023C\x03\x02\x02\x02\x1E\u024A\x03\x02\x02" +
		"\x02 \u024F\x03\x02\x02\x02\"\u0264\x03\x02\x02\x02$\u026B\x03\x02\x02" +
		"\x02&\u0277\x03\x02\x02\x02(\u0279\x03\x02\x02\x02*\u027C\x03\x02\x02" +
		"\x02,\u0280\x03\x02\x02\x02.\u028A\x03\x02\x02\x020\u028F\x03\x02\x02" +
		"\x022\u029A\x03\x02\x02\x024\u029C\x03\x02\x02\x026\u02AC\x03\x02\x02" +
		"\x028\u02AE\x03\x02\x02\x02:\u02BE\x03\x02\x02\x02<\u02C0\x03\x02\x02" +
		"\x02>\u02C2\x03\x02\x02\x02@\u02CE\x03\x02\x02\x02B\u02E1\x03\x02\x02" +
		"\x02D\u02E8\x03\x02\x02\x02F\u02EE\x03\x02\x02\x02H\u02F0\x03\x02\x02" +
		"\x02J\u02F4\x03\x02\x02\x02L\u02FA\x03\x02\x02\x02N\u0301\x03\x02\x02" +
		"\x02P\u030B\x03\x02\x02\x02R\u030F\x03\x02\x02\x02T\u0312\x03\x02\x02" +
		"\x02V\u032F\x03\x02\x02\x02X\u0331\x03\x02\x02\x02Z\u0335\x03\x02\x02" +
		"\x02\\\u033D\x03\x02\x02\x02^\u0340\x03\x02\x02\x02`\u0343\x03\x02\x02" +
		"\x02b\u034B\x03\x02\x02\x02d\u0358\x03\x02\x02\x02f\u035F\x03\x02\x02" +
		"\x02h\u0362\x03\x02\x02\x02j\u0376\x03\x02\x02\x02l\u0378\x03\x02\x02" +
		"\x02n\u0380\x03\x02\x02\x02p\u0385\x03\x02\x02\x02r\u038B\x03\x02\x02" +
		"\x02t\u038F\x03\x02\x02\x02v\u0393\x03\x02\x02\x02x\u0398\x03\x02\x02" +
		"\x02z\u039C\x03\x02\x02\x02|\u03B5\x03\x02\x02\x02~\u03B7\x03\x02\x02" +
		"\x02\x80\u03C2\x03\x02\x02\x02\x82\u03C6\x03\x02\x02\x02\x84\u03C8\x03" +
		"\x02\x02\x02\x86\u03CA\x03\x02\x02\x02\x88\u03CC\x03\x02\x02\x02\x8A\u03D7" +
		"\x03\x02\x02\x02\x8C\u03DA\x03\x02\x02\x02\x8E\u03EF\x03\x02\x02\x02\x90" +
		"\u0402\x03\x02\x02\x02\x92\u0406\x03\x02\x02\x02\x94\u0408\x03\x02\x02" +
		"\x02\x96\u0417\x03\x02\x02\x02\x98\u0429\x03\x02\x02\x02\x9A\u042E\x03" +
		"\x02\x02\x02\x9C\u0436\x03\x02\x02\x02\x9E\u0449\x03\x02\x02\x02\xA0\u044E" +
		"\x03\x02\x02\x02\xA2\u0458\x03\x02\x02\x02\xA4\u045B\x03\x02\x02\x02\xA6" +
		"\u0465\x03\x02\x02\x02\xA8\u0469\x03\x02\x02\x02\xAA\u046B\x03\x02\x02" +
		"\x02\xAC\u046D\x03\x02\x02\x02\xAE\u0473\x03\x02\x02\x02\xB0\u0480\x03" +
		"\x02\x02\x02\xB2\u0483\x03\x02\x02\x02\xB4\u048C\x03\x02\x02\x02\xB6\u048E" +
		"\x03\x02\x02\x02\xB8\u04C5\x03\x02\x02\x02\xBA\u04CA\x03\x02\x02\x02\xBC" +
		"\u04D4\x03\x02\x02\x02\xBE\u04E0\x03\x02\x02\x02\xC0\u04EB\x03\x02\x02" +
		"\x02\xC2\u04F9\x03\x02\x02\x02\xC4\u04FB\x03\x02\x02\x02\xC6\u0504\x03" +
		"\x02\x02\x02\xC8\u0509\x03\x02\x02\x02\xCA\u051D\x03\x02\x02\x02\xCC\u051F" +
		"\x03\x02\x02\x02\xCE\u0522\x03\x02\x02\x02\xD0\u0530\x03\x02\x02\x02\xD2" +
		"\u0535\x03\x02\x02\x02\xD4\u0540\x03\x02\x02\x02\xD6\u0545\x03\x02\x02" +
		"\x02\xD8\u0551\x03\x02\x02\x02\xDA\u0556\x03\x02\x02\x02\xDC\u055E\x03" +
		"\x02\x02\x02\xDE\u056C\x03\x02\x02\x02\xE0\u0571\x03\x02\x02\x02\xE2\u0583" +
		"\x03\x02\x02\x02\xE4\u0585\x03\x02\x02\x02\xE6\u058B\x03\x02\x02\x02\xE8" +
		"\u058D\x03\x02\x02\x02\xEA\u0595\x03\x02\x02\x02\xEC\u059D\x03\x02\x02" +
		"\x02\xEE\u05A4\x03\x02\x02\x02\xF0\u05A6\x03\x02\x02\x02\xF2\u05AF\x03" +
		"\x02\x02\x02\xF4\u05B7\x03\x02\x02\x02\xF6\u05BA\x03\x02\x02\x02\xF8\u05C0" +
		"\x03\x02\x02\x02\xFA\u05C9\x03\x02\x02\x02\xFC\u05D1\x03\x02\x02\x02\xFE" +
		"\u05D8\x03\x02\x02\x02\u0100\u05E2\x03\x02\x02\x02\u0102\u05E4\x03\x02" +
		"\x02\x02\u0104\u05E8\x03\x02\x02\x02\u0106\u05F9\x03\x02\x02\x02\u0108" +
		"\u0600\x03\x02\x02\x02\u010A\u060E\x03\x02\x02\x02\u010C\u0610\x03\x02" +
		"\x02\x02\u010E\u0612\x03\x02\x02\x02\u0110\u0616\x03\x02\x02\x02\u0112" +
		"\u061A\x03\x02\x02\x02\u0114\u0624\x03\x02\x02\x02\u0116\u0626\x03\x02" +
		"\x02\x02\u0118\u062C\x03\x02\x02\x02\u011A\u0634\x03\x02\x02\x02\u011C" +
		"\u0646\x03\x02\x02\x02\u011E\u0648\x03\x02\x02\x02\u0120\u064E\x03\x02" +
		"\x02\x02\u0122\u065D\x03\x02\x02\x02\u0124\u0660\x03\x02\x02\x02\u0126" +
		"\u0671\x03\x02\x02\x02\u0128\u0673\x03\x02\x02\x02\u012A\u0675\x03\x02" +
		"\x02\x02\u012C\u067B\x03\x02\x02\x02\u012E\u0681\x03\x02\x02\x02\u0130" +
		"\u068B\x03\x02\x02\x02\u0132\u068F\x03\x02\x02\x02\u0134\u0691\x03\x02" +
		"\x02\x02\u0136\u06A1\x03\x02\x02\x02\u0138\u06B3\x03\x02\x02\x02\u013A" +
		"\u06B5\x03\x02\x02\x02\u013C\u06B7\x03\x02\x02\x02\u013E\u06BF\x03\x02" +
		"\x02\x02\u0140\u06CE\x03\x02\x02\x02\u0142\u06DD\x03\x02\x02\x02\u0144" +
		"\u06E3\x03\x02\x02\x02\u0146\u06E9\x03\x02\x02\x02\u0148\u06EF\x03\x02" +
		"\x02\x02\u014A\u06F3\x03\x02\x02\x02\u014C\u0705\x03\x02\x02\x02\u014E" +
		"\u0707\x03\x02\x02\x02\u0150\u070E\x03\x02\x02\x02\u0152\u0717\x03\x02" +
		"\x02\x02\u0154\u071D\x03\x02\x02\x02\u0156\u0725\x03\x02\x02\x02\u0158" +
		"\u0728\x03\x02\x02\x02\u015A\u0731\x03\x02\x02\x02\u015C\u0738\x03\x02" +
		"\x02\x02\u015E\u0743\x03\x02\x02\x02\u0160\u074D\x03\x02\x02\x02\u0162" +
		"\u0772\x03\x02\x02\x02\u0164\u0774\x03\x02\x02\x02\u0166\u0792\x03\x02" +
		"\x02\x02\u0168\u0799\x03\x02\x02\x02\u016A\u079B\x03\x02\x02\x02\u016C" +
		"\u07A1\x03\x02\x02\x02\u016E\u07CB\x03\x02\x02\x02\u0170\u07CD\x03\x02" +
		"\x02\x02\u0172\u07F6\x03\x02\x02\x02\u0174\u084B\x03\x02\x02\x02\u0176" +
		"\u084D\x03\x02\x02\x02\u0178\u089F\x03\x02\x02\x02\u017A\u08A4\x03\x02" +
		"\x02\x02\u017C\u08B3\x03\x02\x02\x02\u017E\u08B5\x03\x02\x02\x02\u0180" +
		"\u08C1\x03\x02\x02\x02\u0182\u08CD\x03\x02\x02\x02\u0184\u08D9\x03\x02" +
		"\x02\x02\u0186\u08F1\x03\x02\x02\x02\u0188\u0941\x03\x02\x02\x02\u018A" +
		"\u0943\x03\x02\x02\x02\u018C\u0986\x03\x02\x02\x02\u018E\u0988\x03\x02" +
		"\x02\x02\u0190\u09BF\x03\x02\x02\x02\u0192\u09C1\x03\x02\x02\x02\u0194" +
		"\u09EF\x03\x02\x02\x02\u0196\u0A07\x03\x02\x02\x02\u0198\u0A09\x03\x02" +
		"\x02\x02\u019A\u0A13\x03\x02\x02\x02\u019C\u0A1A\x03\x02\x02\x02\u019E" +
		"\u0A1E\x03\x02\x02\x02\u01A0\u0A20\x03\x02\x02\x02\u01A2\u0A2E\x03\x02" +
		"\x02\x02\u01A4\u0A30\x03\x02\x02\x02\u01A6\u0A3A\x03\x02\x02\x02\u01A8" +
		"\u0A3E\x03\x02\x02\x02\u01AA\u0A40\x03\x02\x02\x02\u01AC\u0A47\x03\x02" +
		"\x02\x02\u01AE\u0A49\x03\x02\x02\x02\u01B0\u0A52\x03\x02\x02\x02\u01B2" +
		"\u0A54\x03\x02\x02\x02\u01B4\u0A5F\x03\x02\x02\x02\u01B6\u0A6A\x03\x02" +
		"\x02\x02\u01B8\u0A75\x03\x02\x02\x02\u01BA\u0A80\x03\x02\x02\x02\u01BC" +
		"\u0A8B\x03\x02\x02\x02\u01BE\u0A99\x03\x02\x02\x02\u01C0\u0AB0\x03\x02" +
		"\x02\x02\u01C2\u0AC5\x03\x02\x02\x02\u01C4\u0AD3\x03\x02\x02\x02\u01C6" +
		"\u0AEB\x03\x02\x02\x02\u01C8\u0AED\x03\x02\x02\x02\u01CA\u0AF0\x03\x02" +
		"\x02\x02\u01CC\u0AF9\x03\x02\x02\x02\u01CE\u0AFD\x03\x02\x02\x02\u01D0" +
		"\u0B06\x03\x02\x02\x02\u01D2\u0B09\x03\x02\x02\x02\u01D4\u0B0B\x03\x02" +
		"\x02\x02\u01D6\u0B0E\x03\x02\x02\x02\u01D8\u0B2B\x03\x02\x02\x02\u01DA" +
		"\u0B30\x03\x02\x02\x02\u01DC\u01DD\t\x02\x02\x02\u01DD\x03\x03\x02\x02" +
		"\x02\u01DE\u01E0\x05\xE6t\x02\u01DF\u01DE\x03\x02\x02\x02\u01E0\u01E3" +
		"\x03\x02\x02\x02\u01E1\u01DF\x03\x02\x02\x02\u01E1\u01E2\x03\x02\x02\x02" +
		"\u01E2\u01E4\x03\x02\x02\x02\u01E3\u01E1\x03\x02\x02\x02\u01E4\u01ED\x05" +
		"\x06\x04\x02\u01E5\u01E7\x05\xE6t\x02\u01E6\u01E5\x03\x02\x02\x02\u01E7" +
		"\u01EA\x03\x02\x02\x02\u01E8\u01E6\x03\x02\x02\x02\u01E8\u01E9\x03\x02" +
		"\x02\x02\u01E9\u01EB\x03\x02\x02\x02\u01EA\u01E8\x03\x02\x02\x02\u01EB" +
		"\u01ED\x07\x05\x02\x02\u01EC\u01E1\x03\x02\x02\x02\u01EC\u01E8\x03\x02" +
		"\x02\x02\u01ED\x05\x03\x02\x02\x02\u01EE\u01F1\x05\b\x05\x02\u01EF\u01F1" +
		"\x05\n\x06\x02\u01F0\u01EE\x03\x02\x02\x02\u01F0\u01EF\x03\x02\x02\x02" +
		"\u01F1\x07\x03\x02\x02\x02\u01F2\u01F3\t\x03\x02\x02\u01F3\t\x03\x02\x02" +
		"\x02\u01F4\u01F5\t\x04\x02\x02\u01F5\v\x03\x02\x02\x02\u01F6\u01FA\x05" +
		"\x0E\b\x02\u01F7\u01FA\x05\x1C\x0F\x02\u01F8\u01FA\x05\x1E\x10\x02\u01F9" +
		"\u01F6\x03\x02\x02\x02\u01F9\u01F7\x03\x02\x02\x02\u01F9\u01F8\x03\x02" +
		"\x02\x02\u01FA\r\x03\x02\x02\x02\u01FB\u01FE\x05\x14\v\x02\u01FC\u01FE" +
		"\x05\x1A\x0E\x02\u01FD\u01FB\x03\x02\x02\x02\u01FD\u01FC\x03\x02\x02\x02" +
		"\u01FE\u0203\x03\x02\x02\x02\u01FF\u0202\x05\x12\n\x02\u0200\u0202\x05" +
		"\x18\r\x02\u0201\u01FF\x03\x02\x02\x02\u0201\u0200\x03\x02\x02\x02\u0202" +
		"\u0205\x03\x02\x02\x02\u0203\u0201\x03\x02\x02\x02\u0203\u0204\x03\x02" +
		"\x02\x02\u0204\x0F\x03\x02\x02\x02\u0205\u0203\x03\x02\x02\x02\u0206\u0208" +
		"\x05\xE6t\x02\u0207\u0206\x03\x02\x02\x02\u0208\u020B\x03\x02\x02\x02" +
		"\u0209\u0207\x03\x02\x02\x02\u0209\u020A\x03\x02\x02\x02\u020A\u020C\x03" +
		"\x02\x02\x02\u020B\u0209\x03\x02\x02\x02\u020C\u020E\x07h\x02\x02\u020D" +
		"\u020F\x05*\x16\x02\u020E\u020D\x03\x02\x02\x02\u020E\u020F\x03\x02\x02" +
		"\x02\u020F\u021D\x03\x02\x02\x02\u0210\u0211\x05\x0E\b\x02\u0211\u0215" +
		"\x07C\x02\x02\u0212\u0214\x05\xE6t\x02\u0213\u0212\x03\x02\x02\x02\u0214" +
		"\u0217\x03\x02\x02\x02\u0215\u0213\x03\x02\x02\x02\u0215\u0216\x03\x02" +
		"\x02\x02\u0216\u0218\x03\x02\x02\x02\u0217\u0215\x03\x02\x02\x02\u0218" +
		"\u021A\x07h\x02\x02\u0219\u021B\x05*\x16\x02\u021A\u0219\x03\x02\x02\x02" +
		"\u021A\u021B\x03\x02\x02\x02\u021B\u021D\x03\x02\x02\x02\u021C\u0209\x03" +
		"\x02\x02\x02\u021C\u0210\x03\x02\x02\x02\u021D\x11\x03\x02\x02\x02\u021E" +
		"\u0222\x07C\x02\x02\u021F\u0221\x05\xE6t\x02\u0220\u021F\x03\x02\x02\x02" +
		"\u0221\u0224\x03\x02\x02\x02\u0222\u0220\x03\x02\x02\x02\u0222\u0223\x03" +
		"\x02\x02\x02\u0223\u0225\x03\x02\x02\x02\u0224\u0222\x03\x02\x02\x02\u0225" +
		"\u0227\x07h\x02\x02\u0226\u0228\x05*\x16\x02\u0227\u0226\x03\x02\x02\x02" +
		"\u0227\u0228\x03\x02\x02\x02\u0228\x13\x03\x02\x02\x02\u0229\u022B\x05" +
		"\xE6t\x02\u022A\u0229\x03\x02\x02\x02\u022B\u022E\x03\x02\x02\x02\u022C" +
		"\u022A\x03\x02\x02\x02\u022C\u022D\x03\x02\x02\x02\u022D\u022F\x03\x02" +
		"\x02\x02\u022E\u022C\x03\x02\x02\x02\u022F\u0231\x07h\x02\x02\u0230\u0232" +
		"\x05*\x16\x02\u0231\u0230\x03\x02\x02\x02\u0231\u0232\x03\x02\x02\x02" +
		"\u0232\x15\x03\x02\x02\x02\u0233\u0234\x05\x10\t\x02\u0234\x17\x03\x02" +
		"\x02\x02\u0235\u0236\x05\x12\n\x02\u0236\x19\x03\x02\x02\x02\u0237\u0238" +
		"\x05\x14\v\x02\u0238\x1B\x03\x02\x02\x02\u0239\u023B\x05\xE6t\x02\u023A" +
		"\u0239\x03\x02\x02\x02\u023B\u023E\x03\x02\x02\x02\u023C\u023A\x03\x02" +
		"\x02\x02\u023C\u023D\x03\x02\x02\x02\u023D\u023F\x03\x02\x02\x02\u023E" +
		"\u023C\x03\x02\x02\x02\u023F\u0240\x07h\x02\x02\u0240\x1D\x03\x02\x02" +
		"\x02\u0241\u0242\x05\x04\x03\x02\u0242\u0243\x05 \x11\x02\u0243\u024B" +
		"\x03\x02\x02\x02\u0244\u0245\x05\x0E\b\x02\u0245\u0246\x05 \x11\x02\u0246" +
		"\u024B\x03\x02\x02\x02\u0247\u0248\x05\x1C\x0F\x02\u0248\u0249\x05 \x11" +
		"\x02\u0249\u024B\x03\x02\x02\x02\u024A\u0241\x03\x02\x02\x02\u024A\u0244" +
		"\x03\x02\x02\x02\u024A\u0247\x03\x02\x02\x02\u024B\x1F\x03\x02\x02\x02" +
		"\u024C\u024E\x05\xE6t\x02\u024D\u024C\x03\x02\x02\x02\u024E\u0251\x03" +
		"\x02\x02\x02\u024F\u024D\x03\x02\x02\x02\u024F\u0250\x03\x02\x02\x02\u0250" +
		"\u0252\x03\x02\x02\x02\u0251\u024F\x03\x02\x02\x02\u0252\u0253\x07?\x02" +
		"\x02\u0253\u025E\x07@\x02\x02\u0254\u0256\x05\xE6t\x02\u0255\u0254\x03" +
		"\x02\x02\x02\u0256\u0259\x03\x02\x02\x02\u0257\u0255\x03\x02\x02\x02\u0257" +
		"\u0258\x03\x02\x02\x02\u0258\u025A\x03\x02\x02\x02\u0259\u0257\x03\x02" +
		"\x02\x02\u025A\u025B\x07?\x02\x02\u025B\u025D\x07@\x02\x02\u025C\u0257" +
		"\x03\x02\x02\x02\u025D\u0260\x03\x02\x02\x02\u025E\u025C\x03\x02\x02\x02" +
		"\u025E\u025F\x03\x02\x02\x02\u025F!\x03\x02\x02\x02\u0260\u025E\x03\x02" +
		"\x02\x02\u0261\u0263\x05$\x13\x02\u0262\u0261\x03\x02\x02\x02\u0263\u0266" +
		"\x03\x02\x02\x02\u0264\u0262\x03\x02\x02\x02\u0264\u0265\x03\x02\x02\x02" +
		"\u0265\u0267\x03\x02\x02\x02\u0266\u0264\x03\x02\x02\x02\u0267\u0269\x07" +
		"h\x02\x02\u0268\u026A\x05&\x14\x02\u0269\u0268\x03\x02\x02\x02\u0269\u026A" +
		"\x03\x02\x02\x02\u026A#\x03\x02\x02\x02\u026B\u026C\x05\xE6t\x02\u026C" +
		"%\x03\x02\x02\x02\u026D\u026E\x07\x13\x02\x02\u026E\u0278\x05\x1C\x0F" +
		"\x02\u026F\u0270\x07\x13\x02\x02\u0270\u0274\x05\x0E\b\x02\u0271\u0273" +
		"\x05(\x15\x02\u0272\u0271\x03\x02\x02\x02\u0273\u0276\x03\x02\x02\x02" +
		"\u0274\u0272\x03\x02\x02\x02\u0274\u0275\x03\x02\x02\x02\u0275\u0278\x03" +
		"\x02\x02\x02\u0276\u0274\x03\x02\x02\x02\u0277\u026D\x03\x02\x02\x02\u0277" +
		"\u026F\x03\x02\x02\x02\u0278\'\x03\x02\x02\x02\u0279\u027A\x07W\x02\x02" +
		"\u027A\u027B\x05\x16\f\x02\u027B)\x03\x02\x02\x02\u027C\u027D\x07F\x02" +
		"\x02\u027D\u027E\x05,\x17\x02\u027E\u027F\x07E\x02\x02\u027F+\x03\x02" +
		"\x02\x02\u0280\u0285\x05.\x18\x02\u0281\u0282\x07B\x02\x02\u0282\u0284" +
		"\x05.\x18\x02\u0283\u0281\x03\x02\x02\x02\u0284\u0287\x03\x02\x02\x02" +
		"\u0285\u0283\x03\x02\x02\x02\u0285\u0286\x03\x02\x02\x02\u0286-\x03\x02" +
		"\x02\x02\u0287\u0285\x03\x02\x02\x02\u0288\u028B\x05\f\x07\x02\u0289\u028B" +
		"\x050\x19\x02\u028A\u0288\x03\x02\x02\x02\u028A\u0289\x03\x02\x02\x02" +
		"\u028B/\x03\x02\x02\x02\u028C\u028E\x05\xE6t\x02\u028D\u028C\x03\x02\x02" +
		"\x02\u028E\u0291\x03\x02\x02\x02\u028F\u028D\x03\x02\x02\x02\u028F\u0290" +
		"\x03\x02\x02\x02\u0290\u0292\x03\x02\x02\x02\u0291\u028F\x03\x02\x02\x02" +
		"\u0292\u0294\x07I\x02\x02\u0293\u0295\x052\x1A\x02\u0294\u0293\x03\x02" +
		"\x02\x02\u0294\u0295\x03\x02\x02\x02\u02951\x03\x02\x02\x02\u0296\u0297" +
		"\x07\x13\x02\x02\u0297\u029B\x05\f\x07\x02\u0298\u0299\x07*\x02\x02\u0299" +
		"\u029B\x05\f\x07\x02\u029A\u0296\x03\x02\x02\x02\u029A\u0298\x03\x02\x02" +
		"\x02\u029B3\x03\x02\x02\x02\u029C\u029D\b\x1B\x01\x02\u029D\u029E\x07" +
		"h\x02\x02\u029E\u02A4\x03\x02\x02\x02\u029F\u02A0\f\x03\x02\x02\u02A0" +
		"\u02A1\x07C\x02\x02\u02A1\u02A3\x07h\x02\x02\u02A2\u029F\x03\x02\x02\x02" +
		"\u02A3\u02A6\x03\x02\x02\x02\u02A4\u02A2\x03\x02\x02\x02\u02A4\u02A5\x03" +
		"\x02\x02\x02\u02A55\x03\x02\x02\x02\u02A6\u02A4\x03\x02\x02\x02\u02A7" +
		"\u02AD\x07h\x02\x02\u02A8\u02A9\x058\x1D\x02\u02A9\u02AA\x07C\x02\x02" +
		"\u02AA\u02AB\x07h\x02\x02\u02AB\u02AD\x03\x02\x02\x02\u02AC\u02A7\x03" +
		"\x02\x02\x02\u02AC\u02A8\x03\x02\x02\x02\u02AD7\x03\x02\x02\x02\u02AE" +
		"\u02AF\b\x1D\x01\x02\u02AF\u02B0\x07h\x02\x02\u02B0\u02B6\x03\x02\x02" +
		"\x02\u02B1\u02B2\f\x03\x02\x02\u02B2\u02B3\x07C\x02\x02\u02B3\u02B5\x07" +
		"h\x02\x02\u02B4\u02B1\x03\x02\x02\x02\u02B5\u02B8\x03\x02\x02\x02\u02B6" +
		"\u02B4\x03\x02\x02\x02\u02B6\u02B7\x03\x02\x02\x02\u02B79\x03\x02\x02" +
		"\x02\u02B8\u02B6\x03\x02\x02\x02\u02B9\u02BF\x07h\x02\x02\u02BA\u02BB" +
		"\x05> \x02\u02BB\u02BC\x07C\x02\x02\u02BC\u02BD\x07h\x02\x02\u02BD\u02BF" +
		"\x03\x02\x02\x02\u02BE\u02B9\x03\x02\x02\x02\u02BE\u02BA\x03\x02\x02\x02" +
		"\u02BF;\x03\x02\x02\x02\u02C0\u02C1\x07h\x02\x02\u02C1=\x03\x02\x02\x02" +
		"\u02C2\u02C3\b \x01\x02\u02C3\u02C4\x07h\x02\x02\u02C4\u02CA\x03\x02\x02" +
		"\x02\u02C5\u02C6\f\x03\x02\x02\u02C6\u02C7\x07C\x02\x02\u02C7\u02C9\x07" +
		"h\x02\x02\u02C8\u02C5\x03\x02\x02\x02\u02C9\u02CC\x03\x02\x02\x02\u02CA" +
		"\u02C8\x03\x02\x02\x02\u02CA\u02CB\x03\x02\x02\x02\u02CB?\x03\x02\x02" +
		"\x02\u02CC\u02CA\x03\x02\x02\x02\u02CD\u02CF\x05B\"\x02\u02CE\u02CD\x03" +
		"\x02\x02\x02\u02CE\u02CF\x03\x02\x02\x02\u02CF\u02D3\x03\x02\x02\x02\u02D0" +
		"\u02D2\x05F$\x02\u02D1\u02D0\x03\x02\x02\x02\u02D2\u02D5\x03\x02\x02\x02" +
		"\u02D3\u02D1\x03\x02\x02\x02\u02D3\u02D4\x03\x02\x02\x02\u02D4\u02D9\x03" +
		"\x02\x02\x02\u02D5\u02D3\x03\x02\x02\x02\u02D6\u02D8\x05P)\x02\u02D7\u02D6" +
		"\x03\x02\x02\x02\u02D8\u02DB\x03\x02\x02\x02\u02D9\u02D7\x03\x02\x02\x02" +
		"\u02D9\u02DA\x03\x02\x02\x02\u02DA\u02DC\x03\x02\x02\x02\u02DB\u02D9\x03" +
		"\x02\x02\x02\u02DC\u02DD\x07\x02\x02\x03\u02DDA\x03\x02\x02\x02\u02DE" +
		"\u02E0\x05D#\x02\u02DF\u02DE\x03\x02\x02\x02\u02E0\u02E3\x03\x02\x02\x02" +
		"\u02E1\u02DF\x03\x02\x02\x02\u02E1\u02E2\x03\x02\x02\x02\u02E2\u02E4\x03" +
		"\x02\x02\x02\u02E3\u02E1\x03\x02\x02\x02\u02E4\u02E5\x07\"\x02\x02\u02E5" +
		"\u02E6\x054\x1B\x02\u02E6\u02E7\x07A\x02\x02\u02E7C\x03\x02\x02\x02\u02E8" +
		"\u02E9\x05\xE6t\x02\u02E9E\x03\x02\x02\x02\u02EA\u02EF\x05H%\x02\u02EB" +
		"\u02EF\x05J";
	private static readonly _serializedATNSegment2: string =
		"&\x02\u02EC\u02EF\x05L\'\x02\u02ED\u02EF\x05N(\x02\u02EE\u02EA\x03\x02" +
		"\x02\x02\u02EE\u02EB\x03\x02\x02\x02\u02EE\u02EC\x03\x02\x02\x02\u02EE" +
		"\u02ED\x03\x02\x02\x02\u02EFG\x03\x02\x02\x02\u02F0\u02F1\x07\x1B\x02" +
		"\x02\u02F1\u02F2\x056\x1C\x02\u02F2\u02F3\x07A\x02\x02\u02F3I\x03\x02" +
		"\x02\x02\u02F4\u02F5\x07\x1B\x02\x02\u02F5\u02F6\x058\x1D\x02\u02F6\u02F7" +
		"\x07C\x02\x02\u02F7\u02F8\x07U\x02\x02\u02F8\u02F9\x07A\x02\x02\u02F9" +
		"K\x03\x02\x02\x02\u02FA\u02FB\x07\x1B\x02\x02\u02FB\u02FC\x07(\x02\x02" +
		"\u02FC\u02FD\x056\x1C\x02\u02FD\u02FE\x07C\x02\x02\u02FE\u02FF\x07h\x02" +
		"\x02\u02FF\u0300\x07A\x02\x02\u0300M\x03\x02\x02\x02\u0301\u0302\x07\x1B" +
		"\x02\x02\u0302\u0303\x07(\x02\x02\u0303\u0304\x056\x1C\x02\u0304\u0305" +
		"\x07C\x02\x02\u0305\u0306\x07U\x02\x02\u0306\u0307\x07A\x02\x02\u0307" +
		"O\x03\x02\x02\x02\u0308\u030C\x05R*\x02\u0309\u030C\x05\xC6d\x02\u030A" +
		"\u030C\x07A\x02\x02\u030B\u0308\x03\x02\x02\x02\u030B\u0309\x03\x02\x02" +
		"\x02\u030B\u030A\x03\x02\x02\x02\u030CQ\x03\x02\x02\x02\u030D\u0310\x05" +
		"T+\x02\u030E\u0310\x05\xBA^\x02\u030F\u030D\x03\x02\x02\x02\u030F\u030E" +
		"\x03\x02\x02\x02\u0310S\x03\x02\x02\x02\u0311\u0313\x05\u01DA\xEE\x02" +
		"\u0312\u0311\x03\x02\x02\x02\u0312\u0313\x03\x02\x02\x02\u0313\u0317\x03" +
		"\x02\x02\x02\u0314\u0316\x05V,\x02\u0315\u0314\x03\x02\x02\x02\u0316\u0319" +
		"\x03\x02\x02\x02\u0317\u0315\x03\x02\x02\x02\u0317\u0318\x03\x02\x02\x02" +
		"\u0318\u031A\x03\x02\x02\x02\u0319\u0317\x03\x02\x02\x02\u031A\u031B\x07" +
		"\v\x02\x02\u031B\u031D\x07h\x02\x02\u031C\u031E\x05X-\x02\u031D\u031C" +
		"\x03\x02\x02\x02\u031D\u031E\x03\x02\x02\x02\u031E\u0320\x03\x02\x02\x02" +
		"\u031F\u0321\x05\\/\x02\u0320\u031F\x03\x02\x02\x02\u0320\u0321\x03\x02" +
		"\x02\x02\u0321\u0323\x03\x02\x02\x02\u0322\u0324\x05^0\x02\u0323\u0322" +
		"\x03\x02\x02\x02\u0323\u0324\x03\x02\x02\x02\u0324\u0325\x03\x02\x02\x02" +
		"\u0325\u0326\x05b2\x02\u0326U\x03\x02\x02\x02\u0327\u0330\x05\xE6t\x02" +
		"\u0328\u0330\x07%\x02\x02\u0329\u0330\x07$\x02\x02\u032A\u0330\x07#\x02" +
		"\x02\u032B\u0330\x07\x03\x02\x02\u032C\u0330\x07(\x02\x02\u032D\u0330" +
		"\x07\x14\x02\x02\u032E\u0330\x07)\x02\x02\u032F\u0327\x03\x02\x02\x02" +
		"\u032F\u0328\x03\x02\x02\x02\u032F\u0329\x03\x02\x02\x02\u032F\u032A\x03" +
		"\x02\x02\x02\u032F\u032B\x03\x02\x02\x02\u032F\u032C\x03\x02\x02\x02\u032F" +
		"\u032D\x03\x02\x02\x02\u032F\u032E\x03\x02\x02\x02\u0330W\x03\x02\x02" +
		"\x02\u0331\u0332\x07F\x02\x02\u0332\u0333\x05Z.\x02\u0333\u0334\x07E\x02" +
		"\x02\u0334Y\x03\x02\x02\x02\u0335\u033A\x05\"\x12\x02\u0336\u0337\x07" +
		"B\x02\x02\u0337\u0339\x05\"\x12\x02\u0338\u0336\x03\x02\x02\x02\u0339" +
		"\u033C\x03\x02\x02\x02\u033A\u0338\x03\x02\x02\x02\u033A\u033B\x03\x02" +
		"\x02\x02\u033B[\x03\x02\x02\x02\u033C\u033A\x03\x02\x02\x02\u033D\u033E" +
		"\x07\x13\x02\x02\u033E\u033F\x05\x10\t\x02\u033F]\x03\x02\x02\x02\u0340" +
		"\u0341\x07\x1A\x02\x02\u0341\u0342\x05`1\x02\u0342_\x03\x02\x02\x02\u0343" +
		"\u0348\x05\x16\f\x02\u0344\u0345\x07B\x02\x02\u0345\u0347\x05\x16\f\x02" +
		"\u0346\u0344\x03\x02\x02\x02\u0347\u034A\x03\x02\x02\x02\u0348\u0346\x03" +
		"\x02\x02\x02\u0348\u0349\x03\x02\x02\x02\u0349a\x03\x02\x02\x02\u034A" +
		"\u0348\x03\x02\x02\x02\u034B\u034F\x07=\x02\x02\u034C\u034E\x05d3\x02" +
		"\u034D\u034C\x03\x02\x02\x02\u034E\u0351\x03\x02\x02\x02\u034F\u034D\x03" +
		"\x02\x02\x02\u034F\u0350\x03\x02\x02\x02\u0350\u0352\x03\x02\x02\x02\u0351" +
		"\u034F\x03\x02\x02\x02\u0352\u0353\x07>\x02\x02\u0353c\x03\x02\x02\x02" +
		"\u0354\u0359\x05f4\x02\u0355\u0359\x05\xAAV\x02\u0356\u0359\x05\xACW\x02" +
		"\u0357\u0359\x05\xAEX\x02\u0358\u0354\x03\x02\x02\x02\u0358\u0355\x03" +
		"\x02\x02\x02\u0358\u0356\x03\x02\x02\x02\u0358\u0357\x03\x02\x02\x02\u0359" +
		"e\x03\x02\x02\x02\u035A\u0360\x05h5\x02\u035B\u0360\x05\x8CG\x02\u035C" +
		"\u0360\x05R*\x02\u035D\u0360\x05\xC6d\x02\u035E\u0360\x07A\x02\x02\u035F" +
		"\u035A\x03\x02\x02\x02\u035F\u035B\x03\x02\x02\x02\u035F\u035C\x03\x02" +
		"\x02\x02\u035F\u035D\x03\x02\x02\x02\u035F\u035E\x03\x02\x02\x02\u0360" +
		"g\x03\x02\x02\x02\u0361\u0363\x05\u01DA\xEE\x02\u0362\u0361\x03\x02\x02" +
		"\x02\u0362\u0363\x03\x02\x02\x02\u0363\u0367\x03\x02\x02\x02\u0364\u0366" +
		"\x05j6\x02\u0365\u0364\x03\x02\x02\x02\u0366\u0369\x03\x02\x02\x02\u0367" +
		"\u0365\x03\x02\x02\x02\u0367\u0368\x03\x02\x02\x02\u0368\u036A\x03\x02" +
		"\x02\x02\u0369\u0367\x03\x02\x02\x02\u036A\u036B\x05t;\x02\u036B\u036C" +
		"\x05l7\x02\u036C\u036D\x07A\x02\x02\u036Di\x03\x02\x02\x02\u036E\u0377" +
		"\x05\xE6t\x02\u036F\u0377\x07%\x02\x02\u0370\u0377\x07$\x02\x02\u0371" +
		"\u0377\x07#\x02\x02\u0372\u0377\x07(\x02\x02\u0373\u0377\x07\x14\x02\x02" +
		"\u0374\u0377\x070\x02\x02\u0375\u0377\x073\x02\x02\u0376\u036E\x03\x02" +
		"\x02\x02\u0376\u036F\x03\x02\x02\x02\u0376\u0370\x03\x02\x02\x02\u0376" +
		"\u0371\x03\x02\x02\x02\u0376\u0372\x03\x02\x02\x02\u0376\u0373\x03\x02" +
		"\x02\x02\u0376\u0374\x03\x02\x02\x02\u0376\u0375\x03\x02\x02\x02\u0377" +
		"k\x03\x02\x02\x02\u0378\u037D\x05n8\x02\u0379\u037A\x07B\x02\x02\u037A" +
		"\u037C\x05n8\x02\u037B\u0379\x03\x02\x02\x02\u037C\u037F\x03\x02\x02\x02" +
		"\u037D\u037B\x03\x02\x02\x02\u037D\u037E\x03\x02\x02\x02\u037Em\x03\x02" +
		"\x02\x02\u037F\u037D\x03\x02\x02\x02\u0380\u0383\x05p9\x02\u0381\u0382" +
		"\x07D\x02\x02\u0382\u0384\x05r:\x02\u0383\u0381\x03\x02\x02\x02\u0383" +
		"\u0384\x03\x02\x02\x02\u0384o\x03\x02\x02\x02\u0385\u0387\x07h\x02\x02" +
		"\u0386\u0388\x05 \x11\x02\u0387\u0386\x03\x02\x02\x02\u0387\u0388\x03" +
		"\x02\x02\x02\u0388q\x03\x02\x02\x02\u0389\u038C\x05\u019E\xD0\x02\u038A" +
		"\u038C\x05\xF8}\x02\u038B\u0389\x03\x02\x02\x02\u038B\u038A\x03\x02\x02" +
		"\x02\u038Cs\x03\x02\x02\x02\u038D\u0390\x05v<\x02\u038E\u0390\x05x=\x02" +
		"\u038F\u038D\x03\x02\x02\x02\u038F\u038E\x03\x02\x02\x02\u0390u\x03\x02" +
		"\x02\x02\u0391\u0394\x05\x06\x04\x02\u0392\u0394\x07\x05\x02\x02\u0393" +
		"\u0391\x03\x02\x02\x02\u0393\u0392\x03\x02\x02\x02\u0394w\x03\x02\x02" +
		"\x02\u0395\u0399\x05z>\x02\u0396\u0399\x05\x88E\x02\u0397\u0399\x05\x8A" +
		"F\x02\u0398\u0395\x03\x02\x02\x02\u0398\u0396\x03\x02\x02\x02\u0398\u0397" +
		"\x03\x02\x02\x02\u0399y\x03\x02\x02\x02\u039A\u039D\x05\x80A\x02\u039B" +
		"\u039D\x05\x86D\x02\u039C\u039A\x03\x02\x02\x02\u039C\u039B\x03\x02\x02" +
		"\x02\u039D\u03A2\x03\x02\x02\x02\u039E\u03A1\x05~@\x02\u039F\u03A1\x05" +
		"\x84C\x02\u03A0\u039E\x03\x02\x02\x02\u03A0\u039F\x03\x02\x02\x02\u03A1" +
		"\u03A4\x03\x02\x02\x02\u03A2\u03A0\x03\x02\x02\x02\u03A2\u03A3\x03\x02" +
		"\x02\x02\u03A3{\x03\x02\x02\x02\u03A4\u03A2\x03\x02\x02\x02\u03A5\u03A7" +
		"\x07h\x02\x02\u03A6\u03A8\x05*\x16\x02\u03A7\u03A6\x03\x02\x02\x02\u03A7" +
		"\u03A8\x03\x02\x02\x02\u03A8\u03B6\x03\x02\x02\x02\u03A9\u03AA\x05z>\x02" +
		"\u03AA\u03AE\x07C\x02\x02\u03AB\u03AD\x05\xE6t\x02\u03AC\u03AB\x03\x02" +
		"\x02\x02\u03AD\u03B0\x03\x02\x02\x02\u03AE\u03AC\x03\x02\x02\x02\u03AE" +
		"\u03AF\x03\x02\x02\x02\u03AF\u03B1\x03\x02\x02\x02\u03B0\u03AE\x03\x02" +
		"\x02\x02\u03B1\u03B3\x07h\x02\x02\u03B2\u03B4\x05*\x16\x02\u03B3\u03B2" +
		"\x03\x02\x02\x02\u03B3\u03B4\x03\x02\x02\x02\u03B4\u03B6\x03\x02\x02\x02" +
		"\u03B5\u03A5\x03\x02\x02\x02\u03B5\u03A9\x03\x02\x02\x02\u03B6}\x03\x02" +
		"\x02\x02\u03B7\u03BB\x07C\x02\x02\u03B8\u03BA\x05\xE6t\x02\u03B9\u03B8" +
		"\x03\x02\x02\x02\u03BA\u03BD\x03\x02\x02\x02\u03BB\u03B9\x03\x02\x02\x02" +
		"\u03BB\u03BC\x03\x02\x02\x02\u03BC\u03BE\x03\x02\x02\x02\u03BD\u03BB\x03" +
		"\x02\x02\x02\u03BE\u03C0\x07h\x02\x02\u03BF\u03C1\x05*\x16\x02\u03C0\u03BF" +
		"\x03\x02\x02\x02\u03C0\u03C1\x03\x02\x02\x02\u03C1\x7F\x03\x02\x02\x02" +
		"\u03C2\u03C4\x07h\x02\x02\u03C3\u03C5\x05*\x16\x02\u03C4\u03C3\x03\x02" +
		"\x02\x02\u03C4\u03C5\x03\x02\x02\x02\u03C5\x81\x03\x02\x02\x02\u03C6\u03C7" +
		"\x05|?\x02\u03C7\x83\x03\x02\x02\x02\u03C8\u03C9\x05~@\x02\u03C9\x85\x03" +
		"\x02\x02\x02\u03CA\u03CB\x05\x80A\x02\u03CB\x87\x03\x02\x02\x02\u03CC" +
		"\u03CD\x07h\x02\x02\u03CD\x89\x03\x02\x02\x02\u03CE\u03CF\x05v<\x02\u03CF" +
		"\u03D0\x05 \x11\x02\u03D0\u03D8\x03\x02\x02\x02\u03D1\u03D2\x05z>\x02" +
		"\u03D2\u03D3\x05 \x11\x02\u03D3\u03D8\x03\x02\x02\x02\u03D4\u03D5\x05" +
		"\x88E\x02\u03D5\u03D6\x05 \x11\x02\u03D6\u03D8\x03\x02\x02\x02\u03D7\u03CE" +
		"\x03\x02\x02\x02\u03D7\u03D1\x03\x02\x02\x02\u03D7\u03D4\x03\x02\x02\x02" +
		"\u03D8\x8B\x03\x02\x02\x02\u03D9\u03DB\x05\u01DA\xEE\x02\u03DA\u03D9\x03" +
		"\x02\x02\x02\u03DA\u03DB\x03\x02\x02\x02\u03DB\u03DF\x03\x02\x02\x02\u03DC" +
		"\u03DE\x05\x8EH\x02\u03DD\u03DC\x03\x02\x02\x02\u03DE\u03E1\x03\x02\x02" +
		"\x02\u03DF\u03DD\x03\x02\x02\x02\u03DF\u03E0\x03\x02\x02\x02\u03E0\u03E2" +
		"\x03\x02\x02\x02\u03E1\u03DF\x03\x02\x02\x02\u03E2\u03E3\x05\x90I\x02" +
		"\u03E3\u03E4\x05\xA8U\x02\u03E4\x8D\x03\x02\x02\x02\u03E5\u03F0\x05\xE6" +
		"t\x02\u03E6\u03F0\x07%\x02\x02\u03E7\u03F0\x07$\x02\x02\u03E8\u03F0\x07" +
		"#\x02\x02\u03E9\u03F0\x07\x03\x02\x02\u03EA\u03F0\x07(\x02\x02\u03EB\u03F0" +
		"\x07\x14\x02\x02\u03EC\u03F0\x07,\x02\x02\u03ED\u03F0\x07 \x02\x02\u03EE" +
		"\u03F0\x07)\x02\x02\u03EF\u03E5\x03\x02\x02\x02\u03EF\u03E6\x03\x02\x02" +
		"\x02\u03EF\u03E7\x03\x02\x02\x02\u03EF\u03E8\x03\x02\x02\x02\u03EF\u03E9" +
		"\x03\x02\x02\x02\u03EF\u03EA\x03\x02\x02\x02\u03EF\u03EB\x03\x02\x02\x02" +
		"\u03EF\u03EC\x03\x02\x02\x02\u03EF\u03ED\x03\x02\x02\x02\u03EF\u03EE\x03" +
		"\x02\x02\x02\u03F0\x8F\x03\x02\x02\x02\u03F1\u03F2\x05\x92J\x02\u03F2" +
		"\u03F4\x05\x94K\x02\u03F3\u03F5\x05\xA2R\x02\u03F4\u03F3\x03\x02\x02\x02" +
		"\u03F4\u03F5\x03\x02\x02\x02\u03F5\u0403\x03\x02\x02\x02\u03F6\u03FA\x05" +
		"X-\x02\u03F7\u03F9\x05\xE6t\x02\u03F8\u03F7\x03\x02\x02\x02\u03F9\u03FC" +
		"\x03\x02\x02\x02\u03FA\u03F8\x03\x02\x02\x02\u03FA\u03FB\x03\x02\x02\x02" +
		"\u03FB\u03FD\x03\x02\x02\x02\u03FC\u03FA\x03\x02\x02\x02\u03FD\u03FE\x05" +
		"\x92J\x02\u03FE\u0400\x05\x94K\x02\u03FF\u0401\x05\xA2R\x02\u0400\u03FF" +
		"\x03\x02\x02\x02\u0400\u0401\x03\x02\x02\x02\u0401\u0403\x03\x02\x02\x02" +
		"\u0402\u03F1\x03\x02\x02\x02\u0402\u03F6\x03\x02\x02\x02\u0403\x91\x03" +
		"\x02\x02\x02\u0404\u0407\x05t;\x02\u0405\u0407\x072\x02\x02\u0406\u0404" +
		"\x03\x02\x02\x02\u0406\u0405\x03\x02\x02\x02\u0407\x93\x03\x02\x02\x02" +
		"\u0408\u0409\x07h\x02\x02\u0409\u040B\x07;\x02\x02\u040A\u040C\x05\x96" +
		"L\x02\u040B\u040A\x03\x02\x02\x02\u040B\u040C\x03\x02\x02\x02\u040C\u040D" +
		"\x03\x02\x02\x02\u040D\u040F\x07<\x02\x02\u040E\u0410\x05 \x11\x02\u040F" +
		"\u040E\x03\x02\x02\x02\u040F\u0410\x03\x02\x02\x02\u0410\x95\x03\x02\x02" +
		"\x02\u0411\u0418\x05\xA0Q\x02\u0412\u0413\x05\x98M\x02\u0413\u0414\x07" +
		"B\x02\x02\u0414\u0415\x05\x9EP\x02\u0415\u0418\x03\x02\x02\x02\u0416\u0418" +
		"\x05\x9EP\x02\u0417\u0411\x03\x02\x02\x02\u0417\u0412\x03\x02\x02\x02" +
		"\u0417\u0416\x03\x02\x02\x02\u0418\x97\x03\x02\x02\x02\u0419\u041E\x05" +
		"\x9AN\x02\u041A\u041B\x07B\x02\x02\u041B\u041D\x05\x9AN\x02\u041C\u041A" +
		"\x03\x02\x02\x02\u041D\u0420\x03\x02\x02\x02\u041E\u041C\x03\x02\x02\x02" +
		"\u041E\u041F\x03\x02\x02\x02\u041F\u042A\x03\x02\x02\x02\u0420\u041E\x03" +
		"\x02\x02\x02\u0421\u0426\x05\xA0Q\x02\u0422\u0423\x07B\x02\x02\u0423\u0425" +
		"\x05\x9AN\x02\u0424\u0422\x03\x02\x02\x02\u0425\u0428\x03\x02\x02\x02" +
		"\u0426\u0424\x03\x02\x02\x02\u0426\u0427\x03\x02\x02\x02\u0427\u042A\x03" +
		"\x02\x02\x02\u0428\u0426\x03\x02\x02\x02\u0429\u0419\x03\x02\x02\x02\u0429" +
		"\u0421\x03\x02\x02\x02\u042A\x99\x03\x02\x02\x02\u042B\u042D\x05\x9CO" +
		"\x02\u042C\u042B\x03\x02\x02\x02\u042D\u0430\x03\x02\x02\x02\u042E\u042C" +
		"\x03\x02\x02\x02\u042E\u042F\x03\x02\x02\x02\u042F\u0431\x03\x02\x02\x02" +
		"\u0430\u042E\x03\x02\x02\x02\u0431\u0432\x05t;\x02\u0432\u0433\x05p9\x02" +
		"\u0433\x9B\x03\x02\x02\x02\u0434\u0437\x05\xE6t\x02\u0435\u0437\x07\x14" +
		"\x02\x02\u0436\u0434\x03\x02\x02\x02\u0436\u0435\x03\x02\x02\x02\u0437" +
		"\x9D\x03\x02\x02\x02\u0438\u043A\x05\x9CO\x02\u0439\u0438\x03\x02\x02" +
		"\x02\u043A\u043D\x03\x02\x02\x02\u043B\u0439\x03\x02\x02\x02\u043B\u043C" +
		"\x03\x02\x02\x02\u043C\u043E\x03\x02\x02\x02\u043D\u043B\x03\x02\x02\x02" +
		"\u043E\u0442\x05t;\x02\u043F\u0441\x05\xE6t\x02\u0440\u043F\x03\x02\x02" +
		"\x02\u0441\u0444\x03\x02\x02\x02\u0442\u0440\x03\x02\x02\x02\u0442\u0443" +
		"\x03\x02\x02\x02\u0443\u0445\x03\x02\x02\x02\u0444\u0442\x03\x02\x02\x02" +
		"\u0445\u0446\x07j\x02\x02\u0446\u0447\x05p9\x02\u0447\u044A\x03\x02\x02" +
		"\x02\u0448\u044A\x05\x9AN\x02\u0449\u043B\x03\x02\x02\x02\u0449\u0448" +
		"\x03\x02\x02\x02\u044A\x9F\x03\x02\x02\x02\u044B\u044D\x05\xE6t\x02\u044C" +
		"\u044B\x03\x02\x02\x02\u044D\u0450\x03\x02\x02\x02\u044E\u044C\x03\x02" +
		"\x02\x02\u044E\u044F\x03\x02\x02\x02\u044F\u0451\x03\x02\x02\x02\u0450" +
		"\u044E\x03\x02\x02\x02\u0451\u0454\x05t;\x02\u0452\u0453\x07h\x02\x02" +
		"\u0453\u0455\x07C\x02\x02\u0454\u0452\x03\x02\x02\x02\u0454\u0455\x03" +
		"\x02\x02\x02\u0455\u0456\x03\x02\x02\x02\u0456\u0457\x07-\x02\x02\u0457" +
		"\xA1\x03\x02\x02\x02\u0458\u0459\x07/\x02\x02\u0459\u045A\x05\xA4S\x02" +
		"\u045A\xA3\x03\x02\x02\x02\u045B\u0460\x05\xA6T\x02\u045C\u045D\x07B\x02" +
		"\x02\u045D\u045F\x05\xA6T\x02\u045E\u045C\x03\x02\x02\x02\u045F\u0462" +
		"\x03\x02\x02\x02\u0460\u045E\x03\x02\x02\x02\u0460\u0461\x03\x02\x02\x02" +
		"\u0461\xA5\x03\x02\x02\x02\u0462\u0460\x03\x02\x02\x02\u0463\u0466\x05" +
		"\x10\t\x02\u0464\u0466\x05\x1C\x0F\x02\u0465\u0463\x03\x02\x02\x02\u0465" +
		"\u0464\x03\x02\x02\x02\u0466\xA7\x03\x02\x02\x02\u0467\u046A\x05\xFC\x7F" +
		"\x02\u0468\u046A\x07A\x02\x02\u0469\u0467\x03\x02\x02\x02\u0469\u0468" +
		"\x03\x02\x02\x02\u046A\xA9\x03\x02\x02\x02\u046B\u046C\x05\xFC\x7F\x02" +
		"\u046C\xAB\x03\x02\x02\x02\u046D\u046E\x07(\x02\x02\u046E\u046F\x05\xFC" +
		"\x7F\x02\u046F\xAD\x03\x02\x02\x02\u0470\u0472\x05\xB0Y\x02\u0471\u0470" +
		"\x03\x02\x02\x02\u0472\u0475\x03\x02\x02\x02\u0473\u0471\x03\x02\x02\x02" +
		"\u0473\u0474\x03\x02\x02\x02\u0474\u0476\x03\x02\x02\x02\u0475\u0473\x03" +
		"\x02\x02\x02\u0476\u0478\x05\xB2Z\x02\u0477\u0479\x05\xA2R\x02\u0478\u0477" +
		"\x03\x02\x02\x02\u0478\u0479\x03\x02\x02\x02\u0479\u047A\x03\x02\x02\x02" +
		"\u047A\u047B\x05\xB6\\\x02\u047B\xAF\x03\x02\x02\x02\u047C\u0481\x05\xE6" +
		"t\x02\u047D\u0481\x07%\x02\x02\u047E\u0481\x07$\x02\x02\u047F\u0481\x07" +
		"#\x02\x02\u0480\u047C\x03\x02\x02\x02\u0480\u047D\x03\x02\x02\x02\u0480" +
		"\u047E\x03\x02\x02\x02\u0480\u047F\x03\x02\x02\x02\u0481\xB1\x03\x02\x02" +
		"\x02\u0482\u0484\x05X-\x02\u0483\u0482\x03\x02\x02\x02\u0483\u0484\x03" +
		"\x02\x02\x02\u0484\u0485\x03\x02\x02\x02\u0485\u0486\x05\xB4[\x02\u0486" +
		"\u0488\x07;\x02\x02\u0487\u0489\x05\x96L\x02\u0488\u0487\x03\x02\x02\x02" +
		"\u0488\u0489\x03\x02\x02\x02\u0489\u048A\x03\x02\x02\x02\u048A\u048B\x07" +
		"<\x02\x02\u048B\xB3\x03\x02\x02\x02\u048C\u048D\x07h\x02\x02\u048D\xB5" +
		"\x03\x02\x02\x02\u048E\u0490\x07=\x02\x02\u048F\u0491\x05\xB8]\x02\u0490" +
		"\u048F\x03\x02\x02\x02\u0490\u0491\x03\x02\x02\x02\u0491\u0493\x03\x02" +
		"\x02\x02\u0492\u0494\x05\xFE\x80\x02\u0493\u0492\x03\x02\x02\x02\u0493" +
		"\u0494\x03\x02\x02\x02\u0494\u0495\x03\x02\x02\x02\u0495\u0496\x07>\x02" +
		"\x02\u0496\xB7\x03\x02\x02\x02\u0497\u0499\x05*\x16\x02\u0498\u0497\x03" +
		"\x02\x02\x02\u0498\u0499\x03\x02\x02\x02\u0499\u049A\x03\x02\x02\x02\u049A" +
		"\u049B\x07-\x02\x02\u049B\u049D\x07;\x02\x02\u049C\u049E\x05\u018E\xC8" +
		"\x02\u049D\u049C\x03\x02\x02\x02\u049D\u049E\x03\x02\x02\x02\u049E\u049F" +
		"\x03\x02\x02\x02\u049F\u04A0\x07<\x02\x02\u04A0\u04C6\x07A\x02\x02\u04A1" +
		"\u04A3\x05*\x16\x02\u04A2\u04A1\x03\x02\x02\x02\u04A2\u04A3\x03\x02\x02" +
		"\x02\u04A3\u04A4\x03\x02\x02\x02\u04A4\u04A5\x07*\x02\x02\u04A5\u04A7" +
		"\x07;\x02\x02\u04A6\u04A8\x05\u018E\xC8\x02\u04A7\u04A6\x03\x02\x02\x02" +
		"\u04A7\u04A8\x03\x02\x02\x02\u04A8\u04A9\x03\x02\x02\x02\u04A9\u04AA\x07" +
		"<\x02\x02\u04AA\u04C6\x07A\x02\x02\u04AB\u04AC\x05:\x1E\x02\u04AC\u04AE" +
		"\x07C\x02\x02\u04AD\u04AF\x05*\x16\x02\u04AE\u04AD\x03\x02\x02\x02\u04AE" +
		"\u04AF\x03\x02\x02\x02\u04AF\u04B0\x03\x02\x02\x02\u04B0\u04B1\x07*\x02" +
		"\x02\u04B1\u04B3\x07;\x02\x02\u04B2\u04B4\x05\u018E\xC8\x02\u04B3\u04B2" +
		"\x03\x02\x02\x02\u04B3\u04B4\x03\x02\x02\x02\u04B4\u04B5\x03\x02\x02\x02" +
		"\u04B5\u04B6\x07<\x02\x02\u04B6\u04B7\x07A\x02\x02\u04B7\u04C6\x03\x02" +
		"\x02\x02\u04B8\u04B9\x05\u0160\xB1\x02\u04B9\u04BB\x07C\x02\x02\u04BA" +
		"\u04BC\x05*\x16\x02\u04BB\u04BA\x03\x02\x02\x02\u04BB\u04BC\x03\x02\x02" +
		"\x02\u04BC\u04BD\x03\x02\x02\x02\u04BD\u04BE\x07*\x02\x02\u04BE\u04C0" +
		"\x07;\x02\x02\u04BF\u04C1\x05\u018E\xC8\x02\u04C0\u04BF\x03\x02\x02\x02" +
		"\u04C0\u04C1\x03\x02\x02\x02\u04C1\u04C2\x03\x02\x02\x02\u04C2\u04C3\x07" +
		"<\x02\x02\u04C3\u04C4\x07A\x02\x02\u04C4\u04C6\x03\x02\x02\x02\u04C5\u0498" +
		"\x03\x02\x02\x02\u04C5\u04A2\x03\x02\x02\x02\u04C5\u04AB\x03\x02\x02\x02" +
		"\u04C5\u04B8\x03\x02\x02\x02\u04C6\xB9\x03\x02\x02\x02\u04C7\u04C9\x05" +
		"V,\x02\u04C8\u04C7\x03\x02\x02\x02\u04C9\u04CC\x03\x02\x02\x02\u04CA\u04C8" +
		"\x03\x02\x02\x02\u04CA\u04CB\x03\x02\x02\x02\u04CB\u04CD\x03\x02\x02\x02" +
		"\u04CC\u04CA\x03\x02\x02\x02\u04CD\u04CE\x07\x12\x02\x02\u04CE\u04D0\x07" +
		"h\x02\x02\u04CF\u04D1\x05^0\x02\u04D0\u04CF\x03\x02\x02\x02\u04D0\u04D1" +
		"\x03\x02\x02\x02\u04D1\u04D2\x03\x02\x02\x02\u04D2\u04D3\x05\xBC_\x02" +
		"\u04D3\xBB\x03\x02\x02\x02\u04D4\u04D6\x07=\x02\x02\u04D5\u04D7\x05\xBE" +
		"`\x02\u04D6\u04D5\x03\x02\x02\x02\u04D6\u04D7\x03\x02\x02\x02\u04D7\u04D9" +
		"\x03\x02\x02\x02\u04D8\u04DA\x07B\x02\x02\u04D9\u04D8\x03\x02\x02\x02" +
		"\u04D9\u04DA\x03\x02\x02\x02\u04DA\u04DC\x03\x02\x02\x02\u04DB\u04DD\x05" +
		"\xC4c\x02\u04DC\u04DB\x03\x02\x02\x02\u04DC\u04DD\x03\x02\x02\x02\u04DD" +
		"\u04DE\x03\x02\x02\x02\u04DE\u04DF\x07>\x02\x02\u04DF\xBD\x03\x02\x02" +
		"\x02\u04E0\u04E5\x05\xC0a\x02\u04E1\u04E2\x07B\x02\x02\u04E2\u04E4\x05" +
		"\xC0a\x02\u04E3\u04E1\x03\x02\x02\x02\u04E4\u04E7\x03\x02\x02\x02\u04E5" +
		"\u04E3\x03\x02\x02\x02\u04E5\u04E6\x03\x02\x02\x02\u04E6\xBF\x03\x02\x02" +
		"\x02\u04E7\u04E5\x03\x02\x02\x02\u04E8\u04EA\x05\xC2b\x02\u04E9\u04E8" +
		"\x03\x02\x02\x02\u04EA\u04ED\x03\x02\x02\x02\u04EB\u04E9\x03\x02\x02\x02" +
		"\u04EB\u04EC\x03\x02\x02\x02\u04EC\u04EE\x03\x02\x02\x02\u04ED\u04EB\x03" +
		"\x02\x02\x02\u04EE\u04F4\x07h\x02\x02\u04EF\u04F1\x07;\x02\x02\u04F0\u04F2" +
		"\x05\u018E\xC8\x02\u04F1\u04F0\x03\x02\x02\x02\u04F1\u04F2\x03\x02\x02" +
		"\x02\u04F2\u04F3\x03\x02\x02\x02\u04F3\u04F5\x07<\x02\x02\u04F4\u04EF" +
		"\x03\x02\x02\x02\u04F4\u04F5\x03\x02\x02\x02\u04F5\u04F7\x03\x02\x02\x02" +
		"\u04F6\u04F8\x05b2\x02\u04F7\u04F6\x03\x02\x02\x02\u04F7\u04F8\x03\x02" +
		"\x02\x02\u04F8\xC1\x03\x02\x02\x02\u04F9\u04FA\x05\xE6t\x02\u04FA\xC3" +
		"\x03\x02\x02\x02\u04FB\u04FF\x07A\x02\x02\u04FC\u04FE\x05d3\x02\u04FD" +
		"\u04FC\x03\x02\x02\x02\u04FE\u0501\x03\x02\x02\x02\u04FF\u04FD\x03\x02" +
		"\x02\x02\u04FF\u0500\x03\x02\x02\x02\u0500\xC5\x03\x02\x02\x02\u0501\u04FF" +
		"\x03\x02\x02\x02\u0502\u0505\x05\xC8e\x02\u0503\u0505\x05\xDAn\x02\u0504" +
		"\u0502\x03\x02\x02\x02\u0504\u0503\x03\x02\x02\x02\u0505\xC7\x03\x02\x02" +
		"\x02\u0506\u0508\x05\xCAf\x02\u0507\u0506\x03\x02\x02\x02\u0508\u050B" +
		"\x03\x02\x02\x02\u0509\u0507\x03\x02\x02\x02\u0509\u050A\x03\x02\x02\x02" +
		"\u050A\u050C\x03\x02\x02\x02\u050B\u0509\x03\x02\x02\x02\u050C\u050D\x07" +
		"\x1E\x02\x02\u050D\u050F\x07h\x02\x02\u050E\u0510\x05X-\x02\u050F\u050E" +
		"\x03\x02\x02\x02\u050F\u0510\x03\x02\x02\x02\u0510\u0512\x03\x02\x02\x02" +
		"\u0511\u0513\x05\xCCg\x02\u0512\u0511\x03\x02\x02\x02\u0512\u0513\x03" +
		"\x02\x02\x02\u0513\u0514\x03\x02\x02\x02\u0514\u0515\x05\xCEh\x02\u0515" +
		"\xC9\x03\x02\x02\x02\u0516\u051E\x05\xE6t\x02\u0517\u051E\x07%\x02\x02" +
		"\u0518\u051E\x07$\x02\x02\u0519\u051E\x07#\x02\x02\u051A\u051E\x07\x03" +
		"\x02\x02\u051B\u051E\x07(\x02\x02\u051C\u051E\x07)\x02\x02\u051D\u0516" +
		"\x03\x02\x02\x02\u051D\u0517\x03\x02\x02\x02\u051D\u0518\x03\x02\x02\x02" +
		"\u051D\u0519\x03\x02\x02\x02\u051D\u051A\x03\x02\x02\x02\u051D\u051B\x03" +
		"\x02\x02\x02\u051D\u051C\x03\x02\x02\x02\u051E\xCB\x03\x02\x02\x02\u051F" +
		"\u0520\x07\x13\x02\x02\u0520\u0521\x05`1\x02\u0521\xCD\x03\x02\x02\x02" +
		"\u0522\u0526\x07=\x02\x02\u0523\u0525\x05\xD0i\x02\u0524\u0523\x03\x02" +
		"\x02\x02\u0525\u0528\x03\x02\x02\x02\u0526\u0524\x03\x02\x02\x02\u0526" +
		"\u0527\x03\x02\x02\x02\u0527\u0529\x03\x02\x02\x02\u0528\u0526\x03\x02" +
		"\x02\x02\u0529\u052A\x07>\x02\x02\u052A\xCF\x03\x02\x02\x02\u052B\u0531" +
		"\x05\xD2j\x02\u052C\u0531\x05\xD6l\x02\u052D\u0531\x05R*\x02\u052E\u0531" +
		"\x05\xC6d\x02\u052F\u0531\x07A\x02\x02\u0530\u052B\x03\x02\x02\x02\u0530" +
		"\u052C\x03\x02\x02\x02\u0530\u052D\x03\x02\x02\x02\u0530\u052E\x03\x02" +
		"\x02\x02\u0530\u052F\x03\x02\x02\x02\u0531\xD1\x03\x02\x02\x02\u0532\u0534" +
		"\x05\xD4k\x02\u0533\u0532\x03\x02\x02\x02\u0534\u0537\x03\x02\x02\x02" +
		"\u0535\u0533\x03\x02\x02\x02\u0535\u0536\x03\x02\x02\x02\u0536\u0538\x03" +
		"\x02\x02\x02\u0537\u0535\x03\x02\x02\x02\u0538\u0539\x05t;\x02\u0539\u053A" +
		"\x05l7\x02\u053A\u053B\x07A\x02\x02\u053B\xD3\x03\x02\x02\x02\u053C\u0541" +
		"\x05\xE6t\x02\u053D\u0541\x07%\x02\x02\u053E\u0541\x07(\x02\x02\u053F" +
		"\u0541\x07\x14\x02\x02\u0540\u053C\x03\x02\x02\x02\u0540\u053D\x03\x02" +
		"\x02\x02\u0540\u053E\x03\x02\x02\x02\u0540\u053F\x03\x02\x02\x02\u0541" +
		"\xD5\x03\x02\x02\x02\u0542\u0544\x05\xD8m\x02\u0543\u0542\x03\x02\x02" +
		"\x02\u0544\u0547\x03\x02\x02\x02\u0545\u0543\x03\x02\x02\x02\u0545\u0546" +
		"\x03\x02\x02\x02\u0546\u0548\x03\x02\x02\x02\u0547\u0545\x03\x02\x02\x02" +
		"\u0548\u0549\x05\x90I\x02\u0549\u054A\x05\xA8U\x02\u054A\xD7\x03\x02\x02" +
		"\x02\u054B\u0552\x05\xE6t\x02\u054C\u0552\x07%\x02\x02\u054D\u0552\x07" +
		"\x03\x02\x02\u054E\u0552\x07\x0E\x02\x02\u054F\u0552\x07(\x02\x02\u0550" +
		"\u0552\x07)\x02\x02\u0551\u054B\x03\x02\x02\x02\u0551\u054C\x03\x02\x02" +
		"\x02\u0551\u054D\x03\x02\x02\x02\u0551\u054E\x03\x02\x02\x02\u0551\u054F" +
		"\x03\x02\x02\x02\u0551\u0550\x03\x02\x02\x02\u0552\xD9\x03\x02\x02\x02" +
		"\u0553\u0555\x05\xCAf\x02\u0554\u0553\x03\x02\x02\x02\u0555\u0558\x03" +
		"\x02\x02\x02\u0556\u0554\x03\x02\x02\x02\u0556\u0557\x03\x02\x02\x02\u0557" +
		"\u0559\x03\x02\x02\x02\u0558\u0556\x03\x02\x02\x02\u0559\u055A\x07i\x02" +
		"\x02\u055A\u055B\x07\x1E\x02\x02\u055B\u055C\x07h\x02\x02\u055C\u055D" +
		"\x05\xDCo\x02\u055D\xDB\x03\x02\x02\x02\u055E\u0562\x07=\x02\x02\u055F" +
		"\u0561\x05\xDEp\x02\u0560\u055F\x03\x02\x02\x02\u0561\u0564\x03\x02\x02" +
		"\x02\u0562\u0560\x03\x02\x02\x02\u0562\u0563\x03\x02\x02\x02\u0563\u0565" +
		"\x03\x02\x02\x02\u0564\u0562\x03\x02\x02\x02\u0565\u0566\x07>\x02\x02" +
		"\u0566\xDD\x03\x02\x02\x02\u0567\u056D\x05\xE0q\x02\u0568\u056D\x05\xD2" +
		"j\x02\u0569\u056D\x05R*\x02\u056A\u056D\x05\xC6d\x02\u056B\u056D\x07A" +
		"\x02\x02\u056C\u0567\x03\x02\x02\x02\u056C\u0568\x03\x02\x02\x02\u056C" +
		"\u0569\x03\x02\x02\x02\u056C\u056A\x03\x02\x02\x02\u056C\u056B\x03\x02" +
		"\x02\x02\u056D\xDF\x03\x02\x02\x02\u056E\u0570\x05\xE2r\x02\u056F\u056E" +
		"\x03\x02\x02\x02\u0570\u0573\x03\x02\x02\x02\u0571\u056F\x03\x02\x02\x02" +
		"\u0571\u0572\x03\x02\x02\x02\u0572\u0574\x03\x02\x02\x02\u0573\u0571\x03" +
		"\x02\x02\x02\u0574\u0575\x05t;\x02\u0575\u0576\x07h\x02\x02\u0576\u0577" +
		"\x07;\x02\x02\u0577\u0579\x07<\x02\x02\u0578\u057A\x05 \x11\x02\u0579" +
		"\u0578\x03\x02\x02\x02\u0579\u057A\x03\x02\x02\x02\u057A\u057C\x03\x02" +
		"\x02\x02\u057B\u057D\x05\xE4s\x02\u057C\u057B\x03\x02\x02\x02\u057C\u057D" +
		"\x03\x02\x02\x02\u057D\u057E\x03\x02\x02\x02\u057E\u057F\x07A\x02\x02" +
		"\u057F\xE1\x03\x02\x02\x02\u0580\u0584\x05\xE6t\x02\u0581\u0584\x07%\x02" +
		"\x02\u0582\u0584\x07\x03\x02\x02\u0583\u0580\x03\x02\x02\x02\u0583\u0581" +
		"\x03\x02\x02\x02\u0583\u0582\x03\x02\x02\x02\u0584\xE3\x03\x02\x02\x02" +
		"\u0585\u0586\x07\x0E\x02\x02\u0586\u0587\x05\xEEx\x02\u0587\xE5\x03\x02" +
		"\x02\x02\u0588\u058C\x05\xE8u\x02\u0589\u058C\x05\xF4{\x02\u058A\u058C" +
		"\x05\xF6|\x02\u058B\u0588\x03\x02\x02\x02\u058B\u0589\x03\x02\x02\x02" +
		"\u058B\u058A\x03\x02\x02\x02\u058C\xE7\x03\x02\x02\x02\u058D\u058E\x07" +
		"i\x02\x02";
	private static readonly _serializedATNSegment3: string =
		"\u058E\u058F\x056\x1C\x02\u058F\u0591\x07;\x02\x02\u0590\u0592\x05\xEA" +
		"v\x02\u0591\u0590\x03\x02\x02\x02\u0591\u0592\x03\x02\x02\x02\u0592\u0593" +
		"\x03\x02\x02\x02\u0593\u0594\x07<\x02\x02\u0594\xE9\x03\x02\x02\x02\u0595" +
		"\u059A\x05\xECw\x02\u0596\u0597\x07B\x02\x02\u0597\u0599\x05\xECw\x02" +
		"\u0598\u0596\x03\x02\x02\x02\u0599\u059C\x03\x02\x02\x02\u059A\u0598\x03" +
		"\x02\x02\x02\u059A\u059B\x03\x02\x02\x02\u059B\xEB\x03\x02\x02\x02\u059C" +
		"\u059A\x03\x02\x02\x02\u059D\u059E\x07h\x02\x02\u059E\u059F\x07D\x02\x02" +
		"\u059F\u05A0\x05\xEEx\x02\u05A0\xED\x03\x02\x02\x02\u05A1\u05A5\x05\u01B0" +
		"\xD9\x02\u05A2\u05A5\x05\xF0y\x02\u05A3\u05A5\x05\xE6t\x02\u05A4\u05A1" +
		"\x03\x02\x02\x02\u05A4\u05A2\x03\x02\x02\x02\u05A4\u05A3\x03\x02\x02\x02" +
		"\u05A5\xEF\x03\x02\x02\x02\u05A6\u05A8\x07=\x02\x02\u05A7\u05A9\x05\xF2" +
		"z\x02\u05A8\u05A7\x03\x02\x02\x02\u05A8\u05A9\x03\x02\x02\x02\u05A9\u05AB" +
		"\x03\x02\x02\x02\u05AA\u05AC\x07B\x02\x02\u05AB\u05AA\x03\x02\x02\x02" +
		"\u05AB\u05AC\x03\x02\x02\x02\u05AC\u05AD\x03\x02\x02\x02\u05AD\u05AE\x07" +
		">\x02\x02\u05AE\xF1\x03\x02\x02\x02\u05AF\u05B4\x05\xEEx\x02\u05B0\u05B1" +
		"\x07B\x02\x02\u05B1\u05B3\x05\xEEx\x02\u05B2\u05B0\x03\x02\x02\x02\u05B3" +
		"\u05B6\x03\x02\x02\x02\u05B4\u05B2\x03\x02\x02\x02\u05B4\u05B5\x03\x02" +
		"\x02\x02\u05B5\xF3\x03\x02\x02\x02\u05B6\u05B4\x03\x02\x02\x02\u05B7\u05B8" +
		"\x07i\x02\x02\u05B8\u05B9\x056\x1C\x02\u05B9\xF5\x03\x02\x02\x02\u05BA" +
		"\u05BB\x07i\x02\x02\u05BB\u05BC\x056\x1C\x02\u05BC\u05BD\x07;\x02\x02" +
		"\u05BD\u05BE\x05\xEEx\x02\u05BE\u05BF\x07<\x02\x02\u05BF\xF7\x03\x02\x02" +
		"\x02\u05C0\u05C2\x07=\x02\x02\u05C1\u05C3\x05\xFA~\x02\u05C2\u05C1\x03" +
		"\x02\x02\x02\u05C2\u05C3\x03\x02\x02\x02\u05C3\u05C5\x03\x02\x02\x02\u05C4" +
		"\u05C6\x07B\x02\x02\u05C5\u05C4\x03\x02\x02\x02\u05C5\u05C6\x03\x02\x02" +
		"\x02\u05C6\u05C7\x03\x02\x02\x02\u05C7\u05C8\x07>\x02\x02\u05C8\xF9\x03" +
		"\x02\x02\x02\u05C9\u05CE\x05r:\x02\u05CA\u05CB\x07B\x02\x02\u05CB\u05CD" +
		"\x05r:\x02\u05CC\u05CA\x03\x02\x02\x02\u05CD\u05D0\x03\x02\x02\x02\u05CE" +
		"\u05CC\x03\x02\x02\x02\u05CE\u05CF\x03\x02\x02\x02\u05CF\xFB\x03\x02\x02" +
		"\x02\u05D0\u05CE\x03\x02\x02\x02\u05D1\u05D3\x07=\x02\x02\u05D2\u05D4" +
		"\x05\xFE\x80\x02\u05D3\u05D2\x03\x02\x02\x02\u05D3\u05D4\x03\x02\x02\x02" +
		"\u05D4\u05D5\x03\x02\x02\x02\u05D5\u05D6\x07>\x02\x02\u05D6\xFD\x03\x02" +
		"\x02\x02\u05D7\u05D9\x05\u0100\x81\x02\u05D8\u05D7\x03\x02\x02\x02\u05D9" +
		"\u05DA\x03\x02\x02\x02\u05DA\u05D8\x03\x02\x02\x02\u05DA\u05DB\x03\x02" +
		"\x02\x02\u05DB\xFF\x03\x02\x02\x02\u05DC\u05E3\x05\u0102\x82\x02\u05DD" +
		"\u05E3\x05R*\x02\u05DE\u05E0\x05\u01DA\xEE\x02\u05DF\u05DE\x03\x02\x02" +
		"\x02\u05DF\u05E0\x03\x02\x02\x02\u05E0\u05E1\x03\x02\x02\x02\u05E1\u05E3" +
		"\x05\u0106\x84\x02\u05E2\u05DC\x03\x02\x02\x02\u05E2\u05DD\x03\x02\x02" +
		"\x02\u05E2\u05DF\x03\x02\x02\x02\u05E3\u0101\x03\x02\x02\x02\u05E4\u05E5" +
		"\x05\u0104\x83\x02\u05E5\u05E6\x07A\x02\x02\u05E6\u0103\x03\x02\x02\x02" +
		"\u05E7\u05E9\x05\u01DA\xEE\x02\u05E8\u05E7\x03\x02\x02\x02\u05E8\u05E9" +
		"\x03\x02\x02\x02\u05E9\u05ED\x03\x02\x02\x02\u05EA\u05EC\x05\x9CO\x02" +
		"\u05EB\u05EA\x03\x02\x02\x02\u05EC\u05EF\x03\x02\x02\x02\u05ED\u05EB\x03" +
		"\x02\x02\x02\u05ED\u05EE\x03\x02\x02\x02\u05EE\u05F0\x03\x02\x02\x02\u05EF" +
		"\u05ED\x03\x02\x02\x02\u05F0\u05F1\x05t;\x02\u05F1\u05F2\x05l7\x02\u05F2" +
		"\u0105\x03\x02\x02\x02\u05F3\u05FA\x05\u010A\x86\x02\u05F4\u05FA\x05\u010E" +
		"\x88\x02\u05F5\u05FA\x05\u0116\x8C\x02\u05F6\u05FA\x05\u0118\x8D\x02\u05F7" +
		"\u05FA\x05\u012A\x96\x02\u05F8\u05FA\x05\u0130\x99\x02\u05F9\u05F3\x03" +
		"\x02\x02\x02\u05F9\u05F4\x03\x02\x02\x02\u05F9\u05F5\x03\x02\x02\x02\u05F9" +
		"\u05F6\x03\x02\x02\x02\u05F9\u05F7\x03\x02\x02\x02\u05F9\u05F8\x03\x02" +
		"\x02\x02\u05FA\u0107\x03\x02\x02\x02\u05FB\u0601\x05\u010A\x86\x02\u05FC" +
		"\u0601\x05\u0110\x89\x02\u05FD\u0601\x05\u011A\x8E\x02\u05FE\u0601\x05" +
		"\u012C\x97\x02\u05FF\u0601\x05\u0132\x9A\x02\u0600\u05FB\x03\x02\x02\x02" +
		"\u0600\u05FC\x03\x02\x02\x02\u0600\u05FD\x03\x02\x02\x02\u0600\u05FE\x03" +
		"\x02\x02\x02\u0600\u05FF\x03\x02\x02\x02\u0601\u0109\x03\x02\x02\x02\u0602" +
		"\u060F\x05\xFC\x7F\x02\u0603\u060F\x05\u010C\x87\x02\u0604\u060F\x05\u0112" +
		"\x8A\x02\u0605\u060F\x05\u011C\x8F\x02\u0606\u060F\x05\u011E\x90\x02\u0607" +
		"\u060F\x05\u012E\x98\x02\u0608\u060F\x05\u0142\xA2\x02\u0609\u060F\x05" +
		"\u0144\xA3\x02\u060A\u060F\x05\u0146\xA4\x02\u060B\u060F\x05\u014A\xA6" +
		"\x02\u060C\u060F\x05\u0148\xA5\x02\u060D\u060F\x05\u014C\xA7\x02\u060E" +
		"\u0602\x03\x02\x02\x02\u060E\u0603\x03\x02\x02\x02\u060E\u0604\x03\x02" +
		"\x02\x02\u060E\u0605\x03\x02\x02\x02\u060E\u0606\x03\x02\x02\x02\u060E" +
		"\u0607\x03\x02\x02\x02\u060E\u0608\x03\x02\x02\x02\u060E\u0609\x03\x02" +
		"\x02\x02\u060E\u060A\x03\x02\x02\x02\u060E\u060B\x03\x02\x02\x02\u060E" +
		"\u060C\x03\x02\x02\x02\u060E\u060D\x03\x02\x02\x02\u060F\u010B\x03\x02" +
		"\x02\x02\u0610\u0611\x07A\x02\x02\u0611\u010D\x03\x02\x02\x02\u0612\u0613" +
		"\x07h\x02\x02\u0613\u0614\x07J\x02\x02\u0614\u0615\x05\u0106\x84\x02\u0615" +
		"\u010F\x03\x02\x02\x02\u0616\u0617\x07h\x02\x02\u0617\u0618\x07J\x02\x02" +
		"\u0618\u0619\x05\u0108\x85\x02\u0619\u0111\x03\x02\x02\x02\u061A\u061B" +
		"\x05\u0114\x8B\x02\u061B\u061C\x07A\x02\x02\u061C\u0113\x03\x02\x02\x02" +
		"\u061D\u0625\x05\u01AA\xD6\x02\u061E\u0625\x05\u01C8\xE5\x02\u061F\u0625" +
		"\x05\u01CA\xE6\x02\u0620\u0625\x05\u01D0\xE9\x02\u0621\u0625\x05\u01D4" +
		"\xEB\x02\u0622\u0625\x05\u0188\xC5\x02\u0623\u0625\x05\u0174\xBB\x02\u0624" +
		"\u061D\x03\x02\x02\x02\u0624\u061E\x03\x02\x02\x02\u0624\u061F\x03\x02" +
		"\x02\x02\u0624\u0620\x03\x02\x02\x02\u0624\u0621\x03\x02\x02\x02\u0624" +
		"\u0622\x03\x02\x02\x02\u0624\u0623\x03\x02\x02\x02\u0625\u0115\x03\x02" +
		"\x02\x02\u0626\u0627\x07\x18\x02\x02\u0627\u0628\x07;\x02\x02\u0628\u0629" +
		"\x05\u019E\xD0\x02\u0629\u062A\x07<\x02\x02\u062A\u062B\x05\u0106\x84" +
		"\x02\u062B\u0117\x03\x02\x02\x02\u062C\u062D\x07\x18\x02\x02\u062D\u062E" +
		"\x07;\x02\x02\u062E\u062F\x05\u019E\xD0\x02\u062F\u0630\x07<\x02\x02\u0630" +
		"\u0631\x05\u0108\x85\x02\u0631\u0632\x07\x11\x02\x02\u0632\u0633\x05\u0106" +
		"\x84\x02\u0633\u0119\x03\x02\x02\x02\u0634\u0635\x07\x18\x02\x02\u0635" +
		"\u0636\x07;\x02\x02\u0636\u0637\x05\u019E\xD0\x02\u0637\u0638\x07<\x02" +
		"\x02\u0638\u0639\x05\u0108\x85\x02\u0639\u063A\x07\x11\x02\x02\u063A\u063B" +
		"\x05\u0108\x85\x02\u063B\u011B\x03\x02\x02\x02\u063C\u063D\x07\x04\x02" +
		"\x02\u063D\u063E\x05\u019E\xD0\x02\u063E\u063F\x07A\x02\x02\u063F\u0647" +
		"\x03\x02\x02\x02\u0640\u0641\x07\x04\x02\x02\u0641\u0642\x05\u019E\xD0" +
		"\x02\u0642\u0643\x07J\x02\x02\u0643\u0644\x05\u019E\xD0\x02\u0644\u0645" +
		"\x07A\x02\x02\u0645\u0647\x03\x02\x02\x02\u0646\u063C\x03\x02\x02\x02" +
		"\u0646\u0640\x03\x02\x02\x02\u0647\u011D\x03\x02\x02\x02\u0648\u0649\x07" +
		"+\x02\x02\u0649\u064A\x07;\x02\x02\u064A\u064B\x05\u019E\xD0\x02\u064B" +
		"\u064C\x07<\x02\x02\u064C\u064D\x05\u0120\x91\x02\u064D\u011F\x03\x02" +
		"\x02\x02\u064E\u0652\x07=\x02\x02\u064F\u0651\x05\u0122\x92\x02\u0650" +
		"\u064F\x03\x02\x02\x02\u0651\u0654\x03\x02\x02\x02\u0652\u0650\x03\x02" +
		"\x02\x02\u0652\u0653\x03\x02\x02\x02\u0653\u0658\x03\x02\x02\x02\u0654" +
		"\u0652\x03\x02\x02\x02\u0655\u0657\x05\u0126\x94\x02\u0656\u0655\x03\x02" +
		"\x02\x02\u0657\u065A\x03\x02\x02\x02\u0658\u0656\x03\x02\x02\x02\u0658" +
		"\u0659\x03\x02\x02\x02\u0659\u065B\x03\x02\x02\x02\u065A\u0658\x03\x02" +
		"\x02\x02\u065B\u065C\x07>\x02\x02\u065C\u0121\x03\x02\x02\x02\u065D\u065E" +
		"\x05\u0124\x93\x02\u065E\u065F\x05\xFE\x80\x02\u065F\u0123\x03\x02\x02" +
		"\x02\u0660\u0664\x05\u0126\x94\x02\u0661\u0663\x05\u0126\x94\x02\u0662" +
		"\u0661\x03\x02\x02\x02\u0663\u0666\x03\x02\x02\x02\u0664\u0662\x03\x02" +
		"\x02\x02\u0664\u0665\x03\x02\x02\x02\u0665\u0125\x03\x02\x02\x02\u0666" +
		"\u0664\x03\x02\x02\x02\u0667\u0668\x07\b\x02\x02\u0668\u0669\x05\u019C" +
		"\xCF\x02\u0669\u066A\x07J\x02\x02\u066A\u0672\x03\x02\x02\x02\u066B\u066C" +
		"\x07\b\x02\x02\u066C\u066D\x05\u0128\x95\x02\u066D\u066E\x07J\x02\x02" +
		"\u066E\u0672\x03\x02\x02\x02\u066F\u0670\x07\x0E\x02\x02\u0670\u0672\x07" +
		"J\x02\x02\u0671\u0667\x03\x02\x02\x02\u0671\u066B\x03\x02\x02\x02\u0671" +
		"\u066F\x03\x02\x02\x02\u0672\u0127\x03\x02\x02\x02\u0673\u0674\x07h\x02" +
		"\x02\u0674\u0129\x03\x02\x02\x02\u0675\u0676\x074\x02\x02\u0676\u0677" +
		"\x07;\x02\x02\u0677\u0678\x05\u019E\xD0\x02\u0678\u0679\x07<\x02\x02\u0679" +
		"\u067A\x05\u0106\x84\x02\u067A\u012B\x03\x02\x02\x02\u067B\u067C\x074" +
		"\x02\x02\u067C\u067D\x07;\x02\x02\u067D\u067E\x05\u019E\xD0\x02\u067E" +
		"\u067F\x07<\x02\x02\u067F\u0680\x05\u0108\x85\x02\u0680\u012D\x03\x02" +
		"\x02\x02\u0681\u0682\x07\x0F\x02\x02\u0682\u0683\x05\u0106\x84\x02\u0683" +
		"\u0684\x074\x02\x02\u0684\u0685\x07;\x02\x02\u0685\u0686\x05\u019E\xD0" +
		"\x02\u0686\u0687\x07<\x02\x02\u0687\u0688\x07A\x02\x02\u0688\u012F\x03" +
		"\x02\x02\x02\u0689\u068C\x05\u0134\x9B\x02\u068A\u068C\x05\u013E\xA0\x02" +
		"\u068B\u0689\x03\x02\x02\x02\u068B\u068A\x03\x02\x02\x02\u068C\u0131\x03" +
		"\x02\x02\x02\u068D\u0690\x05\u0136\x9C\x02\u068E\u0690\x05\u0140\xA1\x02" +
		"\u068F\u068D\x03\x02\x02\x02\u068F\u068E\x03\x02\x02\x02\u0690\u0133\x03" +
		"\x02\x02\x02\u0691\u0692\x07\x17\x02\x02\u0692\u0694\x07;\x02\x02\u0693" +
		"\u0695\x05\u0138\x9D\x02\u0694\u0693\x03\x02\x02\x02\u0694\u0695\x03\x02" +
		"\x02\x02\u0695\u0696\x03\x02\x02\x02\u0696\u0698\x07A\x02\x02\u0697\u0699" +
		"\x05\u019E\xD0\x02\u0698\u0697\x03\x02\x02\x02\u0698\u0699\x03\x02\x02" +
		"\x02\u0699\u069A\x03\x02\x02\x02\u069A\u069C\x07A\x02\x02\u069B\u069D" +
		"\x05\u013A\x9E\x02\u069C\u069B\x03\x02\x02\x02\u069C\u069D\x03\x02\x02" +
		"\x02\u069D\u069E\x03\x02\x02\x02\u069E\u069F\x07<\x02\x02\u069F\u06A0" +
		"\x05\u0106\x84\x02\u06A0\u0135\x03\x02\x02\x02\u06A1\u06A2\x07\x17\x02" +
		"\x02\u06A2\u06A4\x07;\x02\x02\u06A3\u06A5\x05\u0138\x9D\x02\u06A4\u06A3" +
		"\x03\x02\x02\x02\u06A4\u06A5\x03\x02\x02\x02\u06A5\u06A6\x03\x02\x02\x02" +
		"\u06A6\u06A8\x07A\x02\x02\u06A7\u06A9\x05\u019E\xD0\x02\u06A8\u06A7\x03" +
		"\x02\x02\x02\u06A8\u06A9\x03\x02\x02\x02\u06A9\u06AA\x03\x02\x02\x02\u06AA" +
		"\u06AC\x07A\x02\x02\u06AB\u06AD\x05\u013A\x9E\x02\u06AC\u06AB\x03\x02" +
		"\x02\x02\u06AC\u06AD\x03\x02\x02\x02\u06AD\u06AE\x03\x02\x02\x02\u06AE" +
		"\u06AF\x07<\x02\x02\u06AF\u06B0\x05\u0108\x85\x02\u06B0\u0137\x03\x02" +
		"\x02\x02\u06B1\u06B4\x05\u013C\x9F\x02\u06B2\u06B4\x05\u0104\x83\x02\u06B3" +
		"\u06B1\x03\x02\x02\x02\u06B3\u06B2\x03\x02\x02\x02\u06B4\u0139\x03\x02" +
		"\x02\x02\u06B5\u06B6\x05\u013C\x9F\x02\u06B6\u013B\x03\x02\x02\x02\u06B7" +
		"\u06BC\x05\u0114\x8B\x02\u06B8\u06B9\x07B\x02\x02\u06B9\u06BB\x05\u0114" +
		"\x8B\x02\u06BA\u06B8\x03\x02\x02\x02\u06BB\u06BE\x03\x02\x02\x02\u06BC" +
		"\u06BA\x03\x02\x02\x02\u06BC\u06BD\x03\x02\x02\x02\u06BD\u013D\x03\x02" +
		"\x02\x02\u06BE\u06BC\x03\x02\x02\x02\u06BF\u06C0\x07\x17\x02\x02\u06C0" +
		"\u06C4\x07;\x02\x02\u06C1\u06C3\x05\x9CO\x02\u06C2\u06C1\x03\x02\x02\x02" +
		"\u06C3\u06C6\x03\x02\x02\x02\u06C4\u06C2\x03\x02\x02\x02\u06C4\u06C5\x03" +
		"\x02\x02\x02\u06C5\u06C7\x03\x02\x02\x02\u06C6\u06C4\x03\x02\x02\x02\u06C7" +
		"\u06C8\x05t;\x02\u06C8\u06C9\x05p9\x02\u06C9\u06CA\x07J\x02\x02\u06CA" +
		"\u06CB\x05\u019E\xD0\x02\u06CB\u06CC\x07<\x02\x02\u06CC\u06CD\x05\u0106" +
		"\x84\x02\u06CD\u013F\x03\x02\x02\x02\u06CE\u06CF\x07\x17\x02\x02\u06CF" +
		"\u06D3\x07;\x02\x02\u06D0\u06D2\x05\x9CO\x02\u06D1\u06D0\x03\x02\x02\x02" +
		"\u06D2\u06D5\x03\x02\x02\x02\u06D3\u06D1\x03\x02\x02\x02\u06D3\u06D4\x03" +
		"\x02\x02\x02\u06D4\u06D6\x03\x02\x02\x02\u06D5\u06D3\x03\x02\x02\x02\u06D6" +
		"\u06D7\x05t;\x02\u06D7\u06D8\x05p9\x02\u06D8\u06D9\x07J\x02\x02\u06D9" +
		"\u06DA\x05\u019E\xD0\x02\u06DA\u06DB\x07<\x02\x02\u06DB\u06DC\x05\u0108" +
		"\x85\x02\u06DC\u0141\x03\x02\x02\x02\u06DD\u06DF\x07\x06\x02\x02\u06DE" +
		"\u06E0\x07h\x02\x02\u06DF\u06DE\x03\x02\x02\x02\u06DF\u06E0\x03\x02\x02" +
		"\x02\u06E0\u06E1\x03\x02\x02\x02\u06E1\u06E2\x07A\x02\x02\u06E2\u0143" +
		"\x03\x02\x02\x02\u06E3\u06E5\x07\r\x02\x02\u06E4\u06E6\x07h\x02\x02\u06E5" +
		"\u06E4\x03\x02\x02\x02\u06E5\u06E6\x03\x02\x02\x02\u06E6\u06E7\x03\x02" +
		"\x02\x02\u06E7\u06E8\x07A\x02\x02\u06E8\u0145\x03\x02\x02\x02\u06E9\u06EB" +
		"\x07&\x02\x02\u06EA\u06EC\x05\u019E\xD0\x02\u06EB\u06EA\x03\x02\x02\x02" +
		"\u06EB\u06EC\x03\x02\x02\x02\u06EC\u06ED\x03\x02\x02\x02\u06ED\u06EE\x07" +
		"A\x02\x02\u06EE\u0147\x03\x02\x02\x02\u06EF\u06F0\x07.\x02\x02\u06F0\u06F1" +
		"\x05\u019E\xD0\x02\u06F1\u06F2\x07A\x02\x02\u06F2\u0149\x03\x02\x02\x02" +
		"\u06F3\u06F4\x07,\x02\x02\u06F4\u06F5\x07;\x02\x02\u06F5\u06F6\x05\u019E" +
		"\xD0\x02\u06F6\u06F7\x07<\x02\x02\u06F7\u06F8\x05\xFC\x7F\x02\u06F8\u014B" +
		"\x03\x02\x02\x02\u06F9\u06FA\x071\x02\x02\u06FA\u06FB\x05\xFC\x7F\x02" +
		"\u06FB\u06FC\x05\u014E\xA8\x02\u06FC\u0706\x03\x02\x02\x02\u06FD\u06FE" +
		"\x071\x02\x02\u06FE\u0700\x05\xFC\x7F\x02\u06FF\u0701\x05\u014E\xA8\x02" +
		"\u0700\u06FF\x03\x02\x02\x02\u0700\u0701\x03\x02\x02\x02\u0701\u0702\x03" +
		"\x02\x02\x02\u0702\u0703\x05\u0156\xAC\x02\u0703\u0706\x03\x02\x02\x02" +
		"\u0704\u0706\x05\u0158\xAD\x02\u0705\u06F9\x03\x02\x02\x02\u0705\u06FD" +
		"\x03\x02\x02\x02\u0705\u0704\x03\x02\x02\x02\u0706\u014D\x03\x02\x02\x02" +
		"\u0707\u070B\x05\u0150\xA9\x02\u0708\u070A\x05\u0150\xA9\x02\u0709\u0708" +
		"\x03\x02\x02\x02\u070A\u070D\x03\x02\x02\x02\u070B\u0709\x03\x02\x02\x02" +
		"\u070B\u070C\x03\x02\x02\x02\u070C\u014F\x03\x02\x02\x02\u070D\u070B\x03" +
		"\x02\x02\x02\u070E\u070F\x07\t\x02\x02\u070F\u0710\x07;\x02\x02\u0710" +
		"\u0711\x05\u0152\xAA\x02\u0711\u0712\x07<\x02\x02\u0712\u0713\x05\xFC" +
		"\x7F\x02\u0713\u0151\x03\x02\x02\x02\u0714\u0716\x05\x9CO\x02\u0715\u0714" +
		"\x03\x02\x02\x02\u0716\u0719\x03\x02\x02\x02\u0717\u0715\x03\x02\x02\x02" +
		"\u0717\u0718\x03\x02\x02\x02\u0718\u071A\x03\x02\x02\x02\u0719\u0717\x03" +
		"\x02\x02\x02\u071A\u071B\x05\u0154\xAB\x02\u071B\u071C\x05p9\x02\u071C" +
		"\u0153\x03\x02\x02\x02\u071D\u0722\x05|?\x02\u071E\u071F\x07X\x02\x02" +
		"\u071F\u0721\x05\x10\t\x02\u0720\u071E\x03\x02\x02\x02\u0721\u0724\x03" +
		"\x02\x02\x02\u0722\u0720\x03\x02\x02\x02\u0722\u0723\x03\x02\x02\x02\u0723" +
		"\u0155\x03\x02\x02\x02\u0724\u0722\x03\x02\x02\x02\u0725\u0726\x07\x15" +
		"\x02\x02\u0726\u0727\x05\xFC\x7F\x02\u0727\u0157\x03\x02\x02\x02\u0728" +
		"\u0729\x071\x02\x02\u0729\u072A\x05\u015A\xAE\x02\u072A\u072C\x05\xFC" +
		"\x7F\x02\u072B\u072D\x05\u014E\xA8\x02\u072C\u072B\x03\x02\x02\x02\u072C" +
		"\u072D\x03\x02\x02\x02\u072D\u072F\x03\x02\x02\x02\u072E\u0730\x05\u0156" +
		"\xAC\x02\u072F\u072E\x03\x02\x02\x02\u072F\u0730\x03\x02\x02\x02\u0730" +
		"\u0159\x03\x02\x02\x02\u0731\u0732\x07;\x02\x02\u0732\u0734\x05\u015C" +
		"\xAF\x02\u0733\u0735\x07A\x02\x02\u0734\u0733\x03\x02\x02\x02\u0734\u0735" +
		"\x03\x02\x02\x02\u0735\u0736\x03\x02\x02\x02\u0736\u0737\x07<\x02\x02" +
		"\u0737\u015B\x03\x02\x02\x02\u0738\u073D\x05\u015E\xB0\x02\u0739\u073A" +
		"\x07A\x02\x02\u073A\u073C\x05\u015E\xB0\x02\u073B\u0739\x03\x02\x02\x02" +
		"\u073C\u073F\x03\x02\x02\x02\u073D\u073B\x03\x02\x02\x02\u073D\u073E\x03" +
		"\x02\x02\x02\u073E\u015D\x03\x02\x02\x02\u073F\u073D\x03\x02\x02\x02\u0740" +
		"\u0742\x05\x9CO\x02\u0741\u0740\x03\x02\x02\x02\u0742\u0745\x03\x02\x02" +
		"\x02\u0743\u0741\x03\x02\x02\x02\u0743\u0744\x03\x02\x02\x02\u0744\u0746" +
		"\x03\x02\x02\x02\u0745\u0743\x03\x02\x02\x02\u0746\u0747\x05t;\x02\u0747" +
		"\u0748\x05p9\x02\u0748\u0749\x07D\x02\x02\u0749\u074A\x05\u019E\xD0\x02" +
		"\u074A\u015F\x03\x02\x02\x02\u074B\u074E\x05\u016E\xB8\x02\u074C\u074E" +
		"\x05\u0196\xCC\x02\u074D\u074B\x03\x02\x02\x02\u074D\u074C\x03\x02\x02" +
		"\x02\u074E\u0752\x03\x02\x02\x02\u074F\u0751\x05\u0168\xB5\x02\u0750\u074F" +
		"\x03\x02\x02\x02\u0751\u0754\x03\x02\x02\x02\u0752\u0750\x03\x02\x02\x02" +
		"\u0752\u0753\x03\x02\x02\x02\u0753\u0161\x03\x02\x02\x02\u0754\u0752\x03" +
		"\x02\x02\x02\u0755\u0773\x05\x02\x02\x02\u0756\u075B\x056\x1C\x02\u0757" +
		"\u0758\x07?\x02\x02\u0758\u075A\x07@\x02\x02\u0759\u0757\x03\x02\x02\x02" +
		"\u075A\u075D\x03\x02\x02\x02\u075B\u0759\x03\x02\x02\x02\u075B\u075C\x03" +
		"\x02\x02\x02\u075C\u075E\x03\x02\x02\x02\u075D\u075B\x03\x02\x02\x02\u075E" +
		"\u075F\x07C\x02\x02\u075F\u0760\x07\v\x02\x02\u0760\u0773\x03\x02\x02" +
		"\x02\u0761\u0762\x072\x02\x02\u0762\u0763\x07C\x02\x02\u0763\u0773\x07" +
		"\v\x02\x02\u0764\u0773\x07-\x02\x02\u0765\u0766\x056\x1C\x02\u0766\u0767" +
		"\x07C\x02\x02\u0767\u0768\x07-\x02\x02\u0768\u0773\x03\x02\x02\x02\u0769" +
		"\u076A\x07;\x02\x02\u076A\u076B\x05\u019E\xD0\x02\u076B\u076C\x07<\x02" +
		"\x02\u076C\u0773\x03\x02\x02\x02\u076D\u0773\x05\u0174\xBB\x02\u076E\u0773" +
		"\x05\u017C\xBF\x02\u076F\u0773\x05\u0182\xC2\x02\u0770\u0773\x05\u0188" +
		"\xC5\x02\u0771\u0773\x05\u0190\xC9\x02\u0772\u0755\x03\x02\x02\x02\u0772" +
		"\u0756\x03\x02\x02\x02\u0772\u0761\x03\x02\x02\x02\u0772\u0764\x03\x02" +
		"\x02\x02\u0772\u0765\x03\x02\x02\x02\u0772\u0769\x03\x02\x02\x02\u0772" +
		"\u076D\x03\x02\x02\x02\u0772\u076E\x03\x02\x02\x02\u0772\u076F\x03\x02" +
		"\x02\x02\u0772\u0770\x03\x02\x02\x02\u0772\u0771\x03\x02\x02\x02\u0773" +
		"\u0163\x03\x02\x02\x02\u0774\u0775\x03\x02\x02\x02\u0775\u0165\x03\x02" +
		"\x02\x02\u0776\u0793\x05\x02\x02\x02\u0777\u077C\x056\x1C\x02\u0778\u0779" +
		"\x07?\x02\x02\u0779\u077B\x07@\x02\x02\u077A\u0778\x03\x02\x02\x02\u077B" +
		"\u077E\x03\x02\x02\x02\u077C\u077A\x03\x02\x02\x02\u077C\u077D\x03\x02" +
		"\x02\x02\u077D\u077F\x03\x02\x02\x02\u077E\u077C\x03\x02\x02\x02\u077F" +
		"\u0780\x07C\x02\x02\u0780\u0781\x07\v\x02\x02\u0781\u0793\x03\x02\x02" +
		"\x02\u0782\u0783\x072\x02\x02\u0783\u0784\x07C\x02\x02\u0784\u0793\x07" +
		"\v\x02\x02\u0785\u0793\x07-\x02\x02\u0786\u0787\x056\x1C\x02\u0787\u0788" +
		"\x07C\x02\x02\u0788\u0789\x07-\x02\x02\u0789\u0793\x03\x02\x02\x02\u078A" +
		"\u078B\x07;\x02\x02\u078B\u078C\x05\u019E\xD0\x02\u078C\u078D\x07<\x02" +
		"\x02\u078D\u0793\x03\x02\x02\x02\u078E\u0793\x05\u0174\xBB\x02\u078F\u0793" +
		"\x05\u017C\xBF\x02\u0790\u0793\x05\u0188\xC5\x02\u0791\u0793\x05\u0190" +
		"\xC9\x02\u0792\u0776\x03\x02\x02\x02\u0792\u0777\x03\x02\x02\x02\u0792" +
		"\u0782\x03\x02\x02\x02\u0792\u0785\x03\x02\x02\x02\u0792\u0786\x03\x02" +
		"\x02\x02\u0792\u078A\x03\x02\x02\x02\u0792\u078E\x03\x02\x02\x02\u0792" +
		"\u078F\x03\x02\x02\x02\u0792\u0790\x03\x02\x02\x02\u0792\u0791\x03\x02" +
		"\x02\x02\u0793\u0167\x03\x02\x02\x02\u0794\u079A\x05\u0176\xBC\x02\u0795" +
		"\u079A\x05\u017E\xC0\x02\u0796\u079A\x05\u0184\xC3\x02\u0797\u079A\x05" +
		"\u018A\xC6\x02\u0798\u079A\x05\u0192\xCA\x02\u0799\u0794\x03\x02\x02\x02" +
		"\u0799\u0795\x03\x02\x02\x02\u0799\u0796\x03\x02\x02\x02\u0799\u0797\x03" +
		"\x02\x02\x02\u0799\u0798\x03\x02\x02\x02\u079A\u0169\x03\x02\x02\x02\u079B" +
		"\u079C\x03\x02\x02\x02\u079C\u016B\x03\x02\x02\x02\u079D\u07A2\x05\u0176" +
		"\xBC\x02\u079E\u07A2\x05\u017E\xC0\x02\u079F\u07A2\x05\u018A\xC6\x02\u07A0" +
		"\u07A2\x05\u0192\xCA\x02\u07A1\u079D\x03\x02\x02\x02\u07A1\u079E\x03\x02" +
		"\x02\x02\u07A1\u079F\x03\x02\x02\x02\u07A1\u07A0\x03\x02\x02\x02\u07A2" +
		"\u016D\x03\x02\x02\x02\u07A3\u07CC\x05\x02\x02\x02\u07A4\u07A9\x056\x1C" +
		"\x02\u07A5\u07A6\x07?\x02\x02\u07A6\u07A8\x07@\x02\x02\u07A7\u07A5\x03" +
		"\x02\x02\x02\u07A8\u07AB\x03\x02\x02\x02\u07A9\u07A7\x03\x02\x02\x02\u07A9" +
		"\u07AA\x03\x02\x02\x02\u07AA\u07AC\x03\x02\x02\x02\u07AB\u07A9\x03\x02" +
		"\x02\x02\u07AC\u07AD\x07C\x02\x02\u07AD\u07AE\x07\v\x02\x02\u07AE\u07CC" +
		"\x03\x02\x02\x02\u07AF\u07B4\x05v<\x02\u07B0\u07B1\x07?\x02\x02\u07B1" +
		"\u07B3\x07@\x02\x02\u07B2\u07B0\x03\x02\x02\x02\u07B3\u07B6\x03\x02\x02" +
		"\x02\u07B4\u07B2\x03\x02\x02\x02\u07B4\u07B5\x03\x02\x02\x02\u07B5\u07B7" +
		"\x03\x02\x02\x02\u07B6\u07B4\x03\x02\x02\x02\u07B7\u07B8\x07C\x02\x02" +
		"\u07B8\u07B9\x07\v\x02\x02\u07B9\u07CC\x03\x02\x02\x02\u07BA\u07BB\x07" +
		"2\x02\x02\u07BB\u07BC\x07C\x02\x02\u07BC\u07CC\x07\v\x02\x02\u07BD\u07CC" +
		"\x07-\x02\x02\u07BE\u07BF\x056\x1C\x02\u07BF\u07C0\x07C\x02\x02\u07C0" +
		"\u07C1\x07-\x02\x02\u07C1\u07CC\x03\x02\x02\x02\u07C2\u07C3\x07;\x02\x02" +
		"\u07C3\u07C4\x05\u019E\xD0\x02\u07C4\u07C5\x07<\x02\x02\u07C5\u07CC\x03" +
		"\x02\x02\x02\u07C6\u07CC\x05\u0178\xBD\x02\u07C7\u07CC\x05\u0180\xC1\x02" +
		"\u07C8\u07CC\x05\u0186\xC4\x02\u07C9\u07CC\x05\u018C\xC7\x02\u07CA\u07CC" +
		"\x05\u0194\xCB\x02\u07CB\u07A3\x03\x02\x02\x02\u07CB\u07A4\x03\x02\x02" +
		"\x02\u07CB\u07AF\x03\x02\x02\x02\u07CB\u07BA\x03\x02\x02\x02\u07CB\u07BD" +
		"\x03\x02\x02\x02\u07CB\u07BE\x03\x02\x02\x02\u07CB\u07C2\x03\x02\x02\x02" +
		"\u07CB\u07C6\x03\x02\x02\x02\u07CB\u07C7\x03\x02\x02\x02\u07CB\u07C8\x03" +
		"\x02\x02\x02\u07CB\u07C9\x03\x02\x02\x02\u07CB\u07CA\x03\x02\x02\x02\u07CC" +
		"\u016F\x03\x02\x02\x02\u07CD\u07CE\x03\x02\x02\x02\u07CE\u0171\x03\x02" +
		"\x02\x02\u07CF\u07F7\x05\x02\x02\x02\u07D0\u07D5\x056\x1C\x02\u07D1\u07D2" +
		"\x07?\x02\x02\u07D2\u07D4\x07@\x02\x02\u07D3\u07D1\x03\x02\x02\x02\u07D4" +
		"\u07D7\x03\x02\x02\x02\u07D5\u07D3\x03\x02\x02\x02\u07D5\u07D6\x03\x02" +
		"\x02\x02\u07D6\u07D8\x03\x02\x02\x02\u07D7\u07D5\x03\x02\x02\x02\u07D8" +
		"\u07D9\x07C\x02\x02\u07D9\u07DA\x07\v\x02\x02\u07DA\u07F7\x03\x02\x02" +
		"\x02\u07DB\u07E0\x05v<\x02\u07DC\u07DD\x07?\x02\x02\u07DD\u07DF\x07@\x02" +
		"\x02\u07DE\u07DC\x03\x02\x02\x02\u07DF\u07E2\x03\x02\x02\x02\u07E0\u07DE" +
		"\x03\x02\x02\x02\u07E0\u07E1\x03\x02\x02\x02\u07E1\u07E3\x03\x02\x02\x02" +
		"\u07E2\u07E0\x03\x02\x02\x02\u07E3\u07E4\x07C\x02\x02\u07E4\u07E5\x07" +
		"\v\x02\x02\u07E5\u07F7\x03\x02\x02\x02\u07E6\u07E7\x072\x02\x02\u07E7" +
		"\u07E8\x07C\x02\x02\u07E8\u07F7\x07\v\x02\x02\u07E9\u07F7\x07-\x02\x02" +
		"\u07EA\u07EB\x056\x1C\x02\u07EB\u07EC\x07C\x02\x02\u07EC\u07ED\x07-\x02" +
		"\x02\u07ED\u07F7\x03\x02\x02\x02\u07EE\u07EF\x07;\x02\x02\u07EF\u07F0" +
		"\x05\u019E\xD0\x02\u07F0\u07F1\x07<\x02\x02\u07F1\u07F7\x03\x02\x02\x02" +
		"\u07F2\u07F7\x05\u0178\xBD\x02\u07F3\u07F7\x05\u0180\xC1\x02\u07F4\u07F7" +
		"\x05\u018C\xC7\x02\u07F5\u07F7\x05\u0194\xCB\x02\u07F6\u07CF\x03\x02\x02" +
		"\x02\u07F6\u07D0\x03\x02\x02\x02\u07F6\u07DB\x03\x02\x02\x02\u07F6\u07E6" +
		"\x03\x02\x02\x02\u07F6\u07E9\x03\x02\x02\x02\u07F6\u07EA\x03\x02\x02\x02" +
		"\u07F6\u07EE\x03\x02\x02\x02\u07F6\u07F2\x03\x02\x02\x02\u07F6\u07F3\x03" +
		"\x02\x02\x02\u07F6\u07F4\x03\x02\x02\x02\u07F6\u07F5\x03\x02\x02\x02\u07F7" +
		"\u0173\x03\x02\x02\x02\u07F8\u07FA\x07!\x02\x02\u07F9\u07FB\x05*\x16\x02" +
		"\u07FA\u07F9\x03\x02\x02\x02\u07FA\u07FB\x03\x02\x02\x02\u07FB\u07FF\x03" +
		"\x02\x02\x02\u07FC\u07FE\x05\xE6t\x02\u07FD\u07FC\x03\x02\x02\x02\u07FE" +
		"\u0801\x03\x02\x02\x02\u07FF\u07FD\x03\x02\x02\x02\u07FF\u0800\x03\x02" +
		"\x02\x02\u0800\u0802\x03\x02\x02\x02\u0801\u07FF\x03\x02\x02\x02\u0802" +
		"\u080D\x07h\x02\x02\u0803\u0807\x07C\x02\x02\u0804\u0806\x05\xE6t\x02" +
		"\u0805\u0804\x03\x02\x02\x02\u0806\u0809\x03\x02\x02\x02\u0807\u0805\x03" +
		"\x02\x02\x02\u0807\u0808\x03\x02\x02\x02\u0808\u080A\x03\x02\x02\x02\u0809" +
		"\u0807\x03\x02\x02\x02\u080A\u080C\x07h\x02\x02\u080B\u0803\x03\x02\x02" +
		"\x02\u080C\u080F\x03\x02\x02\x02\u080D\u080B\x03\x02\x02\x02\u080D\u080E" +
		"\x03\x02\x02\x02\u080E\u0811\x03\x02\x02\x02\u080F\u080D\x03\x02\x02\x02" +
		"\u0810\u0812\x05\u017A\xBE\x02\u0811\u0810\x03\x02\x02\x02\u0811\u0812" +
		"\x03\x02\x02\x02\u0812\u0813\x03\x02\x02\x02\u0813\u0815\x07;\x02\x02" +
		"\u0814\u0816\x05\u018E\xC8\x02\u0815\u0814\x03\x02\x02\x02\u0815\u0816" +
		"\x03\x02\x02\x02\u0816\u0817\x03\x02\x02\x02\u0817\u0819\x07<\x02\x02" +
		"\u0818\u081A\x05b2\x02\u0819\u0818\x03\x02\x02\x02\u0819\u081A\x03\x02" +
		"\x02\x02\u081A\u084C\x03\x02\x02\x02\u081B\u081C\x05:\x1E\x02\u081C\u081D" +
		"\x07C\x02\x02\u081D\u081F\x07!\x02\x02\u081E\u0820\x05*\x16\x02\u081F" +
		"\u081E\x03\x02\x02\x02\u081F\u0820\x03\x02\x02\x02\u0820\u0824\x03\x02" +
		"\x02\x02\u0821\u0823\x05\xE6t\x02\u0822\u0821\x03\x02\x02\x02\u0823\u0826" +
		"\x03\x02\x02\x02\u0824\u0822\x03\x02\x02\x02\u0824\u0825\x03\x02\x02\x02" +
		"\u0825\u0827\x03\x02\x02\x02\u0826\u0824\x03\x02\x02\x02\u0827\u0829\x07" +
		"h\x02\x02\u0828\u082A\x05\u017A\xBE\x02\u0829\u0828\x03\x02\x02\x02\u0829" +
		"\u082A\x03\x02\x02\x02\u082A\u082B\x03\x02\x02\x02\u082B\u082D\x07;\x02" +
		"\x02\u082C\u082E\x05\u018E\xC8\x02\u082D\u082C\x03\x02\x02\x02\u082D\u082E" +
		"\x03\x02\x02\x02\u082E\u082F\x03\x02\x02\x02\u082F\u0831\x07<\x02\x02" +
		"\u0830\u0832\x05b2\x02\u0831\u0830\x03\x02\x02\x02\u0831\u0832\x03\x02" +
		"\x02\x02\u0832\u084C\x03\x02\x02\x02\u0833\u0834\x05\u0160\xB1\x02\u0834" +
		"\u0835\x07C\x02\x02\u0835\u0837\x07!\x02\x02\u0836\u0838\x05*\x16\x02" +
		"\u0837\u0836\x03\x02\x02\x02\u0837\u0838\x03\x02\x02\x02\u0838\u083C\x03" +
		"\x02\x02\x02\u0839\u083B\x05\xE6t\x02\u083A\u0839\x03\x02\x02\x02\u083B" +
		"\u083E\x03\x02\x02\x02\u083C\u083A\x03\x02\x02\x02\u083C\u083D\x03\x02" +
		"\x02\x02\u083D\u083F\x03\x02\x02\x02\u083E\u083C\x03\x02\x02\x02\u083F" +
		"\u0841";
	private static readonly _serializedATNSegment4: string =
		"\x07h\x02\x02\u0840\u0842\x05\u017A\xBE\x02\u0841\u0840\x03\x02\x02\x02" +
		"\u0841\u0842\x03\x02\x02\x02\u0842\u0843\x03\x02\x02\x02\u0843\u0845\x07" +
		";\x02\x02\u0844\u0846\x05\u018E\xC8\x02\u0845\u0844\x03\x02\x02\x02\u0845" +
		"\u0846\x03\x02\x02\x02\u0846\u0847\x03\x02\x02\x02\u0847\u0849\x07<\x02" +
		"\x02\u0848\u084A\x05b2\x02\u0849\u0848\x03\x02\x02\x02\u0849\u084A\x03" +
		"\x02\x02\x02\u084A\u084C\x03\x02\x02\x02\u084B\u07F8\x03\x02\x02\x02\u084B" +
		"\u081B\x03\x02\x02\x02\u084B\u0833\x03\x02\x02\x02\u084C\u0175\x03\x02" +
		"\x02\x02\u084D\u084E\x07C\x02\x02\u084E\u0850\x07!\x02\x02\u084F\u0851" +
		"\x05*\x16\x02\u0850\u084F\x03\x02\x02\x02\u0850\u0851\x03\x02\x02\x02" +
		"\u0851\u0855\x03\x02\x02\x02\u0852\u0854\x05\xE6t\x02\u0853\u0852\x03" +
		"\x02\x02\x02\u0854\u0857\x03\x02\x02\x02\u0855\u0853\x03\x02\x02\x02\u0855" +
		"\u0856\x03\x02\x02\x02\u0856\u0858\x03\x02\x02\x02\u0857\u0855\x03\x02" +
		"\x02\x02\u0858\u085A\x07h\x02\x02\u0859\u085B\x05\u017A\xBE\x02\u085A" +
		"\u0859\x03\x02\x02\x02\u085A\u085B\x03\x02\x02\x02\u085B\u085C\x03\x02" +
		"\x02\x02\u085C\u085E\x07;\x02\x02\u085D\u085F\x05\u018E\xC8\x02\u085E" +
		"\u085D\x03\x02\x02\x02\u085E\u085F\x03\x02\x02\x02\u085F\u0860\x03\x02" +
		"\x02\x02\u0860\u0862\x07<\x02\x02\u0861\u0863\x05b2\x02\u0862\u0861\x03" +
		"\x02\x02\x02\u0862\u0863\x03\x02\x02\x02\u0863\u0177\x03\x02\x02\x02\u0864" +
		"\u0866\x07!\x02\x02\u0865\u0867\x05*\x16\x02\u0866\u0865\x03\x02\x02\x02" +
		"\u0866\u0867\x03\x02\x02\x02\u0867\u086B\x03\x02\x02\x02\u0868\u086A\x05" +
		"\xE6t\x02\u0869\u0868\x03\x02\x02\x02\u086A\u086D\x03\x02\x02\x02\u086B" +
		"\u0869\x03\x02\x02\x02\u086B\u086C\x03\x02\x02\x02\u086C\u086E\x03\x02" +
		"\x02\x02\u086D\u086B\x03\x02\x02\x02\u086E\u0879\x07h\x02\x02\u086F\u0873" +
		"\x07C\x02\x02\u0870\u0872\x05\xE6t\x02\u0871\u0870\x03\x02\x02\x02\u0872" +
		"\u0875\x03\x02\x02\x02\u0873\u0871\x03\x02\x02\x02\u0873\u0874\x03\x02" +
		"\x02\x02\u0874\u0876\x03\x02\x02\x02\u0875\u0873\x03\x02\x02\x02\u0876" +
		"\u0878\x07h\x02\x02\u0877\u086F\x03\x02\x02\x02\u0878\u087B\x03\x02\x02" +
		"\x02\u0879\u0877\x03\x02\x02\x02\u0879\u087A\x03\x02\x02\x02\u087A\u087D" +
		"\x03\x02\x02\x02\u087B\u0879\x03\x02\x02\x02\u087C\u087E\x05\u017A\xBE" +
		"\x02\u087D\u087C\x03\x02\x02\x02\u087D\u087E\x03\x02\x02\x02\u087E\u087F" +
		"\x03\x02\x02\x02\u087F\u0881\x07;\x02\x02\u0880\u0882\x05\u018E\xC8\x02" +
		"\u0881\u0880\x03\x02\x02\x02\u0881\u0882\x03\x02\x02\x02\u0882\u0883\x03" +
		"\x02\x02\x02\u0883\u0885\x07<\x02\x02\u0884\u0886\x05b2\x02\u0885\u0884" +
		"\x03\x02\x02\x02\u0885\u0886\x03\x02\x02\x02\u0886\u08A0\x03\x02\x02\x02" +
		"\u0887\u0888\x05:\x1E\x02\u0888\u0889\x07C\x02\x02\u0889\u088B\x07!\x02" +
		"\x02\u088A\u088C\x05*\x16\x02\u088B\u088A\x03\x02\x02\x02\u088B\u088C" +
		"\x03\x02\x02\x02\u088C\u0890\x03\x02\x02\x02\u088D\u088F\x05\xE6t\x02" +
		"\u088E\u088D\x03\x02\x02\x02\u088F\u0892\x03\x02\x02\x02\u0890\u088E\x03" +
		"\x02\x02\x02\u0890\u0891\x03\x02\x02\x02\u0891\u0893\x03\x02\x02\x02\u0892" +
		"\u0890\x03\x02\x02\x02\u0893\u0895\x07h\x02\x02\u0894\u0896\x05\u017A" +
		"\xBE\x02\u0895\u0894\x03\x02\x02\x02\u0895\u0896\x03\x02\x02\x02\u0896" +
		"\u0897\x03\x02\x02\x02\u0897\u0899\x07;\x02\x02\u0898\u089A\x05\u018E" +
		"\xC8\x02\u0899\u0898\x03\x02\x02\x02\u0899\u089A\x03\x02\x02\x02\u089A" +
		"\u089B\x03\x02\x02\x02\u089B\u089D\x07<\x02\x02\u089C\u089E\x05b2\x02" +
		"\u089D\u089C\x03\x02\x02\x02\u089D\u089E\x03\x02\x02\x02\u089E\u08A0\x03" +
		"\x02\x02\x02\u089F\u0864\x03\x02\x02\x02\u089F\u0887\x03\x02\x02\x02\u08A0" +
		"\u0179\x03\x02\x02\x02\u08A1\u08A5\x05*\x16\x02\u08A2\u08A3\x07F\x02\x02" +
		"\u08A3\u08A5\x07E\x02\x02\u08A4\u08A1\x03\x02\x02\x02\u08A4\u08A2\x03" +
		"\x02\x02\x02\u08A5\u017B\x03\x02\x02\x02\u08A6\u08A7\x05\u0160\xB1\x02" +
		"\u08A7\u08A8\x07C\x02\x02\u08A8\u08A9\x07h\x02\x02\u08A9\u08B4\x03\x02" +
		"\x02\x02\u08AA\u08AB\x07*\x02\x02\u08AB\u08AC\x07C\x02\x02\u08AC\u08B4" +
		"\x07h\x02\x02\u08AD\u08AE\x056\x1C\x02\u08AE\u08AF\x07C\x02\x02\u08AF" +
		"\u08B0\x07*\x02\x02\u08B0\u08B1\x07C\x02\x02\u08B1\u08B2\x07h\x02\x02" +
		"\u08B2\u08B4\x03\x02\x02\x02\u08B3\u08A6\x03\x02\x02\x02\u08B3\u08AA\x03" +
		"\x02\x02\x02\u08B3\u08AD\x03\x02\x02\x02\u08B4\u017D\x03\x02\x02\x02\u08B5" +
		"\u08B6\x07C\x02\x02\u08B6\u08B7\x07h\x02\x02\u08B7\u017F\x03\x02\x02\x02" +
		"\u08B8\u08B9\x07*\x02\x02\u08B9\u08BA\x07C\x02\x02\u08BA\u08C2\x07h\x02" +
		"\x02\u08BB\u08BC\x056\x1C\x02\u08BC\u08BD\x07C\x02\x02\u08BD\u08BE\x07" +
		"*\x02\x02\u08BE\u08BF\x07C\x02\x02\u08BF\u08C0\x07h\x02\x02\u08C0\u08C2" +
		"\x03\x02\x02\x02\u08C1\u08B8\x03\x02\x02\x02\u08C1\u08BB\x03\x02\x02\x02" +
		"\u08C2\u0181\x03\x02\x02\x02\u08C3\u08C4\x05:\x1E\x02\u08C4\u08C5\x07" +
		"?\x02\x02\u08C5\u08C6\x05\u019E\xD0\x02\u08C6\u08C7\x07@\x02\x02\u08C7" +
		"\u08CE\x03\x02\x02\x02\u08C8\u08C9\x05\u0166\xB4\x02\u08C9\u08CA\x07?" +
		"\x02\x02\u08CA\u08CB\x05\u019E\xD0\x02\u08CB\u08CC\x07@\x02\x02\u08CC" +
		"\u08CE\x03\x02\x02\x02\u08CD\u08C3\x03\x02\x02\x02\u08CD\u08C8\x03\x02" +
		"\x02\x02\u08CE\u08D6\x03\x02\x02\x02\u08CF\u08D0\x05\u0164\xB3\x02\u08D0" +
		"\u08D1\x07?\x02\x02\u08D1\u08D2\x05\u019E\xD0\x02\u08D2\u08D3\x07@\x02" +
		"\x02\u08D3\u08D5\x03\x02\x02\x02\u08D4\u08CF\x03\x02\x02\x02\u08D5\u08D8" +
		"\x03\x02\x02\x02\u08D6\u08D4\x03\x02\x02\x02\u08D6\u08D7\x03\x02\x02\x02" +
		"\u08D7\u0183\x03\x02\x02\x02\u08D8\u08D6\x03\x02\x02\x02\u08D9\u08DA\x05" +
		"\u016C\xB7\x02\u08DA\u08DB\x07?\x02\x02\u08DB\u08DC\x05\u019E\xD0\x02" +
		"\u08DC\u08E4\x07@\x02\x02\u08DD\u08DE\x05\u016A\xB6\x02\u08DE\u08DF\x07" +
		"?\x02\x02\u08DF\u08E0\x05\u019E\xD0\x02\u08E0\u08E1\x07@\x02\x02\u08E1" +
		"\u08E3\x03\x02\x02\x02\u08E2\u08DD\x03\x02\x02\x02\u08E3\u08E6\x03\x02" +
		"\x02\x02\u08E4\u08E2\x03\x02\x02\x02\u08E4\u08E5\x03\x02\x02\x02\u08E5" +
		"\u0185\x03\x02\x02\x02\u08E6\u08E4\x03\x02\x02\x02\u08E7\u08E8\x05:\x1E" +
		"\x02\u08E8\u08E9\x07?\x02\x02\u08E9\u08EA\x05\u019E\xD0\x02\u08EA\u08EB" +
		"\x07@\x02\x02\u08EB\u08F2\x03\x02\x02\x02\u08EC\u08ED\x05\u0172\xBA\x02" +
		"\u08ED\u08EE\x07?\x02\x02\u08EE\u08EF\x05\u019E\xD0\x02\u08EF\u08F0\x07" +
		"@\x02\x02\u08F0\u08F2\x03\x02\x02\x02\u08F1\u08E7\x03\x02\x02\x02\u08F1" +
		"\u08EC\x03\x02\x02\x02\u08F2\u08FA\x03\x02\x02\x02\u08F3\u08F4\x05\u0170" +
		"\xB9\x02\u08F4\u08F5\x07?\x02\x02\u08F5\u08F6\x05\u019E\xD0\x02\u08F6" +
		"\u08F7\x07@\x02\x02\u08F7\u08F9\x03\x02\x02\x02\u08F8\u08F3\x03\x02\x02" +
		"\x02\u08F9\u08FC\x03\x02\x02\x02\u08FA\u08F8\x03\x02\x02\x02\u08FA\u08FB" +
		"\x03\x02\x02\x02\u08FB\u0187\x03\x02\x02\x02\u08FC\u08FA\x03\x02\x02\x02" +
		"\u08FD\u08FE\x05<\x1F\x02\u08FE\u0900\x07;\x02\x02\u08FF\u0901\x05\u018E" +
		"\xC8\x02\u0900\u08FF\x03\x02\x02\x02\u0900\u0901\x03\x02\x02\x02\u0901" +
		"\u0902\x03\x02\x02\x02\u0902\u0903\x07<\x02\x02\u0903\u0942\x03\x02\x02" +
		"\x02\u0904\u0905\x056\x1C\x02\u0905\u0907\x07C\x02\x02\u0906\u0908\x05" +
		"*\x16\x02\u0907\u0906\x03\x02\x02\x02\u0907\u0908\x03\x02\x02\x02\u0908" +
		"\u0909\x03\x02\x02\x02\u0909\u090A\x07h\x02\x02\u090A\u090C\x07;\x02\x02" +
		"\u090B\u090D\x05\u018E\xC8\x02\u090C\u090B\x03\x02\x02\x02\u090C\u090D" +
		"\x03\x02\x02\x02\u090D\u090E\x03\x02\x02\x02\u090E\u090F\x07<\x02\x02" +
		"\u090F\u0942\x03\x02\x02\x02\u0910\u0911\x05:\x1E\x02\u0911\u0913\x07" +
		"C\x02\x02\u0912\u0914\x05*\x16\x02\u0913\u0912\x03\x02\x02\x02\u0913\u0914" +
		"\x03\x02\x02\x02\u0914\u0915\x03\x02\x02\x02\u0915\u0916\x07h\x02\x02" +
		"\u0916\u0918\x07;\x02\x02\u0917\u0919\x05\u018E\xC8\x02\u0918\u0917\x03" +
		"\x02\x02\x02\u0918\u0919\x03\x02\x02\x02\u0919\u091A\x03\x02\x02\x02\u091A" +
		"\u091B\x07<\x02\x02\u091B\u0942\x03\x02\x02\x02\u091C\u091D\x05\u0160" +
		"\xB1\x02\u091D\u091F\x07C\x02\x02\u091E\u0920\x05*\x16\x02\u091F\u091E" +
		"\x03\x02\x02\x02\u091F\u0920\x03\x02\x02\x02\u0920\u0921\x03\x02\x02\x02" +
		"\u0921\u0922\x07h\x02\x02\u0922\u0924\x07;\x02\x02\u0923\u0925\x05\u018E" +
		"\xC8\x02\u0924\u0923\x03\x02\x02\x02\u0924\u0925\x03\x02\x02\x02\u0925" +
		"\u0926\x03\x02\x02\x02\u0926\u0927\x07<\x02\x02\u0927\u0942\x03\x02\x02" +
		"\x02\u0928\u0929\x07*\x02\x02\u0929\u092B\x07C\x02\x02\u092A\u092C\x05" +
		"*\x16\x02\u092B\u092A\x03\x02\x02\x02\u092B\u092C\x03\x02\x02\x02\u092C" +
		"\u092D\x03\x02\x02\x02\u092D\u092E\x07h\x02\x02\u092E\u0930\x07;\x02\x02" +
		"\u092F\u0931\x05\u018E\xC8\x02\u0930\u092F\x03\x02\x02\x02\u0930\u0931" +
		"\x03\x02\x02\x02\u0931\u0932\x03\x02\x02\x02\u0932\u0942\x07<\x02\x02" +
		"\u0933\u0934\x056\x1C\x02\u0934\u0935\x07C\x02\x02\u0935\u0936\x07*\x02" +
		"\x02\u0936\u0938\x07C\x02\x02\u0937\u0939\x05*\x16\x02\u0938\u0937\x03" +
		"\x02\x02\x02\u0938\u0939\x03\x02\x02\x02\u0939\u093A\x03\x02\x02\x02\u093A" +
		"\u093B\x07h\x02\x02\u093B\u093D\x07;\x02\x02\u093C\u093E\x05\u018E\xC8" +
		"\x02\u093D\u093C\x03\x02\x02\x02\u093D\u093E\x03\x02\x02\x02\u093E\u093F" +
		"\x03\x02\x02\x02\u093F\u0940\x07<\x02\x02\u0940\u0942\x03\x02\x02\x02" +
		"\u0941\u08FD\x03\x02\x02\x02\u0941\u0904\x03\x02\x02\x02\u0941\u0910\x03" +
		"\x02\x02\x02\u0941\u091C\x03\x02\x02\x02\u0941\u0928\x03\x02\x02\x02\u0941" +
		"\u0933\x03\x02\x02\x02\u0942\u0189\x03\x02\x02\x02\u0943\u0945\x07C\x02" +
		"\x02\u0944\u0946\x05*\x16\x02\u0945\u0944\x03\x02\x02\x02\u0945\u0946" +
		"\x03\x02\x02\x02\u0946\u0947\x03\x02\x02\x02\u0947\u0948\x07h\x02\x02" +
		"\u0948\u094A\x07;\x02\x02\u0949\u094B\x05\u018E\xC8\x02\u094A\u0949\x03" +
		"\x02\x02\x02\u094A\u094B\x03\x02\x02\x02\u094B\u094C\x03\x02\x02\x02\u094C" +
		"\u094D\x07<\x02\x02\u094D\u018B\x03\x02\x02\x02\u094E\u094F\x05<\x1F\x02" +
		"\u094F\u0951\x07;\x02\x02\u0950\u0952\x05\u018E\xC8\x02\u0951\u0950\x03" +
		"\x02\x02\x02\u0951\u0952\x03\x02\x02\x02\u0952\u0953\x03\x02\x02\x02\u0953" +
		"\u0954\x07<\x02\x02\u0954\u0987\x03\x02\x02\x02\u0955\u0956\x056\x1C\x02" +
		"\u0956\u0958\x07C\x02\x02\u0957\u0959\x05*\x16\x02\u0958\u0957\x03\x02" +
		"\x02\x02\u0958\u0959\x03\x02\x02\x02\u0959\u095A\x03\x02\x02\x02\u095A" +
		"\u095B\x07h\x02\x02\u095B\u095D\x07;\x02\x02\u095C\u095E\x05\u018E\xC8" +
		"\x02\u095D\u095C\x03\x02\x02\x02\u095D\u095E\x03\x02\x02\x02\u095E\u095F" +
		"\x03\x02\x02\x02\u095F\u0960\x07<\x02\x02\u0960\u0987\x03\x02\x02\x02" +
		"\u0961\u0962\x05:\x1E\x02\u0962\u0964\x07C\x02\x02\u0963\u0965\x05*\x16" +
		"\x02\u0964\u0963\x03\x02\x02\x02\u0964\u0965\x03\x02\x02\x02\u0965\u0966" +
		"\x03\x02\x02\x02\u0966\u0967\x07h\x02\x02\u0967\u0969\x07;\x02\x02\u0968" +
		"\u096A\x05\u018E\xC8\x02\u0969\u0968\x03\x02\x02\x02\u0969\u096A\x03\x02" +
		"\x02\x02\u096A\u096B\x03\x02\x02\x02\u096B\u096C\x07<\x02\x02\u096C\u0987" +
		"\x03\x02\x02\x02\u096D\u096E\x07*\x02\x02\u096E\u0970\x07C\x02\x02\u096F" +
		"\u0971\x05*\x16\x02\u0970\u096F\x03\x02\x02\x02\u0970\u0971\x03\x02\x02" +
		"\x02\u0971\u0972\x03\x02\x02\x02\u0972\u0973\x07h\x02\x02\u0973\u0975" +
		"\x07;\x02\x02\u0974\u0976\x05\u018E\xC8\x02\u0975\u0974\x03\x02\x02\x02" +
		"\u0975\u0976\x03\x02\x02\x02\u0976\u0977\x03\x02\x02\x02\u0977\u0987\x07" +
		"<\x02\x02\u0978\u0979\x056\x1C\x02\u0979\u097A\x07C\x02\x02\u097A\u097B" +
		"\x07*\x02\x02\u097B\u097D\x07C\x02\x02\u097C\u097E\x05*\x16\x02\u097D" +
		"\u097C\x03\x02\x02\x02\u097D\u097E\x03\x02\x02\x02\u097E\u097F\x03\x02" +
		"\x02\x02\u097F\u0980\x07h\x02\x02\u0980\u0982\x07;\x02\x02\u0981\u0983" +
		"\x05\u018E\xC8\x02\u0982\u0981\x03\x02\x02\x02\u0982\u0983\x03\x02\x02" +
		"\x02\u0983\u0984\x03\x02\x02\x02\u0984\u0985\x07<\x02\x02\u0985\u0987" +
		"\x03\x02\x02\x02\u0986\u094E\x03\x02\x02\x02\u0986\u0955\x03\x02\x02\x02" +
		"\u0986\u0961\x03\x02\x02\x02\u0986\u096D\x03\x02\x02\x02\u0986\u0978\x03" +
		"\x02\x02\x02\u0987\u018D\x03\x02\x02\x02\u0988\u098D\x05\u019E\xD0\x02" +
		"\u0989\u098A\x07B\x02\x02\u098A\u098C\x05\u019E\xD0\x02\u098B\u0989\x03" +
		"\x02\x02\x02\u098C\u098F\x03\x02\x02\x02\u098D\u098B\x03\x02\x02\x02\u098D" +
		"\u098E\x03\x02\x02\x02\u098E\u018F\x03\x02\x02\x02\u098F\u098D\x03\x02" +
		"\x02\x02\u0990\u0991\x05:\x1E\x02\u0991\u0993\x07\\\x02\x02\u0992\u0994" +
		"\x05*\x16\x02\u0993\u0992\x03\x02\x02\x02\u0993\u0994\x03\x02\x02\x02" +
		"\u0994\u0995\x03\x02\x02\x02\u0995\u0996\x07h\x02\x02\u0996\u09C0\x03" +
		"\x02\x02\x02\u0997\u0998\x05\f\x07\x02\u0998\u099A\x07\\\x02\x02\u0999" +
		"\u099B\x05*\x16\x02\u099A\u0999\x03\x02\x02\x02\u099A\u099B\x03\x02\x02" +
		"\x02\u099B\u099C\x03\x02\x02\x02\u099C\u099D\x07h\x02\x02\u099D\u09C0" +
		"\x03\x02\x02\x02\u099E\u099F\x05\u0160\xB1\x02\u099F\u09A1\x07\\\x02\x02" +
		"\u09A0\u09A2\x05*\x16\x02\u09A1\u09A0\x03\x02\x02\x02\u09A1\u09A2\x03" +
		"\x02\x02\x02\u09A2\u09A3\x03\x02\x02\x02\u09A3\u09A4\x07h\x02\x02\u09A4" +
		"\u09C0\x03\x02\x02\x02\u09A5\u09A6\x07*\x02\x02\u09A6\u09A8\x07\\\x02" +
		"\x02\u09A7\u09A9\x05*\x16\x02\u09A8\u09A7\x03\x02\x02\x02\u09A8\u09A9" +
		"\x03\x02\x02\x02\u09A9\u09AA\x03\x02\x02\x02\u09AA\u09C0\x07h\x02\x02" +
		"\u09AB\u09AC\x056\x1C\x02\u09AC\u09AD\x07C\x02\x02\u09AD\u09AE\x07*\x02" +
		"\x02\u09AE\u09B0\x07\\\x02\x02\u09AF\u09B1\x05*\x16\x02\u09B0\u09AF\x03" +
		"\x02\x02\x02\u09B0\u09B1\x03\x02\x02\x02\u09B1\u09B2\x03\x02\x02\x02\u09B2" +
		"\u09B3\x07h\x02\x02\u09B3\u09C0\x03\x02\x02\x02\u09B4\u09B5\x05\x10\t" +
		"\x02\u09B5\u09B7\x07\\\x02\x02\u09B6\u09B8\x05*\x16\x02\u09B7\u09B6\x03" +
		"\x02\x02\x02\u09B7\u09B8\x03\x02\x02\x02\u09B8\u09B9\x03\x02\x02\x02\u09B9" +
		"\u09BA\x07!\x02\x02\u09BA\u09C0\x03\x02\x02\x02\u09BB\u09BC\x05\x1E\x10" +
		"\x02\u09BC\u09BD\x07\\\x02\x02\u09BD\u09BE\x07!\x02\x02\u09BE\u09C0\x03" +
		"\x02\x02\x02\u09BF\u0990\x03\x02\x02\x02\u09BF\u0997\x03\x02\x02\x02\u09BF" +
		"\u099E\x03\x02\x02\x02\u09BF\u09A5\x03\x02\x02\x02\u09BF\u09AB\x03\x02" +
		"\x02\x02\u09BF\u09B4\x03\x02\x02\x02\u09BF\u09BB\x03\x02\x02\x02\u09C0" +
		"\u0191\x03\x02\x02\x02\u09C1\u09C3\x07\\\x02\x02\u09C2\u09C4\x05*\x16" +
		"\x02\u09C3\u09C2\x03\x02\x02\x02\u09C3\u09C4\x03\x02\x02\x02\u09C4\u09C5" +
		"\x03\x02\x02\x02\u09C5\u09C6\x07h\x02\x02\u09C6\u0193\x03\x02\x02\x02" +
		"\u09C7\u09C8\x05:\x1E\x02\u09C8\u09CA\x07\\\x02\x02\u09C9\u09CB\x05*\x16" +
		"\x02\u09CA\u09C9\x03\x02\x02\x02\u09CA\u09CB\x03\x02\x02\x02\u09CB\u09CC" +
		"\x03\x02\x02\x02\u09CC\u09CD\x07h\x02\x02\u09CD\u09F0\x03\x02\x02\x02" +
		"\u09CE\u09CF\x05\f\x07\x02\u09CF\u09D1\x07\\\x02\x02\u09D0\u09D2\x05*" +
		"\x16\x02\u09D1\u09D0\x03\x02\x02\x02\u09D1\u09D2\x03\x02\x02\x02\u09D2" +
		"\u09D3\x03\x02\x02\x02\u09D3\u09D4\x07h\x02\x02\u09D4\u09F0\x03\x02\x02" +
		"\x02\u09D5\u09D6\x07*\x02\x02\u09D6\u09D8\x07\\\x02\x02\u09D7\u09D9\x05" +
		"*\x16\x02\u09D8\u09D7\x03\x02\x02\x02\u09D8\u09D9\x03\x02\x02\x02\u09D9" +
		"\u09DA\x03\x02\x02\x02\u09DA\u09F0\x07h\x02\x02\u09DB\u09DC\x056\x1C\x02" +
		"\u09DC\u09DD\x07C\x02\x02\u09DD\u09DE\x07*\x02\x02\u09DE\u09E0\x07\\\x02" +
		"\x02\u09DF\u09E1\x05*\x16\x02\u09E0\u09DF\x03\x02\x02\x02\u09E0\u09E1" +
		"\x03\x02\x02\x02\u09E1\u09E2\x03\x02\x02\x02\u09E2\u09E3\x07h\x02\x02" +
		"\u09E3\u09F0\x03\x02\x02\x02\u09E4\u09E5\x05\x10\t\x02\u09E5\u09E7\x07" +
		"\\\x02\x02\u09E6\u09E8\x05*\x16\x02\u09E7\u09E6\x03\x02\x02\x02\u09E7" +
		"\u09E8\x03\x02\x02\x02\u09E8\u09E9\x03\x02\x02\x02\u09E9\u09EA\x07!\x02" +
		"\x02\u09EA\u09F0\x03\x02\x02\x02\u09EB\u09EC\x05\x1E\x10\x02\u09EC\u09ED" +
		"\x07\\\x02\x02\u09ED\u09EE\x07!\x02\x02\u09EE\u09F0\x03\x02\x02\x02\u09EF" +
		"\u09C7\x03\x02\x02\x02\u09EF\u09CE\x03\x02\x02\x02\u09EF\u09D5\x03\x02" +
		"\x02\x02\u09EF\u09DB\x03\x02\x02\x02\u09EF\u09E4\x03\x02\x02\x02\u09EF" +
		"\u09EB\x03\x02\x02\x02\u09F0\u0195\x03\x02\x02\x02\u09F1\u09F2\x07!\x02" +
		"\x02\u09F2\u09F3\x05\x04\x03\x02\u09F3\u09F5\x05\u0198\xCD\x02\u09F4\u09F6" +
		"\x05 \x11\x02\u09F5\u09F4\x03\x02\x02\x02\u09F5\u09F6\x03\x02\x02\x02" +
		"\u09F6\u0A08\x03\x02\x02\x02\u09F7\u09F8\x07!\x02\x02\u09F8\u09F9\x05" +
		"\x0E\b\x02\u09F9\u09FB\x05\u0198\xCD\x02\u09FA\u09FC\x05 \x11\x02\u09FB" +
		"\u09FA\x03\x02\x02\x02\u09FB\u09FC\x03\x02\x02\x02\u09FC\u0A08\x03\x02" +
		"\x02\x02\u09FD\u09FE\x07!\x02\x02\u09FE\u09FF\x05\x04\x03\x02\u09FF\u0A00" +
		"\x05 \x11\x02\u0A00\u0A01\x05\xF8}\x02\u0A01\u0A08\x03\x02\x02\x02\u0A02" +
		"\u0A03\x07!\x02\x02\u0A03\u0A04\x05\x0E\b\x02\u0A04\u0A05\x05 \x11\x02" +
		"\u0A05\u0A06\x05\xF8}\x02\u0A06\u0A08\x03\x02\x02\x02\u0A07\u09F1\x03" +
		"\x02\x02\x02\u0A07\u09F7\x03\x02\x02\x02\u0A07\u09FD\x03\x02\x02\x02\u0A07" +
		"\u0A02\x03\x02\x02\x02\u0A08\u0197\x03\x02\x02\x02\u0A09\u0A0D\x05\u019A" +
		"\xCE\x02\u0A0A\u0A0C\x05\u019A\xCE\x02\u0A0B\u0A0A\x03\x02\x02\x02\u0A0C" +
		"\u0A0F\x03\x02\x02\x02\u0A0D\u0A0B\x03\x02\x02\x02\u0A0D\u0A0E\x03\x02" +
		"\x02\x02\u0A0E\u0199\x03\x02\x02\x02\u0A0F\u0A0D\x03\x02\x02\x02\u0A10" +
		"\u0A12\x05\xE6t\x02\u0A11\u0A10\x03\x02\x02\x02\u0A12\u0A15\x03\x02\x02" +
		"\x02\u0A13\u0A11\x03\x02\x02\x02\u0A13\u0A14\x03\x02\x02\x02\u0A14\u0A16" +
		"\x03\x02\x02\x02\u0A15\u0A13\x03\x02\x02\x02\u0A16\u0A17\x07?\x02\x02" +
		"\u0A17\u0A18\x05\u019E\xD0\x02\u0A18\u0A19\x07@\x02\x02\u0A19\u019B\x03" +
		"\x02\x02\x02\u0A1A\u0A1B\x05\u019E\xD0\x02\u0A1B\u019D\x03\x02\x02\x02" +
		"\u0A1C\u0A1F\x05\u01A0\xD1\x02\u0A1D\u0A1F\x05\u01A8\xD5\x02\u0A1E\u0A1C" +
		"\x03\x02\x02\x02\u0A1E\u0A1D\x03\x02\x02\x02\u0A1F\u019F\x03\x02\x02\x02" +
		"\u0A20\u0A21\x05\u01A2\xD2\x02\u0A21\u0A22\x07[\x02\x02\u0A22\u0A23\x05" +
		"\u01A6\xD4\x02\u0A23\u01A1\x03\x02\x02\x02\u0A24\u0A2F\x07h\x02\x02\u0A25" +
		"\u0A27\x07;\x02\x02\u0A26\u0A28\x05\x96L\x02\u0A27\u0A26\x03\x02\x02\x02" +
		"\u0A27\u0A28\x03\x02\x02\x02\u0A28\u0A29\x03\x02\x02\x02\u0A29\u0A2F\x07" +
		"<\x02\x02\u0A2A\u0A2B\x07;\x02\x02\u0A2B\u0A2C\x05\u01A4\xD3\x02\u0A2C" +
		"\u0A2D\x07<\x02\x02\u0A2D\u0A2F\x03\x02\x02\x02\u0A2E\u0A24\x03\x02\x02" +
		"\x02\u0A2E\u0A25\x03\x02\x02\x02\u0A2E\u0A2A\x03\x02\x02\x02\u0A2F\u01A3" +
		"\x03\x02\x02\x02\u0A30\u0A35\x07h\x02\x02\u0A31\u0A32\x07B\x02\x02\u0A32" +
		"\u0A34\x07h\x02\x02\u0A33\u0A31\x03\x02\x02\x02\u0A34\u0A37\x03\x02\x02" +
		"\x02\u0A35\u0A33\x03\x02\x02\x02\u0A35\u0A36\x03\x02\x02\x02\u0A36\u01A5" +
		"\x03\x02\x02\x02\u0A37\u0A35\x03\x02\x02\x02\u0A38\u0A3B\x05\u019E\xD0" +
		"\x02\u0A39\u0A3B\x05\xFC\x7F\x02\u0A3A\u0A38\x03\x02\x02\x02\u0A3A\u0A39" +
		"\x03\x02\x02\x02\u0A3B\u01A7\x03\x02\x02\x02\u0A3C\u0A3F\x05\u01B0\xD9" +
		"\x02\u0A3D\u0A3F\x05\u01AA\xD6\x02\u0A3E\u0A3C\x03\x02\x02\x02\u0A3E\u0A3D" +
		"\x03\x02\x02\x02\u0A3F\u01A9\x03\x02\x02\x02\u0A40\u0A41\x05\u01AC\xD7" +
		"\x02\u0A41\u0A42\x05\u01AE\xD8\x02\u0A42\u0A43\x05\u019E\xD0\x02\u0A43" +
		"\u01AB\x03\x02\x02\x02\u0A44\u0A48\x05:\x1E\x02\u0A45\u0A48\x05\u017C" +
		"\xBF\x02\u0A46\u0A48\x05\u0182\xC2\x02\u0A47\u0A44\x03\x02\x02\x02\u0A47" +
		"\u0A45\x03\x02\x02\x02\u0A47\u0A46\x03\x02\x02\x02\u0A48\u01AD\x03\x02" +
		"\x02\x02\u0A49\u0A4A\t\x05\x02\x02\u0A4A\u01AF\x03\x02\x02\x02\u0A4B\u0A53" +
		"\x05\u01B2\xDA\x02\u0A4C\u0A4D\x05\u01B2\xDA\x02\u0A4D\u0A4E\x07I\x02" +
		"\x02\u0A4E\u0A4F\x05\u019E\xD0\x02\u0A4F\u0A50\x07J\x02\x02\u0A50\u0A51" +
		"\x05\u01B0\xD9\x02\u0A51\u0A53\x03\x02\x02\x02\u0A52\u0A4B\x03\x02\x02" +
		"\x02\u0A52\u0A4C\x03\x02\x02\x02\u0A53\u01B1\x03\x02\x02\x02\u0A54\u0A55" +
		"\b\xDA\x01\x02\u0A55\u0A56\x05\u01B4\xDB\x02\u0A56\u0A5C\x03\x02\x02\x02" +
		"\u0A57\u0A58\f\x03\x02\x02\u0A58\u0A59\x07P\x02\x02\u0A59\u0A5B\x05\u01B4" +
		"\xDB\x02\u0A5A\u0A57\x03\x02\x02\x02\u0A5B\u0A5E\x03\x02\x02\x02\u0A5C" +
		"\u0A5A\x03\x02\x02\x02\u0A5C\u0A5D\x03\x02\x02\x02\u0A5D\u01B3\x03\x02" +
		"\x02\x02\u0A5E\u0A5C\x03\x02\x02\x02\u0A5F\u0A60\b\xDB\x01\x02\u0A60\u0A61" +
		"\x05\u01B6\xDC\x02\u0A61\u0A67\x03\x02\x02\x02\u0A62\u0A63\f\x03\x02\x02" +
		"\u0A63\u0A64\x07O\x02\x02\u0A64\u0A66\x05\u01B6\xDC\x02\u0A65\u0A62\x03" +
		"\x02\x02\x02\u0A66\u0A69\x03\x02\x02\x02\u0A67\u0A65\x03\x02\x02\x02\u0A67" +
		"\u0A68\x03\x02\x02\x02\u0A68\u01B5\x03\x02\x02\x02\u0A69\u0A67\x03\x02" +
		"\x02\x02\u0A6A\u0A6B\b\xDC\x01\x02\u0A6B\u0A6C\x05\u01B8\xDD\x02\u0A6C" +
		"\u0A72\x03\x02\x02\x02\u0A6D\u0A6E\f\x03\x02\x02\u0A6E\u0A6F\x07X\x02" +
		"\x02\u0A6F\u0A71\x05\u01B8\xDD\x02\u0A70\u0A6D\x03\x02\x02\x02\u0A71\u0A74" +
		"\x03\x02\x02\x02\u0A72\u0A70\x03\x02\x02\x02\u0A72\u0A73\x03\x02\x02\x02" +
		"\u0A73\u01B7\x03\x02\x02\x02\u0A74\u0A72\x03\x02\x02\x02\u0A75\u0A76\b" +
		"\xDD\x01\x02\u0A76\u0A77\x05\u01BA\xDE\x02\u0A77\u0A7D\x03\x02\x02\x02" +
		"\u0A78\u0A79\f\x03\x02\x02\u0A79\u0A7A\x07Y\x02\x02\u0A7A\u0A7C\x05\u01BA" +
		"\xDE\x02\u0A7B\u0A78\x03\x02\x02\x02\u0A7C\u0A7F\x03\x02\x02\x02\u0A7D" +
		"\u0A7B\x03\x02\x02\x02\u0A7D\u0A7E\x03\x02\x02\x02\u0A7E\u01B9\x03\x02" +
		"\x02\x02\u0A7F\u0A7D\x03\x02\x02\x02\u0A80\u0A81\b\xDE\x01\x02\u0A81\u0A82" +
		"\x05\u01BC\xDF\x02\u0A82\u0A88\x03\x02\x02\x02\u0A83\u0A84\f\x03\x02\x02" +
		"\u0A84\u0A85\x07W\x02\x02\u0A85\u0A87\x05\u01BC\xDF\x02\u0A86\u0A83\x03" +
		"\x02\x02\x02\u0A87\u0A8A\x03\x02\x02\x02\u0A88\u0A86\x03\x02\x02\x02\u0A88" +
		"\u0A89\x03\x02\x02\x02\u0A89\u01BB\x03\x02\x02\x02\u0A8A\u0A88\x03\x02" +
		"\x02\x02\u0A8B\u0A8C\b\xDF\x01\x02\u0A8C\u0A8D\x05\u01BE\xE0\x02\u0A8D" +
		"\u0A96\x03\x02\x02\x02\u0A8E\u0A8F\f\x04\x02\x02\u0A8F\u0A90\x07K\x02" +
		"\x02\u0A90\u0A95\x05\u01BE\xE0\x02\u0A91\u0A92\f\x03\x02\x02\u0A92\u0A93" +
		"\x07N\x02\x02\u0A93\u0A95\x05\u01BE\xE0\x02\u0A94\u0A8E\x03\x02\x02\x02" +
		"\u0A94\u0A91\x03\x02\x02\x02\u0A95\u0A98\x03\x02\x02\x02\u0A96\u0A94\x03" +
		"\x02\x02\x02\u0A96\u0A97\x03\x02\x02\x02\u0A97\u01BD\x03\x02\x02\x02\u0A98" +
		"\u0A96\x03\x02\x02\x02\u0A99\u0A9A\b\xE0\x01\x02\u0A9A\u0A9B\x05\u01C0" +
		"\xE1\x02\u0A9B\u0AAD\x03\x02\x02\x02\u0A9C\u0A9D\f\x07\x02\x02\u0A9D\u0A9E" +
		"\x07F\x02\x02\u0A9E\u0AAC\x05\u01C0\xE1\x02\u0A9F\u0AA0\f\x06\x02\x02" +
		"\u0AA0\u0AA1\x07E\x02\x02\u0AA1\u0AAC\x05\u01C0\xE1\x02\u0AA2\u0AA3\f" +
		"\x05\x02\x02\u0AA3\u0AA4\x07L\x02\x02\u0AA4\u0AAC\x05\u01C0\xE1\x02\u0AA5" +
		"\u0AA6\f\x04\x02\x02\u0AA6\u0AA7\x07M\x02\x02\u0AA7\u0AAC\x05\u01C0\xE1" +
		"\x02\u0AA8\u0AA9\f\x03\x02\x02\u0AA9\u0AAA\x07\x1C\x02\x02\u0AAA\u0AAC" +
		"\x05\f\x07\x02\u0AAB\u0A9C\x03\x02\x02\x02\u0AAB\u0A9F\x03\x02\x02\x02" +
		"\u0AAB\u0AA2\x03\x02\x02\x02\u0AAB\u0AA5\x03\x02\x02\x02\u0AAB\u0AA8\x03" +
		"\x02\x02\x02\u0AAC\u0AAF\x03\x02\x02\x02\u0AAD\u0AAB\x03\x02\x02\x02\u0AAD" +
		"\u0AAE\x03\x02\x02\x02\u0AAE\u01BF\x03\x02\x02\x02\u0AAF\u0AAD\x03\x02" +
		"\x02\x02\u0AB0\u0AB1\b\xE1\x01\x02\u0AB1\u0AB2\x05\u01C2\xE2\x02\u0AB2" +
		"\u0AC2\x03\x02\x02\x02\u0AB3\u0AB4\f\x05\x02\x02\u0AB4\u0AB5\x07F\x02" +
		"\x02\u0AB5\u0AB6\x07F\x02\x02\u0AB6\u0AC1\x05\u01C2\xE2\x02\u0AB7\u0AB8" +
		"\f\x04\x02\x02\u0AB8\u0AB9\x07E\x02\x02\u0AB9\u0ABA\x07E\x02\x02\u0ABA" +
		"\u0AC1\x05\u01C2\xE2\x02\u0ABB\u0ABC\f\x03\x02\x02\u0ABC\u0ABD\x07E\x02" +
		"\x02\u0ABD\u0ABE\x07E\x02\x02\u0ABE\u0ABF\x07E\x02\x02\u0ABF\u0AC1\x05" +
		"\u01C2\xE2\x02\u0AC0\u0AB3\x03\x02\x02\x02\u0AC0\u0AB7\x03\x02\x02\x02" +
		"\u0AC0\u0ABB\x03\x02\x02\x02\u0AC1\u0AC4\x03\x02\x02\x02\u0AC2\u0AC0\x03" +
		"\x02\x02\x02\u0AC2\u0AC3\x03\x02\x02\x02\u0AC3\u01C1\x03\x02\x02\x02\u0AC4" +
		"\u0AC2\x03\x02\x02\x02\u0AC5\u0AC6\b\xE2\x01\x02\u0AC6\u0AC7\x05\u01C4" +
		"\xE3\x02\u0AC7\u0AD0\x03\x02\x02\x02\u0AC8\u0AC9\f\x04\x02\x02\u0AC9\u0ACA" +
		"\x07S\x02\x02\u0ACA\u0ACF\x05\u01C4\xE3\x02\u0ACB\u0ACC\f\x03\x02\x02" +
		"\u0ACC\u0ACD\x07T\x02\x02\u0ACD\u0ACF\x05\u01C4\xE3\x02\u0ACE\u0AC8\x03" +
		"\x02\x02\x02\u0ACE\u0ACB\x03\x02\x02\x02\u0ACF\u0AD2\x03\x02\x02\x02\u0AD0" +
		"\u0ACE\x03\x02\x02\x02\u0AD0\u0AD1\x03\x02\x02\x02\u0AD1\u01C3\x03\x02" +
		"\x02\x02\u0AD2\u0AD0\x03\x02\x02\x02\u0AD3\u0AD4\b\xE3\x01\x02\u0AD4\u0AD5" +
		"\x05\u01C6\xE4\x02\u0AD5\u0AE1\x03\x02\x02\x02\u0AD6\u0AD7\f\x05\x02\x02" +
		"\u0AD7\u0AD8\x07U\x02\x02\u0AD8\u0AE0\x05\u01C6\xE4\x02\u0AD9\u0ADA\f" +
		"\x04\x02\x02\u0ADA\u0ADB\x07V\x02\x02\u0ADB\u0AE0\x05\u01C6\xE4\x02\u0ADC" +
		"\u0ADD\f\x03\x02\x02\u0ADD\u0ADE\x07Z\x02\x02\u0ADE\u0AE0\x05\u01C6\xE4" +
		"\x02\u0ADF\u0AD6\x03\x02\x02\x02\u0ADF\u0AD9\x03\x02\x02\x02\u0ADF\u0ADC" +
		"\x03\x02\x02\x02\u0AE0\u0AE3\x03\x02\x02\x02\u0AE1\u0ADF\x03\x02\x02\x02" +
		"\u0AE1\u0AE2\x03\x02\x02\x02\u0AE2\u01C5\x03\x02\x02\x02\u0AE3\u0AE1\x03" +
		"\x02\x02\x02\u0AE4\u0AEC\x05\u01C8\xE5\x02\u0AE5\u0AEC\x05\u01CA\xE6\x02" +
		"\u0AE6\u0AE7\x07S\x02\x02\u0AE7\u0AEC\x05\u01C6\xE4\x02\u0AE8\u0AE9\x07" +
		"T\x02\x02\u0AE9\u0AEC\x05\u01C6\xE4\x02\u0AEA\u0AEC\x05\u01CC\xE7\x02" +
		"\u0AEB\u0AE4\x03\x02\x02\x02\u0AEB\u0AE5\x03\x02\x02\x02\u0AEB\u0AE6\x03" +
		"\x02\x02\x02\u0AEB\u0AE8\x03\x02\x02\x02\u0AEB\u0AEA\x03\x02\x02\x02\u0AEC" +
		"\u01C7\x03\x02\x02\x02\u0AED\u0AEE\x07Q\x02\x02\u0AEE\u0AEF\x05\u01C6" +
		"\xE4\x02\u0AEF\u01C9\x03\x02\x02\x02\u0AF0\u0AF1\x07R\x02\x02\u0AF1\u0AF2" +
		"\x05\u01C6\xE4\x02\u0AF2\u01CB\x03\x02\x02\x02\u0AF3\u0AFA\x05\u01CE\xE8" +
		"\x02\u0AF4\u0AF5\x07H\x02\x02\u0AF5\u0AFA\x05\u01C6\xE4\x02\u0AF6\u0AF7" +
		"\x07G\x02\x02\u0AF7\u0AFA\x05\u01C6\xE4\x02\u0AF8\u0AFA\x05\u01D8\xED" +
		"\x02\u0AF9\u0AF3\x03\x02\x02\x02\u0AF9\u0AF4\x03\x02\x02\x02\u0AF9\u0AF6" +
		"\x03\x02\x02\x02\u0AF9\u0AF8\x03\x02\x02\x02\u0AFA\u01CD\x03\x02\x02\x02" +
		"\u0AFB\u0AFE\x05\u0160\xB1\x02\u0AFC\u0AFE\x05:\x1E\x02\u0AFD\u0AFB\x03" +
		"\x02";
	private static readonly _serializedATNSegment5: string =
		"\x02\x02\u0AFD\u0AFC\x03\x02\x02\x02\u0AFE\u0B03\x03\x02\x02\x02\u0AFF" +
		"\u0B02\x05\u01D2\xEA\x02\u0B00\u0B02\x05\u01D6\xEC\x02\u0B01\u0AFF\x03" +
		"\x02\x02\x02\u0B01\u0B00\x03\x02\x02\x02\u0B02\u0B05\x03\x02\x02\x02\u0B03" +
		"\u0B01\x03\x02\x02\x02\u0B03\u0B04\x03\x02\x02\x02\u0B04\u01CF\x03\x02" +
		"\x02\x02\u0B05\u0B03\x03\x02\x02\x02\u0B06\u0B07\x05\u01CE\xE8\x02\u0B07" +
		"\u0B08\x07Q\x02\x02\u0B08\u01D1\x03\x02\x02\x02\u0B09\u0B0A\x07Q\x02\x02" +
		"\u0B0A\u01D3\x03\x02\x02\x02\u0B0B\u0B0C\x05\u01CE\xE8\x02\u0B0C\u0B0D" +
		"\x07R\x02\x02\u0B0D\u01D5\x03\x02\x02\x02\u0B0E\u0B0F\x07R\x02\x02\u0B0F" +
		"\u01D7\x03\x02\x02\x02\u0B10\u0B11\x07;\x02\x02\u0B11\u0B12\x05\x04\x03" +
		"\x02\u0B12\u0B13\x07<\x02\x02\u0B13\u0B14\x05\u01C6\xE4\x02\u0B14\u0B2C" +
		"\x03\x02\x02\x02\u0B15\u0B16\x07;\x02\x02\u0B16\u0B1A\x05\f\x07\x02\u0B17" +
		"\u0B19\x05(\x15\x02\u0B18\u0B17\x03\x02\x02\x02\u0B19\u0B1C\x03\x02\x02" +
		"\x02\u0B1A\u0B18\x03\x02\x02\x02\u0B1A\u0B1B\x03\x02\x02\x02\u0B1B\u0B1D" +
		"\x03\x02\x02\x02\u0B1C\u0B1A\x03\x02\x02\x02\u0B1D\u0B1E\x07<\x02\x02" +
		"\u0B1E\u0B1F\x05\u01CC\xE7\x02\u0B1F\u0B2C\x03\x02\x02\x02\u0B20\u0B21" +
		"\x07;\x02\x02\u0B21\u0B25\x05\f\x07\x02\u0B22\u0B24\x05(\x15\x02\u0B23" +
		"\u0B22\x03\x02\x02\x02\u0B24\u0B27\x03\x02\x02\x02\u0B25\u0B23\x03\x02" +
		"\x02\x02\u0B25\u0B26\x03\x02\x02\x02\u0B26\u0B28\x03\x02\x02\x02\u0B27" +
		"\u0B25\x03\x02\x02\x02\u0B28\u0B29\x07<\x02\x02\u0B29\u0B2A\x05\u01A0" +
		"\xD1\x02\u0B2A\u0B2C\x03\x02\x02\x02\u0B2B\u0B10\x03\x02\x02\x02\u0B2B" +
		"\u0B15\x03\x02\x02\x02\u0B2B\u0B20\x03\x02\x02\x02\u0B2C\u01D9\x03\x02" +
		"\x02\x02\u0B2D\u0B2F\t\x06\x02\x02\u0B2E\u0B2D\x03\x02\x02\x02\u0B2F\u0B32" +
		"\x03\x02\x02\x02\u0B30\u0B2E\x03\x02\x02\x02\u0B30\u0B31\x03\x02\x02\x02" +
		"\u0B31\u01DB\x03\x02\x02\x02\u0B32\u0B30\x03\x02\x02\x02\u014A\u01E1\u01E8" +
		"\u01EC\u01F0\u01F9\u01FD\u0201\u0203\u0209\u020E\u0215\u021A\u021C\u0222" +
		"\u0227\u022C\u0231\u023C\u024A\u024F\u0257\u025E\u0264\u0269\u0274\u0277" +
		"\u0285\u028A\u028F\u0294\u029A\u02A4\u02AC\u02B6\u02BE\u02CA\u02CE\u02D3" +
		"\u02D9\u02E1\u02EE\u030B\u030F\u0312\u0317\u031D\u0320\u0323\u032F\u033A" +
		"\u0348\u034F\u0358\u035F\u0362\u0367\u0376\u037D\u0383\u0387\u038B\u038F" +
		"\u0393\u0398\u039C\u03A0\u03A2\u03A7\u03AE\u03B3\u03B5\u03BB\u03C0\u03C4" +
		"\u03D7\u03DA\u03DF\u03EF\u03F4\u03FA\u0400\u0402\u0406\u040B\u040F\u0417" +
		"\u041E\u0426\u0429\u042E\u0436\u043B\u0442\u0449\u044E\u0454\u0460\u0465" +
		"\u0469\u0473\u0478\u0480\u0483\u0488\u0490\u0493\u0498\u049D\u04A2\u04A7" +
		"\u04AE\u04B3\u04BB\u04C0\u04C5\u04CA\u04D0\u04D6\u04D9\u04DC\u04E5\u04EB" +
		"\u04F1\u04F4\u04F7\u04FF\u0504\u0509\u050F\u0512\u051D\u0526\u0530\u0535" +
		"\u0540\u0545\u0551\u0556\u0562\u056C\u0571\u0579\u057C\u0583\u058B\u0591" +
		"\u059A\u05A4\u05A8\u05AB\u05B4\u05C2\u05C5\u05CE\u05D3\u05DA\u05DF\u05E2" +
		"\u05E8\u05ED\u05F9\u0600\u060E\u0624\u0646\u0652\u0658\u0664\u0671\u068B" +
		"\u068F\u0694\u0698\u069C\u06A4\u06A8\u06AC\u06B3\u06BC\u06C4\u06D3\u06DF" +
		"\u06E5\u06EB\u0700\u0705\u070B\u0717\u0722\u072C\u072F\u0734\u073D\u0743" +
		"\u074D\u0752\u075B\u0772\u077C\u0792\u0799\u07A1\u07A9\u07B4\u07CB\u07D5" +
		"\u07E0\u07F6\u07FA\u07FF\u0807\u080D\u0811\u0815\u0819\u081F\u0824\u0829" +
		"\u082D\u0831\u0837\u083C\u0841\u0845\u0849\u084B\u0850\u0855\u085A\u085E" +
		"\u0862\u0866\u086B\u0873\u0879\u087D\u0881\u0885\u088B\u0890\u0895\u0899" +
		"\u089D\u089F\u08A4\u08B3\u08C1\u08CD\u08D6\u08E4\u08F1\u08FA\u0900\u0907" +
		"\u090C\u0913\u0918\u091F\u0924\u092B\u0930\u0938\u093D\u0941\u0945\u094A" +
		"\u0951\u0958\u095D\u0964\u0969\u0970\u0975\u097D\u0982\u0986\u098D\u0993" +
		"\u099A\u09A1\u09A8\u09B0\u09B7\u09BF\u09C3\u09CA\u09D1\u09D8\u09E0\u09E7" +
		"\u09EF\u09F5\u09FB\u0A07\u0A0D\u0A13\u0A1E\u0A27\u0A2E\u0A35\u0A3A\u0A3E" +
		"\u0A47\u0A52\u0A5C\u0A67\u0A72\u0A7D\u0A88\u0A94\u0A96\u0AAB\u0AAD\u0AC0" +
		"\u0AC2\u0ACE\u0AD0\u0ADF\u0AE1\u0AEB\u0AF9\u0AFD\u0B01\u0B03\u0B1A\u0B25" +
		"\u0B2B\u0B30";
	public static readonly _serializedATN: string = Utils.join(
		[
			Java8Parser._serializedATNSegment0,
			Java8Parser._serializedATNSegment1,
			Java8Parser._serializedATNSegment2,
			Java8Parser._serializedATNSegment3,
			Java8Parser._serializedATNSegment4,
			Java8Parser._serializedATNSegment5,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!Java8Parser.__ATN) {
			Java8Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(Java8Parser._serializedATN));
		}

		return Java8Parser.__ATN;
	}

}

export class LiteralContext extends ParserRuleContext {
	public IntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.IntegerLiteral, 0); }
	public FloatingPointLiteral(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.FloatingPointLiteral, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.BooleanLiteral, 0); }
	public CharacterLiteral(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.CharacterLiteral, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.StringLiteral, 0); }
	public NullLiteral(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.NullLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_literal; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimitiveTypeContext extends ParserRuleContext {
	public numericType(): NumericTypeContext | undefined {
		return this.tryGetRuleContext(0, NumericTypeContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.BOOLEAN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_primitiveType; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitPrimitiveType) {
			return visitor.visitPrimitiveType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumericTypeContext extends ParserRuleContext {
	public integralType(): IntegralTypeContext | undefined {
		return this.tryGetRuleContext(0, IntegralTypeContext);
	}
	public floatingPointType(): FloatingPointTypeContext | undefined {
		return this.tryGetRuleContext(0, FloatingPointTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_numericType; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitNumericType) {
			return visitor.visitNumericType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntegralTypeContext extends ParserRuleContext {
	public BYTE(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.BYTE, 0); }
	public SHORT(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.SHORT, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.INT, 0); }
	public LONG(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.LONG, 0); }
	public CHAR(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.CHAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_integralType; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitIntegralType) {
			return visitor.visitIntegralType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FloatingPointTypeContext extends ParserRuleContext {
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.FLOAT, 0); }
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.DOUBLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_floatingPointType; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitFloatingPointType) {
			return visitor.visitFloatingPointType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReferenceTypeContext extends ParserRuleContext {
	public classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
	}
	public typeVariable(): TypeVariableContext | undefined {
		return this.tryGetRuleContext(0, TypeVariableContext);
	}
	public arrayType(): ArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, ArrayTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_referenceType; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitReferenceType) {
			return visitor.visitReferenceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassOrInterfaceTypeContext extends ParserRuleContext {
	public classType_lfno_classOrInterfaceType(): ClassType_lfno_classOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassType_lfno_classOrInterfaceTypeContext);
	}
	public interfaceType_lfno_classOrInterfaceType(): InterfaceType_lfno_classOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, InterfaceType_lfno_classOrInterfaceTypeContext);
	}
	public classType_lf_classOrInterfaceType(): ClassType_lf_classOrInterfaceTypeContext[];
	public classType_lf_classOrInterfaceType(i: number): ClassType_lf_classOrInterfaceTypeContext;
	public classType_lf_classOrInterfaceType(i?: number): ClassType_lf_classOrInterfaceTypeContext | ClassType_lf_classOrInterfaceTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassType_lf_classOrInterfaceTypeContext);
		} else {
			return this.getRuleContext(i, ClassType_lf_classOrInterfaceTypeContext);
		}
	}
	public interfaceType_lf_classOrInterfaceType(): InterfaceType_lf_classOrInterfaceTypeContext[];
	public interfaceType_lf_classOrInterfaceType(i: number): InterfaceType_lf_classOrInterfaceTypeContext;
	public interfaceType_lf_classOrInterfaceType(i?: number): InterfaceType_lf_classOrInterfaceTypeContext | InterfaceType_lf_classOrInterfaceTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceType_lf_classOrInterfaceTypeContext);
		} else {
			return this.getRuleContext(i, InterfaceType_lf_classOrInterfaceTypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_classOrInterfaceType; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitClassOrInterfaceType) {
			return visitor.visitClassOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassTypeContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_classType; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitClassType) {
			return visitor.visitClassType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassType_lf_classOrInterfaceTypeContext extends ParserRuleContext {
	public DOT(): TerminalNode { return this.getToken(Java8Parser.DOT, 0); }
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_classType_lf_classOrInterfaceType; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitClassType_lf_classOrInterfaceType) {
			return visitor.visitClassType_lf_classOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassType_lfno_classOrInterfaceTypeContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_classType_lfno_classOrInterfaceType; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitClassType_lfno_classOrInterfaceType) {
			return visitor.visitClassType_lfno_classOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceTypeContext extends ParserRuleContext {
	public classType(): ClassTypeContext {
		return this.getRuleContext(0, ClassTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_interfaceType; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitInterfaceType) {
			return visitor.visitInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceType_lf_classOrInterfaceTypeContext extends ParserRuleContext {
	public classType_lf_classOrInterfaceType(): ClassType_lf_classOrInterfaceTypeContext {
		return this.getRuleContext(0, ClassType_lf_classOrInterfaceTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_interfaceType_lf_classOrInterfaceType; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitInterfaceType_lf_classOrInterfaceType) {
			return visitor.visitInterfaceType_lf_classOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceType_lfno_classOrInterfaceTypeContext extends ParserRuleContext {
	public classType_lfno_classOrInterfaceType(): ClassType_lfno_classOrInterfaceTypeContext {
		return this.getRuleContext(0, ClassType_lfno_classOrInterfaceTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_interfaceType_lfno_classOrInterfaceType; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitInterfaceType_lfno_classOrInterfaceType) {
			return visitor.visitInterfaceType_lfno_classOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeVariableContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_typeVariable; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitTypeVariable) {
			return visitor.visitTypeVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayTypeContext extends ParserRuleContext {
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	public dims(): DimsContext {
		return this.getRuleContext(0, DimsContext);
	}
	public classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
	}
	public typeVariable(): TypeVariableContext | undefined {
		return this.tryGetRuleContext(0, TypeVariableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_arrayType; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitArrayType) {
			return visitor.visitArrayType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DimsContext extends ParserRuleContext {
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.LBRACK);
		} else {
			return this.getToken(Java8Parser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.RBRACK);
		} else {
			return this.getToken(Java8Parser.RBRACK, i);
		}
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_dims; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitDims) {
			return visitor.visitDims(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParameterContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public typeParameterModifier(): TypeParameterModifierContext[];
	public typeParameterModifier(i: number): TypeParameterModifierContext;
	public typeParameterModifier(i?: number): TypeParameterModifierContext | TypeParameterModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeParameterModifierContext);
		} else {
			return this.getRuleContext(i, TypeParameterModifierContext);
		}
	}
	public typeBound(): TypeBoundContext | undefined {
		return this.tryGetRuleContext(0, TypeBoundContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_typeParameter; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitTypeParameter) {
			return visitor.visitTypeParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParameterModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext {
		return this.getRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_typeParameterModifier; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitTypeParameterModifier) {
			return visitor.visitTypeParameterModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeBoundContext extends ParserRuleContext {
	public EXTENDS(): TerminalNode { return this.getToken(Java8Parser.EXTENDS, 0); }
	public typeVariable(): TypeVariableContext | undefined {
		return this.tryGetRuleContext(0, TypeVariableContext);
	}
	public classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
	}
	public additionalBound(): AdditionalBoundContext[];
	public additionalBound(i: number): AdditionalBoundContext;
	public additionalBound(i?: number): AdditionalBoundContext | AdditionalBoundContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AdditionalBoundContext);
		} else {
			return this.getRuleContext(i, AdditionalBoundContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_typeBound; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitTypeBound) {
			return visitor.visitTypeBound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditionalBoundContext extends ParserRuleContext {
	public BITAND(): TerminalNode { return this.getToken(Java8Parser.BITAND, 0); }
	public interfaceType(): InterfaceTypeContext {
		return this.getRuleContext(0, InterfaceTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_additionalBound; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitAdditionalBound) {
			return visitor.visitAdditionalBound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentsContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(Java8Parser.LT, 0); }
	public typeArgumentList(): TypeArgumentListContext {
		return this.getRuleContext(0, TypeArgumentListContext);
	}
	public GT(): TerminalNode { return this.getToken(Java8Parser.GT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_typeArguments; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitTypeArguments) {
			return visitor.visitTypeArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentListContext extends ParserRuleContext {
	public typeArgument(): TypeArgumentContext[];
	public typeArgument(i: number): TypeArgumentContext;
	public typeArgument(i?: number): TypeArgumentContext | TypeArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeArgumentContext);
		} else {
			return this.getRuleContext(i, TypeArgumentContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.COMMA);
		} else {
			return this.getToken(Java8Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_typeArgumentList; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitTypeArgumentList) {
			return visitor.visitTypeArgumentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentContext extends ParserRuleContext {
	public referenceType(): ReferenceTypeContext | undefined {
		return this.tryGetRuleContext(0, ReferenceTypeContext);
	}
	public wildcard(): WildcardContext | undefined {
		return this.tryGetRuleContext(0, WildcardContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_typeArgument; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitTypeArgument) {
			return visitor.visitTypeArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WildcardContext extends ParserRuleContext {
	public QUESTION(): TerminalNode { return this.getToken(Java8Parser.QUESTION, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public wildcardBounds(): WildcardBoundsContext | undefined {
		return this.tryGetRuleContext(0, WildcardBoundsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_wildcard; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitWildcard) {
			return visitor.visitWildcard(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WildcardBoundsContext extends ParserRuleContext {
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.EXTENDS, 0); }
	public referenceType(): ReferenceTypeContext {
		return this.getRuleContext(0, ReferenceTypeContext);
	}
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.SUPER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_wildcardBounds; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitWildcardBounds) {
			return visitor.visitWildcardBounds(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public packageName(): PackageNameContext | undefined {
		return this.tryGetRuleContext(0, PackageNameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_packageName; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitPackageName) {
			return visitor.visitPackageName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public packageOrTypeName(): PackageOrTypeNameContext | undefined {
		return this.tryGetRuleContext(0, PackageOrTypeNameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_typeName; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitTypeName) {
			return visitor.visitTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageOrTypeNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public packageOrTypeName(): PackageOrTypeNameContext | undefined {
		return this.tryGetRuleContext(0, PackageOrTypeNameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_packageOrTypeName; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitPackageOrTypeName) {
			return visitor.visitPackageOrTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public ambiguousName(): AmbiguousNameContext | undefined {
		return this.tryGetRuleContext(0, AmbiguousNameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_expressionName; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitExpressionName) {
			return visitor.visitExpressionName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_methodName; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitMethodName) {
			return visitor.visitMethodName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AmbiguousNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public ambiguousName(): AmbiguousNameContext | undefined {
		return this.tryGetRuleContext(0, AmbiguousNameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_ambiguousName; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitAmbiguousName) {
			return visitor.visitAmbiguousName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompilationUnitContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(Java8Parser.EOF, 0); }
	public packageDeclaration(): PackageDeclarationContext | undefined {
		return this.tryGetRuleContext(0, PackageDeclarationContext);
	}
	public importDeclaration(): ImportDeclarationContext[];
	public importDeclaration(i: number): ImportDeclarationContext;
	public importDeclaration(i?: number): ImportDeclarationContext | ImportDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportDeclarationContext);
		} else {
			return this.getRuleContext(i, ImportDeclarationContext);
		}
	}
	public typeDeclaration(): TypeDeclarationContext[];
	public typeDeclaration(i: number): TypeDeclarationContext;
	public typeDeclaration(i?: number): TypeDeclarationContext | TypeDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeDeclarationContext);
		} else {
			return this.getRuleContext(i, TypeDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_compilationUnit; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitCompilationUnit) {
			return visitor.visitCompilationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageDeclarationContext extends ParserRuleContext {
	public PACKAGE(): TerminalNode { return this.getToken(Java8Parser.PACKAGE, 0); }
	public packageName(): PackageNameContext {
		return this.getRuleContext(0, PackageNameContext);
	}
	public SEMI(): TerminalNode { return this.getToken(Java8Parser.SEMI, 0); }
	public packageModifier(): PackageModifierContext[];
	public packageModifier(i: number): PackageModifierContext;
	public packageModifier(i?: number): PackageModifierContext | PackageModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PackageModifierContext);
		} else {
			return this.getRuleContext(i, PackageModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_packageDeclaration; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitPackageDeclaration) {
			return visitor.visitPackageDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext {
		return this.getRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_packageModifier; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitPackageModifier) {
			return visitor.visitPackageModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportDeclarationContext extends ParserRuleContext {
	public singleTypeImportDeclaration(): SingleTypeImportDeclarationContext | undefined {
		return this.tryGetRuleContext(0, SingleTypeImportDeclarationContext);
	}
	public typeImportOnDemandDeclaration(): TypeImportOnDemandDeclarationContext | undefined {
		return this.tryGetRuleContext(0, TypeImportOnDemandDeclarationContext);
	}
	public singleStaticImportDeclaration(): SingleStaticImportDeclarationContext | undefined {
		return this.tryGetRuleContext(0, SingleStaticImportDeclarationContext);
	}
	public staticImportOnDemandDeclaration(): StaticImportOnDemandDeclarationContext | undefined {
		return this.tryGetRuleContext(0, StaticImportOnDemandDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_importDeclaration; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitImportDeclaration) {
			return visitor.visitImportDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleTypeImportDeclarationContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(Java8Parser.IMPORT, 0); }
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public SEMI(): TerminalNode { return this.getToken(Java8Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_singleTypeImportDeclaration; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitSingleTypeImportDeclaration) {
			return visitor.visitSingleTypeImportDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeImportOnDemandDeclarationContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(Java8Parser.IMPORT, 0); }
	public packageOrTypeName(): PackageOrTypeNameContext {
		return this.getRuleContext(0, PackageOrTypeNameContext);
	}
	public DOT(): TerminalNode { return this.getToken(Java8Parser.DOT, 0); }
	public MUL(): TerminalNode { return this.getToken(Java8Parser.MUL, 0); }
	public SEMI(): TerminalNode { return this.getToken(Java8Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_typeImportOnDemandDeclaration; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitTypeImportOnDemandDeclaration) {
			return visitor.visitTypeImportOnDemandDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleStaticImportDeclarationContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(Java8Parser.IMPORT, 0); }
	public STATIC(): TerminalNode { return this.getToken(Java8Parser.STATIC, 0); }
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public DOT(): TerminalNode { return this.getToken(Java8Parser.DOT, 0); }
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public SEMI(): TerminalNode { return this.getToken(Java8Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_singleStaticImportDeclaration; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitSingleStaticImportDeclaration) {
			return visitor.visitSingleStaticImportDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StaticImportOnDemandDeclarationContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(Java8Parser.IMPORT, 0); }
	public STATIC(): TerminalNode { return this.getToken(Java8Parser.STATIC, 0); }
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public DOT(): TerminalNode { return this.getToken(Java8Parser.DOT, 0); }
	public MUL(): TerminalNode { return this.getToken(Java8Parser.MUL, 0); }
	public SEMI(): TerminalNode { return this.getToken(Java8Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_staticImportOnDemandDeclaration; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitStaticImportOnDemandDeclaration) {
			return visitor.visitStaticImportOnDemandDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDeclarationContext extends ParserRuleContext {
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_typeDeclaration; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitTypeDeclaration) {
			return visitor.visitTypeDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassDeclarationContext extends ParserRuleContext {
	public normalClassDeclaration(): NormalClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, NormalClassDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_classDeclaration; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitClassDeclaration) {
			return visitor.visitClassDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NormalClassDeclarationContext extends ParserRuleContext {
	public CLASS(): TerminalNode { return this.getToken(Java8Parser.CLASS, 0); }
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public classBody(): ClassBodyContext {
		return this.getRuleContext(0, ClassBodyContext);
	}
	public comments(): CommentsContext | undefined {
		return this.tryGetRuleContext(0, CommentsContext);
	}
	public classModifier(): ClassModifierContext[];
	public classModifier(i: number): ClassModifierContext;
	public classModifier(i?: number): ClassModifierContext | ClassModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassModifierContext);
		} else {
			return this.getRuleContext(i, ClassModifierContext);
		}
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public superclass(): SuperclassContext | undefined {
		return this.tryGetRuleContext(0, SuperclassContext);
	}
	public superinterfaces(): SuperinterfacesContext | undefined {
		return this.tryGetRuleContext(0, SuperinterfacesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_normalClassDeclaration; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitNormalClassDeclaration) {
			return visitor.visitNormalClassDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.PUBLIC, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.PROTECTED, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.PRIVATE, 0); }
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.ABSTRACT, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.STATIC, 0); }
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.FINAL, 0); }
	public STRICTFP(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.STRICTFP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_classModifier; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitClassModifier) {
			return visitor.visitClassModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParametersContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(Java8Parser.LT, 0); }
	public typeParameterList(): TypeParameterListContext {
		return this.getRuleContext(0, TypeParameterListContext);
	}
	public GT(): TerminalNode { return this.getToken(Java8Parser.GT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_typeParameters; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitTypeParameters) {
			return visitor.visitTypeParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParameterListContext extends ParserRuleContext {
	public typeParameter(): TypeParameterContext[];
	public typeParameter(i: number): TypeParameterContext;
	public typeParameter(i?: number): TypeParameterContext | TypeParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeParameterContext);
		} else {
			return this.getRuleContext(i, TypeParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.COMMA);
		} else {
			return this.getToken(Java8Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_typeParameterList; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitTypeParameterList) {
			return visitor.visitTypeParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SuperclassContext extends ParserRuleContext {
	public EXTENDS(): TerminalNode { return this.getToken(Java8Parser.EXTENDS, 0); }
	public classType(): ClassTypeContext {
		return this.getRuleContext(0, ClassTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_superclass; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitSuperclass) {
			return visitor.visitSuperclass(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SuperinterfacesContext extends ParserRuleContext {
	public IMPLEMENTS(): TerminalNode { return this.getToken(Java8Parser.IMPLEMENTS, 0); }
	public interfaceTypeList(): InterfaceTypeListContext {
		return this.getRuleContext(0, InterfaceTypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_superinterfaces; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitSuperinterfaces) {
			return visitor.visitSuperinterfaces(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceTypeListContext extends ParserRuleContext {
	public interfaceType(): InterfaceTypeContext[];
	public interfaceType(i: number): InterfaceTypeContext;
	public interfaceType(i?: number): InterfaceTypeContext | InterfaceTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceTypeContext);
		} else {
			return this.getRuleContext(i, InterfaceTypeContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.COMMA);
		} else {
			return this.getToken(Java8Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_interfaceTypeList; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitInterfaceTypeList) {
			return visitor.visitInterfaceTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(Java8Parser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(Java8Parser.RBRACE, 0); }
	public classBodyDeclaration(): ClassBodyDeclarationContext[];
	public classBodyDeclaration(i: number): ClassBodyDeclarationContext;
	public classBodyDeclaration(i?: number): ClassBodyDeclarationContext | ClassBodyDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassBodyDeclarationContext);
		} else {
			return this.getRuleContext(i, ClassBodyDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_classBody; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitClassBody) {
			return visitor.visitClassBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassBodyDeclarationContext extends ParserRuleContext {
	public classMemberDeclaration(): ClassMemberDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassMemberDeclarationContext);
	}
	public instanceInitializer(): InstanceInitializerContext | undefined {
		return this.tryGetRuleContext(0, InstanceInitializerContext);
	}
	public staticInitializer(): StaticInitializerContext | undefined {
		return this.tryGetRuleContext(0, StaticInitializerContext);
	}
	public constructorDeclaration(): ConstructorDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ConstructorDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_classBodyDeclaration; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitClassBodyDeclaration) {
			return visitor.visitClassBodyDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassMemberDeclarationContext extends ParserRuleContext {
	public fieldDeclaration(): FieldDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FieldDeclarationContext);
	}
	public methodDeclaration(): MethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MethodDeclarationContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_classMemberDeclaration; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitClassMemberDeclaration) {
			return visitor.visitClassMemberDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldDeclarationContext extends ParserRuleContext {
	public unannType(): UnannTypeContext {
		return this.getRuleContext(0, UnannTypeContext);
	}
	public variableDeclaratorList(): VariableDeclaratorListContext {
		return this.getRuleContext(0, VariableDeclaratorListContext);
	}
	public SEMI(): TerminalNode { return this.getToken(Java8Parser.SEMI, 0); }
	public comments(): CommentsContext | undefined {
		return this.tryGetRuleContext(0, CommentsContext);
	}
	public fieldModifier(): FieldModifierContext[];
	public fieldModifier(i: number): FieldModifierContext;
	public fieldModifier(i?: number): FieldModifierContext | FieldModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldModifierContext);
		} else {
			return this.getRuleContext(i, FieldModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_fieldDeclaration; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitFieldDeclaration) {
			return visitor.visitFieldDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.PUBLIC, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.PROTECTED, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.PRIVATE, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.STATIC, 0); }
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.FINAL, 0); }
	public TRANSIENT(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.TRANSIENT, 0); }
	public VOLATILE(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.VOLATILE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_fieldModifier; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitFieldModifier) {
			return visitor.visitFieldModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclaratorListContext extends ParserRuleContext {
	public variableDeclarator(): VariableDeclaratorContext[];
	public variableDeclarator(i: number): VariableDeclaratorContext;
	public variableDeclarator(i?: number): VariableDeclaratorContext | VariableDeclaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclaratorContext);
		} else {
			return this.getRuleContext(i, VariableDeclaratorContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.COMMA);
		} else {
			return this.getToken(Java8Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_variableDeclaratorList; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclaratorList) {
			return visitor.visitVariableDeclaratorList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclaratorContext extends ParserRuleContext {
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.ASSIGN, 0); }
	public variableInitializer(): VariableInitializerContext | undefined {
		return this.tryGetRuleContext(0, VariableInitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_variableDeclarator; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclarator) {
			return visitor.visitVariableDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclaratorIdContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public dims(): DimsContext | undefined {
		return this.tryGetRuleContext(0, DimsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_variableDeclaratorId; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclaratorId) {
			return visitor.visitVariableDeclaratorId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableInitializerContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public arrayInitializer(): ArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ArrayInitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_variableInitializer; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitVariableInitializer) {
			return visitor.visitVariableInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannTypeContext extends ParserRuleContext {
	public unannPrimitiveType(): UnannPrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannPrimitiveTypeContext);
	}
	public unannReferenceType(): UnannReferenceTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannReferenceTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_unannType; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitUnannType) {
			return visitor.visitUnannType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannPrimitiveTypeContext extends ParserRuleContext {
	public numericType(): NumericTypeContext | undefined {
		return this.tryGetRuleContext(0, NumericTypeContext);
	}
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.BOOLEAN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_unannPrimitiveType; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitUnannPrimitiveType) {
			return visitor.visitUnannPrimitiveType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannReferenceTypeContext extends ParserRuleContext {
	public unannClassOrInterfaceType(): UnannClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannClassOrInterfaceTypeContext);
	}
	public unannTypeVariable(): UnannTypeVariableContext | undefined {
		return this.tryGetRuleContext(0, UnannTypeVariableContext);
	}
	public unannArrayType(): UnannArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannArrayTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_unannReferenceType; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitUnannReferenceType) {
			return visitor.visitUnannReferenceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannClassOrInterfaceTypeContext extends ParserRuleContext {
	public unannClassType_lfno_unannClassOrInterfaceType(): UnannClassType_lfno_unannClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannClassType_lfno_unannClassOrInterfaceTypeContext);
	}
	public unannInterfaceType_lfno_unannClassOrInterfaceType(): UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext);
	}
	public unannClassType_lf_unannClassOrInterfaceType(): UnannClassType_lf_unannClassOrInterfaceTypeContext[];
	public unannClassType_lf_unannClassOrInterfaceType(i: number): UnannClassType_lf_unannClassOrInterfaceTypeContext;
	public unannClassType_lf_unannClassOrInterfaceType(i?: number): UnannClassType_lf_unannClassOrInterfaceTypeContext | UnannClassType_lf_unannClassOrInterfaceTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UnannClassType_lf_unannClassOrInterfaceTypeContext);
		} else {
			return this.getRuleContext(i, UnannClassType_lf_unannClassOrInterfaceTypeContext);
		}
	}
	public unannInterfaceType_lf_unannClassOrInterfaceType(): UnannInterfaceType_lf_unannClassOrInterfaceTypeContext[];
	public unannInterfaceType_lf_unannClassOrInterfaceType(i: number): UnannInterfaceType_lf_unannClassOrInterfaceTypeContext;
	public unannInterfaceType_lf_unannClassOrInterfaceType(i?: number): UnannInterfaceType_lf_unannClassOrInterfaceTypeContext | UnannInterfaceType_lf_unannClassOrInterfaceTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UnannInterfaceType_lf_unannClassOrInterfaceTypeContext);
		} else {
			return this.getRuleContext(i, UnannInterfaceType_lf_unannClassOrInterfaceTypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_unannClassOrInterfaceType; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitUnannClassOrInterfaceType) {
			return visitor.visitUnannClassOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannClassTypeContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public unannClassOrInterfaceType(): UnannClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannClassOrInterfaceTypeContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.DOT, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_unannClassType; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitUnannClassType) {
			return visitor.visitUnannClassType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannClassType_lf_unannClassOrInterfaceTypeContext extends ParserRuleContext {
	public DOT(): TerminalNode { return this.getToken(Java8Parser.DOT, 0); }
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_unannClassType_lf_unannClassOrInterfaceType; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitUnannClassType_lf_unannClassOrInterfaceType) {
			return visitor.visitUnannClassType_lf_unannClassOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannClassType_lfno_unannClassOrInterfaceTypeContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_unannClassType_lfno_unannClassOrInterfaceType; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitUnannClassType_lfno_unannClassOrInterfaceType) {
			return visitor.visitUnannClassType_lfno_unannClassOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannInterfaceTypeContext extends ParserRuleContext {
	public unannClassType(): UnannClassTypeContext {
		return this.getRuleContext(0, UnannClassTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_unannInterfaceType; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitUnannInterfaceType) {
			return visitor.visitUnannInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannInterfaceType_lf_unannClassOrInterfaceTypeContext extends ParserRuleContext {
	public unannClassType_lf_unannClassOrInterfaceType(): UnannClassType_lf_unannClassOrInterfaceTypeContext {
		return this.getRuleContext(0, UnannClassType_lf_unannClassOrInterfaceTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_unannInterfaceType_lf_unannClassOrInterfaceType; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitUnannInterfaceType_lf_unannClassOrInterfaceType) {
			return visitor.visitUnannInterfaceType_lf_unannClassOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext extends ParserRuleContext {
	public unannClassType_lfno_unannClassOrInterfaceType(): UnannClassType_lfno_unannClassOrInterfaceTypeContext {
		return this.getRuleContext(0, UnannClassType_lfno_unannClassOrInterfaceTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_unannInterfaceType_lfno_unannClassOrInterfaceType; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitUnannInterfaceType_lfno_unannClassOrInterfaceType) {
			return visitor.visitUnannInterfaceType_lfno_unannClassOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannTypeVariableContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_unannTypeVariable; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitUnannTypeVariable) {
			return visitor.visitUnannTypeVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannArrayTypeContext extends ParserRuleContext {
	public unannPrimitiveType(): UnannPrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannPrimitiveTypeContext);
	}
	public dims(): DimsContext {
		return this.getRuleContext(0, DimsContext);
	}
	public unannClassOrInterfaceType(): UnannClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannClassOrInterfaceTypeContext);
	}
	public unannTypeVariable(): UnannTypeVariableContext | undefined {
		return this.tryGetRuleContext(0, UnannTypeVariableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_unannArrayType; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitUnannArrayType) {
			return visitor.visitUnannArrayType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodDeclarationContext extends ParserRuleContext {
	public methodHeader(): MethodHeaderContext {
		return this.getRuleContext(0, MethodHeaderContext);
	}
	public methodBody(): MethodBodyContext {
		return this.getRuleContext(0, MethodBodyContext);
	}
	public comments(): CommentsContext | undefined {
		return this.tryGetRuleContext(0, CommentsContext);
	}
	public methodModifier(): MethodModifierContext[];
	public methodModifier(i: number): MethodModifierContext;
	public methodModifier(i?: number): MethodModifierContext | MethodModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MethodModifierContext);
		} else {
			return this.getRuleContext(i, MethodModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_methodDeclaration; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitMethodDeclaration) {
			return visitor.visitMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.PUBLIC, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.PROTECTED, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.PRIVATE, 0); }
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.ABSTRACT, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.STATIC, 0); }
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.FINAL, 0); }
	public SYNCHRONIZED(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.SYNCHRONIZED, 0); }
	public NATIVE(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.NATIVE, 0); }
	public STRICTFP(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.STRICTFP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_methodModifier; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitMethodModifier) {
			return visitor.visitMethodModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodHeaderContext extends ParserRuleContext {
	public result(): ResultContext {
		return this.getRuleContext(0, ResultContext);
	}
	public methodDeclarator(): MethodDeclaratorContext {
		return this.getRuleContext(0, MethodDeclaratorContext);
	}
	public throws_(): Throws_Context | undefined {
		return this.tryGetRuleContext(0, Throws_Context);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_methodHeader; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitMethodHeader) {
			return visitor.visitMethodHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResultContext extends ParserRuleContext {
	public unannType(): UnannTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannTypeContext);
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.VOID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_result; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitResult) {
			return visitor.visitResult(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodDeclaratorContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Java8Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Java8Parser.RPAREN, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	public dims(): DimsContext | undefined {
		return this.tryGetRuleContext(0, DimsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_methodDeclarator; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitMethodDeclarator) {
			return visitor.visitMethodDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterListContext extends ParserRuleContext {
	public receiverParameter(): ReceiverParameterContext | undefined {
		return this.tryGetRuleContext(0, ReceiverParameterContext);
	}
	public formalParameters(): FormalParametersContext | undefined {
		return this.tryGetRuleContext(0, FormalParametersContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.COMMA, 0); }
	public lastFormalParameter(): LastFormalParameterContext | undefined {
		return this.tryGetRuleContext(0, LastFormalParameterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_formalParameterList; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitFormalParameterList) {
			return visitor.visitFormalParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParametersContext extends ParserRuleContext {
	public formalParameter(): FormalParameterContext[];
	public formalParameter(i: number): FormalParameterContext;
	public formalParameter(i?: number): FormalParameterContext | FormalParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormalParameterContext);
		} else {
			return this.getRuleContext(i, FormalParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.COMMA);
		} else {
			return this.getToken(Java8Parser.COMMA, i);
		}
	}
	public receiverParameter(): ReceiverParameterContext | undefined {
		return this.tryGetRuleContext(0, ReceiverParameterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_formalParameters; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitFormalParameters) {
			return visitor.visitFormalParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterContext extends ParserRuleContext {
	public unannType(): UnannTypeContext {
		return this.getRuleContext(0, UnannTypeContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_formalParameter; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitFormalParameter) {
			return visitor.visitFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.FINAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_variableModifier; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitVariableModifier) {
			return visitor.visitVariableModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LastFormalParameterContext extends ParserRuleContext {
	public unannType(): UnannTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannTypeContext);
	}
	public ELLIPSIS(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.ELLIPSIS, 0); }
	public variableDeclaratorId(): VariableDeclaratorIdContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclaratorIdContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public formalParameter(): FormalParameterContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_lastFormalParameter; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitLastFormalParameter) {
			return visitor.visitLastFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReceiverParameterContext extends ParserRuleContext {
	public unannType(): UnannTypeContext {
		return this.getRuleContext(0, UnannTypeContext);
	}
	public THIS(): TerminalNode { return this.getToken(Java8Parser.THIS, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.Identifier, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_receiverParameter; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitReceiverParameter) {
			return visitor.visitReceiverParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Throws_Context extends ParserRuleContext {
	public THROWS(): TerminalNode { return this.getToken(Java8Parser.THROWS, 0); }
	public exceptionTypeList(): ExceptionTypeListContext {
		return this.getRuleContext(0, ExceptionTypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_throws_; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitThrows_) {
			return visitor.visitThrows_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExceptionTypeListContext extends ParserRuleContext {
	public exceptionType(): ExceptionTypeContext[];
	public exceptionType(i: number): ExceptionTypeContext;
	public exceptionType(i?: number): ExceptionTypeContext | ExceptionTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExceptionTypeContext);
		} else {
			return this.getRuleContext(i, ExceptionTypeContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.COMMA);
		} else {
			return this.getToken(Java8Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_exceptionTypeList; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitExceptionTypeList) {
			return visitor.visitExceptionTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExceptionTypeContext extends ParserRuleContext {
	public classType(): ClassTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassTypeContext);
	}
	public typeVariable(): TypeVariableContext | undefined {
		return this.tryGetRuleContext(0, TypeVariableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_exceptionType; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitExceptionType) {
			return visitor.visitExceptionType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodBodyContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_methodBody; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitMethodBody) {
			return visitor.visitMethodBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstanceInitializerContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_instanceInitializer; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitInstanceInitializer) {
			return visitor.visitInstanceInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StaticInitializerContext extends ParserRuleContext {
	public STATIC(): TerminalNode { return this.getToken(Java8Parser.STATIC, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_staticInitializer; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitStaticInitializer) {
			return visitor.visitStaticInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorDeclarationContext extends ParserRuleContext {
	public constructorDeclarator(): ConstructorDeclaratorContext {
		return this.getRuleContext(0, ConstructorDeclaratorContext);
	}
	public constructorBody(): ConstructorBodyContext {
		return this.getRuleContext(0, ConstructorBodyContext);
	}
	public constructorModifier(): ConstructorModifierContext[];
	public constructorModifier(i: number): ConstructorModifierContext;
	public constructorModifier(i?: number): ConstructorModifierContext | ConstructorModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstructorModifierContext);
		} else {
			return this.getRuleContext(i, ConstructorModifierContext);
		}
	}
	public throws_(): Throws_Context | undefined {
		return this.tryGetRuleContext(0, Throws_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_constructorDeclaration; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitConstructorDeclaration) {
			return visitor.visitConstructorDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.PUBLIC, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.PROTECTED, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.PRIVATE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_constructorModifier; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitConstructorModifier) {
			return visitor.visitConstructorModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorDeclaratorContext extends ParserRuleContext {
	public simpleTypeName(): SimpleTypeNameContext {
		return this.getRuleContext(0, SimpleTypeNameContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(Java8Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Java8Parser.RPAREN, 0); }
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_constructorDeclarator; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitConstructorDeclarator) {
			return visitor.visitConstructorDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleTypeNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_simpleTypeName; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitSimpleTypeName) {
			return visitor.visitSimpleTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(Java8Parser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(Java8Parser.RBRACE, 0); }
	public explicitConstructorInvocation(): ExplicitConstructorInvocationContext | undefined {
		return this.tryGetRuleContext(0, ExplicitConstructorInvocationContext);
	}
	public blockStatements(): BlockStatementsContext | undefined {
		return this.tryGetRuleContext(0, BlockStatementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_constructorBody; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitConstructorBody) {
			return visitor.visitConstructorBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExplicitConstructorInvocationContext extends ParserRuleContext {
	public THIS(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.THIS, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Java8Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Java8Parser.RPAREN, 0); }
	public SEMI(): TerminalNode { return this.getToken(Java8Parser.SEMI, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.SUPER, 0); }
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.DOT, 0); }
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_explicitConstructorInvocation; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitExplicitConstructorInvocation) {
			return visitor.visitExplicitConstructorInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumDeclarationContext extends ParserRuleContext {
	public ENUM(): TerminalNode { return this.getToken(Java8Parser.ENUM, 0); }
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public enumBody(): EnumBodyContext {
		return this.getRuleContext(0, EnumBodyContext);
	}
	public classModifier(): ClassModifierContext[];
	public classModifier(i: number): ClassModifierContext;
	public classModifier(i?: number): ClassModifierContext | ClassModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassModifierContext);
		} else {
			return this.getRuleContext(i, ClassModifierContext);
		}
	}
	public superinterfaces(): SuperinterfacesContext | undefined {
		return this.tryGetRuleContext(0, SuperinterfacesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_enumDeclaration; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitEnumDeclaration) {
			return visitor.visitEnumDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(Java8Parser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(Java8Parser.RBRACE, 0); }
	public enumConstantList(): EnumConstantListContext | undefined {
		return this.tryGetRuleContext(0, EnumConstantListContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.COMMA, 0); }
	public enumBodyDeclarations(): EnumBodyDeclarationsContext | undefined {
		return this.tryGetRuleContext(0, EnumBodyDeclarationsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_enumBody; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitEnumBody) {
			return visitor.visitEnumBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumConstantListContext extends ParserRuleContext {
	public enumConstant(): EnumConstantContext[];
	public enumConstant(i: number): EnumConstantContext;
	public enumConstant(i?: number): EnumConstantContext | EnumConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumConstantContext);
		} else {
			return this.getRuleContext(i, EnumConstantContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.COMMA);
		} else {
			return this.getToken(Java8Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_enumConstantList; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitEnumConstantList) {
			return visitor.visitEnumConstantList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumConstantContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public enumConstantModifier(): EnumConstantModifierContext[];
	public enumConstantModifier(i: number): EnumConstantModifierContext;
	public enumConstantModifier(i?: number): EnumConstantModifierContext | EnumConstantModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumConstantModifierContext);
		} else {
			return this.getRuleContext(i, EnumConstantModifierContext);
		}
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.RPAREN, 0); }
	public classBody(): ClassBodyContext | undefined {
		return this.tryGetRuleContext(0, ClassBodyContext);
	}
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_enumConstant; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitEnumConstant) {
			return visitor.visitEnumConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumConstantModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext {
		return this.getRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_enumConstantModifier; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitEnumConstantModifier) {
			return visitor.visitEnumConstantModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumBodyDeclarationsContext extends ParserRuleContext {
	public SEMI(): TerminalNode { return this.getToken(Java8Parser.SEMI, 0); }
	public classBodyDeclaration(): ClassBodyDeclarationContext[];
	public classBodyDeclaration(i: number): ClassBodyDeclarationContext;
	public classBodyDeclaration(i?: number): ClassBodyDeclarationContext | ClassBodyDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassBodyDeclarationContext);
		} else {
			return this.getRuleContext(i, ClassBodyDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_enumBodyDeclarations; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitEnumBodyDeclarations) {
			return visitor.visitEnumBodyDeclarations(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceDeclarationContext extends ParserRuleContext {
	public normalInterfaceDeclaration(): NormalInterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, NormalInterfaceDeclarationContext);
	}
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_interfaceDeclaration; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitInterfaceDeclaration) {
			return visitor.visitInterfaceDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NormalInterfaceDeclarationContext extends ParserRuleContext {
	public INTERFACE(): TerminalNode { return this.getToken(Java8Parser.INTERFACE, 0); }
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public interfaceBody(): InterfaceBodyContext {
		return this.getRuleContext(0, InterfaceBodyContext);
	}
	public interfaceModifier(): InterfaceModifierContext[];
	public interfaceModifier(i: number): InterfaceModifierContext;
	public interfaceModifier(i?: number): InterfaceModifierContext | InterfaceModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceModifierContext);
		} else {
			return this.getRuleContext(i, InterfaceModifierContext);
		}
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public extendsInterfaces(): ExtendsInterfacesContext | undefined {
		return this.tryGetRuleContext(0, ExtendsInterfacesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_normalInterfaceDeclaration; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitNormalInterfaceDeclaration) {
			return visitor.visitNormalInterfaceDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.PUBLIC, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.PROTECTED, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.PRIVATE, 0); }
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.ABSTRACT, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.STATIC, 0); }
	public STRICTFP(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.STRICTFP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_interfaceModifier; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitInterfaceModifier) {
			return visitor.visitInterfaceModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExtendsInterfacesContext extends ParserRuleContext {
	public EXTENDS(): TerminalNode { return this.getToken(Java8Parser.EXTENDS, 0); }
	public interfaceTypeList(): InterfaceTypeListContext {
		return this.getRuleContext(0, InterfaceTypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_extendsInterfaces; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitExtendsInterfaces) {
			return visitor.visitExtendsInterfaces(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(Java8Parser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(Java8Parser.RBRACE, 0); }
	public interfaceMemberDeclaration(): InterfaceMemberDeclarationContext[];
	public interfaceMemberDeclaration(i: number): InterfaceMemberDeclarationContext;
	public interfaceMemberDeclaration(i?: number): InterfaceMemberDeclarationContext | InterfaceMemberDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceMemberDeclarationContext);
		} else {
			return this.getRuleContext(i, InterfaceMemberDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_interfaceBody; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitInterfaceBody) {
			return visitor.visitInterfaceBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceMemberDeclarationContext extends ParserRuleContext {
	public constantDeclaration(): ConstantDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ConstantDeclarationContext);
	}
	public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceMethodDeclarationContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_interfaceMemberDeclaration; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitInterfaceMemberDeclaration) {
			return visitor.visitInterfaceMemberDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantDeclarationContext extends ParserRuleContext {
	public unannType(): UnannTypeContext {
		return this.getRuleContext(0, UnannTypeContext);
	}
	public variableDeclaratorList(): VariableDeclaratorListContext {
		return this.getRuleContext(0, VariableDeclaratorListContext);
	}
	public SEMI(): TerminalNode { return this.getToken(Java8Parser.SEMI, 0); }
	public constantModifier(): ConstantModifierContext[];
	public constantModifier(i: number): ConstantModifierContext;
	public constantModifier(i?: number): ConstantModifierContext | ConstantModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantModifierContext);
		} else {
			return this.getRuleContext(i, ConstantModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_constantDeclaration; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitConstantDeclaration) {
			return visitor.visitConstantDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.PUBLIC, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.STATIC, 0); }
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.FINAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_constantModifier; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitConstantModifier) {
			return visitor.visitConstantModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceMethodDeclarationContext extends ParserRuleContext {
	public methodHeader(): MethodHeaderContext {
		return this.getRuleContext(0, MethodHeaderContext);
	}
	public methodBody(): MethodBodyContext {
		return this.getRuleContext(0, MethodBodyContext);
	}
	public interfaceMethodModifier(): InterfaceMethodModifierContext[];
	public interfaceMethodModifier(i: number): InterfaceMethodModifierContext;
	public interfaceMethodModifier(i?: number): InterfaceMethodModifierContext | InterfaceMethodModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceMethodModifierContext);
		} else {
			return this.getRuleContext(i, InterfaceMethodModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_interfaceMethodDeclaration; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitInterfaceMethodDeclaration) {
			return visitor.visitInterfaceMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceMethodModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.PUBLIC, 0); }
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.ABSTRACT, 0); }
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.DEFAULT, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.STATIC, 0); }
	public STRICTFP(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.STRICTFP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_interfaceMethodModifier; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitInterfaceMethodModifier) {
			return visitor.visitInterfaceMethodModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationTypeDeclarationContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(Java8Parser.AT, 0); }
	public INTERFACE(): TerminalNode { return this.getToken(Java8Parser.INTERFACE, 0); }
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public annotationTypeBody(): AnnotationTypeBodyContext {
		return this.getRuleContext(0, AnnotationTypeBodyContext);
	}
	public interfaceModifier(): InterfaceModifierContext[];
	public interfaceModifier(i: number): InterfaceModifierContext;
	public interfaceModifier(i?: number): InterfaceModifierContext | InterfaceModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceModifierContext);
		} else {
			return this.getRuleContext(i, InterfaceModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_annotationTypeDeclaration; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitAnnotationTypeDeclaration) {
			return visitor.visitAnnotationTypeDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationTypeBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(Java8Parser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(Java8Parser.RBRACE, 0); }
	public annotationTypeMemberDeclaration(): AnnotationTypeMemberDeclarationContext[];
	public annotationTypeMemberDeclaration(i: number): AnnotationTypeMemberDeclarationContext;
	public annotationTypeMemberDeclaration(i?: number): AnnotationTypeMemberDeclarationContext | AnnotationTypeMemberDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationTypeMemberDeclarationContext);
		} else {
			return this.getRuleContext(i, AnnotationTypeMemberDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_annotationTypeBody; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitAnnotationTypeBody) {
			return visitor.visitAnnotationTypeBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationTypeMemberDeclarationContext extends ParserRuleContext {
	public annotationTypeElementDeclaration(): AnnotationTypeElementDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeElementDeclarationContext);
	}
	public constantDeclaration(): ConstantDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ConstantDeclarationContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_annotationTypeMemberDeclaration; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitAnnotationTypeMemberDeclaration) {
			return visitor.visitAnnotationTypeMemberDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationTypeElementDeclarationContext extends ParserRuleContext {
	public unannType(): UnannTypeContext {
		return this.getRuleContext(0, UnannTypeContext);
	}
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Java8Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Java8Parser.RPAREN, 0); }
	public SEMI(): TerminalNode { return this.getToken(Java8Parser.SEMI, 0); }
	public annotationTypeElementModifier(): AnnotationTypeElementModifierContext[];
	public annotationTypeElementModifier(i: number): AnnotationTypeElementModifierContext;
	public annotationTypeElementModifier(i?: number): AnnotationTypeElementModifierContext | AnnotationTypeElementModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationTypeElementModifierContext);
		} else {
			return this.getRuleContext(i, AnnotationTypeElementModifierContext);
		}
	}
	public dims(): DimsContext | undefined {
		return this.tryGetRuleContext(0, DimsContext);
	}
	public defaultValue(): DefaultValueContext | undefined {
		return this.tryGetRuleContext(0, DefaultValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_annotationTypeElementDeclaration; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitAnnotationTypeElementDeclaration) {
			return visitor.visitAnnotationTypeElementDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationTypeElementModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.PUBLIC, 0); }
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.ABSTRACT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_annotationTypeElementModifier; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitAnnotationTypeElementModifier) {
			return visitor.visitAnnotationTypeElementModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefaultValueContext extends ParserRuleContext {
	public DEFAULT(): TerminalNode { return this.getToken(Java8Parser.DEFAULT, 0); }
	public elementValue(): ElementValueContext {
		return this.getRuleContext(0, ElementValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_defaultValue; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitDefaultValue) {
			return visitor.visitDefaultValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationContext extends ParserRuleContext {
	public normalAnnotation(): NormalAnnotationContext | undefined {
		return this.tryGetRuleContext(0, NormalAnnotationContext);
	}
	public markerAnnotation(): MarkerAnnotationContext | undefined {
		return this.tryGetRuleContext(0, MarkerAnnotationContext);
	}
	public singleElementAnnotation(): SingleElementAnnotationContext | undefined {
		return this.tryGetRuleContext(0, SingleElementAnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_annotation; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitAnnotation) {
			return visitor.visitAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NormalAnnotationContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(Java8Parser.AT, 0); }
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(Java8Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Java8Parser.RPAREN, 0); }
	public elementValuePairList(): ElementValuePairListContext | undefined {
		return this.tryGetRuleContext(0, ElementValuePairListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_normalAnnotation; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitNormalAnnotation) {
			return visitor.visitNormalAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValuePairListContext extends ParserRuleContext {
	public elementValuePair(): ElementValuePairContext[];
	public elementValuePair(i: number): ElementValuePairContext;
	public elementValuePair(i?: number): ElementValuePairContext | ElementValuePairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementValuePairContext);
		} else {
			return this.getRuleContext(i, ElementValuePairContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.COMMA);
		} else {
			return this.getToken(Java8Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_elementValuePairList; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitElementValuePairList) {
			return visitor.visitElementValuePairList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValuePairContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(Java8Parser.ASSIGN, 0); }
	public elementValue(): ElementValueContext {
		return this.getRuleContext(0, ElementValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_elementValuePair; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitElementValuePair) {
			return visitor.visitElementValuePair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValueContext extends ParserRuleContext {
	public conditionalExpression(): ConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalExpressionContext);
	}
	public elementValueArrayInitializer(): ElementValueArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ElementValueArrayInitializerContext);
	}
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_elementValue; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitElementValue) {
			return visitor.visitElementValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValueArrayInitializerContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(Java8Parser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(Java8Parser.RBRACE, 0); }
	public elementValueList(): ElementValueListContext | undefined {
		return this.tryGetRuleContext(0, ElementValueListContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_elementValueArrayInitializer; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitElementValueArrayInitializer) {
			return visitor.visitElementValueArrayInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValueListContext extends ParserRuleContext {
	public elementValue(): ElementValueContext[];
	public elementValue(i: number): ElementValueContext;
	public elementValue(i?: number): ElementValueContext | ElementValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementValueContext);
		} else {
			return this.getRuleContext(i, ElementValueContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.COMMA);
		} else {
			return this.getToken(Java8Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_elementValueList; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitElementValueList) {
			return visitor.visitElementValueList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MarkerAnnotationContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(Java8Parser.AT, 0); }
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_markerAnnotation; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitMarkerAnnotation) {
			return visitor.visitMarkerAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleElementAnnotationContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(Java8Parser.AT, 0); }
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(Java8Parser.LPAREN, 0); }
	public elementValue(): ElementValueContext {
		return this.getRuleContext(0, ElementValueContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Java8Parser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_singleElementAnnotation; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitSingleElementAnnotation) {
			return visitor.visitSingleElementAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayInitializerContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(Java8Parser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(Java8Parser.RBRACE, 0); }
	public variableInitializerList(): VariableInitializerListContext | undefined {
		return this.tryGetRuleContext(0, VariableInitializerListContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_arrayInitializer; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitArrayInitializer) {
			return visitor.visitArrayInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableInitializerListContext extends ParserRuleContext {
	public variableInitializer(): VariableInitializerContext[];
	public variableInitializer(i: number): VariableInitializerContext;
	public variableInitializer(i?: number): VariableInitializerContext | VariableInitializerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableInitializerContext);
		} else {
			return this.getRuleContext(i, VariableInitializerContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.COMMA);
		} else {
			return this.getToken(Java8Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_variableInitializerList; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitVariableInitializerList) {
			return visitor.visitVariableInitializerList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(Java8Parser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(Java8Parser.RBRACE, 0); }
	public blockStatements(): BlockStatementsContext | undefined {
		return this.tryGetRuleContext(0, BlockStatementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_block; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockStatementsContext extends ParserRuleContext {
	public blockStatement(): BlockStatementContext[];
	public blockStatement(i: number): BlockStatementContext;
	public blockStatement(i?: number): BlockStatementContext | BlockStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockStatementContext);
		} else {
			return this.getRuleContext(i, BlockStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_blockStatements; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitBlockStatements) {
			return visitor.visitBlockStatements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockStatementContext extends ParserRuleContext {
	public localVariableDeclarationStatement(): LocalVariableDeclarationStatementContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableDeclarationStatementContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public comments(): CommentsContext | undefined {
		return this.tryGetRuleContext(0, CommentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_blockStatement; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitBlockStatement) {
			return visitor.visitBlockStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalVariableDeclarationStatementContext extends ParserRuleContext {
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		return this.getRuleContext(0, LocalVariableDeclarationContext);
	}
	public SEMI(): TerminalNode { return this.getToken(Java8Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_localVariableDeclarationStatement; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitLocalVariableDeclarationStatement) {
			return visitor.visitLocalVariableDeclarationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalVariableDeclarationContext extends ParserRuleContext {
	public unannType(): UnannTypeContext {
		return this.getRuleContext(0, UnannTypeContext);
	}
	public variableDeclaratorList(): VariableDeclaratorListContext {
		return this.getRuleContext(0, VariableDeclaratorListContext);
	}
	public comments(): CommentsContext | undefined {
		return this.tryGetRuleContext(0, CommentsContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_localVariableDeclaration; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitLocalVariableDeclaration) {
			return visitor.visitLocalVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public statementWithoutTrailingSubstatement(): StatementWithoutTrailingSubstatementContext | undefined {
		return this.tryGetRuleContext(0, StatementWithoutTrailingSubstatementContext);
	}
	public labeledStatement(): LabeledStatementContext | undefined {
		return this.tryGetRuleContext(0, LabeledStatementContext);
	}
	public ifThenStatement(): IfThenStatementContext | undefined {
		return this.tryGetRuleContext(0, IfThenStatementContext);
	}
	public ifThenElseStatement(): IfThenElseStatementContext | undefined {
		return this.tryGetRuleContext(0, IfThenElseStatementContext);
	}
	public whileStatement(): WhileStatementContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementContext);
	}
	public forStatement(): ForStatementContext | undefined {
		return this.tryGetRuleContext(0, ForStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_statement; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementNoShortIfContext extends ParserRuleContext {
	public statementWithoutTrailingSubstatement(): StatementWithoutTrailingSubstatementContext | undefined {
		return this.tryGetRuleContext(0, StatementWithoutTrailingSubstatementContext);
	}
	public labeledStatementNoShortIf(): LabeledStatementNoShortIfContext | undefined {
		return this.tryGetRuleContext(0, LabeledStatementNoShortIfContext);
	}
	public ifThenElseStatementNoShortIf(): IfThenElseStatementNoShortIfContext | undefined {
		return this.tryGetRuleContext(0, IfThenElseStatementNoShortIfContext);
	}
	public whileStatementNoShortIf(): WhileStatementNoShortIfContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementNoShortIfContext);
	}
	public forStatementNoShortIf(): ForStatementNoShortIfContext | undefined {
		return this.tryGetRuleContext(0, ForStatementNoShortIfContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_statementNoShortIf; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitStatementNoShortIf) {
			return visitor.visitStatementNoShortIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementWithoutTrailingSubstatementContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public emptyStatement_(): EmptyStatement_Context | undefined {
		return this.tryGetRuleContext(0, EmptyStatement_Context);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	public assertStatement(): AssertStatementContext | undefined {
		return this.tryGetRuleContext(0, AssertStatementContext);
	}
	public switchStatement(): SwitchStatementContext | undefined {
		return this.tryGetRuleContext(0, SwitchStatementContext);
	}
	public doStatement(): DoStatementContext | undefined {
		return this.tryGetRuleContext(0, DoStatementContext);
	}
	public breakStatement(): BreakStatementContext | undefined {
		return this.tryGetRuleContext(0, BreakStatementContext);
	}
	public continueStatement(): ContinueStatementContext | undefined {
		return this.tryGetRuleContext(0, ContinueStatementContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	public synchronizedStatement(): SynchronizedStatementContext | undefined {
		return this.tryGetRuleContext(0, SynchronizedStatementContext);
	}
	public throwStatement(): ThrowStatementContext | undefined {
		return this.tryGetRuleContext(0, ThrowStatementContext);
	}
	public tryStatement(): TryStatementContext | undefined {
		return this.tryGetRuleContext(0, TryStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_statementWithoutTrailingSubstatement; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitStatementWithoutTrailingSubstatement) {
			return visitor.visitStatementWithoutTrailingSubstatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmptyStatement_Context extends ParserRuleContext {
	public SEMI(): TerminalNode { return this.getToken(Java8Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_emptyStatement_; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitEmptyStatement_) {
			return visitor.visitEmptyStatement_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabeledStatementContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public COLON(): TerminalNode { return this.getToken(Java8Parser.COLON, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_labeledStatement; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitLabeledStatement) {
			return visitor.visitLabeledStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabeledStatementNoShortIfContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public COLON(): TerminalNode { return this.getToken(Java8Parser.COLON, 0); }
	public statementNoShortIf(): StatementNoShortIfContext {
		return this.getRuleContext(0, StatementNoShortIfContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_labeledStatementNoShortIf; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitLabeledStatementNoShortIf) {
			return visitor.visitLabeledStatementNoShortIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public statementExpression(): StatementExpressionContext {
		return this.getRuleContext(0, StatementExpressionContext);
	}
	public SEMI(): TerminalNode { return this.getToken(Java8Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_expressionStatement; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementExpressionContext extends ParserRuleContext {
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	public preIncrementExpression(): PreIncrementExpressionContext | undefined {
		return this.tryGetRuleContext(0, PreIncrementExpressionContext);
	}
	public preDecrementExpression(): PreDecrementExpressionContext | undefined {
		return this.tryGetRuleContext(0, PreDecrementExpressionContext);
	}
	public postIncrementExpression(): PostIncrementExpressionContext | undefined {
		return this.tryGetRuleContext(0, PostIncrementExpressionContext);
	}
	public postDecrementExpression(): PostDecrementExpressionContext | undefined {
		return this.tryGetRuleContext(0, PostDecrementExpressionContext);
	}
	public methodInvocation(): MethodInvocationContext | undefined {
		return this.tryGetRuleContext(0, MethodInvocationContext);
	}
	public classInstanceCreationExpression(): ClassInstanceCreationExpressionContext | undefined {
		return this.tryGetRuleContext(0, ClassInstanceCreationExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_statementExpression; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitStatementExpression) {
			return visitor.visitStatementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfThenStatementContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(Java8Parser.IF, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Java8Parser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Java8Parser.RPAREN, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_ifThenStatement; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitIfThenStatement) {
			return visitor.visitIfThenStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfThenElseStatementContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(Java8Parser.IF, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Java8Parser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Java8Parser.RPAREN, 0); }
	public statementNoShortIf(): StatementNoShortIfContext {
		return this.getRuleContext(0, StatementNoShortIfContext);
	}
	public ELSE(): TerminalNode { return this.getToken(Java8Parser.ELSE, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_ifThenElseStatement; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitIfThenElseStatement) {
			return visitor.visitIfThenElseStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfThenElseStatementNoShortIfContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(Java8Parser.IF, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Java8Parser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Java8Parser.RPAREN, 0); }
	public statementNoShortIf(): StatementNoShortIfContext[];
	public statementNoShortIf(i: number): StatementNoShortIfContext;
	public statementNoShortIf(i?: number): StatementNoShortIfContext | StatementNoShortIfContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementNoShortIfContext);
		} else {
			return this.getRuleContext(i, StatementNoShortIfContext);
		}
	}
	public ELSE(): TerminalNode { return this.getToken(Java8Parser.ELSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_ifThenElseStatementNoShortIf; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitIfThenElseStatementNoShortIf) {
			return visitor.visitIfThenElseStatementNoShortIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssertStatementContext extends ParserRuleContext {
	public ASSERT(): TerminalNode { return this.getToken(Java8Parser.ASSERT, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public SEMI(): TerminalNode { return this.getToken(Java8Parser.SEMI, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_assertStatement; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitAssertStatement) {
			return visitor.visitAssertStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchStatementContext extends ParserRuleContext {
	public SWITCH(): TerminalNode { return this.getToken(Java8Parser.SWITCH, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Java8Parser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Java8Parser.RPAREN, 0); }
	public switchBlock(): SwitchBlockContext {
		return this.getRuleContext(0, SwitchBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_switchStatement; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitSwitchStatement) {
			return visitor.visitSwitchStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchBlockContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(Java8Parser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(Java8Parser.RBRACE, 0); }
	public switchBlockStatementGroup(): SwitchBlockStatementGroupContext[];
	public switchBlockStatementGroup(i: number): SwitchBlockStatementGroupContext;
	public switchBlockStatementGroup(i?: number): SwitchBlockStatementGroupContext | SwitchBlockStatementGroupContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchBlockStatementGroupContext);
		} else {
			return this.getRuleContext(i, SwitchBlockStatementGroupContext);
		}
	}
	public switchLabel(): SwitchLabelContext[];
	public switchLabel(i: number): SwitchLabelContext;
	public switchLabel(i?: number): SwitchLabelContext | SwitchLabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchLabelContext);
		} else {
			return this.getRuleContext(i, SwitchLabelContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_switchBlock; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitSwitchBlock) {
			return visitor.visitSwitchBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchBlockStatementGroupContext extends ParserRuleContext {
	public switchLabels(): SwitchLabelsContext {
		return this.getRuleContext(0, SwitchLabelsContext);
	}
	public blockStatements(): BlockStatementsContext {
		return this.getRuleContext(0, BlockStatementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_switchBlockStatementGroup; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitSwitchBlockStatementGroup) {
			return visitor.visitSwitchBlockStatementGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchLabelsContext extends ParserRuleContext {
	public switchLabel(): SwitchLabelContext[];
	public switchLabel(i: number): SwitchLabelContext;
	public switchLabel(i?: number): SwitchLabelContext | SwitchLabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchLabelContext);
		} else {
			return this.getRuleContext(i, SwitchLabelContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_switchLabels; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitSwitchLabels) {
			return visitor.visitSwitchLabels(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchLabelContext extends ParserRuleContext {
	public CASE(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.CASE, 0); }
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	public COLON(): TerminalNode { return this.getToken(Java8Parser.COLON, 0); }
	public enumConstantName(): EnumConstantNameContext | undefined {
		return this.tryGetRuleContext(0, EnumConstantNameContext);
	}
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.DEFAULT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_switchLabel; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitSwitchLabel) {
			return visitor.visitSwitchLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumConstantNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_enumConstantName; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitEnumConstantName) {
			return visitor.visitEnumConstantName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStatementContext extends ParserRuleContext {
	public WHILE(): TerminalNode { return this.getToken(Java8Parser.WHILE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Java8Parser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Java8Parser.RPAREN, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_whileStatement; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitWhileStatement) {
			return visitor.visitWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStatementNoShortIfContext extends ParserRuleContext {
	public WHILE(): TerminalNode { return this.getToken(Java8Parser.WHILE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Java8Parser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Java8Parser.RPAREN, 0); }
	public statementNoShortIf(): StatementNoShortIfContext {
		return this.getRuleContext(0, StatementNoShortIfContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_whileStatementNoShortIf; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitWhileStatementNoShortIf) {
			return visitor.visitWhileStatementNoShortIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DoStatementContext extends ParserRuleContext {
	public DO(): TerminalNode { return this.getToken(Java8Parser.DO, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public WHILE(): TerminalNode { return this.getToken(Java8Parser.WHILE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Java8Parser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Java8Parser.RPAREN, 0); }
	public SEMI(): TerminalNode { return this.getToken(Java8Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_doStatement; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitDoStatement) {
			return visitor.visitDoStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStatementContext extends ParserRuleContext {
	public basicForStatement(): BasicForStatementContext | undefined {
		return this.tryGetRuleContext(0, BasicForStatementContext);
	}
	public enhancedForStatement(): EnhancedForStatementContext | undefined {
		return this.tryGetRuleContext(0, EnhancedForStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_forStatement; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitForStatement) {
			return visitor.visitForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStatementNoShortIfContext extends ParserRuleContext {
	public basicForStatementNoShortIf(): BasicForStatementNoShortIfContext | undefined {
		return this.tryGetRuleContext(0, BasicForStatementNoShortIfContext);
	}
	public enhancedForStatementNoShortIf(): EnhancedForStatementNoShortIfContext | undefined {
		return this.tryGetRuleContext(0, EnhancedForStatementNoShortIfContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_forStatementNoShortIf; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitForStatementNoShortIf) {
			return visitor.visitForStatementNoShortIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BasicForStatementContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(Java8Parser.FOR, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Java8Parser.LPAREN, 0); }
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.SEMI);
		} else {
			return this.getToken(Java8Parser.SEMI, i);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(Java8Parser.RPAREN, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public forInit(): ForInitContext | undefined {
		return this.tryGetRuleContext(0, ForInitContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public forUpdate(): ForUpdateContext | undefined {
		return this.tryGetRuleContext(0, ForUpdateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_basicForStatement; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitBasicForStatement) {
			return visitor.visitBasicForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BasicForStatementNoShortIfContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(Java8Parser.FOR, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Java8Parser.LPAREN, 0); }
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.SEMI);
		} else {
			return this.getToken(Java8Parser.SEMI, i);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(Java8Parser.RPAREN, 0); }
	public statementNoShortIf(): StatementNoShortIfContext {
		return this.getRuleContext(0, StatementNoShortIfContext);
	}
	public forInit(): ForInitContext | undefined {
		return this.tryGetRuleContext(0, ForInitContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public forUpdate(): ForUpdateContext | undefined {
		return this.tryGetRuleContext(0, ForUpdateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_basicForStatementNoShortIf; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitBasicForStatementNoShortIf) {
			return visitor.visitBasicForStatementNoShortIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForInitContext extends ParserRuleContext {
	public statementExpressionList(): StatementExpressionListContext | undefined {
		return this.tryGetRuleContext(0, StatementExpressionListContext);
	}
	public localVariableDeclaration(): LocalVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_forInit; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitForInit) {
			return visitor.visitForInit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForUpdateContext extends ParserRuleContext {
	public statementExpressionList(): StatementExpressionListContext {
		return this.getRuleContext(0, StatementExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_forUpdate; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitForUpdate) {
			return visitor.visitForUpdate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementExpressionListContext extends ParserRuleContext {
	public statementExpression(): StatementExpressionContext[];
	public statementExpression(i: number): StatementExpressionContext;
	public statementExpression(i?: number): StatementExpressionContext | StatementExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementExpressionContext);
		} else {
			return this.getRuleContext(i, StatementExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.COMMA);
		} else {
			return this.getToken(Java8Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_statementExpressionList; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitStatementExpressionList) {
			return visitor.visitStatementExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnhancedForStatementContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(Java8Parser.FOR, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Java8Parser.LPAREN, 0); }
	public unannType(): UnannTypeContext {
		return this.getRuleContext(0, UnannTypeContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public COLON(): TerminalNode { return this.getToken(Java8Parser.COLON, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Java8Parser.RPAREN, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_enhancedForStatement; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitEnhancedForStatement) {
			return visitor.visitEnhancedForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnhancedForStatementNoShortIfContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(Java8Parser.FOR, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Java8Parser.LPAREN, 0); }
	public unannType(): UnannTypeContext {
		return this.getRuleContext(0, UnannTypeContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public COLON(): TerminalNode { return this.getToken(Java8Parser.COLON, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Java8Parser.RPAREN, 0); }
	public statementNoShortIf(): StatementNoShortIfContext {
		return this.getRuleContext(0, StatementNoShortIfContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_enhancedForStatementNoShortIf; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitEnhancedForStatementNoShortIf) {
			return visitor.visitEnhancedForStatementNoShortIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BreakStatementContext extends ParserRuleContext {
	public BREAK(): TerminalNode { return this.getToken(Java8Parser.BREAK, 0); }
	public SEMI(): TerminalNode { return this.getToken(Java8Parser.SEMI, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_breakStatement; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitBreakStatement) {
			return visitor.visitBreakStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContinueStatementContext extends ParserRuleContext {
	public CONTINUE(): TerminalNode { return this.getToken(Java8Parser.CONTINUE, 0); }
	public SEMI(): TerminalNode { return this.getToken(Java8Parser.SEMI, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_continueStatement; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitContinueStatement) {
			return visitor.visitContinueStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(Java8Parser.RETURN, 0); }
	public SEMI(): TerminalNode { return this.getToken(Java8Parser.SEMI, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_returnStatement; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ThrowStatementContext extends ParserRuleContext {
	public THROW(): TerminalNode { return this.getToken(Java8Parser.THROW, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SEMI(): TerminalNode { return this.getToken(Java8Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_throwStatement; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitThrowStatement) {
			return visitor.visitThrowStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SynchronizedStatementContext extends ParserRuleContext {
	public SYNCHRONIZED(): TerminalNode { return this.getToken(Java8Parser.SYNCHRONIZED, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Java8Parser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Java8Parser.RPAREN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_synchronizedStatement; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitSynchronizedStatement) {
			return visitor.visitSynchronizedStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryStatementContext extends ParserRuleContext {
	public TRY(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.TRY, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public catches(): CatchesContext | undefined {
		return this.tryGetRuleContext(0, CatchesContext);
	}
	public finally_(): Finally_Context | undefined {
		return this.tryGetRuleContext(0, Finally_Context);
	}
	public tryWithResourcesStatement(): TryWithResourcesStatementContext | undefined {
		return this.tryGetRuleContext(0, TryWithResourcesStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_tryStatement; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitTryStatement) {
			return visitor.visitTryStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchesContext extends ParserRuleContext {
	public catchClause(): CatchClauseContext[];
	public catchClause(i: number): CatchClauseContext;
	public catchClause(i?: number): CatchClauseContext | CatchClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CatchClauseContext);
		} else {
			return this.getRuleContext(i, CatchClauseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_catches; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitCatches) {
			return visitor.visitCatches(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchClauseContext extends ParserRuleContext {
	public CATCH(): TerminalNode { return this.getToken(Java8Parser.CATCH, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Java8Parser.LPAREN, 0); }
	public catchFormalParameter(): CatchFormalParameterContext {
		return this.getRuleContext(0, CatchFormalParameterContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Java8Parser.RPAREN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_catchClause; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitCatchClause) {
			return visitor.visitCatchClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchFormalParameterContext extends ParserRuleContext {
	public catchType(): CatchTypeContext {
		return this.getRuleContext(0, CatchTypeContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_catchFormalParameter; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitCatchFormalParameter) {
			return visitor.visitCatchFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchTypeContext extends ParserRuleContext {
	public unannClassType(): UnannClassTypeContext {
		return this.getRuleContext(0, UnannClassTypeContext);
	}
	public BITOR(): TerminalNode[];
	public BITOR(i: number): TerminalNode;
	public BITOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.BITOR);
		} else {
			return this.getToken(Java8Parser.BITOR, i);
		}
	}
	public classType(): ClassTypeContext[];
	public classType(i: number): ClassTypeContext;
	public classType(i?: number): ClassTypeContext | ClassTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassTypeContext);
		} else {
			return this.getRuleContext(i, ClassTypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_catchType; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitCatchType) {
			return visitor.visitCatchType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Finally_Context extends ParserRuleContext {
	public FINALLY(): TerminalNode { return this.getToken(Java8Parser.FINALLY, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_finally_; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitFinally_) {
			return visitor.visitFinally_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryWithResourcesStatementContext extends ParserRuleContext {
	public TRY(): TerminalNode { return this.getToken(Java8Parser.TRY, 0); }
	public resourceSpecification(): ResourceSpecificationContext {
		return this.getRuleContext(0, ResourceSpecificationContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public catches(): CatchesContext | undefined {
		return this.tryGetRuleContext(0, CatchesContext);
	}
	public finally_(): Finally_Context | undefined {
		return this.tryGetRuleContext(0, Finally_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_tryWithResourcesStatement; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitTryWithResourcesStatement) {
			return visitor.visitTryWithResourcesStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResourceSpecificationContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Java8Parser.LPAREN, 0); }
	public resourceList(): ResourceListContext {
		return this.getRuleContext(0, ResourceListContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Java8Parser.RPAREN, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_resourceSpecification; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitResourceSpecification) {
			return visitor.visitResourceSpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResourceListContext extends ParserRuleContext {
	public resource(): ResourceContext[];
	public resource(i: number): ResourceContext;
	public resource(i?: number): ResourceContext | ResourceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ResourceContext);
		} else {
			return this.getRuleContext(i, ResourceContext);
		}
	}
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.SEMI);
		} else {
			return this.getToken(Java8Parser.SEMI, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_resourceList; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitResourceList) {
			return visitor.visitResourceList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResourceContext extends ParserRuleContext {
	public unannType(): UnannTypeContext {
		return this.getRuleContext(0, UnannTypeContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(Java8Parser.ASSIGN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_resource; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitResource) {
			return visitor.visitResource(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryContext extends ParserRuleContext {
	public primaryNoNewArray_lfno_primary(): PrimaryNoNewArray_lfno_primaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryNoNewArray_lfno_primaryContext);
	}
	public arrayCreationExpression(): ArrayCreationExpressionContext | undefined {
		return this.tryGetRuleContext(0, ArrayCreationExpressionContext);
	}
	public primaryNoNewArray_lf_primary(): PrimaryNoNewArray_lf_primaryContext[];
	public primaryNoNewArray_lf_primary(i: number): PrimaryNoNewArray_lf_primaryContext;
	public primaryNoNewArray_lf_primary(i?: number): PrimaryNoNewArray_lf_primaryContext | PrimaryNoNewArray_lf_primaryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrimaryNoNewArray_lf_primaryContext);
		} else {
			return this.getRuleContext(i, PrimaryNoNewArray_lf_primaryContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_primary; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitPrimary) {
			return visitor.visitPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryNoNewArrayContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.DOT, 0); }
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.CLASS, 0); }
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.LBRACK);
		} else {
			return this.getToken(Java8Parser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.RBRACK);
		} else {
			return this.getToken(Java8Parser.RBRACK, i);
		}
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.VOID, 0); }
	public THIS(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.THIS, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.LPAREN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.RPAREN, 0); }
	public classInstanceCreationExpression(): ClassInstanceCreationExpressionContext | undefined {
		return this.tryGetRuleContext(0, ClassInstanceCreationExpressionContext);
	}
	public fieldAccess(): FieldAccessContext | undefined {
		return this.tryGetRuleContext(0, FieldAccessContext);
	}
	public arrayAccess(): ArrayAccessContext | undefined {
		return this.tryGetRuleContext(0, ArrayAccessContext);
	}
	public methodInvocation(): MethodInvocationContext | undefined {
		return this.tryGetRuleContext(0, MethodInvocationContext);
	}
	public methodReference(): MethodReferenceContext | undefined {
		return this.tryGetRuleContext(0, MethodReferenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_primaryNoNewArray; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitPrimaryNoNewArray) {
			return visitor.visitPrimaryNoNewArray(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryNoNewArray_lf_arrayAccessContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_primaryNoNewArray_lf_arrayAccess; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitPrimaryNoNewArray_lf_arrayAccess) {
			return visitor.visitPrimaryNoNewArray_lf_arrayAccess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryNoNewArray_lfno_arrayAccessContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.DOT, 0); }
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.CLASS, 0); }
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.LBRACK);
		} else {
			return this.getToken(Java8Parser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.RBRACK);
		} else {
			return this.getToken(Java8Parser.RBRACK, i);
		}
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.VOID, 0); }
	public THIS(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.THIS, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.LPAREN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.RPAREN, 0); }
	public classInstanceCreationExpression(): ClassInstanceCreationExpressionContext | undefined {
		return this.tryGetRuleContext(0, ClassInstanceCreationExpressionContext);
	}
	public fieldAccess(): FieldAccessContext | undefined {
		return this.tryGetRuleContext(0, FieldAccessContext);
	}
	public methodInvocation(): MethodInvocationContext | undefined {
		return this.tryGetRuleContext(0, MethodInvocationContext);
	}
	public methodReference(): MethodReferenceContext | undefined {
		return this.tryGetRuleContext(0, MethodReferenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_primaryNoNewArray_lfno_arrayAccess; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitPrimaryNoNewArray_lfno_arrayAccess) {
			return visitor.visitPrimaryNoNewArray_lfno_arrayAccess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryNoNewArray_lf_primaryContext extends ParserRuleContext {
	public classInstanceCreationExpression_lf_primary(): ClassInstanceCreationExpression_lf_primaryContext | undefined {
		return this.tryGetRuleContext(0, ClassInstanceCreationExpression_lf_primaryContext);
	}
	public fieldAccess_lf_primary(): FieldAccess_lf_primaryContext | undefined {
		return this.tryGetRuleContext(0, FieldAccess_lf_primaryContext);
	}
	public arrayAccess_lf_primary(): ArrayAccess_lf_primaryContext | undefined {
		return this.tryGetRuleContext(0, ArrayAccess_lf_primaryContext);
	}
	public methodInvocation_lf_primary(): MethodInvocation_lf_primaryContext | undefined {
		return this.tryGetRuleContext(0, MethodInvocation_lf_primaryContext);
	}
	public methodReference_lf_primary(): MethodReference_lf_primaryContext | undefined {
		return this.tryGetRuleContext(0, MethodReference_lf_primaryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_primaryNoNewArray_lf_primary; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitPrimaryNoNewArray_lf_primary) {
			return visitor.visitPrimaryNoNewArray_lf_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitPrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary) {
			return visitor.visitPrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext extends ParserRuleContext {
	public classInstanceCreationExpression_lf_primary(): ClassInstanceCreationExpression_lf_primaryContext | undefined {
		return this.tryGetRuleContext(0, ClassInstanceCreationExpression_lf_primaryContext);
	}
	public fieldAccess_lf_primary(): FieldAccess_lf_primaryContext | undefined {
		return this.tryGetRuleContext(0, FieldAccess_lf_primaryContext);
	}
	public methodInvocation_lf_primary(): MethodInvocation_lf_primaryContext | undefined {
		return this.tryGetRuleContext(0, MethodInvocation_lf_primaryContext);
	}
	public methodReference_lf_primary(): MethodReference_lf_primaryContext | undefined {
		return this.tryGetRuleContext(0, MethodReference_lf_primaryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitPrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary) {
			return visitor.visitPrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryNoNewArray_lfno_primaryContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.DOT, 0); }
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.CLASS, 0); }
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.LBRACK);
		} else {
			return this.getToken(Java8Parser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.RBRACK);
		} else {
			return this.getToken(Java8Parser.RBRACK, i);
		}
	}
	public unannPrimitiveType(): UnannPrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannPrimitiveTypeContext);
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.VOID, 0); }
	public THIS(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.THIS, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.LPAREN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.RPAREN, 0); }
	public classInstanceCreationExpression_lfno_primary(): ClassInstanceCreationExpression_lfno_primaryContext | undefined {
		return this.tryGetRuleContext(0, ClassInstanceCreationExpression_lfno_primaryContext);
	}
	public fieldAccess_lfno_primary(): FieldAccess_lfno_primaryContext | undefined {
		return this.tryGetRuleContext(0, FieldAccess_lfno_primaryContext);
	}
	public arrayAccess_lfno_primary(): ArrayAccess_lfno_primaryContext | undefined {
		return this.tryGetRuleContext(0, ArrayAccess_lfno_primaryContext);
	}
	public methodInvocation_lfno_primary(): MethodInvocation_lfno_primaryContext | undefined {
		return this.tryGetRuleContext(0, MethodInvocation_lfno_primaryContext);
	}
	public methodReference_lfno_primary(): MethodReference_lfno_primaryContext | undefined {
		return this.tryGetRuleContext(0, MethodReference_lfno_primaryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_primaryNoNewArray_lfno_primary; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitPrimaryNoNewArray_lfno_primary) {
			return visitor.visitPrimaryNoNewArray_lfno_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitPrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary) {
			return visitor.visitPrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.DOT, 0); }
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.CLASS, 0); }
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.LBRACK);
		} else {
			return this.getToken(Java8Parser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.RBRACK);
		} else {
			return this.getToken(Java8Parser.RBRACK, i);
		}
	}
	public unannPrimitiveType(): UnannPrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannPrimitiveTypeContext);
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.VOID, 0); }
	public THIS(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.THIS, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.LPAREN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.RPAREN, 0); }
	public classInstanceCreationExpression_lfno_primary(): ClassInstanceCreationExpression_lfno_primaryContext | undefined {
		return this.tryGetRuleContext(0, ClassInstanceCreationExpression_lfno_primaryContext);
	}
	public fieldAccess_lfno_primary(): FieldAccess_lfno_primaryContext | undefined {
		return this.tryGetRuleContext(0, FieldAccess_lfno_primaryContext);
	}
	public methodInvocation_lfno_primary(): MethodInvocation_lfno_primaryContext | undefined {
		return this.tryGetRuleContext(0, MethodInvocation_lfno_primaryContext);
	}
	public methodReference_lfno_primary(): MethodReference_lfno_primaryContext | undefined {
		return this.tryGetRuleContext(0, MethodReference_lfno_primaryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitPrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary) {
			return visitor.visitPrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassInstanceCreationExpressionContext extends ParserRuleContext {
	public NEW(): TerminalNode { return this.getToken(Java8Parser.NEW, 0); }
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.Identifier);
		} else {
			return this.getToken(Java8Parser.Identifier, i);
		}
	}
	public LPAREN(): TerminalNode { return this.getToken(Java8Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Java8Parser.RPAREN, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.DOT);
		} else {
			return this.getToken(Java8Parser.DOT, i);
		}
	}
	public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsOrDiamondContext);
	}
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	public classBody(): ClassBodyContext | undefined {
		return this.tryGetRuleContext(0, ClassBodyContext);
	}
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_classInstanceCreationExpression; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitClassInstanceCreationExpression) {
			return visitor.visitClassInstanceCreationExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassInstanceCreationExpression_lf_primaryContext extends ParserRuleContext {
	public DOT(): TerminalNode { return this.getToken(Java8Parser.DOT, 0); }
	public NEW(): TerminalNode { return this.getToken(Java8Parser.NEW, 0); }
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Java8Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Java8Parser.RPAREN, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsOrDiamondContext);
	}
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	public classBody(): ClassBodyContext | undefined {
		return this.tryGetRuleContext(0, ClassBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_classInstanceCreationExpression_lf_primary; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitClassInstanceCreationExpression_lf_primary) {
			return visitor.visitClassInstanceCreationExpression_lf_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassInstanceCreationExpression_lfno_primaryContext extends ParserRuleContext {
	public NEW(): TerminalNode { return this.getToken(Java8Parser.NEW, 0); }
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.Identifier);
		} else {
			return this.getToken(Java8Parser.Identifier, i);
		}
	}
	public LPAREN(): TerminalNode { return this.getToken(Java8Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Java8Parser.RPAREN, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.DOT);
		} else {
			return this.getToken(Java8Parser.DOT, i);
		}
	}
	public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsOrDiamondContext);
	}
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	public classBody(): ClassBodyContext | undefined {
		return this.tryGetRuleContext(0, ClassBodyContext);
	}
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_classInstanceCreationExpression_lfno_primary; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitClassInstanceCreationExpression_lfno_primary) {
			return visitor.visitClassInstanceCreationExpression_lfno_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentsOrDiamondContext extends ParserRuleContext {
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public LT(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.GT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_typeArgumentsOrDiamond; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitTypeArgumentsOrDiamond) {
			return visitor.visitTypeArgumentsOrDiamond(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldAccessContext extends ParserRuleContext {
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.DOT);
		} else {
			return this.getToken(Java8Parser.DOT, i);
		}
	}
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.SUPER, 0); }
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_fieldAccess; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitFieldAccess) {
			return visitor.visitFieldAccess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldAccess_lf_primaryContext extends ParserRuleContext {
	public DOT(): TerminalNode { return this.getToken(Java8Parser.DOT, 0); }
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_fieldAccess_lf_primary; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitFieldAccess_lf_primary) {
			return visitor.visitFieldAccess_lf_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldAccess_lfno_primaryContext extends ParserRuleContext {
	public SUPER(): TerminalNode { return this.getToken(Java8Parser.SUPER, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.DOT);
		} else {
			return this.getToken(Java8Parser.DOT, i);
		}
	}
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_fieldAccess_lfno_primary; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitFieldAccess_lfno_primary) {
			return visitor.visitFieldAccess_lfno_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayAccessContext extends ParserRuleContext {
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.LBRACK);
		} else {
			return this.getToken(Java8Parser.LBRACK, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.RBRACK);
		} else {
			return this.getToken(Java8Parser.RBRACK, i);
		}
	}
	public primaryNoNewArray_lfno_arrayAccess(): PrimaryNoNewArray_lfno_arrayAccessContext | undefined {
		return this.tryGetRuleContext(0, PrimaryNoNewArray_lfno_arrayAccessContext);
	}
	public primaryNoNewArray_lf_arrayAccess(): PrimaryNoNewArray_lf_arrayAccessContext[];
	public primaryNoNewArray_lf_arrayAccess(i: number): PrimaryNoNewArray_lf_arrayAccessContext;
	public primaryNoNewArray_lf_arrayAccess(i?: number): PrimaryNoNewArray_lf_arrayAccessContext | PrimaryNoNewArray_lf_arrayAccessContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrimaryNoNewArray_lf_arrayAccessContext);
		} else {
			return this.getRuleContext(i, PrimaryNoNewArray_lf_arrayAccessContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_arrayAccess; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitArrayAccess) {
			return visitor.visitArrayAccess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayAccess_lf_primaryContext extends ParserRuleContext {
	public primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary(): PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext {
		return this.getRuleContext(0, PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext);
	}
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.LBRACK);
		} else {
			return this.getToken(Java8Parser.LBRACK, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.RBRACK);
		} else {
			return this.getToken(Java8Parser.RBRACK, i);
		}
	}
	public primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary(): PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext[];
	public primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary(i: number): PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext;
	public primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary(i?: number): PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext | PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext);
		} else {
			return this.getRuleContext(i, PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_arrayAccess_lf_primary; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitArrayAccess_lf_primary) {
			return visitor.visitArrayAccess_lf_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayAccess_lfno_primaryContext extends ParserRuleContext {
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.LBRACK);
		} else {
			return this.getToken(Java8Parser.LBRACK, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.RBRACK);
		} else {
			return this.getToken(Java8Parser.RBRACK, i);
		}
	}
	public primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary(): PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext);
	}
	public primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary(): PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext[];
	public primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary(i: number): PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext;
	public primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary(i?: number): PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext | PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext);
		} else {
			return this.getRuleContext(i, PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_arrayAccess_lfno_primary; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitArrayAccess_lfno_primary) {
			return visitor.visitArrayAccess_lfno_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodInvocationContext extends ParserRuleContext {
	public methodName(): MethodNameContext | undefined {
		return this.tryGetRuleContext(0, MethodNameContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(Java8Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Java8Parser.RPAREN, 0); }
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.DOT);
		} else {
			return this.getToken(Java8Parser.DOT, i);
		}
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.Identifier, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.SUPER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_methodInvocation; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitMethodInvocation) {
			return visitor.visitMethodInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodInvocation_lf_primaryContext extends ParserRuleContext {
	public DOT(): TerminalNode { return this.getToken(Java8Parser.DOT, 0); }
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Java8Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Java8Parser.RPAREN, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_methodInvocation_lf_primary; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitMethodInvocation_lf_primary) {
			return visitor.visitMethodInvocation_lf_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodInvocation_lfno_primaryContext extends ParserRuleContext {
	public methodName(): MethodNameContext | undefined {
		return this.tryGetRuleContext(0, MethodNameContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(Java8Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Java8Parser.RPAREN, 0); }
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.DOT);
		} else {
			return this.getToken(Java8Parser.DOT, i);
		}
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.Identifier, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.SUPER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_methodInvocation_lfno_primary; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitMethodInvocation_lfno_primary) {
			return visitor.visitMethodInvocation_lfno_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.COMMA);
		} else {
			return this.getToken(Java8Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_argumentList; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitArgumentList) {
			return visitor.visitArgumentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodReferenceContext extends ParserRuleContext {
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	public COLONCOLON(): TerminalNode { return this.getToken(Java8Parser.COLONCOLON, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.Identifier, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public referenceType(): ReferenceTypeContext | undefined {
		return this.tryGetRuleContext(0, ReferenceTypeContext);
	}
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.SUPER, 0); }
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.DOT, 0); }
	public classType(): ClassTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassTypeContext);
	}
	public NEW(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.NEW, 0); }
	public arrayType(): ArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, ArrayTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_methodReference; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitMethodReference) {
			return visitor.visitMethodReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodReference_lf_primaryContext extends ParserRuleContext {
	public COLONCOLON(): TerminalNode { return this.getToken(Java8Parser.COLONCOLON, 0); }
	public Identifier(): TerminalNode { return this.getToken(Java8Parser.Identifier, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_methodReference_lf_primary; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitMethodReference_lf_primary) {
			return visitor.visitMethodReference_lf_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodReference_lfno_primaryContext extends ParserRuleContext {
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	public COLONCOLON(): TerminalNode { return this.getToken(Java8Parser.COLONCOLON, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.Identifier, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public referenceType(): ReferenceTypeContext | undefined {
		return this.tryGetRuleContext(0, ReferenceTypeContext);
	}
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.SUPER, 0); }
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.DOT, 0); }
	public classType(): ClassTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassTypeContext);
	}
	public NEW(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.NEW, 0); }
	public arrayType(): ArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, ArrayTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_methodReference_lfno_primary; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitMethodReference_lfno_primary) {
			return visitor.visitMethodReference_lfno_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayCreationExpressionContext extends ParserRuleContext {
	public NEW(): TerminalNode { return this.getToken(Java8Parser.NEW, 0); }
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	public dimExprs(): DimExprsContext | undefined {
		return this.tryGetRuleContext(0, DimExprsContext);
	}
	public dims(): DimsContext | undefined {
		return this.tryGetRuleContext(0, DimsContext);
	}
	public classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
	}
	public arrayInitializer(): ArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ArrayInitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_arrayCreationExpression; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitArrayCreationExpression) {
			return visitor.visitArrayCreationExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DimExprsContext extends ParserRuleContext {
	public dimExpr(): DimExprContext[];
	public dimExpr(i: number): DimExprContext;
	public dimExpr(i?: number): DimExprContext | DimExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DimExprContext);
		} else {
			return this.getRuleContext(i, DimExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_dimExprs; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitDimExprs) {
			return visitor.visitDimExprs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DimExprContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(Java8Parser.LBRACK, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RBRACK(): TerminalNode { return this.getToken(Java8Parser.RBRACK, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_dimExpr; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitDimExpr) {
			return visitor.visitDimExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_constantExpression; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitConstantExpression) {
			return visitor.visitConstantExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public lambdaExpression(): LambdaExpressionContext | undefined {
		return this.tryGetRuleContext(0, LambdaExpressionContext);
	}
	public assignmentExpression(): AssignmentExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignmentExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_expression; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaExpressionContext extends ParserRuleContext {
	public lambdaParameters(): LambdaParametersContext {
		return this.getRuleContext(0, LambdaParametersContext);
	}
	public ARROW(): TerminalNode { return this.getToken(Java8Parser.ARROW, 0); }
	public lambdaBody(): LambdaBodyContext {
		return this.getRuleContext(0, LambdaBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_lambdaExpression; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitLambdaExpression) {
			return visitor.visitLambdaExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaParametersContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.Identifier, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.RPAREN, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	public inferredFormalParameterList(): InferredFormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, InferredFormalParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_lambdaParameters; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitLambdaParameters) {
			return visitor.visitLambdaParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InferredFormalParameterListContext extends ParserRuleContext {
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.Identifier);
		} else {
			return this.getToken(Java8Parser.Identifier, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.COMMA);
		} else {
			return this.getToken(Java8Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_inferredFormalParameterList; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitInferredFormalParameterList) {
			return visitor.visitInferredFormalParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaBodyContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_lambdaBody; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitLambdaBody) {
			return visitor.visitLambdaBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentExpressionContext extends ParserRuleContext {
	public conditionalExpression(): ConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalExpressionContext);
	}
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_assignmentExpression; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitAssignmentExpression) {
			return visitor.visitAssignmentExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public leftHandSide(): LeftHandSideContext {
		return this.getRuleContext(0, LeftHandSideContext);
	}
	public assignmentOperator(): AssignmentOperatorContext {
		return this.getRuleContext(0, AssignmentOperatorContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_assignment; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LeftHandSideContext extends ParserRuleContext {
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	public fieldAccess(): FieldAccessContext | undefined {
		return this.tryGetRuleContext(0, FieldAccessContext);
	}
	public arrayAccess(): ArrayAccessContext | undefined {
		return this.tryGetRuleContext(0, ArrayAccessContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_leftHandSide; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitLeftHandSide) {
			return visitor.visitLeftHandSide(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentOperatorContext extends ParserRuleContext {
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.ASSIGN, 0); }
	public MUL_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.MUL_ASSIGN, 0); }
	public DIV_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.DIV_ASSIGN, 0); }
	public MOD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.MOD_ASSIGN, 0); }
	public ADD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.ADD_ASSIGN, 0); }
	public SUB_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.SUB_ASSIGN, 0); }
	public LSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.LSHIFT_ASSIGN, 0); }
	public RSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.RSHIFT_ASSIGN, 0); }
	public URSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.URSHIFT_ASSIGN, 0); }
	public AND_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.AND_ASSIGN, 0); }
	public XOR_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.XOR_ASSIGN, 0); }
	public OR_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.OR_ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_assignmentOperator; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitAssignmentOperator) {
			return visitor.visitAssignmentOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalExpressionContext extends ParserRuleContext {
	public conditionalOrExpression(): ConditionalOrExpressionContext {
		return this.getRuleContext(0, ConditionalOrExpressionContext);
	}
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.QUESTION, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.COLON, 0); }
	public conditionalExpression(): ConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_conditionalExpression; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitConditionalExpression) {
			return visitor.visitConditionalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalOrExpressionContext extends ParserRuleContext {
	public conditionalAndExpression(): ConditionalAndExpressionContext {
		return this.getRuleContext(0, ConditionalAndExpressionContext);
	}
	public conditionalOrExpression(): ConditionalOrExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalOrExpressionContext);
	}
	public OR(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.OR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_conditionalOrExpression; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitConditionalOrExpression) {
			return visitor.visitConditionalOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalAndExpressionContext extends ParserRuleContext {
	public inclusiveOrExpression(): InclusiveOrExpressionContext {
		return this.getRuleContext(0, InclusiveOrExpressionContext);
	}
	public conditionalAndExpression(): ConditionalAndExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalAndExpressionContext);
	}
	public AND(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.AND, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_conditionalAndExpression; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitConditionalAndExpression) {
			return visitor.visitConditionalAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InclusiveOrExpressionContext extends ParserRuleContext {
	public exclusiveOrExpression(): ExclusiveOrExpressionContext {
		return this.getRuleContext(0, ExclusiveOrExpressionContext);
	}
	public inclusiveOrExpression(): InclusiveOrExpressionContext | undefined {
		return this.tryGetRuleContext(0, InclusiveOrExpressionContext);
	}
	public BITOR(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.BITOR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_inclusiveOrExpression; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitInclusiveOrExpression) {
			return visitor.visitInclusiveOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExclusiveOrExpressionContext extends ParserRuleContext {
	public andExpression(): AndExpressionContext {
		return this.getRuleContext(0, AndExpressionContext);
	}
	public exclusiveOrExpression(): ExclusiveOrExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExclusiveOrExpressionContext);
	}
	public CARET(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.CARET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_exclusiveOrExpression; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitExclusiveOrExpression) {
			return visitor.visitExclusiveOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AndExpressionContext extends ParserRuleContext {
	public equalityExpression(): EqualityExpressionContext {
		return this.getRuleContext(0, EqualityExpressionContext);
	}
	public andExpression(): AndExpressionContext | undefined {
		return this.tryGetRuleContext(0, AndExpressionContext);
	}
	public BITAND(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.BITAND, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_andExpression; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitAndExpression) {
			return visitor.visitAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EqualityExpressionContext extends ParserRuleContext {
	public relationalExpression(): RelationalExpressionContext {
		return this.getRuleContext(0, RelationalExpressionContext);
	}
	public equalityExpression(): EqualityExpressionContext | undefined {
		return this.tryGetRuleContext(0, EqualityExpressionContext);
	}
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.EQUAL, 0); }
	public NOTEQUAL(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.NOTEQUAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_equalityExpression; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitEqualityExpression) {
			return visitor.visitEqualityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationalExpressionContext extends ParserRuleContext {
	public shiftExpression(): ShiftExpressionContext | undefined {
		return this.tryGetRuleContext(0, ShiftExpressionContext);
	}
	public relationalExpression(): RelationalExpressionContext | undefined {
		return this.tryGetRuleContext(0, RelationalExpressionContext);
	}
	public LT(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.GT, 0); }
	public LE(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.LE, 0); }
	public GE(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.GE, 0); }
	public INSTANCEOF(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.INSTANCEOF, 0); }
	public referenceType(): ReferenceTypeContext | undefined {
		return this.tryGetRuleContext(0, ReferenceTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_relationalExpression; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitRelationalExpression) {
			return visitor.visitRelationalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShiftExpressionContext extends ParserRuleContext {
	public additiveExpression(): AdditiveExpressionContext {
		return this.getRuleContext(0, AdditiveExpressionContext);
	}
	public shiftExpression(): ShiftExpressionContext | undefined {
		return this.tryGetRuleContext(0, ShiftExpressionContext);
	}
	public LT(): TerminalNode[];
	public LT(i: number): TerminalNode;
	public LT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.LT);
		} else {
			return this.getToken(Java8Parser.LT, i);
		}
	}
	public GT(): TerminalNode[];
	public GT(i: number): TerminalNode;
	public GT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.GT);
		} else {
			return this.getToken(Java8Parser.GT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_shiftExpression; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitShiftExpression) {
			return visitor.visitShiftExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditiveExpressionContext extends ParserRuleContext {
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		return this.getRuleContext(0, MultiplicativeExpressionContext);
	}
	public additiveExpression(): AdditiveExpressionContext | undefined {
		return this.tryGetRuleContext(0, AdditiveExpressionContext);
	}
	public ADD(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.SUB, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_additiveExpression; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitAdditiveExpression) {
			return visitor.visitAdditiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplicativeExpressionContext extends ParserRuleContext {
	public unaryExpression(): UnaryExpressionContext {
		return this.getRuleContext(0, UnaryExpressionContext);
	}
	public multiplicativeExpression(): MultiplicativeExpressionContext | undefined {
		return this.tryGetRuleContext(0, MultiplicativeExpressionContext);
	}
	public MUL(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.MOD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_multiplicativeExpression; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitMultiplicativeExpression) {
			return visitor.visitMultiplicativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryExpressionContext extends ParserRuleContext {
	public preIncrementExpression(): PreIncrementExpressionContext | undefined {
		return this.tryGetRuleContext(0, PreIncrementExpressionContext);
	}
	public preDecrementExpression(): PreDecrementExpressionContext | undefined {
		return this.tryGetRuleContext(0, PreDecrementExpressionContext);
	}
	public ADD(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.ADD, 0); }
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public SUB(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.SUB, 0); }
	public unaryExpressionNotPlusMinus(): UnaryExpressionNotPlusMinusContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionNotPlusMinusContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_unaryExpression; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitUnaryExpression) {
			return visitor.visitUnaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PreIncrementExpressionContext extends ParserRuleContext {
	public INC(): TerminalNode { return this.getToken(Java8Parser.INC, 0); }
	public unaryExpression(): UnaryExpressionContext {
		return this.getRuleContext(0, UnaryExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_preIncrementExpression; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitPreIncrementExpression) {
			return visitor.visitPreIncrementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PreDecrementExpressionContext extends ParserRuleContext {
	public DEC(): TerminalNode { return this.getToken(Java8Parser.DEC, 0); }
	public unaryExpression(): UnaryExpressionContext {
		return this.getRuleContext(0, UnaryExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_preDecrementExpression; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitPreDecrementExpression) {
			return visitor.visitPreDecrementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryExpressionNotPlusMinusContext extends ParserRuleContext {
	public postfixExpression(): PostfixExpressionContext | undefined {
		return this.tryGetRuleContext(0, PostfixExpressionContext);
	}
	public TILDE(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.TILDE, 0); }
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public BANG(): TerminalNode | undefined { return this.tryGetToken(Java8Parser.BANG, 0); }
	public castExpression(): CastExpressionContext | undefined {
		return this.tryGetRuleContext(0, CastExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_unaryExpressionNotPlusMinus; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitUnaryExpressionNotPlusMinus) {
			return visitor.visitUnaryExpressionNotPlusMinus(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostfixExpressionContext extends ParserRuleContext {
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	public postIncrementExpression_lf_postfixExpression(): PostIncrementExpression_lf_postfixExpressionContext[];
	public postIncrementExpression_lf_postfixExpression(i: number): PostIncrementExpression_lf_postfixExpressionContext;
	public postIncrementExpression_lf_postfixExpression(i?: number): PostIncrementExpression_lf_postfixExpressionContext | PostIncrementExpression_lf_postfixExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PostIncrementExpression_lf_postfixExpressionContext);
		} else {
			return this.getRuleContext(i, PostIncrementExpression_lf_postfixExpressionContext);
		}
	}
	public postDecrementExpression_lf_postfixExpression(): PostDecrementExpression_lf_postfixExpressionContext[];
	public postDecrementExpression_lf_postfixExpression(i: number): PostDecrementExpression_lf_postfixExpressionContext;
	public postDecrementExpression_lf_postfixExpression(i?: number): PostDecrementExpression_lf_postfixExpressionContext | PostDecrementExpression_lf_postfixExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PostDecrementExpression_lf_postfixExpressionContext);
		} else {
			return this.getRuleContext(i, PostDecrementExpression_lf_postfixExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_postfixExpression; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitPostfixExpression) {
			return visitor.visitPostfixExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostIncrementExpressionContext extends ParserRuleContext {
	public postfixExpression(): PostfixExpressionContext {
		return this.getRuleContext(0, PostfixExpressionContext);
	}
	public INC(): TerminalNode { return this.getToken(Java8Parser.INC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_postIncrementExpression; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitPostIncrementExpression) {
			return visitor.visitPostIncrementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostIncrementExpression_lf_postfixExpressionContext extends ParserRuleContext {
	public INC(): TerminalNode { return this.getToken(Java8Parser.INC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_postIncrementExpression_lf_postfixExpression; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitPostIncrementExpression_lf_postfixExpression) {
			return visitor.visitPostIncrementExpression_lf_postfixExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostDecrementExpressionContext extends ParserRuleContext {
	public postfixExpression(): PostfixExpressionContext {
		return this.getRuleContext(0, PostfixExpressionContext);
	}
	public DEC(): TerminalNode { return this.getToken(Java8Parser.DEC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_postDecrementExpression; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitPostDecrementExpression) {
			return visitor.visitPostDecrementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostDecrementExpression_lf_postfixExpressionContext extends ParserRuleContext {
	public DEC(): TerminalNode { return this.getToken(Java8Parser.DEC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_postDecrementExpression_lf_postfixExpression; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitPostDecrementExpression_lf_postfixExpression) {
			return visitor.visitPostDecrementExpression_lf_postfixExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CastExpressionContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Java8Parser.LPAREN, 0); }
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Java8Parser.RPAREN, 0); }
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public referenceType(): ReferenceTypeContext | undefined {
		return this.tryGetRuleContext(0, ReferenceTypeContext);
	}
	public unaryExpressionNotPlusMinus(): UnaryExpressionNotPlusMinusContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionNotPlusMinusContext);
	}
	public additionalBound(): AdditionalBoundContext[];
	public additionalBound(i: number): AdditionalBoundContext;
	public additionalBound(i?: number): AdditionalBoundContext | AdditionalBoundContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AdditionalBoundContext);
		} else {
			return this.getRuleContext(i, AdditionalBoundContext);
		}
	}
	public lambdaExpression(): LambdaExpressionContext | undefined {
		return this.tryGetRuleContext(0, LambdaExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_castExpression; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitCastExpression) {
			return visitor.visitCastExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommentsContext extends ParserRuleContext {
	public COMMENT(): TerminalNode[];
	public COMMENT(i: number): TerminalNode;
	public COMMENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.COMMENT);
		} else {
			return this.getToken(Java8Parser.COMMENT, i);
		}
	}
	public LINE_COMMENT(): TerminalNode[];
	public LINE_COMMENT(i: number): TerminalNode;
	public LINE_COMMENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Java8Parser.LINE_COMMENT);
		} else {
			return this.getToken(Java8Parser.LINE_COMMENT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Java8Parser.RULE_comments; }
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitComments) {
			return visitor.visitComments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


