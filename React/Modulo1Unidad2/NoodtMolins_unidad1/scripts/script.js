let operation;
let value;

function plus() {
    document.getElementById('sign').innerHTML = '+';
    return operation = 'add';
};

function less() {
    document.getElementById('sign').innerHTML = '-';
    return operation = 'remove';
};

function cross() {
    document.getElementById('sign').innerHTML = 'X';
    return operation = 'multiplication';
}

function division() {
    document.getElementById('sign').innerHTML = '%';
    return operation = 'division';
}



function answers () {
    let one = document.getElementById('val1').value;
    let two = document.getElementById('val2').value;
    one = parseFloat(one);
    two = parseFloat(two);
    console.log(operation, one, two)

    if (operation == 'add') {
        value = one + two;
        console.log(value)
    }
    else if (operation == 'remove') {
        value = one - two;
        console.log(value)
    }
    else if (operation == 'multiplication') {
        value = one * two;
        console.log(value)
    }
    else if (operation == 'division') {
        value = one / two;
        console.log(value)
    }
    if (value != undefined) {
        value = `El resultado de eso es ${value}.`;
        document.getElementById('result').innerHTML = value;
    }
    else {
        document.getElementById('result').innerHTML = 'Por favor, coloque números en las casillas, una operación, y ahi haga click en "Ver resultado".';
    }
}
