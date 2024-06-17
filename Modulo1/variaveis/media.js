let nota1
let nota2
let media 

console.log("qual sua primeira nota?")
process.stdin.once('data', function(data) {
    nota1 = parseFloat(data.toString().trim())
    console.log("qual sua segunda nota?")

    process.stdin.once('data', function(data) {
        nota2 = parseFloat(data.toString().trim())
        processamento(nota1, nota2)
    })
})

function processamento(nota1, nota2){
    media = (nota1 + nota2) /2
    console.log(media)
    process.exit()
}