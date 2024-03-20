//ts-nocheck
import { Java8ParserVisitor } from '@/parser/Java8ParserVisitor'
import { AbstractParseTreeVisitor, ParseTree, TerminalNode } from "antlr4ts/tree"
import {
	ExpressionValue, AType, AstBase, AstClass, AstVariable,
	AST_NODE_INVALID, AST_NODE_IGNORE,
} from './AstTypes'
import { AstNodes, astAppend } from './AstNodes'
import * as parser from "@/parser/Java8Parser";
import VariableNode from './types/Variable';
import TypeNode, { TypeArgument, TypeCategory } from './types/Type';
import Class from './types/Class';
import MethodNode from './types/Method';
import CommentNode from './types/Comment';
import { BlockNode, BlockType } from './types/Block';
import StatementNode, { StateType } from './types/Statement';
import ExpressionNode from './types/Expression';
import ExpressionAssignNode from './types/ExpressionAssign';
import ClassNode from './types/Class';
import ExpressionFieldAccess from './types/ExpressionFieldAccess';
import PackageNode from './types/Package';
import ImportNode from './types/Import';
import InvocationNode from './Invocation';

export default class JavaVisitor extends AbstractParseTreeVisitor<ExpressionValue> implements Java8ParserVisitor<ExpressionValue> {

	private packageName?: string
	private comments: AstBase[] = []
	private classStack: AstBase[] = []

	protected defaultResult(): string {
		console.log('Method not implemented.')
		return ""
	}

	/** ======================= generic parser ======================= */

	private parseText(...contexts: (ParseTree | undefined)[]): string {
		for (let i = 0; i < contexts.length; i++) {
			const ctx = contexts[i]
			if (ctx) {
				// allows undefined result, continue to default invalid result
				const result = ctx.text
				if (result) {
					return result
				}
			}
		}
		return ''
	}

	private parse(context: ParseTree | undefined): AstBase | undefined {
		return context ? this.visit(context) : undefined
	}

	private parseOneOf(...contexts: (ParseTree | undefined)[]): AstBase {
		for (let i = 0; i < contexts.length; i++) {
			const ctx = contexts[i]
			if (ctx) {
				// allows undefined result, continue to default invalid result
				const result = this.visit(ctx)
				if (result) {
					return result
				}
			}
		}
		console.log('NOT IMPLEMENTED', contexts)
		return AST_NODE_INVALID
	}

	private parseOneOfWithDefault(defaultVal: AstBase, ...contexts: (ParseTree | undefined)[]): AstBase {
		const node = this.parseOneOf(...contexts)
		if (node.type === AType._INVALID) {
			return defaultVal
		}
		return node
	}

	private parseMultiple(contexts: ParseTree[] | ParseTree | undefined): AstBase[] {
		if (contexts) {
			if (Array.isArray(contexts)) {
				return contexts.map(context => this.visit(context) as AstBase)
			}
			const result = this.visit(contexts as any as ParseTree)
			if (Array.isArray(result)) {
				return result
			}
			return [result as AstBase]
		}
		return []
	}

	/** ======================= utilities ======================= */

	private stackName(): string {
		if (this.classStack.length > 0) {
			return (this.classStack[this.classStack.length - 1] as ClassNode).name
		}
		return ''
	}

	/** ======================= parser impplements ======================= */

	visitLiteral(ctx: parser.LiteralContext): string {
		return this.parseText(
			ctx.IntegerLiteral()
			, ctx.FloatingPointLiteral()
			, ctx.BooleanLiteral()
			, ctx.CharacterLiteral()
			, ctx.StringLiteral()
			, ctx.NullLiteral()
		)
	}
	//visitPrimitiveType (ctx: parser.PrimitiveTypeContext) {

	visitNumericType(ctx: parser.NumericTypeContext) {
		const typename = this.parseText(ctx.integralType(), ctx.floatingPointType())
		return new TypeNode(typename)
	}

	//visitIntegralType (ctx: parser.IntegralTypeContext) {
	//visitFloatingPointType (ctx: parser.FloatingPointTypeContext) {

	visitReferenceType(ctx: parser.ReferenceTypeContext): AstBase {
		return this.parseOneOf(
			ctx.classOrInterfaceType()
			// , ctx.typeVariable()
			// , ctx.arrayType()
		)
	}

	visitClassOrInterfaceType(ctx: parser.ClassOrInterfaceTypeContext): AstBase {
		return this.parseOneOf(
			ctx.classType_lfno_classOrInterfaceType()
			// ,ctx.interfaceType_lfno_classOrInterfaceType()
		)
	}

	//visitClassType (ctx: parser.ClassTypeContext) {
	//visitClassType_lf_classOrInterfaceType (ctx: parser.ClassType_lf_classOrInterfaceTypeContext) {

	visitClassType_lfno_classOrInterfaceType(ctx: parser.ClassType_lfno_classOrInterfaceTypeContext): AstBase {
		if (ctx.annotation()) {
			console.log('NOT IMPLEMENTED annotation')
		}
		const cit = new TypeNode(ctx.Identifier().text)
		const args = this.parseMultiple(ctx.typeArguments())
		cit.typeArguments = args.map(a => a as TypeArgument)
		return cit
	}

	//visitInterfaceType (ctx: parser.InterfaceTypeContext) {
	//visitInterfaceType_lf_classOrInterfaceType (ctx: parser.InterfaceType_lf_classOrInterfaceTypeContext) {
	//visitInterfaceType_lfno_classOrInterfaceType (ctx: parser.InterfaceType_lfno_classOrInterfaceTypeContext) {
	//visitTypeVariable (ctx: parser.TypeVariableContext) {
	//visitArrayType (ctx: parser.ArrayTypeContext) {
	// visitDims (ctx: parser.DimsContext) : boolean {	}
	//visitTypeParameter (ctx: parser.TypeParameterContext) {
	//visitTypeParameterModifier (ctx: parser.TypeParameterModifierContext) {
	//visitTypeBound (ctx: parser.TypeBoundContext) {
	//visitAdditionalBound (ctx: parser.AdditionalBoundContext) {

	visitTypeArguments(ctx: parser.TypeArgumentsContext): AstBase[] {
		return this.parse(ctx.typeArgumentList()) as any as AstBase[]
	}

	visitTypeArgumentList(ctx: parser.TypeArgumentListContext): AstBase[] {
		return this.parseMultiple(ctx.typeArgument())
	}

	visitTypeArgument(ctx: parser.TypeArgumentContext): AstBase {
		const ast = this.parseOneOf(
			ctx.referenceType()
			, ctx.wildcard()
		)

		// wildcard returns TypeArgument
		if (ast.type == AType.TYPE_ARGUMENT) {
			return ast as TypeArgument
		}

		const arg = new TypeArgument()
		arg.vtype = ast as any
		return arg
	}

	visitWildcard(ctx: parser.WildcardContext): AstBase {
		//TODO: annotation
		return this.parse(ctx.wildcardBounds()) || AST_NODE_INVALID
	}

	visitWildcardBounds(ctx: parser.WildcardBoundsContext) {
		const arg = new TypeArgument()
		const vtype = this.visit(ctx.referenceType())
		if (ctx.EXTENDS()) {
			arg.extends = vtype
		}
		if (ctx.SUPER()) {
			arg.super = vtype
		}
		return arg
	}

	visitPackageName(ctx: parser.PackageNameContext): string {
		const pkg = ctx.packageName()?.text ?? ""
		const name = ctx.Identifier()?.text ?? ""

		this.packageName = pkg + "." + name
		return this.packageName
	}

	// typeName
	visitTypeName(ctx: parser.TypeNameContext): string {
		const pkg = ctx.packageOrTypeName()?.text ?? ""
		const name = ctx.Identifier()?.text ?? ""
		return pkg + "." + name
	}
	//visitPackageOrTypeName (ctx: parser.PackageOrTypeNameContext) {

	visitExpressionName(ctx: parser.ExpressionNameContext): string {
		return ctx.text
	}

	visitMethodName(ctx: parser.MethodNameContext): string {
		return ctx.Identifier().text
	}

	//visitAmbiguousName (ctx: parser.AmbiguousNameContext) {

	// compilationUnit
	visitCompilationUnit(ctx: parser.CompilationUnitContext): AstBase[] {
		return new AstNodes().
			add(this.parse(ctx.packageDeclaration())).
			append(this.parseMultiple(ctx.importDeclaration())).
			append(this.parseMultiple(ctx.typeDeclaration())).
			array()
	}

	// packageDeclaration
	visitPackageDeclaration(ctx: parser.PackageDeclarationContext): AstBase {
		return new PackageNode(this.parseText(ctx.packageName()))
	};

	// visitPackageModifier (ctx: parser.PackageModifierContext) : AstAnnotation[] {
	//     return []
	// }

	// importDeclaration
	visitImportDeclaration(ctx: parser.ImportDeclarationContext): AstBase {
		return this.parseOneOf(
			ctx.singleTypeImportDeclaration()
			//, ctx.typeImportOnDemandDeclaration()
			//, ctx.singleStaticImportDeclaration()
			//, ctx.staticImportOnDemandDeclaration()
		)
	}

	// singleTypeImportDeclaration
	visitSingleTypeImportDeclaration(ctx: parser.SingleTypeImportDeclarationContext): AstBase {
		return new ImportNode(this.visit(ctx.typeName()))
	}

	//visitTypeImportOnDemandDeclaration (ctx: parser.TypeImportOnDemandDeclarationContext) {
	//visitSingleStaticImportDeclaration (ctx: parser.SingleStaticImportDeclarationContext) {
	//visitStaticImportOnDemandDeclaration (ctx: parser.StaticImportOnDemandDeclarationContext) {
	visitTypeDeclaration(ctx: parser.TypeDeclarationContext): AstBase {
		return this.parseOneOfWithDefault(
			AST_NODE_IGNORE
			, ctx.classDeclaration()
			, ctx.interfaceDeclaration()
		)
	}

	visitClassDeclaration(ctx: parser.ClassDeclarationContext): AstBase {
		const result = this.parseOneOf(
			ctx.normalClassDeclaration()
			, ctx.enumDeclaration()
		)
		return result
	}

	visitNormalClassDeclaration(ctx: parser.NormalClassDeclarationContext): AstClass {
		const theClass = new Class(this.packageName, ctx.Identifier().text)
		this.classStack.push(theClass)
		theClass.children = this.parseMultiple(ctx.classBody()) as AstBase[]
		this.classStack.pop()
		if (ctx.comments()) {
			theClass.comments = this.parseMultiple(ctx.comments())
		}
		return theClass
	}
	//visitClassModifier (ctx: parser.ClassModifierContext) {
	//visitTypeParameters (ctx: parser.TypeParametersContext) {
	//visitTypeParameterList (ctx: parser.TypeParameterListContext) {
	//visitSuperclass (ctx: parser.SuperclassContext) {
	//visitSuperinterfaces (ctx: parser.SuperinterfacesContext) {
	//visitInterfaceTypeList (ctx: parser.InterfaceTypeListContext) {

	// { classBody... }
	visitClassBody(ctx: parser.ClassBodyContext): AstBase[] {
		return astAppend([], this.parseMultiple(ctx.classBodyDeclaration()))
	}

	// { classBodyDeclaration* }
	visitClassBodyDeclaration(ctx: parser.ClassBodyDeclarationContext): AstBase[] {
		if (ctx.classMemberDeclaration()) {
			return this.parseMultiple(ctx.classMemberDeclaration())
		}
		return [
			this.parseOneOfWithDefault(
				AST_NODE_INVALID
				// ,ctx.instanceInitializer()
				// ,ctx.staticInitializer()
				// ,ctx.constructorDeclaration()
			)
		]
	}

	visitClassMemberDeclaration(ctx: parser.ClassMemberDeclarationContext): AstBase[] {
		if (ctx.fieldDeclaration()) {
			return this.parseMultiple(ctx.fieldDeclaration())
		}

		return [this.parseOneOf(
			ctx.methodDeclaration()
			, ctx.classDeclaration()
			, ctx.interfaceDeclaration()
		)]
	}

	visitFieldDeclaration(ctx: parser.FieldDeclarationContext): AstVariable[] {
		const vars = this.parse(ctx.variableDeclaratorList())
		const variables: AstVariable[] = vars ? vars as any : []
		const vtype = this.parse(ctx.unannType())
		// ctx.fieldModifier()
		variables.map(v => {
			const variable = v as VariableNode
			variable.isField = true
			variable.vtype = vtype
			return variable
		})
		return variables
	}

	visitFieldModifier(ctx: parser.FieldModifierContext): AstBase {
		return AST_NODE_INVALID
	}

	visitVariableDeclaratorList(ctx: parser.VariableDeclaratorListContext): AstVariable[] {
		return this.parseMultiple(ctx.variableDeclarator()).map(variable => variable as AstVariable)
	}

	visitVariableDeclarator(ctx: parser.VariableDeclaratorContext): AstVariable {
		const variable = this.visit(ctx.variableDeclaratorId()) as AstVariable
		return variable
	}

	visitVariableDeclaratorId(ctx: parser.VariableDeclaratorIdContext): AstVariable {
		let variable = new VariableNode(ctx.Identifier().text)
		variable.isArray = !!ctx.dims() // TODO: parse more
		return variable
	}

	//visitVariableInitializer (ctx: parser.VariableInitializerContext) {
	visitUnannType(ctx: parser.UnannTypeContext): AstBase {
		return this.parseOneOf(ctx.unannPrimitiveType(), ctx.unannReferenceType())
	}

	visitUnannPrimitiveType(ctx: parser.UnannPrimitiveTypeContext) {
		const boolString = this.parseText(ctx.BOOLEAN())
		if (boolString) return new TypeNode(boolString)

		return this.parseOneOf(ctx.numericType())
	}

	visitUnannReferenceType(ctx: parser.UnannReferenceTypeContext): AstBase {
		return this.parseOneOf(
			ctx.unannClassOrInterfaceType(),
			ctx.unannTypeVariable()
			//, ctx.unannArrayType()
		)
	}

	visitUnannClassOrInterfaceType(ctx: parser.UnannClassOrInterfaceTypeContext): AstBase {
		return this.parseOneOf(
			ctx.unannClassType_lfno_unannClassOrInterfaceType()
			, ctx.unannInterfaceType_lfno_unannClassOrInterfaceType()
		)
	}

	visitUnannClassType(ctx: parser.UnannClassTypeContext): AstBase {
		// Identifier typeArguments?
		// unannClassOrInterfaceType '.' annotation* Identifier typeArguments?
		const ctype = new TypeNode(ctx.Identifier().text)
		if (ctx.unannClassOrInterfaceType()) {
			//TODO: ctx.unannClassOrInterfaceType
			ctype.typeArguments = ctx.typeArguments() ? this.parseMultiple(ctx.typeArguments()) as TypeArgument[] : undefined
		}
		return ctype

	}

	//visitUnannClassType_lf_unannClassOrInterfaceType (ctx: parser.UnannClassType_lf_unannClassOrInterfaceTypeContext) {
	visitUnannClassType_lfno_unannClassOrInterfaceType(ctx: parser.UnannClassType_lfno_unannClassOrInterfaceTypeContext): AstBase {
		let vtype = new TypeNode(ctx.Identifier().text)
		vtype.category = TypeCategory.ClassOrInterface
		if (ctx.typeArguments()) {
			vtype.isGeneric = true
			const typeArguments = this.parse(ctx.typeArguments())
			vtype.typeArguments = typeArguments as any as TypeArgument[]
		}
		return vtype
	}
	//visitUnannInterfaceType (ctx: parser.UnannInterfaceTypeContext) {
	//visitUnannInterfaceType_lf_unannClassOrInterfaceType (ctx: parser.UnannInterfaceType_lf_unannClassOrInterfaceTypeContext) {
	visitUnannInterfaceType_lfno_unannClassOrInterfaceType(ctx: parser.UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext) {
		return this.visit(ctx.unannClassType_lfno_unannClassOrInterfaceType())
	}

	visitUnannTypeVariable(ctx: parser.UnannTypeVariableContext): AstBase {
		const vtype = new TypeNode(ctx.Identifier().text)
		vtype.category = TypeCategory.Variable
		return vtype
	}

	//visitUnannArrayType (ctx: parser.UnannArrayTypeContext) {
	visitMethodDeclaration(ctx: parser.MethodDeclarationContext): AstBase {
		const method = this.parse(ctx.methodHeader()) as MethodNode
		method.body = this.parseOneOf(ctx.methodBody())
		if (ctx.comments()) {
			method.comments = this.parseMultiple(ctx.comments())
		}
		return method
	}
	//visitMethodModifier (ctx: parser.MethodModifierContext) {
	visitMethodHeader(ctx: parser.MethodHeaderContext): AstBase {
		const rtype = this.parseOneOf(ctx.result())
		const method = this.parseOneOf(ctx.methodDeclarator()) as MethodNode
		method.rtype = rtype as TypeNode
		return method
	}

	visitResult(ctx: parser.ResultContext): AstBase {
		if (ctx.VOID()) {
			return new TypeNode('void')
		}
		return this.parseOneOf(ctx.unannType())
	}

	visitMethodDeclarator(ctx: parser.MethodDeclaratorContext): AstBase {
		let method = new MethodNode()
		method.name = ctx.Identifier().text
		const parameters = this.parseMultiple(ctx.formalParameterList())
		if (parameters) {
			method.parameters = parameters
		}
		const stackName = this.stackName()
		if (stackName) {
			method.isField = true
			method.parentTypeName = stackName
		}
		return method
	}

	visitFormalParameterList(ctx: parser.FormalParameterListContext): AstBase[] {
		if (ctx.receiverParameter()) {
			return this.parseMultiple(ctx.receiverParameter())
		}

		return new AstNodes()
			.append(this.parseMultiple(ctx.formalParameters()))
			.add(this.parseOneOf(ctx.lastFormalParameter()))
			.array()
	}

	visitFormalParameters(ctx: parser.FormalParametersContext): AstBase[] {
		if (ctx.receiverParameter()) {
			return new AstNodes()
				.add(this.parseOneOf(ctx.receiverParameter()))
				.append(this.parseMultiple(ctx.formalParameter()))
				.array()
		}

		return this.parseMultiple(ctx.formalParameter())
	}

	visitFormalParameter(ctx: parser.FormalParameterContext): AstBase {
		//TODO: VariableModifier
		const variable = this.parseOneOf(ctx.variableDeclaratorId()) as VariableNode
		variable.vtype = this.parseOneOf(ctx.unannType())
		return variable
	}

	//visitVariableModifier (ctx: parser.VariableModifierContext) {
	visitLastFormalParameter(ctx: parser.LastFormalParameterContext): AstBase {
		if (ctx.variableDeclaratorId()) {
			//TODO: variableModifier
			//TODO: annotation
			const variable = this.parseOneOf(ctx.variableDeclaratorId()) as VariableNode
			let vtype = this.parseOneOf(ctx.unannType()) as TypeNode
			vtype.multiple = true
			variable.vtype = vtype
			return variable
		}

		return this.parseOneOf(ctx.formalParameter())
	}

	visitReceiverParameter(ctx: parser.ReceiverParameterContext): AstBase {
		//TODO: ctx.annotation
		const identifier = ctx.Identifier()
		const variable = new VariableNode(identifier ? identifier.text : '')
		variable.vtype = this.parseOneOf(ctx.unannType())
		if (ctx.THIS()) {
			variable.name += 'THIS'
		}
		return variable
	}

	//visitThrows_ (ctx: parser.Throws_Context) {
	//visitExceptionTypeList (ctx: parser.ExceptionTypeListContext) {
	//visitExceptionType (ctx: parser.ExceptionTypeContext) {

	visitMethodBody(ctx: parser.MethodBodyContext): AstBase {
		return this.parseOneOf(ctx.block())
	}

	//visitInstanceInitializer (ctx: parser.InstanceInitializerContext) {
	//visitStaticInitializer (ctx: parser.StaticInitializerContext) {
	//visitConstructorDeclaration (ctx: parser.ConstructorDeclarationContext) {
	//visitConstructorModifier (ctx: parser.ConstructorModifierContext) {
	//visitConstructorDeclarator (ctx: parser.ConstructorDeclaratorContext) {
	//visitSimpleTypeName (ctx: parser.SimpleTypeNameContext) {
	//visitConstructorBody (ctx: parser.ConstructorBodyContext) {
	//visitExplicitConstructorInvocation (ctx: parser.ExplicitConstructorInvocationContext) {

	visitEnumDeclaration(ctx: parser.EnumDeclarationContext): AstBase {
		return AST_NODE_INVALID
		// return {
		// 	type: AType.ENUM,
		// 	packageName: this.packageName,
		// 	name: ctx.Identifier().text
		// }
	}

	//visitEnumBody (ctx: parser.EnumBodyContext) {
	//visitEnumConstantList (ctx: parser.EnumConstantListContext) {
	//visitEnumConstant (ctx: parser.EnumConstantContext) {
	//visitEnumConstantModifier (ctx: parser.EnumConstantModifierContext) {
	//visitEnumBodyDeclarations (ctx: parser.EnumBodyDeclarationsContext) {
	//visitInterfaceDeclaration (ctx: parser.InterfaceDeclarationContext) {
	//visitNormalInterfaceDeclaration (ctx: parser.NormalInterfaceDeclarationContext) {
	//visitInterfaceModifier (ctx: parser.InterfaceModifierContext) {
	//visitExtendsInterfaces (ctx: parser.ExtendsInterfacesContext) {
	//visitInterfaceBody (ctx: parser.InterfaceBodyContext) {
	//visitInterfaceMemberDeclaration (ctx: parser.InterfaceMemberDeclarationContext) {
	//visitConstantDeclaration (ctx: parser.ConstantDeclarationContext) {
	//visitConstantModifier (ctx: parser.ConstantModifierContext) {
	//visitInterfaceMethodDeclaration (ctx: parser.InterfaceMethodDeclarationContext) {
	//visitInterfaceMethodModifier (ctx: parser.InterfaceMethodModifierContext) {
	//visitAnnotationTypeDeclaration (ctx: parser.AnnotationTypeDeclarationContext) {
	//visitAnnotationTypeBody (ctx: parser.AnnotationTypeBodyContext) {
	//visitAnnotationTypeMemberDeclaration (ctx: parser.AnnotationTypeMemberDeclarationContext) {
	//visitAnnotationTypeElementDeclaration (ctx: parser.AnnotationTypeElementDeclarationContext) {
	//visitAnnotationTypeElementModifier (ctx: parser.AnnotationTypeElementModifierContext) {
	//visitDefaultValue (ctx: parser.DefaultValueContext) {
	//visitAnnotation (ctx: parser.AnnotationContext) {
	//visitNormalAnnotation (ctx: parser.NormalAnnotationContext) {
	//visitElementValuePairList (ctx: parser.ElementValuePairListContext) {
	//visitElementValuePair (ctx: parser.ElementValuePairContext) {
	//visitElementValue (ctx: parser.ElementValueContext) {
	//visitElementValueArrayInitializer (ctx: parser.ElementValueArrayInitializerContext) {
	//visitElementValueList (ctx: parser.ElementValueListContext) {
	//visitMarkerAnnotation (ctx: parser.MarkerAnnotationContext) {
	//visitSingleElementAnnotation (ctx: parser.SingleElementAnnotationContext) {
	//visitArrayInitializer (ctx: parser.ArrayInitializerContext) {
	//visitVariableInitializerList (ctx: parser.VariableInitializerListContext) {

	visitBlock(ctx: parser.BlockContext): AstBase {
		const block = new BlockNode()
		if (ctx.blockStatements()) {
			block.children = this.parseMultiple(ctx.blockStatements())
		}
		block.blockType = BlockType.EMPTY
		return block
	}

	visitBlockStatements(ctx: parser.BlockStatementsContext): AstBase[] {
		return this.parseMultiple(ctx.blockStatement())
	}

	visitBlockStatement(ctx: parser.BlockStatementContext): AstBase {
		return this.parseOneOf(
			// ctx.localVariableDeclarationStatement()
			ctx.classDeclaration()
			, ctx.statement()
		)
	}

	//visitLocalVariableDeclarationStatement (ctx: parser.LocalVariableDeclarationStatementContext) {
	//visitLocalVariableDeclaration (ctx: parser.LocalVariableDeclarationContext) {
	visitStatement(ctx: parser.StatementContext): AstBase {
		return this.parseOneOf(
			ctx.statementWithoutTrailingSubstatement()
			// , ctx.labeledStatement()
			, ctx.ifThenStatement()
			// , ctx.ifThenElseStatement()
			// , ctx.whileStatement()
			// , ctx.forStatement()
		)
	}

	//visitStatementNoShortIf (ctx: parser.StatementNoShortIfContext) {
	visitStatementWithoutTrailingSubstatement(ctx: parser.StatementWithoutTrailingSubstatementContext): AstBase {
		return this.parseOneOf(
			ctx.block()
			, ctx.emptyStatement_()
			, ctx.expressionStatement()
			// , ctx.assertStatement()
			// , ctx.switchStatement()
			// , ctx.doStatement()
			// , ctx.breakStatement()
			// , ctx.continueStatement()
			, ctx.returnStatement()
			// , ctx.synchronizedStatement()
			// , ctx.throwStatement()
			, ctx.tryStatement()
		)
	}

	visitEmptyStatement_(ctx: parser.EmptyStatement_Context): AstBase {
		return new StatementNode(StateType.EMPTY)
	}

	//visitLabeledStatement (ctx: parser.LabeledStatementContext) {
	//visitLabeledStatementNoShortIf (ctx: parser.LabeledStatementNoShortIfContext) {
	visitExpressionStatement(ctx: parser.ExpressionStatementContext): AstBase {
		const stmt: StatementNode = new StatementNode(StateType.EXPRESSION)
		stmt.expression = this.parseOneOf(ctx.statementExpression())
		return stmt
	}

	visitStatementExpression(ctx: parser.StatementExpressionContext): AstBase {
		return this.parseOneOf(
			ctx.assignment()
			// , ctx.preIncrementExpression()
			// , ctx.preDecrementExpression()
			// , ctx.postIncrementExpression()
			// , ctx.postDecrementExpression()
			, ctx.methodInvocation()
			// , ctx.classInstanceCreationExpression()
		)
	}

	visitIfThenStatement(ctx: parser.IfThenStatementContext): AstBase {
		const stmt: StatementNode = new StatementNode(StateType.IF)
		stmt.expression = this.parseOneOf(ctx.expression())
		stmt.statement = this.parseOneOf(ctx.statement())
		return stmt
	}
	//visitIfThenElseStatement (ctx: parser.IfThenElseStatementContext) {
	//visitIfThenElseStatementNoShortIf (ctx: parser.IfThenElseStatementNoShortIfContext) {
	//visitAssertStatement (ctx: parser.AssertStatementContext) {
	//visitSwitchStatement (ctx: parser.SwitchStatementContext) {
	//visitSwitchBlock (ctx: parser.SwitchBlockContext) {
	//visitSwitchBlockStatementGroup (ctx: parser.SwitchBlockStatementGroupContext) {
	//visitSwitchLabels (ctx: parser.SwitchLabelsContext) {
	//visitSwitchLabel (ctx: parser.SwitchLabelContext) {
	//visitEnumConstantName (ctx: parser.EnumConstantNameContext) {
	//visitWhileStatement (ctx: parser.WhileStatementContext) {
	//visitWhileStatementNoShortIf (ctx: parser.WhileStatementNoShortIfContext) {
	//visitDoStatement (ctx: parser.DoStatementContext) {
	//visitForStatement (ctx: parser.ForStatementContext) {
	//visitForStatementNoShortIf (ctx: parser.ForStatementNoShortIfContext) {
	//visitBasicForStatement (ctx: parser.BasicForStatementContext) {
	//visitBasicForStatementNoShortIf (ctx: parser.BasicForStatementNoShortIfContext) {
	//visitForInit (ctx: parser.ForInitContext) {
	//visitForUpdate (ctx: parser.ForUpdateContext) {
	//visitStatementExpressionList (ctx: parser.StatementExpressionListContext) {
	//visitEnhancedForStatement (ctx: parser.EnhancedForStatementContext) {
	//visitEnhancedForStatementNoShortIf (ctx: parser.EnhancedForStatementNoShortIfContext) {
	//visitBreakStatement (ctx: parser.BreakStatementContext) {
	//visitContinueStatement (ctx: parser.ContinueStatementContext) {

	visitReturnStatement(ctx: parser.ReturnStatementContext) {
		const stmt: StatementNode = new StatementNode(StateType.RETURN)
		stmt.expression = this.parseOneOf(ctx.expression())
		return stmt
	}

	//visitThrowStatement (ctx: parser.ThrowStatementContext) {
	//visitSynchronizedStatement (ctx: parser.SynchronizedStatementContext) {

	visitTryStatement(ctx: parser.TryStatementContext): AstBase {
		const stmt: StatementNode = new StatementNode(StateType.TRY)
		stmt.block = this.parse(ctx.block())
		stmt.catches = this.parseMultiple(ctx.catches())
		return stmt
	}

	//visitCatches (ctx: parser.CatchesContext) {
	visitCatchClause(ctx: parser.CatchClauseContext) {
		const stmt: StatementNode = new StatementNode(StateType.CATCH)
		stmt.catchParameter = this.parse(ctx.catchFormalParameter())
		stmt.block = this.parse(ctx.block())
		return stmt
	}

	visitCatchFormalParameter(ctx: parser.CatchFormalParameterContext): AstBase {
		const varialbe = this.parseOneOf(ctx.variableDeclaratorId()) as VariableNode
		const vtype = this.parseOneOf(ctx.catchType())
		varialbe.vtype = vtype
		return varialbe
	}

	visitCatchType(ctx: parser.CatchTypeContext) {
		// unannClassType ('|' classType)*

		//TODO: ctx.classType()
		return this.parse(ctx.unannClassType())
	}

	//visitFinally_ (ctx: parser.Finally_Context) {
	//visitTryWithResourcesStatement (ctx: parser.TryWithResourcesStatementContext) {
	//visitResourceSpecification (ctx: parser.ResourceSpecificationContext) {
	//visitResourceList (ctx: parser.ResourceListContext) {
	//visitResource (ctx: parser.ResourceContext) {
	visitPrimary(ctx: parser.PrimaryContext): string {
		console.log('visitPrimary')

		this.parseMultiple(ctx.primaryNoNewArray_lf_primary())

		return this.parseText(
			ctx.primaryNoNewArray_lfno_primary()
			, ctx.arrayCreationExpression()
		)
	}

	visitPrimaryNoNewArray(ctx: parser.PrimaryNoNewArrayContext): string {
		console.log('visitPrimaryNoNewArray')
		// : literal
		// | typeName ('[' ']')* '.' 'class'
		// | unannPrimitiveType ('[' ']')* '.' 'class'
		// | 'void' '.' 'class'
		// | 'this'
		// | typeName '.' 'this'
		// | '(' expression ')'
		// | classInstanceCreationExpression_lfno_primary
		// | fieldAccess_lfno_primary
		// | arrayAccess_lfno_primary
		// | methodInvocation_lfno_primary
		// | methodReference_lfno_primary
		return ctx.text
	}

	//visitPrimaryNoNewArray_lf_arrayAccess (ctx: parser.PrimaryNoNewArray_lf_arrayAccessContext) {
	//visitPrimaryNoNewArray_lfno_arrayAccess (ctx: parser.PrimaryNoNewArray_lfno_arrayAccessContext) {
	//visitPrimaryNoNewArray_lf_primary (ctx: parser.PrimaryNoNewArray_lf_primaryContext) {
	//visitPrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary (ctx: parser.PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext) {
	//visitPrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary (ctx: parser.PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext) {

	visitPrimaryNoNewArray_lfno_primary(ctx: parser.PrimaryNoNewArray_lfno_primaryContext): string {
		// : literal
		// | typeName ('[' ']')* '.' 'class'
		// | unannPrimitiveType ('[' ']')* '.' 'class'
		// | 'void' '.' 'class'
		// | 'this'
		// | typeName '.' 'this'
		// | '(' expression ')'
		// | classInstanceCreationExpression_lfno_primary
		// | fieldAccess_lfno_primary
		// | arrayAccess_lfno_primary
		// | methodInvocation_lfno_primary
		// | methodReference_lfno_primary
		return ctx.text
	}

	//visitPrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary (ctx: parser.PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext) {
	//visitPrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary (ctx: parser.PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext) {
	//visitClassInstanceCreationExpression (ctx: parser.ClassInstanceCreationExpressionContext) {
	//visitClassInstanceCreationExpression_lf_primary (ctx: parser.ClassInstanceCreationExpression_lf_primaryContext) {
	//visitClassInstanceCreationExpression_lfno_primary (ctx: parser.ClassInstanceCreationExpression_lfno_primaryContext) {
	//visitTypeArgumentsOrDiamond (ctx: parser.TypeArgumentsOrDiamondContext) {

	visitFieldAccess(ctx: parser.FieldAccessContext): AstBase {
		const field = new ExpressionFieldAccess(ctx.Identifier().text)
		if (ctx.primary()) {
			field.prefix = this.parseText(ctx.primary())
		}
		if (ctx.typeName()) {
			field.prefix = this.parseText(ctx.typeName())
		}
		return field
	}

	//visitFieldAccess_lf_primary (ctx: parser.FieldAccess_lf_primaryContext) {
	//visitFieldAccess_lfno_primary (ctx: parser.FieldAccess_lfno_primaryContext) {
	//visitArrayAccess (ctx: parser.ArrayAccessContext) {
	//visitArrayAccess_lf_primary (ctx: parser.ArrayAccess_lf_primaryContext) {
	//visitArrayAccess_lfno_primary (ctx: parser.ArrayAccess_lfno_primaryContext) {
	visitMethodInvocation(ctx: parser.MethodInvocationContext): AstBase {
		const method: StatementNode = new StatementNode(StateType.METHOD_INVOCATION)
		method.arguments = this.parseMultiple(ctx.argumentList())

		const invocation: InvocationNode = new InvocationNode()
		method.invocation = invocation
		if (ctx.methodName()) {
			invocation.name = this.parseText(ctx.methodName())
		} else {
			invocation.name = ctx.Identifier()?.text ?? ''
		}

		//TODO: ctx.super()
		const typename = this.parseText(ctx.typeName(), ctx.expressionName(), ctx.primary())
		const ttype = new TypeNode(typename)
		invocation.ttype = ttype

		const tArgs = this.parseMultiple(ctx.typeArguments()) as TypeArgument[]
		if (tArgs.length) {
			ttype.typeArguments = tArgs
			ttype.isGeneric = true
		}

		return method
	}

	//visitMethodInvocation_lf_primary (ctx: parser.MethodInvocation_lf_primaryContext) {
	//visitMethodInvocation_lfno_primary (ctx: parser.MethodInvocation_lfno_primaryContext) {
	visitArgumentList(ctx: parser.ArgumentListContext): AstBase[] {
		return this.parseMultiple(ctx.expression())
	}

	//visitMethodReference (ctx: parser.MethodReferenceContext) {
	//visitMethodReference_lf_primary (ctx: parser.MethodReference_lf_primaryContext) {
	//visitMethodReference_lfno_primary (ctx: parser.MethodReference_lfno_primaryContext) {
	//visitArrayCreationExpression (ctx: parser.ArrayCreationExpressionContext) {
	//visitDimExprs (ctx: parser.DimExprsContext) {
	//visitDimExpr (ctx: parser.DimExprContext) {
	//visitConstantExpression (ctx: parser.ConstantExpressionContext) {

	visitExpression(ctx: parser.ExpressionContext) {
		const expression = new ExpressionNode()
		expression.expression = ctx.text
		return expression
	}

	//visitLambdaExpression (ctx: parser.LambdaExpressionContext) {
	//visitLambdaParameters (ctx: parser.LambdaParametersContext) {
	//visitInferredFormalParameterList (ctx: parser.InferredFormalParameterListContext) {
	//visitLambdaBody (ctx: parser.LambdaBodyContext) {
	//visitAssignmentExpression (ctx: parser.AssignmentExpressionContext) {

	visitAssignment(ctx: parser.AssignmentContext): AstBase {
		// leftHandSide assignmentOperator expression
		const assign = new ExpressionAssignNode()
		assign.left = this.parseOneOf(ctx.leftHandSide())
		assign.operator = this.visit(ctx.assignmentOperator()) as string
		assign.right = this.parseOneOf(ctx.expression())
		return assign
	}

	visitLeftHandSide(ctx: parser.LeftHandSideContext): AstBase {
		return this.parseOneOf(
			ctx.expressionName()
			, ctx.fieldAccess()
			, ctx.arrayAccess()
		)
	}

	visitAssignmentOperator(ctx: parser.AssignmentOperatorContext): string {
		const ASSIGN = ctx.ASSIGN()
		const MUL_ASSIGN = ctx.MUL_ASSIGN()
		const DIV_ASSIGN = ctx.DIV_ASSIGN()
		const MOD_ASSIGN = ctx.MOD_ASSIGN()
		const ADD_ASSIGN = ctx.ADD_ASSIGN()
		const SUB_ASSIGN = ctx.SUB_ASSIGN()
		const LSHIFT_ASSIGN = ctx.LSHIFT_ASSIGN()
		const RSHIFT_ASSIGN = ctx.RSHIFT_ASSIGN()
		const URSHIFT_ASSIGN = ctx.URSHIFT_ASSIGN()
		const AND_ASSIGN = ctx.AND_ASSIGN()
		const XOR_ASSIGN = ctx.XOR_ASSIGN()
		const OR_ASSIGN = ctx.OR_ASSIGN()

		return (ASSIGN && ASSIGN.text) ||
			(MUL_ASSIGN && MUL_ASSIGN.text) ||
			(DIV_ASSIGN && DIV_ASSIGN.text) ||
			(MOD_ASSIGN && MOD_ASSIGN.text) ||
			(ADD_ASSIGN && ADD_ASSIGN.text) ||
			(SUB_ASSIGN && SUB_ASSIGN.text) ||
			(LSHIFT_ASSIGN && LSHIFT_ASSIGN.text) ||
			(RSHIFT_ASSIGN && RSHIFT_ASSIGN.text) ||
			(URSHIFT_ASSIGN && URSHIFT_ASSIGN.text) ||
			(AND_ASSIGN && AND_ASSIGN.text) ||
			(XOR_ASSIGN && XOR_ASSIGN.text) ||
			(OR_ASSIGN && OR_ASSIGN.text) ||
			''
	}
	//visitConditionalExpression (ctx: parser.ConditionalExpressionContext) {
	//visitConditionalOrExpression (ctx: parser.ConditionalOrExpressionContext) {
	//visitConditionalAndExpression (ctx: parser.ConditionalAndExpressionContext) {
	//visitInclusiveOrExpression (ctx: parser.InclusiveOrExpressionContext) {
	//visitExclusiveOrExpression (ctx: parser.ExclusiveOrExpressionContext) {
	//visitAndExpression (ctx: parser.AndExpressionContext) {
	//visitEqualityExpression (ctx: parser.EqualityExpressionContext) {
	//visitRelationalExpression (ctx: parser.RelationalExpressionContext) {
	//visitShiftExpression (ctx: parser.ShiftExpressionContext) {
	//visitAdditiveExpression (ctx: parser.AdditiveExpressionContext) {
	//visitMultiplicativeExpression (ctx: parser.MultiplicativeExpressionContext) {
	//visitUnaryExpression (ctx: parser.UnaryExpressionContext) {
	//visitPreIncrementExpression (ctx: parser.PreIncrementExpressionContext) {
	//visitPreDecrementExpression (ctx: parser.PreDecrementExpressionContext) {
	//visitUnaryExpressionNotPlusMinus (ctx: parser.UnaryExpressionNotPlusMinusContext) {
	//visitPostfixExpression (ctx: parser.PostfixExpressionContext) {
	//visitPostIncrementExpression (ctx: parser.PostIncrementExpressionContext) {
	//visitPostIncrementExpression_lf_postfixExpression (ctx: parser.PostIncrementExpression_lf_postfixExpressionContext) {
	//visitPostDecrementExpression (ctx: parser.PostDecrementExpressionContext) {
	//visitPostDecrementExpression_lf_postfixExpression (ctx: parser.PostDecrementExpression_lf_postfixExpressionContext) {
	//visitCastExpression (ctx: parser.CastExpressionContext) {

	visitComments(ctx: parser.CommentsContext): AstBase[] {
		let nodes = new AstNodes()
		let comments = ctx.COMMENT()
		let line_comments = ctx.LINE_COMMENT()

		comments && nodes.append(comments.map((c: TerminalNode) => new CommentNode(c.text)))
		line_comments && nodes.append(line_comments.map((c: TerminalNode) => new CommentNode(c.text)))

		// this.comments = nodes.array()
		return nodes.array()
	}
}
