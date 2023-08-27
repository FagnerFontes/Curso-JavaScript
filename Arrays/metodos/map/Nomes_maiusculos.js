//Dado um array de nomes, crie um novo array com os nomes em maiúsculas: 

const nomes = ["Alice", "Bob", "Carol", "David"]

const nomesMaiusculos = nomes.map(nome => nome.toUpperCase())

console.log(`${nomesMaiusculos}`);