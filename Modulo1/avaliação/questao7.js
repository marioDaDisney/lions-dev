let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0]
let soma = 0
let media


for (let i = 0; i < notas.length; i++) {
    console.log(notas[i])
}

//não terminada
for (let i = 0; i < notas.length; i++) {
    soma = soma + notas[i]
}
media = soma / notas.length
console.log(`A media da turma é ${media}`)

let notaMx = notas[0]
let notaMn = notas[0]

for (let i = 0; i < notas.length; i++) {
    if (notas[i] > notaMx) {
        notaMx = notas[i]
    } else if (notas[i] < notaMn) {
        notaMn = notas[i]
    }
}
console.log(`A nota mais alta foi ${notaMx}`)
console.log(`A nota mais baixa foi ${notaMn}`)

let mediageral = 6.0
let acimaM = 0

for (let i = 0; i < notas.length; i++) {
    if (notas[i] > mediageral ) {
        acimaM++
    }
}
console.log(`Temos ${acimaM} notas acima da media`)

notas.push(3.5)

for (let i = 0; i < notas.length; i++){
    console.log(notas[i])
}

let reprovados = 0

for (let i = 0; i < notas.length; i++) {
    if (notas[i] < mediageral) {
        reprovados++
    }
}
console.log(`NO total são ${reprovados} reprovados`)