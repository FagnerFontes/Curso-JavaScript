const fromPesquisa = document.querySelector('form')
const apikey = 'd2bf3518';

fromPesquisa.onsubmit = (event) => {
    event.preventDefault();

    const pesquisa = event.target.pesquisa.value

    if (pesquisa === '') {
        alert(`Preencha o campo pesquisa`)
        return
    }

    fetch(`https://omdbapi.com/?s=${pesquisa}&apikey=${apikey}`)
        .then(result => result.json())
        .then(json => carregaLista(json))
}

const carregaLista = (json) => {
    const lista = document.querySelector('.lista')
    lista.innerHTML = "";

    if(json.Response == `False`){
        alert(`Nenhum Filme encontrado`); 
        return
    }

    json.Search.forEach(element => {
        
        let item = document.createElement('div')
        item.classList.add('item')

        item.innerHTML = ` <img src = "${element.Poster}"/><h2>${element.Title}</h2>`
        
        lista.appendChild(item) ;
    })
}

window.addEventListener('load', async () => {
    // Substitua 'Batman' pelo termo de pesquisa desejado
    const letraAleatoria = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const termoInicial = '2015';
    const response = await fetch(`https://omdbapi.com/?s=${termoInicial}&apikey=${apikey}`);
    const json = await response.json();
    carregaLista(json);
});