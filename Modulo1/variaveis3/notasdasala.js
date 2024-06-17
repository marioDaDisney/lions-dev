let notas = [10, 7, 6, 9, 3, 5, 9, 8, 4, 7]
let soma = 0
let notaAlta = notas [0]
let notaBaixa = notas [0]
let notaMedia = 0
let media = soma / notas.length

for (let i = 0; i < notas.length; i++) {
    soma = soma + notas[i]
    if(notas[i] > notaAlta){
        notaAlta = notas[i]
    } else if (notas[i] < notaBaixa) {
        notaBaixa = notas[i]
    }
}
for (let i = 0; i < notas.length; i++) {
    if(notas[i]> media) {
        notaMedia++
    }
}

 console.log(notaAlta)
console.log(notaBaixa)
console.log(notaMedia)