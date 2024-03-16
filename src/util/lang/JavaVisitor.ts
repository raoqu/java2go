//ts-nocheck
import {Java8ParserVisitor} from '@/parser/Java8ParserVisitor'
import { AbstractParseTreeVisitor } from "antlr4ts/tree"
import { ExpressionValue, AstBase, AstPackage, AstAnnotation } from './AstTypes'
import * as parser from "@/parser/Java8Parser";

export default class JavaVisitor extends AbstractParseTreeVisitor<ExpressionValue> implements Java8ParserVisitor<ExpressionValue> {
        
    protected defaultResult(): string {
        console.log('Method not implemented.')
        return ""
    }

	visitPackageDeclaration (ctx: parser.PackageDeclarationContext) :AstPackage|undefined {
        const result = this.visit(ctx.packageName())
        return result || {
            type: 'package',
            packageName : result as string
        }
    };
	//visitLiteral (ctx: parser.LiteralContext) {
	//visitPrimitiveType (ctx: parser.PrimitiveTypeContext) {
	//visitNumericType (ctx: parser.NumericTypeContext) {
	//visitIntegralType (ctx: parser.IntegralTypeContext) {
	//visitFloatingPointType (ctx: parser.FloatingPointTypeContext) {
	//visitReferenceType (ctx: parser.ReferenceTypeContext) {
	//visitClassOrInterfaceType (ctx: parser.ClassOrInterfaceTypeContext) {
	//visitClassType (ctx: parser.ClassTypeContext) {
	//visitClassType_lf_classOrInterfaceType (ctx: parser.ClassType_lf_classOrInterfaceTypeContext) {
	//visitClassType_lfno_classOrInterfaceType (ctx: parser.ClassType_lfno_classOrInterfaceTypeContext) {
	//visitInterfaceType (ctx: parser.InterfaceTypeContext) {
	//visitInterfaceType_lf_classOrInterfaceType (ctx: parser.InterfaceType_lf_classOrInterfaceTypeContext) {
	//visitInterfaceType_lfno_classOrInterfaceType (ctx: parser.InterfaceType_lfno_classOrInterfaceTypeContext) {
	//visitTypeVariable (ctx: parser.TypeVariableContext) {
	//visitArrayType (ctx: parser.ArrayTypeContext) {
	//visitDims (ctx: parser.DimsContext) {
	//visitTypeParameter (ctx: parser.TypeParameterContext) {
	//visitTypeParameterModifier (ctx: parser.TypeParameterModifierContext) {
	//visitTypeBound (ctx: parser.TypeBoundContext) {
	//visitAdditionalBound (ctx: parser.AdditionalBoundContext) {
	//visitTypeArguments (ctx: parser.TypeArgumentsContext) {
	//visitTypeArgumentList (ctx: parser.TypeArgumentListContext) {
	//visitTypeArgument (ctx: parser.TypeArgumentContext) {
	//visitWildcard (ctx: parser.WildcardContext) {
	//visitWildcardBounds (ctx: parser.WildcardBoundsContext) {
	visitPackageName (ctx: parser.PackageNameContext) :string {
        const pkg = ctx.packageName()?.text ?? "";
        const name = ctx.Identifier()?.text ?? ""
        return pkg + "." + name
    }
	//visitTypeName (ctx: parser.TypeNameContext) {
	//visitPackageOrTypeName (ctx: parser.PackageOrTypeNameContext) {
	//visitExpressionName (ctx: parser.ExpressionNameContext) {
	//visitMethodName (ctx: parser.MethodNameContext) {
	//visitAmbiguousName (ctx: parser.AmbiguousNameContext) {
	visitCompilationUnit (ctx: parser.CompilationUnitContext) :AstBase[]{
        const arr = []
        const pacakageDeclaration = ctx.packageDeclaration()

        pacakageDeclaration && arr.push(this.visit(pacakageDeclaration) as AstPackage)
        return arr
    }
	//visitPackageDeclaration (ctx: parser.PackageDeclarationContext) {
	visitPackageModifier (ctx: parser.PackageModifierContext) : AstAnnotation[] {
        return []
    }
	//visitImportDeclaration (ctx: parser.ImportDeclarationContext) {
	//visitSingleTypeImportDeclaration (ctx: parser.SingleTypeImportDeclarationContext) {
	//visitTypeImportOnDemandDeclaration (ctx: parser.TypeImportOnDemandDeclarationContext) {
	//visitSingleStaticImportDeclaration (ctx: parser.SingleStaticImportDeclarationContext) {
	//visitStaticImportOnDemandDeclaration (ctx: parser.StaticImportOnDemandDeclarationContext) {
	//visitTypeDeclaration (ctx: parser.TypeDeclarationContext) {
	//visitClassDeclaration (ctx: parser.ClassDeclarationContext) {
	//visitNormalClassDeclaration (ctx: parser.NormalClassDeclarationContext) {
	//visitClassModifier (ctx: parser.ClassModifierContext) {
	//visitTypeParameters (ctx: parser.TypeParametersContext) {
	//visitTypeParameterList (ctx: parser.TypeParameterListContext) {
	//visitSuperclass (ctx: parser.SuperclassContext) {
	//visitSuperinterfaces (ctx: parser.SuperinterfacesContext) {
	//visitInterfaceTypeList (ctx: parser.InterfaceTypeListContext) {
	//visitClassBody (ctx: parser.ClassBodyContext) {
	//visitClassBodyDeclaration (ctx: parser.ClassBodyDeclarationContext) {
	//visitClassMemberDeclaration (ctx: parser.ClassMemberDeclarationContext) {
	//visitFieldDeclaration (ctx: parser.FieldDeclarationContext) {
	//visitFieldModifier (ctx: parser.FieldModifierContext) {
	//visitVariableDeclaratorList (ctx: parser.VariableDeclaratorListContext) {
	//visitVariableDeclarator (ctx: parser.VariableDeclaratorContext) {
	//visitVariableDeclaratorId (ctx: parser.VariableDeclaratorIdContext) {
	//visitVariableInitializer (ctx: parser.VariableInitializerContext) {
	//visitUnannType (ctx: parser.UnannTypeContext) {
	//visitUnannPrimitiveType (ctx: parser.UnannPrimitiveTypeContext) {
	//visitUnannReferenceType (ctx: parser.UnannReferenceTypeContext) {
	//visitUnannClassOrInterfaceType (ctx: parser.UnannClassOrInterfaceTypeContext) {
	//visitUnannClassType (ctx: parser.UnannClassTypeContext) {
	//visitUnannClassType_lf_unannClassOrInterfaceType (ctx: parser.UnannClassType_lf_unannClassOrInterfaceTypeContext) {
	//visitUnannClassType_lfno_unannClassOrInterfaceType (ctx: parser.UnannClassType_lfno_unannClassOrInterfaceTypeContext) {
	//visitUnannInterfaceType (ctx: parser.UnannInterfaceTypeContext) {
	//visitUnannInterfaceType_lf_unannClassOrInterfaceType (ctx: parser.UnannInterfaceType_lf_unannClassOrInterfaceTypeContext) {
	//visitUnannInterfaceType_lfno_unannClassOrInterfaceType (ctx: parser.UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext) {
	//visitUnannTypeVariable (ctx: parser.UnannTypeVariableContext) {
	//visitUnannArrayType (ctx: parser.UnannArrayTypeContext) {
	//visitMethodDeclaration (ctx: parser.MethodDeclarationContext) {
	//visitMethodModifier (ctx: parser.MethodModifierContext) {
	//visitMethodHeader (ctx: parser.MethodHeaderContext) {
	//visitResult (ctx: parser.ResultContext) {
	//visitMethodDeclarator (ctx: parser.MethodDeclaratorContext) {
	//visitFormalParameterList (ctx: parser.FormalParameterListContext) {
	//visitFormalParameters (ctx: parser.FormalParametersContext) {
	//visitFormalParameter (ctx: parser.FormalParameterContext) {
	//visitVariableModifier (ctx: parser.VariableModifierContext) {
	//visitLastFormalParameter (ctx: parser.LastFormalParameterContext) {
	//visitReceiverParameter (ctx: parser.ReceiverParameterContext) {
	//visitThrows_ (ctx: parser.Throws_Context) {
	//visitExceptionTypeList (ctx: parser.ExceptionTypeListContext) {
	//visitExceptionType (ctx: parser.ExceptionTypeContext) {
	//visitMethodBody (ctx: parser.MethodBodyContext) {
	//visitInstanceInitializer (ctx: parser.InstanceInitializerContext) {
	//visitStaticInitializer (ctx: parser.StaticInitializerContext) {
	//visitConstructorDeclaration (ctx: parser.ConstructorDeclarationContext) {
	//visitConstructorModifier (ctx: parser.ConstructorModifierContext) {
	//visitConstructorDeclarator (ctx: parser.ConstructorDeclaratorContext) {
	//visitSimpleTypeName (ctx: parser.SimpleTypeNameContext) {
	//visitConstructorBody (ctx: parser.ConstructorBodyContext) {
	//visitExplicitConstructorInvocation (ctx: parser.ExplicitConstructorInvocationContext) {
	//visitEnumDeclaration (ctx: parser.EnumDeclarationContext) {
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
	//visitBlock (ctx: parser.BlockContext) {
	//visitBlockStatements (ctx: parser.BlockStatementsContext) {
	//visitBlockStatement (ctx: parser.BlockStatementContext) {
	//visitLocalVariableDeclarationStatement (ctx: parser.LocalVariableDeclarationStatementContext) {
	//visitLocalVariableDeclaration (ctx: parser.LocalVariableDeclarationContext) {
	//visitStatement (ctx: parser.StatementContext) {
	//visitStatementNoShortIf (ctx: parser.StatementNoShortIfContext) {
	//visitStatementWithoutTrailingSubstatement (ctx: parser.StatementWithoutTrailingSubstatementContext) {
	//visitEmptyStatement_ (ctx: parser.EmptyStatement_Context) {
	//visitLabeledStatement (ctx: parser.LabeledStatementContext) {
	//visitLabeledStatementNoShortIf (ctx: parser.LabeledStatementNoShortIfContext) {
	//visitExpressionStatement (ctx: parser.ExpressionStatementContext) {
	//visitStatementExpression (ctx: parser.StatementExpressionContext) {
	//visitIfThenStatement (ctx: parser.IfThenStatementContext) {
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
	//visitReturnStatement (ctx: parser.ReturnStatementContext) {
	//visitThrowStatement (ctx: parser.ThrowStatementContext) {
	//visitSynchronizedStatement (ctx: parser.SynchronizedStatementContext) {
	//visitTryStatement (ctx: parser.TryStatementContext) {
	//visitCatches (ctx: parser.CatchesContext) {
	//visitCatchClause (ctx: parser.CatchClauseContext) {
	//visitCatchFormalParameter (ctx: parser.CatchFormalParameterContext) {
	//visitCatchType (ctx: parser.CatchTypeContext) {
	//visitFinally_ (ctx: parser.Finally_Context) {
	//visitTryWithResourcesStatement (ctx: parser.TryWithResourcesStatementContext) {
	//visitResourceSpecification (ctx: parser.ResourceSpecificationContext) {
	//visitResourceList (ctx: parser.ResourceListContext) {
	//visitResource (ctx: parser.ResourceContext) {
	//visitPrimary (ctx: parser.PrimaryContext) {
	//visitPrimaryNoNewArray (ctx: parser.PrimaryNoNewArrayContext) {
	//visitPrimaryNoNewArray_lf_arrayAccess (ctx: parser.PrimaryNoNewArray_lf_arrayAccessContext) {
	//visitPrimaryNoNewArray_lfno_arrayAccess (ctx: parser.PrimaryNoNewArray_lfno_arrayAccessContext) {
	//visitPrimaryNoNewArray_lf_primary (ctx: parser.PrimaryNoNewArray_lf_primaryContext) {
	//visitPrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary (ctx: parser.PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext) {
	//visitPrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary (ctx: parser.PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext) {
	//visitPrimaryNoNewArray_lfno_primary (ctx: parser.PrimaryNoNewArray_lfno_primaryContext) {
	//visitPrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary (ctx: parser.PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext) {
	//visitPrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary (ctx: parser.PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext) {
	//visitClassInstanceCreationExpression (ctx: parser.ClassInstanceCreationExpressionContext) {
	//visitClassInstanceCreationExpression_lf_primary (ctx: parser.ClassInstanceCreationExpression_lf_primaryContext) {
	//visitClassInstanceCreationExpression_lfno_primary (ctx: parser.ClassInstanceCreationExpression_lfno_primaryContext) {
	//visitTypeArgumentsOrDiamond (ctx: parser.TypeArgumentsOrDiamondContext) {
	//visitFieldAccess (ctx: parser.FieldAccessContext) {
	//visitFieldAccess_lf_primary (ctx: parser.FieldAccess_lf_primaryContext) {
	//visitFieldAccess_lfno_primary (ctx: parser.FieldAccess_lfno_primaryContext) {
	//visitArrayAccess (ctx: parser.ArrayAccessContext) {
	//visitArrayAccess_lf_primary (ctx: parser.ArrayAccess_lf_primaryContext) {
	//visitArrayAccess_lfno_primary (ctx: parser.ArrayAccess_lfno_primaryContext) {
	//visitMethodInvocation (ctx: parser.MethodInvocationContext) {
	//visitMethodInvocation_lf_primary (ctx: parser.MethodInvocation_lf_primaryContext) {
	//visitMethodInvocation_lfno_primary (ctx: parser.MethodInvocation_lfno_primaryContext) {
	//visitArgumentList (ctx: parser.ArgumentListContext) {
	//visitMethodReference (ctx: parser.MethodReferenceContext) {
	//visitMethodReference_lf_primary (ctx: parser.MethodReference_lf_primaryContext) {
	//visitMethodReference_lfno_primary (ctx: parser.MethodReference_lfno_primaryContext) {
	//visitArrayCreationExpression (ctx: parser.ArrayCreationExpressionContext) {
	//visitDimExprs (ctx: parser.DimExprsContext) {
	//visitDimExpr (ctx: parser.DimExprContext) {
	//visitConstantExpression (ctx: parser.ConstantExpressionContext) {
	//visitExpression (ctx: parser.ExpressionContext) {
	//visitLambdaExpression (ctx: parser.LambdaExpressionContext) {
	//visitLambdaParameters (ctx: parser.LambdaParametersContext) {
	//visitInferredFormalParameterList (ctx: parser.InferredFormalParameterListContext) {
	//visitLambdaBody (ctx: parser.LambdaBodyContext) {
	//visitAssignmentExpression (ctx: parser.AssignmentExpressionContext) {
	//visitAssignment (ctx: parser.AssignmentContext) {
	//visitLeftHandSide (ctx: parser.LeftHandSideContext) {
	//visitAssignmentOperator (ctx: parser.AssignmentOperatorContext) {
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
}
