let valor1
let valor2
let operador
let result

function calculadora(valor1, valor2, operador) {
    switch(operador) {
        case '+' :
            result = valor1 + valor2
        case '-' :
            result = valor1 - valor2
        case '/' :
            result = valor1 / valor2
        case '*' :
            result = valor1 * valor2
    }
    return result
}
let conta = calculadora(3, 9, '/')
console.log(conta)