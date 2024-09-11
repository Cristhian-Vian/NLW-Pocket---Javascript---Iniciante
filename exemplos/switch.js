// Exemplo de declaração e utilização da estrutura de controle switch case

const diaDaSemana = "sábado";

switch (diaDaSemana) {
  case "segunda":
  case "terça":
  case "quarta":
  case "quinta":
  case "sexta":
    console.log("É dia de trabalho!");
    break;
  case "sábado":
  case "domingo":
    console.log("É fim de semana!");
    break;
  default:
    console.log("Dia inválido.");
}