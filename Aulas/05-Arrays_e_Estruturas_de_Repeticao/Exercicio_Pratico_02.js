// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número P  encontrado.

//const tamanho = [];
//tamanho.push(10)
const numeros = [0,2,3,4,5,6,7,8,9,10] 

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0 && numeros[i] != 0) {
        console.log(numeros[i]);
    }
}