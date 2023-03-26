function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var textos = document.querySelectorAll('.texto');
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manha.png'
        document.body.style.background = ('#f8f1e5');
        for (var i = 0; i < textos.length; i++) {
            textos[i].style.color = ('#5e6e45')
        }
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'imagens/tarde.png'
        document.body.style.background = ('#7c91ae');
        for (var i = 0; i < textos.length; i++) {
            textos[i].style.color = ('#f2b860');
        }
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = ('#2a558b');
        for (var i = 0; i < textos.length; i++) {
            textos[i].style.color = ('#fe9e01');
        }
    }
}
