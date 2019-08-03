// Generated from D:/GitHub/X-16/compiler\Light.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by LightParser.
function LightListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

LightListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
LightListener.prototype.constructor = LightListener;

// Enter a parse tree produced by LightParser#source.
LightListener.prototype.enterSource = function(ctx) {
};

// Exit a parse tree produced by LightParser#source.
LightListener.prototype.exitSource = function(ctx) {
};


// Enter a parse tree produced by LightParser#statement.
LightListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by LightParser#statement.
LightListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by LightParser#block.
LightListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by LightParser#block.
LightListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by LightParser#statements.
LightListener.prototype.enterStatements = function(ctx) {
};

// Exit a parse tree produced by LightParser#statements.
LightListener.prototype.exitStatements = function(ctx) {
};


// Enter a parse tree produced by LightParser#expressionStatement.
LightListener.prototype.enterExpressionStatement = function(ctx) {
};

// Exit a parse tree produced by LightParser#expressionStatement.
LightListener.prototype.exitExpressionStatement = function(ctx) {
};


// Enter a parse tree produced by LightParser#returnStatement.
LightListener.prototype.enterReturnStatement = function(ctx) {
};

// Exit a parse tree produced by LightParser#returnStatement.
LightListener.prototype.exitReturnStatement = function(ctx) {
};


// Enter a parse tree produced by LightParser#variableStatement.
LightListener.prototype.enterVariableStatement = function(ctx) {
};

// Exit a parse tree produced by LightParser#variableStatement.
LightListener.prototype.exitVariableStatement = function(ctx) {
};


// Enter a parse tree produced by LightParser#variableDeclaration.
LightListener.prototype.enterVariableDeclaration = function(ctx) {
};

// Exit a parse tree produced by LightParser#variableDeclaration.
LightListener.prototype.exitVariableDeclaration = function(ctx) {
};


// Enter a parse tree produced by LightParser#varModifier.
LightListener.prototype.enterVarModifier = function(ctx) {
};

// Exit a parse tree produced by LightParser#varModifier.
LightListener.prototype.exitVarModifier = function(ctx) {
};


// Enter a parse tree produced by LightParser#ifStatement.
LightListener.prototype.enterIfStatement = function(ctx) {
};

// Exit a parse tree produced by LightParser#ifStatement.
LightListener.prototype.exitIfStatement = function(ctx) {
};


// Enter a parse tree produced by LightParser#ifConditionList.
LightListener.prototype.enterIfConditionList = function(ctx) {
};

// Exit a parse tree produced by LightParser#ifConditionList.
LightListener.prototype.exitIfConditionList = function(ctx) {
};


// Enter a parse tree produced by LightParser#elseStatement.
LightListener.prototype.enterElseStatement = function(ctx) {
};

// Exit a parse tree produced by LightParser#elseStatement.
LightListener.prototype.exitElseStatement = function(ctx) {
};


// Enter a parse tree produced by LightParser#functionDeclaration.
LightListener.prototype.enterFunctionDeclaration = function(ctx) {
};

// Exit a parse tree produced by LightParser#functionDeclaration.
LightListener.prototype.exitFunctionDeclaration = function(ctx) {
};


// Enter a parse tree produced by LightParser#AdditiveExpression.
LightListener.prototype.enterAdditiveExpression = function(ctx) {
};

// Exit a parse tree produced by LightParser#AdditiveExpression.
LightListener.prototype.exitAdditiveExpression = function(ctx) {
};


// Enter a parse tree produced by LightParser#RelationalExpression.
LightListener.prototype.enterRelationalExpression = function(ctx) {
};

// Exit a parse tree produced by LightParser#RelationalExpression.
LightListener.prototype.exitRelationalExpression = function(ctx) {
};


// Enter a parse tree produced by LightParser#LogicalAndExpression.
LightListener.prototype.enterLogicalAndExpression = function(ctx) {
};

// Exit a parse tree produced by LightParser#LogicalAndExpression.
LightListener.prototype.exitLogicalAndExpression = function(ctx) {
};


// Enter a parse tree produced by LightParser#ObjectLiteralExpression.
LightListener.prototype.enterObjectLiteralExpression = function(ctx) {
};

// Exit a parse tree produced by LightParser#ObjectLiteralExpression.
LightListener.prototype.exitObjectLiteralExpression = function(ctx) {
};


// Enter a parse tree produced by LightParser#NewExpression.
LightListener.prototype.enterNewExpression = function(ctx) {
};

// Exit a parse tree produced by LightParser#NewExpression.
LightListener.prototype.exitNewExpression = function(ctx) {
};


// Enter a parse tree produced by LightParser#LiteralExpression.
LightListener.prototype.enterLiteralExpression = function(ctx) {
};

// Exit a parse tree produced by LightParser#LiteralExpression.
LightListener.prototype.exitLiteralExpression = function(ctx) {
};


// Enter a parse tree produced by LightParser#LogicalOrExpression.
LightListener.prototype.enterLogicalOrExpression = function(ctx) {
};

// Exit a parse tree produced by LightParser#LogicalOrExpression.
LightListener.prototype.exitLogicalOrExpression = function(ctx) {
};


// Enter a parse tree produced by LightParser#ArrayLiteralExpression.
LightListener.prototype.enterArrayLiteralExpression = function(ctx) {
};

// Exit a parse tree produced by LightParser#ArrayLiteralExpression.
LightListener.prototype.exitArrayLiteralExpression = function(ctx) {
};


// Enter a parse tree produced by LightParser#MemberDotExpression.
LightListener.prototype.enterMemberDotExpression = function(ctx) {
};

// Exit a parse tree produced by LightParser#MemberDotExpression.
LightListener.prototype.exitMemberDotExpression = function(ctx) {
};


// Enter a parse tree produced by LightParser#MemberIndexExpression.
LightListener.prototype.enterMemberIndexExpression = function(ctx) {
};

// Exit a parse tree produced by LightParser#MemberIndexExpression.
LightListener.prototype.exitMemberIndexExpression = function(ctx) {
};


// Enter a parse tree produced by LightParser#ArrayInitializerExpression.
LightListener.prototype.enterArrayInitializerExpression = function(ctx) {
};

// Exit a parse tree produced by LightParser#ArrayInitializerExpression.
LightListener.prototype.exitArrayInitializerExpression = function(ctx) {
};


// Enter a parse tree produced by LightParser#IdentifierExpression.
LightListener.prototype.enterIdentifierExpression = function(ctx) {
};

// Exit a parse tree produced by LightParser#IdentifierExpression.
LightListener.prototype.exitIdentifierExpression = function(ctx) {
};


// Enter a parse tree produced by LightParser#ArgumentsExpression.
LightListener.prototype.enterArgumentsExpression = function(ctx) {
};

// Exit a parse tree produced by LightParser#ArgumentsExpression.
LightListener.prototype.exitArgumentsExpression = function(ctx) {
};


// Enter a parse tree produced by LightParser#FunctionExpression.
LightListener.prototype.enterFunctionExpression = function(ctx) {
};

// Exit a parse tree produced by LightParser#FunctionExpression.
LightListener.prototype.exitFunctionExpression = function(ctx) {
};


// Enter a parse tree produced by LightParser#AssignmentExpression.
LightListener.prototype.enterAssignmentExpression = function(ctx) {
};

// Exit a parse tree produced by LightParser#AssignmentExpression.
LightListener.prototype.exitAssignmentExpression = function(ctx) {
};


// Enter a parse tree produced by LightParser#AssignmentOperatorExpression.
LightListener.prototype.enterAssignmentOperatorExpression = function(ctx) {
};

// Exit a parse tree produced by LightParser#AssignmentOperatorExpression.
LightListener.prototype.exitAssignmentOperatorExpression = function(ctx) {
};


// Enter a parse tree produced by LightParser#ArrowFunctionExpression.
LightListener.prototype.enterArrowFunctionExpression = function(ctx) {
};

// Exit a parse tree produced by LightParser#ArrowFunctionExpression.
LightListener.prototype.exitArrowFunctionExpression = function(ctx) {
};


// Enter a parse tree produced by LightParser#EqualityExpression.
LightListener.prototype.enterEqualityExpression = function(ctx) {
};

// Exit a parse tree produced by LightParser#EqualityExpression.
LightListener.prototype.exitEqualityExpression = function(ctx) {
};


// Enter a parse tree produced by LightParser#MultiplicativeExpression.
LightListener.prototype.enterMultiplicativeExpression = function(ctx) {
};

// Exit a parse tree produced by LightParser#MultiplicativeExpression.
LightListener.prototype.exitMultiplicativeExpression = function(ctx) {
};


// Enter a parse tree produced by LightParser#arrayInitializer.
LightListener.prototype.enterArrayInitializer = function(ctx) {
};

// Exit a parse tree produced by LightParser#arrayInitializer.
LightListener.prototype.exitArrayInitializer = function(ctx) {
};


// Enter a parse tree produced by LightParser#defaultArrayInitValue.
LightListener.prototype.enterDefaultArrayInitValue = function(ctx) {
};

// Exit a parse tree produced by LightParser#defaultArrayInitValue.
LightListener.prototype.exitDefaultArrayInitValue = function(ctx) {
};


// Enter a parse tree produced by LightParser#arrayInitializerArg.
LightListener.prototype.enterArrayInitializerArg = function(ctx) {
};

// Exit a parse tree produced by LightParser#arrayInitializerArg.
LightListener.prototype.exitArrayInitializerArg = function(ctx) {
};


// Enter a parse tree produced by LightParser#arrowFunctionArrow.
LightListener.prototype.enterArrowFunctionArrow = function(ctx) {
};

// Exit a parse tree produced by LightParser#arrowFunctionArrow.
LightListener.prototype.exitArrowFunctionArrow = function(ctx) {
};


// Enter a parse tree produced by LightParser#arrowFunctionParameters.
LightListener.prototype.enterArrowFunctionParameters = function(ctx) {
};

// Exit a parse tree produced by LightParser#arrowFunctionParameters.
LightListener.prototype.exitArrowFunctionParameters = function(ctx) {
};


// Enter a parse tree produced by LightParser#parameterListOpen.
LightListener.prototype.enterParameterListOpen = function(ctx) {
};

// Exit a parse tree produced by LightParser#parameterListOpen.
LightListener.prototype.exitParameterListOpen = function(ctx) {
};


// Enter a parse tree produced by LightParser#parameterListClose.
LightListener.prototype.enterParameterListClose = function(ctx) {
};

// Exit a parse tree produced by LightParser#parameterListClose.
LightListener.prototype.exitParameterListClose = function(ctx) {
};


// Enter a parse tree produced by LightParser#arrowFunctionBody.
LightListener.prototype.enterArrowFunctionBody = function(ctx) {
};

// Exit a parse tree produced by LightParser#arrowFunctionBody.
LightListener.prototype.exitArrowFunctionBody = function(ctx) {
};


// Enter a parse tree produced by LightParser#openBlock.
LightListener.prototype.enterOpenBlock = function(ctx) {
};

// Exit a parse tree produced by LightParser#openBlock.
LightListener.prototype.exitOpenBlock = function(ctx) {
};


// Enter a parse tree produced by LightParser#closeBlock.
LightListener.prototype.enterCloseBlock = function(ctx) {
};

// Exit a parse tree produced by LightParser#closeBlock.
LightListener.prototype.exitCloseBlock = function(ctx) {
};


// Enter a parse tree produced by LightParser#aiParameterSeparator.
LightListener.prototype.enterAiParameterSeparator = function(ctx) {
};

// Exit a parse tree produced by LightParser#aiParameterSeparator.
LightListener.prototype.exitAiParameterSeparator = function(ctx) {
};


// Enter a parse tree produced by LightParser#expressionSequence.
LightListener.prototype.enterExpressionSequence = function(ctx) {
};

// Exit a parse tree produced by LightParser#expressionSequence.
LightListener.prototype.exitExpressionSequence = function(ctx) {
};


// Enter a parse tree produced by LightParser#arrayLiteral.
LightListener.prototype.enterArrayLiteral = function(ctx) {
};

// Exit a parse tree produced by LightParser#arrayLiteral.
LightListener.prototype.exitArrayLiteral = function(ctx) {
};


// Enter a parse tree produced by LightParser#arrayLiteralOpen.
LightListener.prototype.enterArrayLiteralOpen = function(ctx) {
};

// Exit a parse tree produced by LightParser#arrayLiteralOpen.
LightListener.prototype.exitArrayLiteralOpen = function(ctx) {
};


// Enter a parse tree produced by LightParser#arrayLiteralClose.
LightListener.prototype.enterArrayLiteralClose = function(ctx) {
};

// Exit a parse tree produced by LightParser#arrayLiteralClose.
LightListener.prototype.exitArrayLiteralClose = function(ctx) {
};


// Enter a parse tree produced by LightParser#elementList.
LightListener.prototype.enterElementList = function(ctx) {
};

// Exit a parse tree produced by LightParser#elementList.
LightListener.prototype.exitElementList = function(ctx) {
};


// Enter a parse tree produced by LightParser#elementListSeparator.
LightListener.prototype.enterElementListSeparator = function(ctx) {
};

// Exit a parse tree produced by LightParser#elementListSeparator.
LightListener.prototype.exitElementListSeparator = function(ctx) {
};


// Enter a parse tree produced by LightParser#multiply.
LightListener.prototype.enterMultiply = function(ctx) {
};

// Exit a parse tree produced by LightParser#multiply.
LightListener.prototype.exitMultiply = function(ctx) {
};


// Enter a parse tree produced by LightParser#divide.
LightListener.prototype.enterDivide = function(ctx) {
};

// Exit a parse tree produced by LightParser#divide.
LightListener.prototype.exitDivide = function(ctx) {
};


// Enter a parse tree produced by LightParser#modulo.
LightListener.prototype.enterModulo = function(ctx) {
};

// Exit a parse tree produced by LightParser#modulo.
LightListener.prototype.exitModulo = function(ctx) {
};


// Enter a parse tree produced by LightParser#logicalAnd.
LightListener.prototype.enterLogicalAnd = function(ctx) {
};

// Exit a parse tree produced by LightParser#logicalAnd.
LightListener.prototype.exitLogicalAnd = function(ctx) {
};


// Enter a parse tree produced by LightParser#logicalOr.
LightListener.prototype.enterLogicalOr = function(ctx) {
};

// Exit a parse tree produced by LightParser#logicalOr.
LightListener.prototype.exitLogicalOr = function(ctx) {
};


// Enter a parse tree produced by LightParser#notEqual.
LightListener.prototype.enterNotEqual = function(ctx) {
};

// Exit a parse tree produced by LightParser#notEqual.
LightListener.prototype.exitNotEqual = function(ctx) {
};


// Enter a parse tree produced by LightParser#equalStrict.
LightListener.prototype.enterEqualStrict = function(ctx) {
};

// Exit a parse tree produced by LightParser#equalStrict.
LightListener.prototype.exitEqualStrict = function(ctx) {
};


// Enter a parse tree produced by LightParser#notEqualStrict.
LightListener.prototype.enterNotEqualStrict = function(ctx) {
};

// Exit a parse tree produced by LightParser#notEqualStrict.
LightListener.prototype.exitNotEqualStrict = function(ctx) {
};


// Enter a parse tree produced by LightParser#assign.
LightListener.prototype.enterAssign = function(ctx) {
};

// Exit a parse tree produced by LightParser#assign.
LightListener.prototype.exitAssign = function(ctx) {
};


// Enter a parse tree produced by LightParser#memberDot.
LightListener.prototype.enterMemberDot = function(ctx) {
};

// Exit a parse tree produced by LightParser#memberDot.
LightListener.prototype.exitMemberDot = function(ctx) {
};


// Enter a parse tree produced by LightParser#identifierName.
LightListener.prototype.enterIdentifierName = function(ctx) {
};

// Exit a parse tree produced by LightParser#identifierName.
LightListener.prototype.exitIdentifierName = function(ctx) {
};


// Enter a parse tree produced by LightParser#assignmentOperator.
LightListener.prototype.enterAssignmentOperator = function(ctx) {
};

// Exit a parse tree produced by LightParser#assignmentOperator.
LightListener.prototype.exitAssignmentOperator = function(ctx) {
};


// Enter a parse tree produced by LightParser#multiplyAssign.
LightListener.prototype.enterMultiplyAssign = function(ctx) {
};

// Exit a parse tree produced by LightParser#multiplyAssign.
LightListener.prototype.exitMultiplyAssign = function(ctx) {
};


// Enter a parse tree produced by LightParser#divideAssign.
LightListener.prototype.enterDivideAssign = function(ctx) {
};

// Exit a parse tree produced by LightParser#divideAssign.
LightListener.prototype.exitDivideAssign = function(ctx) {
};


// Enter a parse tree produced by LightParser#moduloAssign.
LightListener.prototype.enterModuloAssign = function(ctx) {
};

// Exit a parse tree produced by LightParser#moduloAssign.
LightListener.prototype.exitModuloAssign = function(ctx) {
};


// Enter a parse tree produced by LightParser#addAssign.
LightListener.prototype.enterAddAssign = function(ctx) {
};

// Exit a parse tree produced by LightParser#addAssign.
LightListener.prototype.exitAddAssign = function(ctx) {
};


// Enter a parse tree produced by LightParser#subAssign.
LightListener.prototype.enterSubAssign = function(ctx) {
};

// Exit a parse tree produced by LightParser#subAssign.
LightListener.prototype.exitSubAssign = function(ctx) {
};


// Enter a parse tree produced by LightParser#objectLiteral.
LightListener.prototype.enterObjectLiteral = function(ctx) {
};

// Exit a parse tree produced by LightParser#objectLiteral.
LightListener.prototype.exitObjectLiteral = function(ctx) {
};


// Enter a parse tree produced by LightParser#propertySeparator.
LightListener.prototype.enterPropertySeparator = function(ctx) {
};

// Exit a parse tree produced by LightParser#propertySeparator.
LightListener.prototype.exitPropertySeparator = function(ctx) {
};


// Enter a parse tree produced by LightParser#PropertyExpressionAssignment.
LightListener.prototype.enterPropertyExpressionAssignment = function(ctx) {
};

// Exit a parse tree produced by LightParser#PropertyExpressionAssignment.
LightListener.prototype.exitPropertyExpressionAssignment = function(ctx) {
};


// Enter a parse tree produced by LightParser#freezeMarker.
LightListener.prototype.enterFreezeMarker = function(ctx) {
};

// Exit a parse tree produced by LightParser#freezeMarker.
LightListener.prototype.exitFreezeMarker = function(ctx) {
};


// Enter a parse tree produced by LightParser#propertyAssignSymbol.
LightListener.prototype.enterPropertyAssignSymbol = function(ctx) {
};

// Exit a parse tree produced by LightParser#propertyAssignSymbol.
LightListener.prototype.exitPropertyAssignSymbol = function(ctx) {
};


// Enter a parse tree produced by LightParser#propertyName.
LightListener.prototype.enterPropertyName = function(ctx) {
};

// Exit a parse tree produced by LightParser#propertyName.
LightListener.prototype.exitPropertyName = function(ctx) {
};


// Enter a parse tree produced by LightParser#equal.
LightListener.prototype.enterEqual = function(ctx) {
};

// Exit a parse tree produced by LightParser#equal.
LightListener.prototype.exitEqual = function(ctx) {
};


// Enter a parse tree produced by LightParser#less.
LightListener.prototype.enterLess = function(ctx) {
};

// Exit a parse tree produced by LightParser#less.
LightListener.prototype.exitLess = function(ctx) {
};


// Enter a parse tree produced by LightParser#greater.
LightListener.prototype.enterGreater = function(ctx) {
};

// Exit a parse tree produced by LightParser#greater.
LightListener.prototype.exitGreater = function(ctx) {
};


// Enter a parse tree produced by LightParser#lessOrEql.
LightListener.prototype.enterLessOrEql = function(ctx) {
};

// Exit a parse tree produced by LightParser#lessOrEql.
LightListener.prototype.exitLessOrEql = function(ctx) {
};


// Enter a parse tree produced by LightParser#greaterOrEql.
LightListener.prototype.enterGreaterOrEql = function(ctx) {
};

// Exit a parse tree produced by LightParser#greaterOrEql.
LightListener.prototype.exitGreaterOrEql = function(ctx) {
};


// Enter a parse tree produced by LightParser#arguments.
LightListener.prototype.enterArguments = function(ctx) {
};

// Exit a parse tree produced by LightParser#arguments.
LightListener.prototype.exitArguments = function(ctx) {
};


// Enter a parse tree produced by LightParser#parameterSeparator.
LightListener.prototype.enterParameterSeparator = function(ctx) {
};

// Exit a parse tree produced by LightParser#parameterSeparator.
LightListener.prototype.exitParameterSeparator = function(ctx) {
};


// Enter a parse tree produced by LightParser#formalParameterList.
LightListener.prototype.enterFormalParameterList = function(ctx) {
};

// Exit a parse tree produced by LightParser#formalParameterList.
LightListener.prototype.exitFormalParameterList = function(ctx) {
};


// Enter a parse tree produced by LightParser#formalParameterArg.
LightListener.prototype.enterFormalParameterArg = function(ctx) {
};

// Exit a parse tree produced by LightParser#formalParameterArg.
LightListener.prototype.exitFormalParameterArg = function(ctx) {
};


// Enter a parse tree produced by LightParser#functionBody.
LightListener.prototype.enterFunctionBody = function(ctx) {
};

// Exit a parse tree produced by LightParser#functionBody.
LightListener.prototype.exitFunctionBody = function(ctx) {
};


// Enter a parse tree produced by LightParser#literal.
LightListener.prototype.enterLiteral = function(ctx) {
};

// Exit a parse tree produced by LightParser#literal.
LightListener.prototype.exitLiteral = function(ctx) {
};


// Enter a parse tree produced by LightParser#add.
LightListener.prototype.enterAdd = function(ctx) {
};

// Exit a parse tree produced by LightParser#add.
LightListener.prototype.exitAdd = function(ctx) {
};


// Enter a parse tree produced by LightParser#sub.
LightListener.prototype.enterSub = function(ctx) {
};

// Exit a parse tree produced by LightParser#sub.
LightListener.prototype.exitSub = function(ctx) {
};



exports.LightListener = LightListener;