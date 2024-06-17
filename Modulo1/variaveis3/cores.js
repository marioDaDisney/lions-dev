let coresF = ["preto", "azul", "verde"]
let coresEspeciais = []
let corDoUsuario

console.log("Qual sua cor favorita?")
process.stdin.once('data', function(data) {
    corDoUsuario = data.toString().trim()
    cor(corDoUsuario, coresEspeciais, coresF)
})

function cor(corDoUsuario, coresEspeciais, coresF) {
    //se cordousuario for igual a coresF
    if (coresF.includes(corDoUsuario)) {
        console.log("A sua cor favorita é uma das favoritas da turma!")
        console.log(`Temos ${coresF.length} cores favoritas! `)
        process.exit()
    } else {
        console.log("A sua cor favorita é diferente, vamos adicionar a lista")
        coresEspeciais.push(corDoUsuario)
        console.log(`As cores especiais são ${coresEspeciais[0]} e temos ${coresF.length} cores favoritas! `)
        process.exit()
    }
}