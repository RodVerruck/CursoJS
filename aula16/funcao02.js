function soma(n1 = 0, n2 = 0) {

    return n1 + n2
}
console.log(soma(2))
//Ao colocar n1=0 e n2=0 estou querendo que mesmo que nenhum dos dois seja definido, ao invés de receber o valor "undefined", o número que não foi definido receba 0 (zero). Isso evita que o código retorne NaN (not a number)