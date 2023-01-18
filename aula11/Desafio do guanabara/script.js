function verificar() {
    var user = document.querySelector("input#botao")
    var NumUser = document.querySelector("input#numbox")

    var realUser = String(NumUser.value)
    var output = document.querySelector("div#back")

    output.innerHTML = `<p>Você digitou: ${realUser}</p>`

    if (realUser == "Brasileiro") {
        output.innerHTML = `Você digitou: ${realUser}. parabéns, que povo legal!`
    }
}