const $button = document.querySelector('button'); // Seleciona o botão da página e atribui à variável $button 

$button.addEventListener('click', () => { // Adiciona um evento de clique ao botão 
    console.log('Botão clicado'); // Exibe uma mensagem no console quando o botão é clicado 
});

// O código acima cria um botão na página e adiciona um evento de clique a ele. Quando o botão é clicado, uma mensagem é exibida no console. Ele é um exemplo de callback, pois a função que exibe a mensagem é passada como parâmetro para o método addEventListener. Quando o evento de clique é disparado, a função é chamada.
