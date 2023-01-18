function linha() {
    console.log("----------------------------")
}

linha()

var now = new Date()
var hora = now.getHours()

console.log(`Agora são ${hora} horas`)


if (hora < 12) {
    console.log("Bom dia")
}

else if (hora >= 12 && hora < 18) {
    console.log("Boa tarde")
}

else {
    console.log("Boa noite")
}

/*console.log(now)
console.log(hora)*/


linha()