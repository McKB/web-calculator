
// function doMath() takes two values from input fields, stores them
// in variables. Then them together and store this value in another variable. 
// The result is displyed on the screen, and the inputs are cleared.
function doMath(){
    var num1 = Number(document.getElementById('input1').value);
    var num2 = Number(document.getElementById('input2').value);
    var operator = document.getElementById('operation').value;
    var result = document.getElementById('results');
    var answer;
    if (operator === '+') {
        answer = num1 + num2;
        clearAll();
        result.innerHTML = (num1 + " + " + num2 + " = " + answer);
    } else if (operator === '-') {
        answer = num1 - num2;
        clearAll();
        result.innerHTML = (num1 + " - " + num2 + " = " + answer);
    } else if (operator === "x") {
        answer = num1 * num2;
        clearAll();
        result.innerHTML = (num1 + " x " + num2 + " = " + answer);
    } else {
        answer = num1 / num2;
        clearAll();
        result.innerHTML = (num1 + " / " + num2 + " = " + answer);
    }
}

// clears all data from input boxes & results. clean slate. 
function clearAll(){
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    document.getElementById('results').innerHTML = '';
}

// add comment here
function chooseOperation(){
    var operator = document.getElementById('operation').value;
    if (operator === '+') {
        document.getElementById('operation').value = '-';
        operator = '-';
    } else if (operator === '-') {
        document.getElementById('operation').value = 'x';
        operator = 'x';
    } else if (operator === 'x') {
        document.getElementById('operation').value = '/';
        operator = '/';
    } else {
        document.getElementById('operation').value = '+';
        operator = '+';
    };
    return operator;
}