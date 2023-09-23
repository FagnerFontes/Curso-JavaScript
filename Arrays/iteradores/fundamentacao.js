//Em JavaScript, os iteradores são recursos que permitem percorrer elementos de uma coleção, como arrays, objetos ou sequêcias, de maneira controlada e sistemática. Os iteradores são amplamente usados para processar dados em estruturas de repetição como loops "for...of", "while", "do...while" e em funções como "forEach","map()", "filter()", "reduce()", entre outras. Eles tornam a iteração sobre elementos de coleções mais simples e legíveis. 

//Aqui estão alguns dos iteradores mais comuns em JavaScript e uma breve explicação de cada um: 


console.log("================= for...of ==================");
//1. for..of: O loopt "for...of" é usado para percorrer todos os valores de uma coleção (por exemplo, um array) sem a necessidade de índices. É essencialmente útil quando se deseja iterar todos os elementos de uma coleção sem se preocupar com os detalhes de índices. 

const frutas = ["maçã", "banana", "laranja", "pera", "uva", "java"]

for(const fruta of frutas){
    
}
console.log(`${frutas}`);

console.log("================= forEach ==================");
// 2. ForEach(): O método "forEach" é usado em array para executar uma função de retorno de chamada para cada elemento do array. É uma maneira mais declarativa de iterar um array em comparação com o loop "for". 

const numeros = [1,2,3,4,5,6]
numeros.forEach((numero)=>{
    
})

console.log(`${numeros}`);

console.log("================= map ==================");

//3. Map(): O método "map" é usado para criar um novo array com base em um array existente, aplicando uma função a cada elemento do array original. É comumente usado para transformaor dados. 

const numerosMap = [1,2,3,4,5,6,7,8,9]
console.log(`Array original ${numerosMap}`);
const duplicados = numerosMap.map(numero => numero * 2)
console.log(`Array modificado ${duplicados}`);


console.log("================= filter ==================");
// 4. filter(): O método "filter()" é usado para criar um novo array contendo apenas os elementos que atendem a uma determinada condição. Ele frequetemente usado para filtrar dados. 


const numerosFilter = [1,2,3,4,5,6,7,8,9, 10]
console.log(`Esses são o numeros originais do array: ${numerosFilter}` );
const pares = numerosFilter.filter(numero => numero % 2 ==0)
console.log(`Esses são os numeros pares do array: ${pares}`);

const impares = numerosFilter.filter(numero => numero % 2 != 0)
console.log(`Esses são os numeros impares do array: ${impares}`);

console.log("================= reduce ==================");

const numerosReduce = [4,56,89]
const soma = numeros.reduce((acumulador, numero) =>{
    return acumulador + numero
} )

console.log(`${soma}`);
