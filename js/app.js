function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        //console.log('got 3 digit and calling again', pin)
        return getPin();
    }
}


function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
    // console.log(pin);
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('calc-display');

    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
        //console.log(number);
    } else {

        const priviousNumber = calcInput.value;
        const newNumber = priviousNumber + number;
        calcInput.value = newNumber;
        //console.log(number);
    }

})

document.getElementById('submit-button').addEventListener('click', function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('calc-display').value;
    const successfulNotify = document.getElementById('notify-success');
    const failNotify = document.getElementById('notify-fail');

    if (pin == typedNumbers) {

        successfulNotify.style.display = 'block';
        failNotify.style.display = 'none';

    } else {

        failNotify.style.display = 'block';
        successfulNotify.style.display = 'none';
    }

})