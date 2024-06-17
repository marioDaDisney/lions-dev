let escolhaU = ''
let opecoes = ['pedra', 'papel', 'tesoura']
let escoplhaPP = ''
let resultado = ''

console.log('Qual sua escolha?')

process.stdin.once("data", function (data) {
    escolhaU = data.toString().trim()
    vigilancia(escolhaU, escoplhaPP)
    process.exit()
})

function vigilancia(escolhaU, escoplhaPP) {
    escoplhaPP = opecoes[Math.floor(Math.random() * 2) + 1]
    if(escolhaU == escoplhaPP) {
        resultado = 'empate'
    } else if ((escolhaU == 'pedra' && escoplhaPP == 'tesoura') || (escolhaU == 'tesoura' && escoplhaPP == 'papel') || (escolhaU == 'papel' && escoplhaPP == 'pedra')) {
        resultado = 'vitoria'
    } else {
        resultado = 'derrota'
    }
    console.log(`Você escolheu ${escolhaU} e o computador escolheu ${escoplhaPP}, o resultado foi ${resultado}`)
}
