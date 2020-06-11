const SIGNS = ['+', '-', '*', '/'];

let firstNumber = 0, secondNumber = 0, enteredSign, resultString;

do {
    firstNumber = parseFloat(prompt('Введите первое число'));
} while (isNaN(firstNumber));

do {
    secondNumber = parseFloat(prompt('Введите второе число'));
} while (isNaN(secondNumber))

enteredSign = prompt('Введите знак');

if (SIGNS.indexOf(enteredSign) === -1) {
    alert('Ошибка')
} else {
    resultString = firstNumber + enteredSign + secondNumber
    alert(resultString + '=' + eval(resultString));
}


