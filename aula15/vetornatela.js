let valores = [8, 1, 7, 4, 2, 9]

// console.log(valores) Mostra todo o vetor de uma só vez

/*
console.log(valores[0])
console.log(valores[1])  Mostra cada chave do vetor de uma vez, só que de uma forma meio burra.
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`) 
    //Esse é um jeito de fazer, mas existe um novo jeito, que foi criado nas novas versões do EcmaScript, que é ainda mais simples. Veja abaixo:
}

    for (let pos in valores) {
        console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
    }