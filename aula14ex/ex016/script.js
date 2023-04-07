function verificar() {
    var inicio = document.getElementById('inicio');
    var fim = document.getElementById('fim');
    var passo = document.getElementById('passo');
    var res = document.getElementById('contando');
    var form = document.getElementById('formulario');

    // Adiciona o evento de submit no formulário
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Verifica se o campo "passo" está vazio ou tem o valor 0
        if (passo.value == '' || passo.value == 0) {
            window.alert('Valor inválido para o passo. Será considerado passo 1.');
            passo.value = 1;
        }

        // Verifica se os campos "inicio" e "fim" estão preenchidos corretamente
        if (inicio.value == '' || fim.value == '' || isNaN(inicio.value) || isNaN(fim.value) || inicio.value == 0 || fim.value == 0) {
            res.innerHTML = 'Valores inválidos. Informe valores numéricos para "início" e "fim".';
        } else {

            var inicioValor = parseInt(inicio.value);
            var fimValor = parseInt(fim.value);
            var passoValor = parseInt(passo.value);

            res.innerHTML = '';

            if (inicioValor < fimValor) {
                for (var c = inicioValor; c <= fimValor; c += passoValor) {
                    res.innerHTML += c + ' \u{1F449} ';
                }
            } else if (inicioValor > fimValor) {
                if (passoValor < 0) {
                    for (var c = inicioValor; c >= fimValor; c += passoValor) {
                        res.innerHTML += c + ' \u{1F449} ';
                    }

                } else {
                    for (var c = inicioValor; c >= fimValor; c -= passoValor) {
                        res.innerHTML += c + ' \u{1F449} ';
                    }
                }
            } else {
                res.innerHTML = 'Valores iguais. Não é possível contar.';
            }
        } res.innerHTML += '\u{1F3F3}';
    });

    // Remove a mensagem ao carregar a página
    res.innerHTML = '';
}
