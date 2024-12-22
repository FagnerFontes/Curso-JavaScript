//Seleciona elementos do DOM
const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player')
const timer = document.querySelector('.timer')


//Variável para armazenar as cartas selecionadas 
let firstCard =''; 
let secondCard ='';


//Array de personagens 
const characters = [
    'indio 1',
    'indio 2',
    'indio 3',
    'indio 4',
    'indio 5',
    'indio 6',
    'indio 7',
    'indio 8',
    'indio 9',
    'indio 10',
];

//Função para verificar o fim jogo
const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');

    //Se todas as cartas estiverem desativas, exibe uma mensagem de parabens
    if (disabledCards.length == 20) {
        clearInterval(this.loop);
        alert(`Parábens, ${spanPlayer.innerHTML}! Seu tempo foi: ${timer.innerHTML} segundos`);
    }
}

//Função para criar elementos HTML dinamicamente 
const createElement = (tag, className) => {
    const element = document.createElement(tag)
    element.className = className;
    return element;
}

//Função para verificar as cartas selecionadas
const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    //Se as cartas coincidirem, desativa as cartas e verifica o o fim do jogo 
    if (firstCharacter === secondCharacter) {
        firstCard.firstChild.classList.add('disabled-card')
        secondCard.firstChild.classList.add('disabled-card')
        firstCard = '';
        secondCard = '';
        checkEndGame()
    } else {
        setTimeout(() => {
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');
            firstCard = '';
            secondCard = '';
            
        }, 1000);
    }
}

//Função para revelar uma carta ao clicar
const revealCard = ({target})=>{

    if(target.parentNode.className.includes('reveal-card')){
        return; 
    }
    if(firstCard === ''){
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode; 
    }else if(secondCard === ''){
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode; 
        checkCards()
    } 
}

//Função para criar uma carta com um personagem
const createCard = (character) => {
    const card = createElement('div', 'card')
    const front = createElement('div', 'face front')
    const back = createElement('div', 'face back')

    //Define a imagem de fundo da frente da carta com base no personagem
   front.style.backgroundImage = `url('../images/${character}.jpeg')`

    
    card.appendChild(front);
    card.appendChild(back);
    
    //Adiciona um ouvinte de evento de clique para revelar a carta
    card.addEventListener('click', revealCard )
    card.setAttribute('data-character', character)

    return card;
}

//Função para carregar o jogo
const loadGame = () => {

    //Duplica os personagens e embaralha as cartas
    const duplicateCharacters = [...characters, ...characters]
    const embaralhar = duplicateCharacters.sort(()=> Math.random() - 0.5);
    
    
    //Cria e adiciona as cartas ao grid
    embaralhar.forEach((character) => {
        const card = createCard(character);
        grid.appendChild(card)
    });
}

//Função para iniciar o timer do jogo
const startTimer =()=>{
    this.loop = setInterval(()=>{
        const currentTime = Number(timer.innerHTML); 
        timer.innerHTML = currentTime + 1
    },1000 );
}

//Ação a ser realizada quando a janela é completamente carregada
window.onload=()=>{
    //Define o nome do jogador a partir do localStorage
    spanPlayer.innerHTML = localStorage.getItem('player');

    //Inicia o timer e carrega o jogo
    startTimer()
    loadGame();
}


