let numero

console.log('Diga um número')
process.stdin.once('data', function(data) {
    numero = parseInt(data.toString().trim())
    ues(numero)
})

function ues(numero) {
    if(numero % 5 ==0) {
        console.log(`o número ${numero} é divisivel por 5`)
    } else {
        console.log(`O número ${numero} não é divisivel por 5`)
    }   
    process.exit()
}