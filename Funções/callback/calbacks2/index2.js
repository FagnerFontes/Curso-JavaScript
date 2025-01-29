
function newButton(text){
    //seleciona o body do HTML e atribui a variável $body
    const $body = document.querySelector('body')
    
    //cria um botão no HTML usando document.createElement('button') e atribui a variável $button
    const $button = document.createElement('button') 
 
    //adiciona um evento de clique ao botão e exibe uma mensagem no console quando o botão é clicado 
    $button.textContent = text;
    
    //adiciona um evento de clique ao botão e exibe uma mensagem no console quando o botão é clicado 
    $body.insertAdjacentElement('afterend', $button);//insere o botão no body do HTML
}

newButton('Login'); //chama a função newButton() para criar o botão no HTML e adicionar o evento de clique a ele. O parâmetro 'Login' é passado para a função newButton() e é usado como o texto do botão.

newButton('Logout'); //chama a função newButton() para criar o botão no HTML e adicionar o evento de clique a ele. O parâmetro 'Logout' é passado para a função newButton() e é usado como o texto do botão.