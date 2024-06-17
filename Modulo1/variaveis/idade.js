let ano_de_nascimento
let nomes 
let mês_de_aniversário
let meses = 0

console.log('Qual seu nome?')

process.stdin.once('data', function(data) {
    nomes = data.toString().trim()
    console.log("Qual ano você nasceu?")

    process.stdin.once('data', function(data) {
        ano_de_nascimento = parseInt(data.toString().trim())
        console.log("Qual mês você nasceu?")

        process.stdin.once('data', function(data) {
            mês_de_aniversário = parseInt(data.toString().trim())
            idadeEMes(ano_de_nascimento, mês_de_aniversário, meses)
        })
    })
})
function idadeEMes(ano_de_nascimento, mês_de_aniversário, meses) {
    if ((mês_de_aniversário == 1) || (mês_de_aniversário == 2) || (mês_de_aniversário == 3) || (mês_de_aniversário == 4)) {
        meses = 5 - mês_de_aniversário  
    } else if ((mês_de_aniversário == 6) || (mês_de_aniversário == 7) || (mês_de_aniversário == 8) || (mês_de_aniversário == 9) || (mês_de_aniversário == 10) || (mês_de_aniversário == 11) || (mês_de_aniversário == 12)) {
        meses =  12 - mês_de_aniversário + 5
    }
    let idade
    if (mês_de_aniversário < 5) {
        idade = 2024 - ano_de_nascimento 
    } else if (mês_de_aniversário > 5) {
        idade = 2024 - ano_de_nascimento - 1 
        console.log("Você tem " + idade + " anos e " + meses + " meses de idade!")
    } else {
        idade = 2024 - ano_de_nascimento - 1
        console.log(`Você tem ${idade} anos e fez aniversário esse mês parabéns!`)
    }
        

    process.exit()
}