let nota 

function no(nota) {
    let result
    if (nota >= 90 && nota<= 100) {
        result = "A"
    } else  if (nota >= 80 && nota<= 89) {
        result = "B"
    } else if (nota >= 70 && nota<= 79) {
        result = "C"
    } else if (nota >= 60 && nota<= 69) {
        result = "D"
    } else if (nota >= 0 && nota<= 59) {
        result = "F"
    } return result
}

let not = nota(86)
console.log('not')