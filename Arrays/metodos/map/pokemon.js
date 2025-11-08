const pokemons = [//Array de objetos
    {nome: "Bulbasaur", tipo: "grama"},
    {nome: "Bellsprourt", tipo: "grama"},
    {nome: "Charmander", tipo: "fogo"}, 
    {nome: "Vulpix", tipo: "fogo"}, 
    {nome: "Squirtle", tipo: "água"}, 
    {nome: "Psyduck", tipo: "água"},
]




const nomePokemon = pokemons.map((pokemons)=>{//Usando o método map para iterar sobre o array de pokémons.
    console.log(pokemons.nome);//Exibe o nome de cada pokémon no console.
})
//Neste exemplo, o método map() é utilizado para percorrer o array pokemons. Para cada objeto pokémon no array, a função anônima passada para o map() é executada, exibindo o nome do pokémon no console usando console.log(). O resultado é que os nomes de todos os pokémons são impressos no console um por um.

