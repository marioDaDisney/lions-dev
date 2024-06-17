let classificacao
let nota

console.log('Qual sua nota?')
process.stdin.once('data', function(data) {
    nota = parseInt(data.toString().trim())
    no(nota)
})

function no(nota) {
    switch(true){
        case (nota >=90 && nota <=100) :
            classificacao = 'A'
            break
        case (nota >=80 && nota <=89) :
            classificacao = 'B'
            break
        case (nota >=70 && nota <=79) :
            classificacao = 'C'
            break
        case (nota >=60 && nota <=69) :
            classificacao = 'D'
            break
        case (nota >=0 && nota <=59) :
            classificacao = 'F'
            break
        default :
        classificacao = ("Nota invalida")
    } return classificacao

    if ((classificacao == 'A') || (classificacao == 'B') || (classificacao == 'C')){
        console.log(`Você passou sua classificação foi ${classificacao}`)
    } else if ((classificacao == 'D') || (classificacao == 'F')) {
        console.log(`Você reprovou sua classificação foi ${classificacao}`)
    } else {
        console.log(invalido)
    }
    process.exit()
}        