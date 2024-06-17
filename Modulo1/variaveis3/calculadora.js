let valor1
let valor2
let operador
let soma
let sub
let div
let mult

function calculadora(valor1, valor2, operador) {
    if (operador == '+') {
        soma = valor1 + valor2
        return soma
    }  
    else if(operador == '-') {
        sub = valor1 - valor2
        return sub
    } 
    else if (operador == '/') { 
        div = valor1 / valor2
        return div
    } 
    else if (operador == '*') {
        mult = valor1 * valor2
        return mult
    } else {
        console.log('Coloque o bagulho certo sangomongo!!!')
    }
}
console.log(calculadora(9, 7, '+'))
console.log(calculadora(9, 7, '-'))
console.log(calculadora(9, 7, '/'))
console.log(calculadora(9, 7, '*'))