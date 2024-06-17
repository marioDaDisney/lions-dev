let idade
let nome

console.log("Qual seu nome?")
process.stdin.once('data', function(data) {
    nome = data.toString().trim()
    console.log("Opa " + nome + " Qual sua idade?")

    process.stdin.once('data', function(data) {
        idade = data.toString().trim()
        duvida(nome, idade)
        process.exit()
    })
})
function duvida(nome, idade){
    if (idade >= 18){
        console.log("Você é maoir de idade")
    } else {
        let menor = 18 - idade
        console.log("Então você " + nome + " vai ser de maios em " + menor + " anos!")
    }
}