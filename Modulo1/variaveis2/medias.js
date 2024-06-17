let prova1
let prova2
let notas = []
let media

console.log("Olá, qual sua nota na primeira prova?")
process.stdin.once('data', function(data) {
     prova1 = parseFloat(data.toString().trim())
     console.log("E qual sua nota na segunda prova?")

     process.stdin.once('data', function(data) {
        prova2 = parseFloat(data.toString().trim())
        duvida(prova1, prova2, notas)
     })
})

function duvida(prova1, prova2, notas) {
    notas.push(prova1)
    notas.push(prova2)
    media = (notas[0] + notas[1]) /2

    console.log(`Sua media foi ${notas}`)
    process.exit()
}