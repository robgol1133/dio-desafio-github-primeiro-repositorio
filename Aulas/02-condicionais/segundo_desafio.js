/* Faça um programa para calcular o valor de uma viagem.

Voccê  terá 3 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço do gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no consile o valor que será gasto para realizar esta viagem
*/

const precoEtanol = 4;
const precoGasolina = 2;
const kmPorLitro = 10;
const tipoCombustivel = 'Gasolina';
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitro;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}
