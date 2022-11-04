/*
Formula do IMC
IMC = peso / (altura * altura)

Elabore um algoritmo dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em aldutos Condições:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;
*/

const peso = 77;
const altura = 1.75;
const imc = peso / Math.pow(altura, 2);

if (imc < 18.5) {
    console.log(imc.toFixed(2) + ' - Abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log(imc.toFixed(2) + ' - Peso normal');
} else if (imc >= 25 && imc < 30){
    console.log(imc.toFixed(2) + ' - Acima do peso');
}else if (imc >= 30 && imc < 40) {
    console.log(imc.toFixed(2) + ' - Obeso');
} else {
    console.log(imc.toFixed(2) + ' - Obsesidade Grave');
}