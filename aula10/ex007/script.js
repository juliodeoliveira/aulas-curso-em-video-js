function Somar() {
    var number1 = window.document.getElementById('txtn1')
    var number2 = window.document.getElementById('txtn2')
    var resp = document.getElementById('answer')
    var n1 = parseInt(number1.value)
    var n2 = parseInt(number2.value)
    var soma = n1 + n2
    resp.innerHTML = `A soma de ${n1} com ${n2} é ${soma}`
}
