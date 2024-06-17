let MI = 0 
let MP = 0
let SI = 0
let SP = 0
let TP = 0
let TI = 0

for(let i = 0; i <= 999; i += 1) {
    if(i %2 == 0) {
        TP++
        SP += i
    } else{
        TI++
        SI += i
    }
}

MI = SI/TI
MP = SP/TP

console.log(`O total de números pares é ${TP}`)
console.log(`A soma dos números pares é ${SP}`)
console.log(`A media do números pares é ${MP}`)
console.log(`O total de números impares é ${TI}`)
console.log(`A soma dos números impares é ${SI}`)
console.log(`A media do números impares é ${MI}`)