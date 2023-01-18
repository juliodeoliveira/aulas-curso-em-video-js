var global = document.getElementById('location')

global.addEventListener('click', clique)
global.addEventListener('mouseenter', getin)
global.addEventListener('mouseout', left)

function clique() {
    var area = document.getElementById('location')
    area.innerText = "Pudim!"
    area.style.background = '#edd1c0'
    area.style.color = 'rgb(0, 138, 0)'
    console.log("É verdade esse bilhete!")

}

function getin() {
    var territory = document.getElementById('location')
    territory.innerText = "Qual o melhor doce do mundo?"
}

function left() {
    var saiu = document.getElementById('location')
    saiu.innerText = "Eae, blz?"
    saiu.style.background = "purple"
    saiu.style.color = 'rgb(179, 219, 255)'
}