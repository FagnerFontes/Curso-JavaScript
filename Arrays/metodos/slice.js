//Este método se assemelha a "splice()", mas é muito diferente. Ele retorna subrrays em vez de substrings. 

//Este método "copia" uma parte dada de um array e retorna aquela parte copiada como um novo array. Ele não altera o array original. 


//A sintaxe é: array.slice(inicio, fim)
let numeros = [1,2,3,4,5,6,7,8,9,10,11,12]
teste = numeros.slice(1,3)
console.log(`Array Original: ${numeros}`);
console.log(`Array Modificado: ${teste}`);

