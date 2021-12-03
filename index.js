let firstNumber = parseInt(prompt("Введите первое число"));
let secondNumber = parseInt(prompt("Введите второе число"));
let symbol = prompt("Введите символ +-*/");

let result ;


function resultPlus (firstNumber, secondNumber) {
    result = firstNumber + secondNumber ;
    console.log(`${firstNumber} + ${secondNumber} = ${result}`)
};
function resultMinus (firstNumber, secondNumber) {
    result = firstNumber + secondNumber ;
    console.log(`${firstNumber} - ${secondNumber} = ${result}`)
};

function resultMulti (firstNumber, secondNumber) {
    result = firstNumber * secondNumber ;
    console.log(`${firstNumber} * ${secondNumber} = ${result}`)
};

function resultDiv (firstNumber, secondNumber) {
    result = firstNumber / secondNumber ;
    console.log(`${firstNumber} / ${secondNumber} = ${result}`)
};

function openResult (symbol, firstNumber, secondNumber) {
    if (symbol == "+") {
        resultPlus(firstNumber, secondNumber); 
    }
        else if (symbol == "-") {
            resultMinus(firstNumber, secondNumber);
        }
        else if (symbol == "*") {
            resultMulti(firstNumber, secondNumber);
        }
        else if (symbol == "/") {
            resultDiv(firstNumber, secondNumber);
        }
        else {
            console.log("Ты втираешь мне какую-то дичь");
        }
       
}
openResult(symbol, firstNumber, secondNumber);





