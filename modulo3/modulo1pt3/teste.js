if(numeroRodadas < tentativas) {
if(resposta1 < numero){
        console.log("O número é muito baixo!")
        solicitarPalpite()
    } else if (resposta1 > numero) {
        console.log("O número é muito alto!")
        solicitarPalpite()
    } else {
        console.log("Parabéns, você acertou!")
        rl.close()
    }
    if (rodada == 10) {
        console.log('limite de rodadas atingidos')
        rl.close()
    }
}