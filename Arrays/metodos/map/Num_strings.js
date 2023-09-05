//Faça um programa que tenha uma lista de numeros e que transforme-a numa nova lista contendo strings. 

let numeros = [10,20,30,40,50,60,70,80,90]//Nesta linha, um array chamado "numeros" é declarado e inicializado com os valores. 

const resposta = numeros.map((valor, index)=>{
    console.log(`O elemento ${index} é ${valor},`);
//Nesta linha, o método "map" é chamado no array "numeros". O "map" percorre cada elemento do array e retorna um novo array com os resultados de uma função de callback aplicada a cada elemento. 

//A função de callback passada para o "map" recebe dois parâmetros "valor" e "index". O parâmetro "valor" representa o valor do elemento atual do array, e o parâmetro "index" representa o índice dessse elemento. 

//Dentro da função de callback, é exibida uma mensagem no console usando o "console.log". A mensagem exibe o índice e o valor do elemento atual do array. 

//No entando, é importante notar que o "map" retorna um novo array com os resultado da função de callback. Neste caso, como a função de callback não retorna nada explicitamente (não possui um "return"). 
})