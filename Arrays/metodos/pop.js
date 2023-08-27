//O método "pop()" é uma função de array em JavaScript que remove o último elemento de um array e retorna esse elemento removido. O array origianl é modificado, ficando com um elemento a menos após a operação. 

//A sintaxe do método "pop()" é a seguinte: 
//array.pop()
//*"array": O array di qual desejamos remover o último elemento. 


console.log("==================Exer1=========================");
//Remover o último elemento de um array: 
const numeros = [1,2,3,4,5]//Inicializa um array chamado números
console.log(`Array original: ${numeros}`);//Imprime o array original
const elementoRemovido = numeros.pop()//Remove o último elemento do array
console.log(`Elemento do array que foi removido:${elementoRemovido}`);//Imprime o elemento do array que foi removido 
console.log(`Array modificado: ${numeros}`);//Imprime o array modificado 

console.log("==================Exer2=========================");
//Remover o último elemento de um array
const frutas = ["maçã", "banana", "laranja", "uva", "manga"]//array original
 console.log(`Array original: ${frutas}`);
const frutaRemovida = frutas.pop()//Remove o último elemento do array
console.log(`Elemento do array que foi removido: ${frutaRemovida}`);//Imprime elemento do array que foi removido
console.log(`Array modificado: ${frutas}`); 

console.log("Ou");

const frutasAtualizada = frutas.pop()
console.log(`A lista de frutas atualizadas são: ${frutasAtualizada}`);
console.log(frutas);

