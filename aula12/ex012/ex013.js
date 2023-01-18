var exatoMomento = new Date()
var day = exatoMomento.getDay()

/*console.log(day)
console.log(exatoMomento)*/

switch (day) {
    case 0:
        console.log("Hoje é domingo")
        break

    case 1:
        console.log("Hoje é segunda-feira")
        break

    case 2:
        console.log("Hoje é terça-feira")
        break

    case 3:
        console.log("Hoje é quarta-feira")
        break

    case 4:
        console.log("Hoje é quinta-feira")
        break

    case 5:
        console.log("Hoje é sexta-feira")
        break

    case 6:
        console.log("Hoje é sabado")
        break

    default:
        console.log("Não foi possível ler a data atual.")
        break
}