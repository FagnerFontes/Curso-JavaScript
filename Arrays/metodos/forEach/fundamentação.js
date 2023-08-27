//O método "forEach" é uma função de ordem superior em JavaScript que é usada para percorrer os elementos de um array. Ele permite que se execute uma função para cada elemento array, sem a necessidade de escrever explicitamente um loop "for" ou "while". 

//array.forEach(function(elemento, índice, array) {
    // Código a ser executado para cada elemento});

//Aqui está o significado de cada parâmetro: 

//----------------------- Sintaxe -------------------------

//* elemento: O elemento atual do array percorrido. 
//* índice: O índice do elemento atual no array. 
//* array: O próprio array sendo percorrido 

//O método "forEach" não retorna um novo array; ele apenas percorre o array existente e executa a função fornecida para cada elemento. 

const numeros = [1,2,3,4,5,7,8]

numeros.forEach(function(numero){
    console.log(`${numero}`);
})