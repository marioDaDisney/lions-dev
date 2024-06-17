let numero  

console.log("Qual número você quer a tabuada?")
process.stdin.once('data', function(data) {
    numero = parseInt(data.toString().trim())
    for (let i = 0; i <= 100; i +=1) {
        console.log(`${numero} x ${i} = ${numero * i}`)
    }
    process.exit()
})