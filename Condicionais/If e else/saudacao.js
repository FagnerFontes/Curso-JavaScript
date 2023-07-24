//Escreva uma função que receba o nome de uma pessoa como parâmetro e retorne a mensagem "Olá, {nome}" se o nome não estiver vazio, e "Olá, desconhecido" caso contrário.

function saudacao(nome) {//Inicia uma função chamada saudação 
  if (nome != "") {//Verifica se a string está vazia 
    console.log(`Olá ${nome}`);//Imprime a saudacao
  } else {
    console.log(`Olá Descohecido`);//Imprime saudacao
  }

  return nome;//Retorna com o nome 
}

const ola = saudacao("Fagner Fontes Batista");//Chama a função saudacao
