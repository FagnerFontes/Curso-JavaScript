//Criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:

//Nome completo;
//Tipo de jogo: IN indica internacional e DO indica doméstico;
//Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar, e FI final
//Categoria: pode ser as opções 1,2,3 ou 4

//O seu sistema deve solicitar estas informações ao usuário, através do prompt . Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)



const nome = prompt("Insira o nome do usuário");
const tipoJogo = prompt("Qual o tipo de jogo (IN para internacional ou DO para doméstico):");
const etapaJogo = prompt("Em qual etapa do campeonato (SF para semi-final, DT para decisão de terceiro lugar, FI para final):");
let categoria = parseInt(prompt("Qual categoria do ingresso (1, 2, 3 ou 4)?"));

console.log("==========Dados da Compra");

// Função para calcular e imprimir os detalhes da compra
function calcularDetalhes(nome, tipoJogo, etapaJogo, categoria) {
  console.log(`Nome cliente: ${nome}`);

  if (tipoJogo === "IN") {
    console.log(`Tipo de Jogo: Internacional`);
  } else if (tipoJogo === "DO") {
    console.log(`Tipo de Jogo: Doméstico`);
  }

  if (etapaJogo === "SF") {
    console.log(`Etapa do Campeonato: Semi-Final`);
  } else if (etapaJogo === "DT") {
    console.log(`Etapa do Campeonato: Decisão de terceiro lugar`);
  } else if (etapaJogo === "FI") {
    console.log(`Etapa do Campeonato: Jogo Final`);
  }

  let categoriaNome = "";

  switch (categoria) {
    case 1:
      categoriaNome = "Categoria 1";
      break;
    case 2:
      categoriaNome = "Categoria 2";
      break;
    case 3:
      categoriaNome = "Categoria 3";
      break;
    case 4:
      categoriaNome = "Categoria 4";
      break;
    default:
      categoriaNome = "Categoria Inválida";
      break;
  }

  console.log(categoriaNome);

  const valoresIngresso = {
    categoria1: [1320, 660],
    categoria2: [880, 440], 
    categoria3: [550, 220], 
    categoria4: [220, 110]
  };

  const valorDolar = 4.10; 

  // Calcular preço do ingresso 
  const [precoDomestico, precoInternacional] = valoresIngresso[`categoria${categoria}`];
  const precoUnitario = tipoJogo === "DO" ? precoDomestico : precoInternacional;

  // Solicitar quantidade de ingressos
  let quantidadeIngressos = parseInt(prompt("Quantidade de ingressos:"));

  // Calcular valor total
  let valorTotal = precoUnitario * quantidadeIngressos;

  // Ajustar valor total para jogos internacionais
  if (tipoJogo === "IN") {
    valorTotal *= valorDolar;
  }

  console.log(`Valor unitário do ingresso: R$${precoUnitario.toFixed(2)}`);
  console.log(`Quantidade de ingressos: ${quantidadeIngressos}`);
  console.log(`Valor total: R$${valorTotal.toFixed(2)}`);
}

// Chamar a função para calcular e imprimir os detalhes da compra
calcularDetalhes(nome, tipoJogo, etapaJogo, categoria);
//Neste código, corrigi erros de nomenclatura, adicionei variáveis e ajustei a lógica da função calcularDetalhes para calcular e imprimir os detalhes corretamente. Além disso, adicionei um prompt para solicitar a quantidade de ingressos e realizei a impressão correta dos valores. Certifique-se de entender as alterações e ajustá-las conforme necessário.






