let numero 

console.log("Qual o número?")
process.stdin.once('data', function(data) {
    numero = parseInt(data.toString().trim())
    duvida(numero)
})

function duvida(numero) {
    if(numero == 0) {
        console.log("O número digitado é zero")
    } else if (numero % 2 == 0) {
        console.log("O número digitado é par")
    } else {
        console.log("O número digitado é impar")
    }
    process.exit()
}
