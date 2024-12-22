//Seleciona o elemento de input de com a classe 'login__input'
const input = document.querySelector('.login__input')

//Seleciona o botão com a classe 'login__bottom'
const button = document.querySelector('.login__buttom')

//Seleciona o formulário com a classe 'login__form'
const form = document.querySelector('.login__form')

//Função para validar o input conforme o usuário digita
const validadeInput = ({target})=>{
        if(target.value.length > 20){
            button.removeAttribute('disabled');//Remove o atributo 'disabled' do botão 
        }else{
            button.setAttribute('disabled', '');//Adiciona lo atributo 'disabled' ao botão
        }
    }

    //Função para lidar com o envio do formulário
    const handleSubmit=(event) =>{
        event.preventDefault();
       
        //Armazena o nome do jogador no localStorage
        localStorage.setItem('player', input.value);

        //Redireciona o usuário para a página do jogo
        window.location = './pages/game.html'
    }

//Adiciona um ouvinte de evento de entrada ao input para validar continuamente 
input.addEventListener('input', validadeInput);

//Adiciona um ouvinte de evento de envio ao formulário
form.addEventListener('submit', handleSubmit);



