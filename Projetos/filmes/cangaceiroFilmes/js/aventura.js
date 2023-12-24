const apiKey = '7254650ec0750e9c184fc3d51409bfd9';
const popularEndpoint = 'https://api.themoviedb.org/3/movie/popular';
const genresEndpoint = 'https://api.themoviedb.org/3/genre/movie/list';
const adventureGenreId = 12; // O ID do gênero de aventura

// Função para obter a lista de gêneros
const getGenres = async () => {
    try {
        const response = await fetch(`${genresEndpoint}?api_key=${apiKey}`);
        const data = await response.json();
        return data.genres;
    } catch (error) {
        console.error('Erro ao obter a lista de gêneros:', error);
        return [];
    }
};

// Função para obter filmes populares de um determinado gênero
const getPopularMoviesByGenre = async (genreId) => {
    try {
        const response = await fetch(`${popularEndpoint}?api_key=${apiKey}`);
        const data = await response.json();
        const adventureMovies = data.results.filter(movie =>
            movie.genre_ids.includes(genreId)
        );
        return adventureMovies;
    } catch (error) {
        console.error('Erro ao obter filmes populares por gênero:', error);
        return [];
    }
};

// Função para obter filmes de aventura e exibir os resultados
const getAndDisplayAdventureMovies = async () => {
    const genres = await getGenres();
    const adventureGenre = genres.find(genre => genre.id === adventureGenreId);

    if (adventureGenre) {
        const adventureMovies = await getPopularMoviesByGenre(adventureGenreId);
        exibirResultados(adventureMovies);
    } else {
        console.error('Gênero de aventura não encontrado.');
    }
};

const exibirResultados = (filmes) => {
    const lista = document.querySelector('.lista');
    lista.innerHTML = ''; // Limpa o conteúdo atual do container

    filmes.forEach(filme => {
        // Cria um elemento de item de lista para cada filme
        const item = document.createElement('div');
        item.classList.add('item');

        // Preenche o item com a imagem e o título do filme
        item.innerHTML = `<img src="https://image.tmdb.org/t/p/w500/${filme.poster_path}" alt="${filme.title}"/><h2>${filme.title}</h2>`;

        // Adiciona o item à lista
        lista.appendChild(item);
    });
};

window.addEventListener('load', getAndDisplayAdventureMovies);

aventura.js

aventura.js


