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
        let res

        process.stdin.once('data', function(data) {
            res = data.toString().trim()
            duvida(nome, idade, res)
        })
    })
})    

function duvida(nome, idade, res) {
    let anNasc = 2024 - idade

    if ((res == sim) || (res ==Sim) || (res ==SIM)) {
        
    }
}