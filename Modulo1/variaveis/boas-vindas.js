var nome = ''
console.log('qual seu nome?')
process.stdin.on('data', function(data) { 

    nome = data.toString(); //o nome digitado vai ser salvo aqui
    var saudacao = "olá, " + nome 
    console.log(saudacao)
    process.exit();
})