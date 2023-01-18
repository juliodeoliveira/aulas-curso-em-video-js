function line() {
    console.log("------------------------------------")
}

var age = 16
line()

console.log(`A idade digitada é ${age};`)

if (age < 16) {
    console.log("Não pode votar")
}

else if (age < 18 || age >= 65) {
    console.log("Voto facultativo")
}

else if (age > 18 && age < 65) {
    console.log("Voto obrigatório")
}





line()