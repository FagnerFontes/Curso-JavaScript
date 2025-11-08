//A função do metodo map()  criar um novo array com os resultados da chamada de uma funo para cada elemento do array original.

//Objetivo: Criar um novo array com os dobros dos números do array original


const numeros = [5,10,15,20,25]//Cria um array com números
console.log(`Array Original: ${numeros}`);//Imprime o array original

const dobros = numeros.map(numero => numero * 2 )//Cria um novo array com os dobros dos números do array original. Aqui é utilizado o método map para percorrer o array numeros e multiplicar cada número por 2

console.log(`Dobros: ${dobros}`);//Imprime o novo array com os dobros dos números

const triplos = numeros.map(numero => numero * 3 )///Cria um novo array com os triplos dos números do array original. Aqui é utilizado o método map para percorrer o array numeros e multiplicar cada número por 3

console.log(`triplos: ${triplos}`);//Imprime o novo array com os triplos dos números