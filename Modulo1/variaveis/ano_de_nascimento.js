let idade
let nome

console.log("Qual seu nome?")

process.stdin.once('data', function(data) {
    nome = data.toString().trim()
    console.log("Qual sua idade?")

    process.stdin.once('data', function(data) {
        idade = parseInt(data.toString().trim())
        processamento(nome, idade)
        console.log("você já fez aniversário?")
    })
})

function processamento(nome, idade) {
    let ano = 2024 - idade
    console.log('olá, ' + nome + ' se vc ja fez aniversário seu ano de nascimento é ' + ano + ' se você ainda não fez é ' + (ano-1))
    process.exit()
}
