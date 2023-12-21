// Seleciona o formulário da página pelo elemento "form"
const fromPesquisa = document.querySelector('form')

//Chave de API para a OMB
const apikey = 'd2bf3518';

//Adiciona um ouvinte de evento para a submissão do formulário
fromPesquisa.onsubmit = (event) => {

    //Impede o comportamento padrão de enviar o formulário
    event.preventDefault();
    
    //Obtém o valor do campo de pesquisa do evento
    const pesquisa = event.target.pesquisa.value

    //Verifica se o campo de pesquisa está vazio
    if (pesquisa === '') {
        alert(`Preencha o campo pesquisa`)
        return
    }

    //Realiza uma solicitação à API OMB com o termo de pesqyusa
    fetch(`https://omdbapi.com/?s=${pesquisa}&apikey=${apikey}`)
        .then(result => result.json())
        .then(json => carregaLista(json))//Chama a função para carregar a lista de filmes com eos resultados
}

// Função para carregar a lista de filmes na página
const carregaLista = (json) => {
    //Obtém a referência ao container da lista
    const lista = document.querySelector('.lista')
    lista.innerHTML = "";//Limpa o conteúdo atual do container


    //Verifica se nenhum filme foi encontrado
    if(json.Response == `False`){
        alert(`Nenhum Filme encontrado`); 
        return
    }

    //Itera sobre a lista de filmes no objeto JSON
    json.Search.forEach(element => {
        
        //Cria um elemento do item de lista para o filme
        let item = document.createElement('div')
        item.classList.add('item')

        //Preenche o item com a imagem e o título do filme
        item.innerHTML = ` <img src = "${element.Poster}"/><h2>${element.Title}</h2>`
        
        //Adiciona o item ao container da lista
        lista.appendChild(item) ;
    })
}

//Adiciona um ouvinte de evento para o carregamento da página
window.addEventListener('load', async () => {

    //Gera uma letra aleatória do alfabeto 
    const letraAleatoria = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    
    //Substitua "2020" pelo termo de pesquisa desejado
    const termoInicial = '2010';

    //Realiza uma solicitação inicial à API OMDB com um termo de pesquisa específico 
    const response = await fetch(`https://omdbapi.com/?s=${termoInicial}&apikey=${apikey}`);
    const json = await response.json();

    //Chamada a função para carregar a lista de filme com os resultados iniciais
    carregaLista(json);
});