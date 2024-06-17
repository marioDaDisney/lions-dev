let respostas

console.log("Você gosta de café?")
process.stdin.once('data', function(data) {
    respostas = data.toString().trim()
    cafe(respostas)
})

function cafe(respostas) {
    if (respostas == 'sim') {
        console.log("Café é muito bom mesmo")
        process.exit()
    } else {
        console.log("Fresco você em")
        process.exit()
    }
}
