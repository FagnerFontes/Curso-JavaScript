const apiKey = '7254650ec0750e9c184fc3d51409bfd9';
const endpoint = 'https://api.themoviedb.org/3/movie/popular'

//Função para obter filmes populares 
const getPopularMovies = async ()=>{
    try{
        const response = await fetch(`${endpoint}?api_key=${apiKey}`)
        const data = await response.json()

        //Chama a função para exibir os resultados da página 
        exibirResultados(data.results); 
    }catch(error){
        console.error(`Erro ao obter filmes populares:`, error);
    }
}; 

const exibirResultados = (filmes) => {
    const lista = document.querySelector('.lista');
    lista.innerHTML = "";//Limpa o conteúdo atual do container

    filmes.forEach(filme => {
        // Cria um elemento de item de lista para cada filme
        let item = document.createElement('div');
        item.classList.add('item');

        // Preenche o item com a imagem e o título do filme
        item.innerHTML = `<img src="https://image.tmdb.org/t/p/w500/${filme.poster_path}" alt="${filme.title}"/><h2>${filme.title}</h2>`;

        // Adiciona o item à lista
        lista.appendChild(item);
    });
};

window.addEventListener('load', getPopularMovies);