let mikey = [27, 10, 3, 0, 20, 5, 6]
let impares = []
let pares = []

mikey.push(12)

for(let i = 0; i <= mikey.length ; i ++) {
    if(mikey[i] % 2 ==0){
        pares.push(mikey[i])
    } else {
        impares.push(mikey[i])
    }
}
console.log(`pares ${pares}`)
console.log(`impares ${impares}`)




