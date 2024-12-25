//URL para API para obter dados do Pokémon
const urlAPI = ' https://pokeapi.co/api/v2/pokemon'//Aqui é importada uma API chamada pokeapi.co/api/v2/pokemon que contém informações sobre pokemons como nome, habilidades e imagem.  A API é armazenada na variável urlAPI. 

// Elemento HTML onde o conteúdo do Pokémon será exibio
const pokemonElement = document.querySelector('.pokemon')//

// Função para gerar um ID aleatório entre 1 a 905 (número total de pokémons na API)
const randonId = () => Math.floor(Math.random() * 905)

//Função para extrair nomes das habilidades de um pokemon. 
const getAbilities = (abilities) => abilities.map(item => item.ability.name)

//função para criar uma lista de habilidade em formato de marcadores HTML
const createAbilities = (abilities) => abilities.reduce((acc, item) => acc += `<li>${item}</li>`, '')

//Função para criar o conteúdo HTML de um Pokémon com base nos dados fornecidos 
const createPokemon = ({image, name, abilities}) => {

    //Criação do conteúdo HTML do Pokémon
    pokemonElement.innerHTML = `//
        <div class="pokemon__wrapperImage">
        <img 
        src="${image}" 
        class = "pokemon_image"
        alt=" pokemon${name}">
</div>
<div class="pokemon__info">
    <h2 class="pokemon__name">${name}</h2>
    <ul class="pokemon__abilities">
        ${createAbilities(abilities)}
    </ul>
</div>
        `
}

//Função para obter dados de um Pokémon de API
const getPokemon = () =>
    fetch(`${urlAPI}/${randonId()}`)//Aqui é feita uma requisição para a API para obter dados de um Pokémon aleatório. A requisição é feita através da função fetch que recebe como argumento a URL da API concatenada com um ID aleatório gerado pela função randonId.
        .then(response => response.json())//Aqui é feita uma promessa que retorna os dados do Pokémon em formato JSON. A promessa é feita através da função then que recebe como argumento uma função que converte os dados do Pokémon em formato JSON.
        .then(({name, abilities, ...pokemon}) => {//Aqui é feita uma promessa que retorna os dados do Pokémon em formato JSON. A promessa é feita através da função then que recebe como argumento uma função que converte os dados do Pokémon em formato JSON.

            //Obtenção da URL da imagem do Pokémon
            const pokemonImage = pokemon.sprites.other.dream_world.front_default

            //Criação de um objeto com os dados selecionados Pokémon
            const pokemonSelected = {//Aqui é criado um objeto chamado pokemonSelected que contém os dados do Pokémon selecionado. O objeto contém as propriedades name, image e abilities. A propriedade name recebe o nome do Pokémon, a propriedade image recebe a URL da imagem do Pokémon e a propriedade abilities recebe as habilidades do Pokémon.
                name: name,//Aqui é criado um objeto chamado pokemonSelected que contém os dados do Pokémon selecionado. O objeto contém as propriedades name, image e abilities. A propriedade name recebe o nome do Pokémon, a propriedade image recebe a URL da imagem do Pokémon e a propriedade abilities recebe as habilidades do Pokémon.
                image: pokemonImage ? pokemonImage : './assets/025.png' ,//
                abilities: getAbilities(abilities)//
            }

            //Chamada da função para criar e exibir o Pokémon na página
            createPokemon(pokemonSelected);

            console.log(createAbilities(pokemonSelected.abilities));//
        })

//Chamada inicial para obter um Pokémon quando a página carrega. 
getPokemon();//
