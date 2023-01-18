function load () {
    var agora = new Date()
    var hora = agora.getHours()

    var resp = document.getElementById("resp")
    var foto = document.getElementById("Foto")

    resp.innerHTML = `Agora são ${hora} horas` 

    if (hora < 12) {
        /*image.innerHTML = "Bom dia!"*/
    
        foto.src = "imagens/manha.jpeg"
        document.body.style.background = "rgb(55, 163, 55)"

        /*image.innerHTML = '<img id="img" src="imagens/manha.jpeg" alt="Foto de manhã" >'*/
    }
    else if (hora > 12 && hora <= 18) {
        /*image.innerHTML = "Boa tarde!"*/
        
        foto.src = "imagens/tarde.jpeg"
        document.body.style.background = "rgb(163, 50, 50)"

        /*image.innerHTML = '<img id="img" src="imagens/tarde.jpeg" alt="Foto de tarde" >'*/
    }
    
    else if (hora > 18) {
        /*image.innerHTML = "Boa noite!"*/
        
        foto.src = "imagens/noite.jpeg"
        document.body.style.background = "rgb(36, 36, 107)"

        /*image.innerHTML = '<img id="img" src="imagens/noite.jpeg" alt="Foto de noite">'*/
    }
}

