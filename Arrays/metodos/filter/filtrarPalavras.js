//Este código filtra palavras com mais de 5 letras

const palavras = ['casa', "carro", "banana", "bicicleta", "abacaxi"]

const palavrasMaisLongas = palavras.filter(palavra => palavra.length > 5)

const palavrasMaisCurtas = palavras.filter(palavra => palavra.length <= 5)

console.log(`${palavras}`);
console.log(`${palavrasMaisLongas}`);
console.log(`${palavrasMaisCurtas}`);