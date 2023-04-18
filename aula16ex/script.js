// Só vai aceitar números de 1 a 100
// Não aceitará números que já estão no array
// Pode adicionar até 100 números no array, ao clicar em adicionar o array receberá o número digitado.
// Ao clicar em finalizar, retornará: o total de números no array. O maior número digitado. O menor tbm. A soma dos valores. E a média dos valores

let num = document.getElementById('txtn')
let vetor = []
let lista = document.getElementById('listanum')

function adicionar() {
    let n = Number(num.value)
    if (n == 0 || isNaN(n) || n > 100 || vetor.indexOf(n) > -1) {
        window.alert('Digite um número válido!')
    } else {
        vetor.push(n)
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado!`
        lista.appendChild(item)
    }
}
