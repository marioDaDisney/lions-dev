let resposta
let gostaDeCafe

console.log("Você gosta de café?")
process.stdin.once('data', function(data) {
    resposta = parseInt (data.toString().trim())
    duvida(resposta)
    process.exit()
})

function duvida(resposta) {
    if (resposta == "sim" || "Sim" || "SIM") {
        gostaDeCafe = true
    } else {
        gostaDeCafe = false
    } 
    if (gostaDeCafe == true) {
        console.log("Café é muito bom mesmo")
    } else {
        console.log("Você é fresco enm")
    }
}