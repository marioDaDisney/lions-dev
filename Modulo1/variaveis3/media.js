let nota1
let nota2
let media
  
console.log("Qual sua nota na primeira prova?")
process.stdin.once('data', function(data) {
    nota1 = parseFloat(data.toString().trim())
    console.log("Qual suac nota na segunda prova?")

    process.stdin.once('data', function(data) {
        nota2 = parseFloat(data.toString().trim())
        calculo(nota1, nota2)
    })
})

function calculo(nota1, nota2) {
    media = (nota1 + nota2) /2
    if (media < 8) {
       console.log(`Que pena, você ficou de recuperação pois sua nota foi ${media}!`) 
       process.exit()
    } else {
        console.log(`Parabéns, você passou de ano com ${media}!`)
        process.exit()
    } 
}