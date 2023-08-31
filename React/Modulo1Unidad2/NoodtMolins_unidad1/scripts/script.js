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
    let one = document.getElementById(parseFloat('val1'));
    let two = document.getElementById(parseFloat('val2'));
    console.log(one, two)

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
    document.getElementById('result').innerHTML = value;
}
