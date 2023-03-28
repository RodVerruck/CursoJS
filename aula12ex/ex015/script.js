function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fAno.value == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique o ano e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade <= 2) {
                //Bebê
                img.setAttribute('src', 'bebeh.png')
            } else if (idade <= 14) {
                //Criança
                img.setAttribute('src', 'criancah.png')
            } else if (idade <= 17) {
                //Adolescente
                img.setAttribute('src', 'adolescenteh.png')
            } else if (idade <= 50) {
                //Adulto
                img.setAttribute('src', 'adultoh.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosoh.png')
            }

        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade <= 2) {
                //Bebê
                img.setAttribute('src', 'bebem.png')
            } else if (idade <= 14) {
                //Criança
                img.setAttribute('src', 'criancam.png')
            } else if (idade <= 17) {
                //Adolescente
                img.setAttribute('src', 'adolescentem.png')
            } else if (idade <= 50) {
                //Adulto
                img.setAttribute('src', 'adultom.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosom.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    
    }
}