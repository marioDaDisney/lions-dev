let dado;

console.log("Qual o numero de lados do dado?");

process.stdin.once("data", function (data) {
  dado = parseInt(data.toString().trim())
  processo(dado)
  process.exit()
});

function processo(dado) {
  let numero = Math.floor(Math.random() * dado) + 1
  console.log(numero)
}
