/* Exemplo 01
const alunos = ['1','2','3'];

console.log(alunos);

//console.log(alunos.pop()); //Remove o ultimo da lista.
//console.log(alunos.shift()); //Remove o primeiro da lista.

console.log(alunos);
 */

//---------------------------------------------

/* Utilizando estrutura de repeticação */
//Exe-01
/*
for (let i = 0; i < 10; i++) {
    console.log(i);
}
*/

//Exe-02
/*
const nome = 'Vitor Johansen Guerra';

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}
*/

//Exe-03

const notas = [];

notas.push(10);
notas.push(5);
notas.push(5);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;
console.log(media.toFixed(2));