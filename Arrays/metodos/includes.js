//O método "includes()" é uma função  de array em JavaScript que permite verificar se  um determinado elemento está presente no array. Ele retorna um valor booleano, ou seja, "true" se o elemento estiver no array, ou "false" se não estiver. 

//A sintaxe do método é a seguinte "includes()" é a seguinte: ]
//Array.includes(elemento, indiceInicial)

//*"array": O array o qual se deseja verificar a presença do elemento
//*"elemento": O elemento que se deseja verificar se está presente no array
//*"indiceInicial": Opcionalmente, podemos especificar a partir de qual indice do array deve começar a busca pelo elemento. Se não fornecido, a busca começará a partir do índice 0. 

//==============================Exer1===================================
//verificar a presença de um número em um  array
const numeros = [1,2,3,4,5]//Inicializa um array de numeros
console.log(numeros.includes(3));//Busca se o numero 3 está presente no array "numeros"
console.log(numeros.includes(6));//Busca se o numeero 6 está presente no array "numeros"

console.log("********************************");
//==============================Exer2===================================
//verificar a presença de uma string em um array
const frutas = ["maçã", "uva", "banana", "laranja"]//Inicializa uma array de frutas
console.log(frutas.includes("laranja"))//Busca se a fruta "laranja" está no array de frutas
console.log(frutas.includes("jaca"));//Busca se a fruta "java" está no array de frutas
console.log("********************************");
//==============================Exer3===================================
//Utilizando o argumento "indiceInicial"

const numeros1 = [1,2,3,4,5,6]//Inicializa um array de numeros 
console.log(numeros1.includes(3,2));//A buesca começa a partir do indice 2
console.log(numeros1.includes(3,3));//A busca começa a partir do indice 3  

//O método "includes()" é uma forma simples e útil de verificar se um elemento especifico está presente em um array, sem a necessidade de percorrer manualmente o array coo um loop. 

console.log();