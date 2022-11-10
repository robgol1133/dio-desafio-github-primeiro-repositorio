class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }

    classificacaoImc() {

        const imc = this.calcularImc();

        if (imc < 18.5) {
            return ('IMC igual a '+ imc.toFixed(2) + ' Você está Abaixo do peso');
        } else if (imc >= 18.5 && imc < 25) {
            return ('IMC igual a '+ imc.toFixed(2) + ' Você está Peso normal');
        } else if (imc >= 25 && imc < 30) {
            return ('IMC igual a '+ imc.toFixed(2) + ' Você está Acima do peso');
        } else if (imc >= 30 && imc < 40) {
            return ('IMC igual a '+ imc.toFixed(2) + ' Você está Obeso');
        } else {
            return ('IMC igual a '+ imc.toFixed(2) + ' Você está Obsesidade Grave');
        }
    }
}

const pessoa = new Pessoa('Robson',75 , 1.75); 
console.log(pessoa.classificacaoImc()); 