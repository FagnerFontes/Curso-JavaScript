

//=================Expresão de função ================
const explicar = function() {//função anônima armazenada em uma variável 
    console.log('Esta é uma função anônima armazenada em uma variável');//corpo da função
}//fim da função

explicar();//chamando a função

console.log("=============================================");

//=================Função Nomeada ================

const minhafuncao = function minhaFuncaoNomeada() {//função nomeada
    console.log('Esta é uma função nomeada');//corpo da função
}//fim da função

minhafuncao();//chamando a função

console.log("=============================================");

//==================Função Arrow================

const minhaFuncaoArrow = () => {//função arrow
    console.log('Esta é uma função de seta');//corpo da função
}//fim da função

minhaFuncaoArrow();//chamando a função

console.log("=============================================");

//=================Função com Parâmetros =================

const dobrar = numero => {//função com parâmetro
    return numero * numero;//corpo da função
}


console.log("O dobro do número é " + dobrar(93));//chamando a função com parâmetro
 
console.log();
("=============================================");

const saudar = ()=>{
    const horaAtual = new Date().getHours() + new Date().getMinutes();// Aqui informa a hora atual e os minutos
    if(horaAtual < 12){
        return 'Bom dia!';
    }else if (horaAtual
     >= 12 && horaAtual < 18){
        return 'Boa tarde!';
    }else{
        return 'Boa noite!';
    }
}

console.log( saudar() + " Agora são " + new Date().getHours() + " horas e " );//chamando a função


console.log("=============================================");

function criarPessoa (nome, idade, altura){//
    return {nome, idade, altura};//retornando um objeto
}
const pessoa1 = criarPessoa('Esmeralda Fontes Batista', 70, 1.65);//chamando a função
const pessoa2 = criarPessoa('Maria da Silva', 50, 1.70);//chamando a função

const pessoa3 = criarPessoa('José da Silva', 30, 1.80);//chamando a função
console.log(pessoa2);//imprimindo o objeto

console.log(pessoa1);//imprimindo o objeto

console.log(pessoa3);//imprimindo o objeto 

console.log("=============================================");
function criarPessoa (nome){//função com parâmetro
    return{nome}//retornando um objeto
}
const pessoa = criarPessoa; //chamando a função
const Daniel = pessoa('Daniel');//chamando a função
const cintia = criarPessoa('Cintia');//chamando a função
console.log(Daniel);//imprimindo o objeto
console.log(cintia);//imprimindo o objeto*/

console.log("=============================================");
/* const criarPessoa = nome => {//função com parâmetro
    return{nome}//retornando um objeto
};//função com parâmetro
const Jack = criarPessoa(`Daniel`);//chamando a função
const cintia = criarPessoa('Cintia');//chamando a função
console.log(Daniel);//imprimindo o objeto
console.log(cintia);//imprimindo o objeto */

console.log("=============================================");