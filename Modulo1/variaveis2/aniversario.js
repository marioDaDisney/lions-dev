//nome, idade, se fez aniversario esse ano, dizer qual ano ele nasceu 
let nome
let idade 
let aniversario
let ano
 
console.log("Opa, qual seu nome?")
process.stdin.once('data', function(data) {
    nome = data.toString().trim()
    console.log("Então " + nome + " qual sua idade?")
    
    process.stdin.once('data', function(data) {
        idade = parseInt(data.toString().trim())
        console.log(nome + " você já fez aniversário?")
        process.stdin.once('data', function(data) {
            aniversario = data.toString().trim()
            duvida(nome, idade, aniversario)
        })
       
    })
})

function duvida(nome, idade, aniversario) {
    // se aniversario = nao ano = idade - 2024 - 1
    if ((aniversario == 'não')||((aniversario == 'Não'))) {
        ano = 2024 - idade -1
        console.log(nome + " você nasceu no ano de " + ano)
    } else if (aniversario == 'sim') {
        ano = 2024 - idade
        console.log(nome + " você nasceu noo ano de " + ano)
    }
    process.exit()
}