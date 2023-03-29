function verificar() {
    var data = new Date() //variável data recebe a data atual
    var ano = data.getFullYear() //variável ano recebe somente o valor do ano que está armazenado em 'data'
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fAno.value == 0 || fAno.value > ano) { //se o valor contido em fAno for igual a zero ou maior que o ano atual, dará erro.
        window.alert('[ERRO] Verifique o ano e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') //var fsex recebe o valor do elemento de nome 'radsex'
        var idade = ano - Number(fAno.value) //  var idade recebe o valor do ano atual menos o valor do ano digitado
        var gênero = ''
        var img = document.createElement('img') //var img recebe um novo elemento criado de imagem
        img.setAttribute('id', 'foto') //var img recebe a id #foto

        if (fsex[0].checked) { //se fsex estiver selecionado na posição 0 (que é o primeiro), var gênero recebe a string 'Homem'
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

        } else if (fsex[1].checked) { //se fsex estiver selecionado na posição 1 (que é o segundo), var gênero recebe a string 'Mulher'
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
