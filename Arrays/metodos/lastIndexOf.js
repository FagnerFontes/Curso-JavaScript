//Este método fuciona da mesma forma que "indexof", com exceção de que ele funciona da direita para a esquerda. Ele retorna o último índice onde o item foi encontrado. 

let frutas = ['maçã', 'laranja', false, 3, "uva"]
console.log(`Array Original: ${frutas}`);

let novasFrutas = frutas.lastIndexOf("uva")
console.log(`Array modificado ${novasFrutas}`);
