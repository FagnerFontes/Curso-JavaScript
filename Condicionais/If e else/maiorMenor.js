//Faça um programa que leia três números e mostre o maior e o menor deles deles.

//Solicita ao usuário que digite três números

const numero1 = parseFloat(prompt("Digite 0 primeiro número"));
const numero2 = parseFloat(prompt("Diite o segundo número"));
const numero3 = parseFloat(prompt("Digite o terceiro número"));

//função que recebe três números e retora um objeto com as propriedades maior e menor.

function maiorMenorNumeros(a, b, c) {
  //Inicializa as variáveis maior e menor com o valor de "a"

  let maior = a;
  let menor = a;

  //Compara os valores de "b" e "c" com a variál maior e atualiza seu valor se necessário

  if (b > maior) {
    maior = b;
  }

  if (c > maior) {
    maior = c;
  }

  //Compara os valores de "b" e "c" com a variável menor e atualiza seu valor se necessário.

  if (b < menor) {
    menor = b;
  }

  if (c < menor) {
    menor = c;
  }

  //Retorna um objeto com as propriedades maior e menor
  return { maior, menor };

 
}

 //Chama a função maiorMenorNumeros passando os valores lidos como argumentos e atribui o resultado à variável resultado.
const resultado = maiorMenorNumeros(numero1, numero2, numero3);

//Exibe a mensagem informando o maior e menor número
console.log(`O maior número é: ${resultado.maior}`);
console.log(`O maior número é: ${resultado.menor}`);
