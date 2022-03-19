
// function addNumbers takes two values from input fields, stores them
// in variables, adds them together and store this value in another variable. 
// The result is displyed on the screen, and the inputs are cleared.
function addNumbers(){
    var num1 = Number(document.getElementById('input1').value);
    var num2 = Number(document.getElementById('input2').value);
    var answer = num1 + num2;
    clearAll();
    document.getElementById('results').innerHTML =(num1 + " + " + num2 + " = " + answer);
}

// clears all data from input boxes & results. clean slate. 
function clearAll(){
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    document.getElementById('results').innerHTML = '';
}