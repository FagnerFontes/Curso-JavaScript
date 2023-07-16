//O método "push()" é uma função de array em JavaScript que permite adicionar um ou mais elementos ao final do array. Ele modifica o array original, adicionando os elementos especificados como argumentos ao final do mesmo, e retorna o novo tamanho do array após a inserção. 

//A sintaze do método "push()" é a seguite: 
//array.push(elemento1, elemento2,...,elementoN)

console.log("==================Exer1=======================");
const frutas = ["maçã", "banana"]
console.log(`Array original: ${frutas}`);
const novoTamanho = frutas.push("laranja", "uva")
console.log(`Array alterado: ${frutas}`);