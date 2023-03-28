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
                img.setAttribute('src', '')
            } else if (idade <= 14) {
                //Criança
            } else if (idade <= 17) {
                //Adolescente
            } else if (idade <= 50) {
                //Adulto
            } else {
                //Idoso
            }

        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade <= 2) {
                //Bebê
            } else if (idade <= 14) {
                //Criança
            } else if (idade <= 17) {
                //Adolescente
            } else if (idade <= 50) {
                //Adulto
            } else {
                //Idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
    }
}