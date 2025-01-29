
const meuNome = (nome) => {// declara a função meuNome que recebe uma função callback como parâmetro
    console.log(`Meu nome é ${nome}`);// imprime no console a mensagem "Meu nome é" seguido do nome passado como parâmetro
}

//meuNome(); 


const inserirNome = (callback) => {// declara a função inserirNome e passa uma função callback como parâmetro 
    let nome = "Fagner"; // declara a variável nome e atribui o valor "Fagner"
    callback(nome);// chama a função callback passando o nome como parâmetro
}


inserirNome(meuNome);// chama a função inserirNome passando a função meuNome como parâmetro

