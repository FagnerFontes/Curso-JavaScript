const apiKey = '7254650ec0750e9c184fc3d51409bfd9';
const endpoint = 'https://api.themoviedb.org/3/discover/movie';

// Função para exibir os resultados na página
const exibirResultados = (filmes) => {
    const lista = document.querySelector('.lista');
    lista.innerHTML = ""; // Limpa o conteúdo atual do container

    filmes.forEach((filme) => {
        // Cria um elemento de item de lista para cada filme
        let item = document.createElement('div');
        item.classList.add('item');

        // Preenche o item com a imagem e o título do filme
        item.innerHTML = `<img src="https://image.tmdb.org/t/p/w500/${filme.poster_path}" alt="${filme.title}"/><h2>${filme.title}</h2>`;

        // Adiciona o item à lista
        lista.appendChild(item);
    });
};

// Função para obter filmes de ação
const getActionMovies = async () => {
    try {
        // Obtém o ID do gênero "Ação" da API do TMDb
        const genreResponse = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=' + apiKey);
        const genreData = await genreResponse.json();
        const actionGenreId = genreData.genres.find((genre) => genre.name === 'Action').id;

        // Faz a chamada para a API para obter filmes de ação
        const response = await fetch(`${endpoint}?api_key=${apiKey}&with_genres=${actionGenreId}`);
        const data = await response.json();

        // Chama a função para exibir os resultados da página
        exibirResultados(data.results);
    } catch (error) {
        console.error(`Erro ao obter filmes de ação:`, error);
    }
};

window.addEventListener('load', getActionMovies);
