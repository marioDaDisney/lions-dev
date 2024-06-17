let caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
let senha = ''
let numsenha

console.log('Quantos caracteres tem a a senha?')
process.stdin.once('data', function(data) {
    numsenha = parseInt(data.toString().trim())
    processamento(numsenha,senha, caracteres)
    process.exit()
})

function processamento(numsenha,senha,caracteres) {

for(let i = 0; i < numsenha; i++) {
    
    senha += caracteres.charAt(Math.floor(Math.random() * numsenha) + 1)
    
}
console.log(`A senha é ${senha}`)
}
