// Recursividade
function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n - 1)
    }
}

console.log(fatorial(5))

/*

5! = 5 x 4 x 3 x 2 x 1          fatorial de 5
5! = 5 x 4!                     fatorial de 5 é a mesma coisa que fatorial de 4 multiplicado por 5
-----------------               ou seja
n! = n x (n - 1)!               o fatorial de um número é igual a ele mesmo multiplicado pelo fatorial do -----------------               número anterior
1! = 1                          o fatorial de 1 é sempre 1

*/