
// function doMath() takes two values from input fields, stores them
// in variables. It gets the value of the operation input field from
// the user, then performs the appropriate calculation.  
// The result is displyed on the screen, and the inputs are cleared.
function doMath(){
    var num1 = Number(document.getElementById('input1').value);
    var num2 = Number(document.getElementById('input2').value);
    var operator = document.getElementById('operation').value;
    var result = document.getElementById('results');
    var answer;
    clearAll();
    if (operator === '+') {
        answer = num1 + num2;
        result.innerHTML = (`${num1} + ${num2} = ${answer}`);
    } else if (operator === '-') {
        answer = num1 - num2;
        result.innerHTML = (`${num1} - ${num2} = ${answer}`);
    } else if (operator === "x") {
        answer = num1 * num2;
        result.innerHTML = (`${num1} x ${num2} = ${answer}`);
    } else {
        answer = num1 / num2;
        result.innerHTML = (`${num1} / ${num2} = ${answer}`);
    }
}

// clears all data from input boxes & results. clean slate. 
function clearAll(){
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    document.getElementById('results').innerHTML = '';
}

// the chooseOperation() function allows the user to choose
// the type of calculation they want to perform by clicking
// the operator button to toggle between options. 
function chooseOperation(){
    var operator = document.getElementById('operation').value;
    if (operator === '+') {
        document.getElementById('operation').value = '-';
    } else if (operator === '-') {
        document.getElementById('operation').value = 'x';
    } else if (operator === 'x') {
        document.getElementById('operation').value = '/';
    } else {
        document.getElementById('operation').value = '+';
    };
    return operator;
}