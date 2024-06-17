const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin
})
let numero = Math.floor(Math.random() * 100) +1 

function solicitarPalpite() {
    rl.question("Digite um número de 1 à 100; ", (resposta) => {
        let resposta1 = parseInt(resposta)
        if(resposta1 < numero){
            console.log("O número é muito baixo!")
            solicitarPalpite()
        } else if (resposta1 > numero) {
            console.log("O número é muito alto!")
            solicitarPalpite()
        } else {
            console.log("Parabéns, você acertou!")
            rl.close()
        }
    })
}
solicitarPalpite()