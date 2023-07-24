 console.log("===================Exer1================");
//Escreva uma função que receba dois números como parâmetros e retorne o resultado da multiplicação entre eles.

function multiplica(a,b) {//Declaração da função "multiplica" com dois parâmetros "a" e "b"

    return a * b //retorna o resultado da multiplicação dos parâmetros "a" e "b". 

} 

const result = multiplica(7,9)//Chama da função "multiplica" com o valores 7 e 9 e e armazena o resultado da variável "result"
console.log(result);//Imprime o resultado da multiplicação (63) no console. 

console.log("===================Exer2===============");
//Crie uma função que receba um array de números como parâmetro e retorne a soma de todos os elementos do array.

console.log("===================Exer2================");
function somarArray(array) {//Declara uma função chamada somarArray, tendo parâmetros os elemntos do array
    let soma = 0;//Inicia a variável soma em 0
    for (let i = 0; i < array.length; i++) {//Inicia um laço para contar os elementos dos array
      soma += array[i];//Soma os elementos do array 
    }
    return soma;//Retorna a variável com a soma dos elementos do array
  }
  
  const numeros = [1, 2, 3, 4, 5,6,7];//Inicia o array números
  const resultado = somarArray(numeros);//Inicia a constante "resultado" 
  console.log(`A soma dos elementos do array é: ${resultado}`); //Imprime a soma dos elementos do array


  console.log("===================Exer3================");
  //Crie uma função que receba uma string como parâmetro e retorne a mesma string, mas com todas as letras em maiúsculo.
  function palavra(string) {//Inicia uma função chamada "palavra"
    const novaPalavra = "SILVIA"//Incia uma variável chamada "novaPalavra" para armazenar a nova palavra 
    return novaPalavra.toLowerCase()//Retorna a nova palavra
  }

  palavra() //Chama a função palavra
  console.log(palavra());//Imprime a nova palavra

  console.log("===================Exer4================");
  //Escreva uma função que receba um número como parâmetro e retorne true se o número for par e false se for ímpar.
  function parImpar(a) {
    if (a % 2 == 0) {
        console.log(`Esse número é par`);
    }else{
        console.log(`Esse número é impar`);
    }

    
  }

  const resulta = parImpar(12)
  //console.log(parImpar());

  
  console.log("===================Exer5================");



  function filtrarNumerosPares(vetor) {//Declaração da função filtrarNumerosPares, que recebe um vetor como parâmetro 
    const numerosPares = vetor.filter(numero => numero % 2 === 0)
    //Utiliza o método filter para criar um novo vetor (numerosPares) contedo apenas os numerpares do vetor original
    return numerosPares; //Retorna o novo vetor com os números pares 
  }

const numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9,0];//Vetor contendo os numeros 
const numerosPares = filtrarNumerosPares(numeros1);//Chama a função filtrarNumerosPares passando o vetor numeros1 como argumento.
console.log(numerosPares); // Imprime no console o vetor numerosPares resultante que contém apeas os numeros pares 

console.log("===================Exer6================");

  function maior(primeiroNumero, segundoNumero) {
      return primeiroNumero >= segundoNumero
  }

const resultado1 = maior(5,3)
console.log(resultado1);

console.log("===================Exer7================");
//Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não. 

function par2(a) {
  return a % 2 === 0 
  
}

const resultPar = par2(11)
console.log(resultPar);


console.log("===================Exer7================");
//Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:


