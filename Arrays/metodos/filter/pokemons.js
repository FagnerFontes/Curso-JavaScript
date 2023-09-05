
const pokemons = [
    {nome: "Bulbasaur", tipo: "grama"},
    {nome: "Bellsprourt", tipo: "grama"},
    {nome: "Charmander", tipo: "fogo"}, 
    {nome: "Vulpix", tipo: "fogo"}, 
    {nome: "Squirtle", tipo: "água"}, 
    {nome: "Psyduck", tipo: "água"}
]

const pokemonsGrama = pokemons.filter((pokemon)=>{
    if(pokemon.tipo === "grama"){
        console.log(`Os pokemons de grama são: ${pokemon.nome}`);
    }
})

console.log(pokemonsGrama);