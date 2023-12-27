const grid = document.querySelector('.grid');
let firstCard = '';
let secondCard = '';

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

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if (firstCharacter === secondCharacter) {
        // Lógica quando as cartas coincidem
    } else {
        setTimeout(() => {
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');
            firstCard = '';
            secondCard = '';
        }, 500);
    }
}

const revealCard = ({ target }) => {
    if (target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if (firstCard === '') {
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;
    } else if (secondCard === '') {
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;
        checkCards();
    }
}

const createCard = (character) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../images/${character}.jpeg')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-character', character);

    return card;
}

const loadGame = () => {
    const duplicateCharacters = [...characters, ...characters];
    const shuffledCharacters = duplicateCharacters.sort(() => Math.random() - 0.5);

    shuffledCharacters.forEach((character) => {
        const card = createCard(character);
        grid.appendChild(card);
    });
}

loadGame();