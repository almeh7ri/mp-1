function addition(){
    // Get the values from the input fields and convert them to numbers
    let first = document.getElementById('first_number').value;
    let second = document.getElementById('second_number').value;
    let result = Number(first) + Number(second);

    // Check if the result is a valid number, and display the result or an error message
    if (isNaN(Number(result))) {
        document.getElementById("calc-output").innerHTML = "Failed to enter valid numbers";
    }
    else{
        document.getElementById("calc-output").innerHTML = `<p>${result}</p>`;
    }
}

function subtract(){
    // Get the values from the input fields and convert them to numbers
    let first = document.getElementById('first_number').value;
    let second = document.getElementById('second_number').value;
    let result = Number(first) - Number(second);

    // Check if the result is a valid number, and display the result or an error message
    if (isNaN(Number(result))) {
        document.getElementById("calc-output").innerHTML = "Failed to enter valid numbers";
    }
    else{
        document.getElementById("calc-output").innerHTML = `<p>${result}</p>`;
    }
}

function multiply(){
    // Get the values from the input fields and convert them to numbers
    let first = document.getElementById('first_number').value;
    let second = document.getElementById('second_number').value;
    let result = Number(first) * Number(second);

    // Check if the result is a valid number, and display the result or an error message
    if (isNaN(Number(result))) {
        document.getElementById("calc-output").innerHTML = "Failed to enter valid numbers";
    }
    else{
        document.getElementById("calc-output").innerHTML = `<p>${result}</p>`;
    }
}

function divide(){
    // Get the values from the input fields and convert them to numbers
    let first = document.getElementById('first_number').value;
    let second = document.getElementById('second_number').value;
    let result = Number(first) / Number(second);

    // Check if the result is a valid number, and display the result or an error message
    if (isNaN(Number(result))) {
        document.getElementById("calc-output").innerHTML = "Failed to enter valid numbers";
    }
    else{
        document.getElementById("calc-output").innerHTML = `<p>${result}</p>`;
    }
}

function power() {
    // Get the values from the input fields and check if they are valid numbers
    let first = document.getElementById('first_number').value;
    let second = document.getElementById('second_number').value;

    // If the inputs are valid, calculate the power of the first number raised to the second
    if (isNaN(Number(first)) || isNaN(Number(second))) {
        document.getElementById("calc-output").innerHTML = "Failed to enter valid numbers";
    }
    else {
        let result = 1;
        for (let i = 1; i <= second; i++) {
            result = Number(result) * first;
            document.getElementById("calc-output").innerHTML = `<p>${result}</p>`;
        }
    }
}

function clear_number(){
    // Clear the input fields and reset the output
    document.getElementById("first_number").value = '';
    document.getElementById("second_number").value = '';
    document.getElementById("calc-output").innerHTML = '';
}
