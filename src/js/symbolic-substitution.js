import * as escodegen from 'escodegen';

let globals=new Map();
let inputArgs = new Array();
let line=0;
let green = new Array();
let red = new Array();


function functionDeclaration(parsedCode,args){
    reset();
    getArgs(args);
    let code = parsedCode.body;
    let i = 0;
    code.forEach(function(element) {
        line++;
        if(element.type =='VariableDeclaration')
            globalsDeclarationHandler(element);
        else
            parsedCode.body[i.toString()]= functionRunner(element, new Map());
        i++;
    });
    return escodegen.generate(parsedCode);
}

function reset(){
    globals=new Map();
    inputArgs = new Array();
    line=0;
    green = new Array();
    red = new Array();
}

function getArgs(args){
    let tmp = args.split(',');
    let arrInput = new Array();
    for(let i=0; i<tmp.length;i++) {
        if(tmp[i].startsWith('[')){
            arrInput = new Array();
            arrInput.push(tmp[i].substring(1));
            i++;
            while(tmp[i].endsWith(']')===false){
                arrInput.push(tmp[i]);
                i++;
            }
            arrInput.push(tmp[i].substring(0,tmp[i].length-1));
            inputArgs.push(arrInput);
        }
        else inputArgs.push(tmp[i]);
    }
}

var typeToHandlerMapping = {
    'FunctionDeclaration': functionDeclarationHandler,
    'VariableDeclaration': variableDeclarationHandler,
    'ExpressionStatement': expressionStatementHandler,
    'WhileStatement': whileStatementHandler,
    'IfStatement': ifStatementHandler,
    'ReturnStatement': returnStatementHandler,
    'BlockStatement': blockStatementHandler
};

function globalsDeclarationHandler(declaration) {
    declaration.declarations.forEach(function(element) {
        globalsDeclarator(element);
    });
}

function globalsDeclarator(element){
    if(element.init==null)
        globals.set(element.id.name, '\'\'');
    else setGlobal(element);
}

function setGlobal(element){
    let value = expressionDeclaration(element.init, new Map());
    globals.set(element.id.name, escodegen.generate(value));
}

function functionRunner(program,locals) {
    let name= program.type;
    let func = typeToHandlerMapping[name];
    return func ? func.call(undefined, program,locals) : null;
}

function functionDeclarationHandler(declaration, locals) {
    params(declaration.params);
    declaration.body = functionRunner(declaration.body,locals);
    return declaration;
}

function params(params) {
    let i=0;
    params.forEach(function(element) {
        globals.set(element.name, inputArgs[i]);
        i++;
    });
}

function isGlobal(element){
    if(element.expression.type=='UpdateExpression')
        return inGlobals(element.expression.argument.name);
    else if(element.expression.left.type=='MemberExpression')
        return inGlobals(element.expression.left.object.name);
    else return inGlobals(element.expression.left.name);
}

function inGlobals(key){
    return globals.has(key)===true? true : false;
}

function blockStatementHandler(block,locals) {
    let result= [];
    let localsPerScope=new Map(locals);
    block.body.forEach(function(element) {
        result,localsPerScope = blockFirst(element,localsPerScope,result);
    });
    block.body.forEach(function(element) {
        if(element.type=='IfStatement' || element.type=='WhileStatement' || element.type=='ReturnStatement') {
            line++;
            result.push(functionRunner(element, localsPerScope));
        }
    });

    block.body = result;
    return block;
}

function blockFirst(element,localsPerScope, result){
    if(element.type==='VariableDeclaration') {
        functionRunner(element,localsPerScope);
    }
    else if(element.type==='ExpressionStatement'){
        if(isGlobal(element)){
            line++;
            result.push(functionRunner(element, localsPerScope));
        }
        else
            functionRunner(element,localsPerScope);
    }
    return result,localsPerScope;
}

function checkLocals(param,locals){
    if (locals.size>0)
        return locals.has(param.name) ? locals.get(param.name) : param;
    else return param;
}

function variableDeclarationHandler(declaration,locals) {
    declaration.declarations.forEach(function(element) {
        variableDeclarator(element,locals);
    });
}

function expressionStatementHandler(declaration,locals) {
    if(declaration.expression.type=='SequenceExpression'){
        let result = [];
        declaration.expression.expressions.forEach(function(element) {
            result.push(checkExpression(element,locals));
        });
        declaration.expression.expressions=result;
    }
    else
        declaration.expression = checkExpression(declaration.expression,locals);
    return declaration;
}

function whileStatementHandler(declaration,locals) {
    declaration.test= expressionDeclaration(declaration.test,locals);
    declaration.body = functionRunner(declaration.body,locals);
    return declaration;
}

function ifStatementHandler(declaration,locals) {
    return ifStatement(declaration,locals);
}

function returnStatementHandler(declaration,locals) {
    declaration.argument = expressionDeclaration(declaration.argument,locals);
    return declaration;
}

function variableDeclarator(element,locals){
    if(element.init==null)
        locals.set(element.id.name, '\'\'');
    else
        locals.set(element.id.name, expressionDeclaration(element.init, locals));
    return locals;
}

function checkExpression(expression,locals){
    if(expression.type=='AssignmentExpression')
        return assignmentDeclaration(expression,locals);
    else //if(expression.type=='UpdateExpression')
        return updateDeclaration(expression,locals);
}

function updateDeclaration(expression,locals){
    //let val = expressionDeclaration(expression.argument,locals);
    if(globals.has(expression.argument.name)===true){
        //expression.argument = expressionDeclaration(expression.argument,locals);
        if(expression.operator=='++')
            globals.set(expression.argument.name,calculate(globals.get(expression.argument.name)+ '+1'));
        else
            globals.set(expression.argument.name,calculate(globals.get(expression.argument.name)+ '-1'));
    }
    else {
        locals.set(expression.argument.name,expressionDeclaration(expression,locals));
    }
    return expression;
}

function assignmentDeclaration(expression,locals){

    if(expression.left.type==='MemberExpression' && expression.left.computed===true){
        setArray(expression,locals);
    }
    else {
        expression.right = expressionDeclaration(expression.right, locals);

        if (locals.has(expression.left.name))
            locals.set(expression.left.name, expression.right);
        /*else */if (globals.has(expression.left.name))
            globals.set(expression.left.name, calculate(escodegen.generate(expression.right)));
    }
    return expression;
}

function setArray(expression,locals){
    let arr = expression.left.object.name;
    let index = escodegen.generate(expressionDeclaration(expression.left.property,locals));
    if(locals.has(arr))
        locals.get(arr)[index]=escodegen.generate(expressionDeclaration(expression.right,locals));
    else if(globals.has(arr))
        globals.get(arr)[index]=calculate(escodegen.generate(expressionDeclaration(expression.right,locals)));
    else return expression;

}

function expressionDeclaration(expression,locals){
    if (expression.type=='Identifier'){
        expression = checkLocals(expression,locals);
        return expression;
    }
    else if(expression.type=='Literal')
        return expression;
    else
        return singleCharExpression(expression,locals);
}

function singleCharExpression(expression,locals){
    if(expression.type=='UpdateExpression' || expression.type=='UnaryExpression'){
        expression.argument= expressionDeclaration(expression.argument,locals);
        return expression;
    }
    else if(expression.type=='MemberExpression')
        return memberExpression(expression,locals);
    else
        return ComplexExpression(expression,locals);
}

function ComplexExpression(expression,locals){
    /*if(expression.type=='SequenceExpression'){ //TO-DO
        let res=[];
        expression.expressions.forEach(function(element) {
            res.push(expressionDeclaration(element,locals));
        });
        expression.expressions=res;
        return expression;
    }
    else*/ if(expression.type=='ArrayExpression')
        return arrayExpression(expression.elements,locals);
    else { /*(expression.type=='LogicalExpression' || expression.type=='BinaryExpression' || expression.type=='AssignmentExpression')*/
        expression.left=expressionDeclaration(expression.left,locals);
        expression.right=expressionDeclaration(expression.right,locals);
        return expression;
    }
}

function arrayExpression(expression,locals){
    let answer = [];
    expression.forEach(function(element) {
        answer.push(expressionDeclaration(element,locals));
    });
    return answer;
}

function memberExpression(expression,locals) {
    if(expression.property.type == 'MemberExpression'){
        expression.property = memberExpression(expression.property,locals);
    }
    else{
        expression.property= expressionDeclaration(expression.property,locals);
    }

    return getValue(expression,locals);
}

function getValue(expression,locals){
    let arr = expression.object.name;
    let index = escodegen.generate(expressionDeclaration(expression.property));
    if(locals.has(arr))
        return locals.get(arr)[index];
    else return expression;

}

function ifStatement(declaration,locals){
    declaration.test = expressionDeclaration(declaration.test,locals);
    checkCondition(declaration.test);
    if(declaration.consequent.type!='BlockStatement')
        line++;
    declaration.consequent= functionRunner(declaration.consequent,locals);

    if (declaration.alternate!= null)
        declaration.alternate = alternate(declaration.alternate,locals);
    return declaration;
}

function alternate(alternate,locals){
    if(alternate.type=='IfStatement'){
        line++;
        return ifStatement(alternate,locals);
    }
    else
        return functionRunner(alternate,locals);

}

function checkCondition(condition){
    let code = '(function test('+ Array.from(globals.keys()).join() + ') { return '+ escodegen.generate(condition) + '; })(' + Array.from(globals.values()).join() + ')';
    eval(code)===true ? green.push(line) : red.push(line);
}

function calculate(calculation){
    let code = '(function test('+ Array.from(globals.keys()).join() + ') { return '+ calculation + '; })(' + Array.from(globals.values()).join() + ')';
    return eval(code).toString();
}

export {functionDeclaration,green,red,reset,globals,calculate,functionRunner};