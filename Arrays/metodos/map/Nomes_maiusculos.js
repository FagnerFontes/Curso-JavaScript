//Dado um array de nomes, crie um novo array com os nomes em maiúsculas: 

const nomes = ["Alice", "Bob", "Carol", "David"]//Array com os nomes originais.

const nomesMaiusculos = nomes.map(nome => nome.toUpperCase())//Array com os nomes em maiúsculas.

console.log(`${"Array original: " + nomes}`);//Exibe o array com os nomes originais.
console.log(`${"Array modificado: " + nomesMaiusculos}`);//Exibe o array com os nomes em maiúsculas.
//Neste exemplo, o array nomes contém os nomes originais. O método map() é chamado no array nomes, e para cada nome, a função anônima converte o nome para maiúsculas usando o método toUpperCase(). O resultado é armazenado no array nomesMaiusculos. Finalmente, o array com os nomes em maiúsculas é exibido no console.
//O método map() é uma maneira eficiente e concisa de transformar arrays em JavaScript, permitindo aplicar uma função a cada elemento do array original e retornar um novo array com os valores modificados.

