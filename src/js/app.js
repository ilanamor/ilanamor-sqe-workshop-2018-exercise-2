import $ from 'jquery';
import {parseCode} from './code-analyzer';
import {functionDeclaration,green,red} from './symbolic-substitution';

$(document).ready(function () {
    $('#codeSubmissionButton').click(() => {
        let codeToParse = $('#codePlaceholder').val();
        let args = $('#argsPlaceholder').val();
        let parsedCode = parseCode(codeToParse);
        let subs = functionDeclaration(parsedCode,args);
        //$('#parsedCode').val(subs);
        clearTable();
        color(subs);
    });
});

function clearTable() {
    $('#substitution').empty();

}

function color(subs){
    let txt = subs.split('\n');
    for (let i = 0; i < txt.length; i++) {
        if (green.includes(i+1)) {
            $('#substitution').append('<div style="background-color: mediumseagreen; white-space: pre; display: table; ">'+txt[i]+'</div>');
        }
        else if (red.includes(i+1)) {
            $('#substitution').append('<div style="background-color: indianred; white-space: pre; display: table;">'+txt[i]+'</div>');
        }
        else{
            $('#substitution').append('<div style="white-space: pre; display: table;">'+txt[i]+'</div>');
        }
    }
}