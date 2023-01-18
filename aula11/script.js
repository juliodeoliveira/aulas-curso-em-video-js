var user = window.prompt("Bundinha hj?")

if (user == "s") {
    window.alert("HEHEHE hj tem!")
    var text = document.getElementById('texto')
    text.innerHTML = "secsooooooooooo!"
}
else {
    window.alert("q triste :(")
    var text2 = document.getElementById('texto')
    text2.innerHTML = "sem secso :("
}


function calculate() {
    var linha = window.document.querySelector("input#insert")

    var real = Number(linha.value)

    var result = window.document.querySelector("div#result")

    result.innerHTML = `O valor digitado é: ${real}`

    var altres = document.querySelector("div#altres")

    if (real > 80) {
        altres.innerHTML = `O valor digitado é muito <strong>alto</strong>`
    
    } else {
        altres.innerHTML = `O valor esta <strong>abaixo</strong> do valor máximo, pode prosseguir.`
    }


}