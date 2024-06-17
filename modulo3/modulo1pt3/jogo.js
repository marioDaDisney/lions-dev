const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})
let numero = Math.floor(Math.random() * 10000) +1 
let rodada = 0
var maxrodada = 0

function solicitarPalpite() {
    rodada += 1
    rl.question("Digite um número de 1 à 10000 ", (resposta) => {
        let resposta1 = parseInt(resposta)
        if(rodada < 25){
            switch (true) {
                case resposta1 == numero :
                    console.log("Parabéns, você acertou!")
                    rl.close()
                    break;
                case resposta1 > numero :
                    console.log("O número é muito alto!") 
                    solicitarPalpite()
                    break;
                case resposta1 < numero :
                    console.log("O número é muito baixo!")
                    solicitarPalpite()
                    break;
                default :
                    solicitarPalpite()
            }
        } else {
            console.log('limite de rodadas atingidos')
        rl.close()
        }
        
    })
    console.log(`rodada: ${rodada}`)
}
solicitarPalpite()