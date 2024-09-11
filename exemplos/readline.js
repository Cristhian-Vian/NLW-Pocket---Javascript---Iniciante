// Exemplo de declaração e utilização do módulo readline para input de dados via terminal do Node.js

const readline = require('readline');

// Cria uma interface de linha de comando para interagir com o usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pergunta ao usuário qual o dia da semana e armazena a resposta na variável diaDaSemana
rl.question('Digite o dia da semana: ', (diaDaSemana) => {
  // Converte a entrada para minúsculas para facilitar a comparação, ignorando maiúsculas e minúsculas
  const diaMinusculo = diaDaSemana.toLowerCase();

  // Utiliza a estrutura switch para verificar o dia da semana e executar a ação correspondente
  switch (diaMinusculo) {
    case 'segunda':
    case 'terça':
    case 'quarta':
    case 'quinta':
    case 'sexta':
      // Se o dia for de segunda a sexta, imprime uma mensagem indicando que é dia de trabalho
      console.log('É dia de trabalho!');
      break;
    case 'sábado':
    case 'domingo':
      // Se o dia for sábado ou domingo, imprime uma mensagem indicando que é fim de semana
      console.log('É fim de semana!');
      break;
    default:
      // Se o dia digitado não corresponder a nenhum dos casos acima, imprime uma mensagem de erro
      console.log('Dia inválido.');
  }

  // Fecha a interface de linha de comando após a execução
  rl.close();
});