// Função para calcular o fatorial de um número.
function fatorial(n) {
    // Inicializa a variável "fat" com o valor 1.
    let fat = 1;

    // Inicia o loop "for" com "c" igual ao valor de "n".
    // O loop vai executar enquanto "c" for maior que 1.
    // A cada iteração, "c" é decrementado em 1.
    for (let c = n; c > 1; c--) {
        // Multiplica o valor de "fat" pelo valor de "c" e armazena o resultado em "fat".
        fat *= c;
    }

    // Retorna o valor de "fat", que é o fatorial de "n".
    return fat;
}

// Chama a função "fatorial" passando o valor 5 como argumento e imprime o resultado no console.
console.log(fatorial(5));
