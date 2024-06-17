let numeros = [3.8, 8.8, 6.8, 3.4, 10.0, 5.6]
// é para definir os números do array
let maxima = numeros[0]
// vai definir a nota máxima que está no array 
let minima = numeros[0]
// vai definir a nota mínima do array  
let media = 0
//  calcula a media da sala
let media6 = 6.0
//  usa para estabelecer a média como 6
let abaixo6 = 0
// vai ser usado para as notas reprovadas 
let acima6 = 0
// vai mostra as notas que estão acima de 6
let soma = 0
// vai usar para fazer a soma dos números 

for (let i = 0; i < numeros.length; i++) {
    soma = soma + numeros[i] 
}
media = soma % numeros.length
console.log(`Essa é a nota media ${media}`)

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > maxima ) {
        maxima = numeros[i]
    } else if (numeros[i] < minima  ) {
        minima = numeros[i]
    }
}
console.log(`Essa é a nota maxima ${maxima}`)
console.log(minima)

for (let i = 0; i < numeros.length; i++)  {
    
}
numeros.push(8.0)
console.log(`${numeros}`)

for (let i = 0; i < numeros.length; i++) {
    abaixo6++
}

console.log(abaixo6)


for (let i = 0; i < numeros.length; i++) {
    if (acima6 > numeros[i]) {
        acima6++
    }
}


// as variaveis são as entradas e o console.log é a saída