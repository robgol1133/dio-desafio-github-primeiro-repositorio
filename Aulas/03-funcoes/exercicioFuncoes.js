function escrevaMeuNome(nome) {
     return 'O meu nome é ' + nome;
}

function verificaMaiorIdade(idade) {
     if (idade >= 18) {
          console.log(escrevaMeuNome('Robson') + ' - Essa pessoa é de maior');
     } else {
          console.log(escrevaMeuNome('Robson') + ' - Essa pessoa é de menor')
     }
}

verificaMaiorIdade(54);