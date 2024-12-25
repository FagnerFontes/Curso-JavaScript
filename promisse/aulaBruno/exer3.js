//Explicação textual do código abaixo

//O cóodigo cria uma promessa que retorna uma mensagem de sucesso ou erro após um tempo determinado de 6 segundos. Para isso é criado uma variável resultado que recebe false e uma variável tempo que recebe 6000. Após o tempo determinado a variável resultado recebe true e se o resultado for verdadeiro a promessa retorna a mensagem deu tudo certo, caso contrário retorna a mensagem deu tudo errado. A mensagem é exibida na tela do navegador.

//Obserções a cerca das Promises: 
//1. Uma Promise é um objeto que representa a eventual conclusão ou falha de uma operação assíncrona.
//2. Uma Promise é um objeto retornado na conclusão ou falha de uma operação assíncrona.
//3. Uma Promise é um objeto usado para processamento assíncrono.
//4. Promises são o resultado de operações assíncronas.
//5. Promises podem ser:
//   - Fulfilled: Ação bem-sucedida
//   - Rejected: Ação mal-sucedida
//   - Pending: Ação ainda não foi completada
//6. Promises são úteis para executar código assíncrono em JavaScript.
//7. Uma Promise é um objeto que representa o sucesso ou a falha
//   de uma operação assíncrona.


const numero = document.getElementById("numero");

let promise = new Promise((resolve, reject) => {
  //cria uma nova promessa
  let resultado = false; //cria uma variável resultado que recebe false
  let tempo = 3000; //cria uma variável tempo que recebe 3000

  setTimeout(() => {
    //função que será executada após o tempo determinado
    //resultado = true; //resultado recebe true
    if (resultado) {
       numero.innerHTML = 'Deu tudo certo';//escreve na tela
        numero.classList.remove("erro");//remove a classe erro
        numero.classList.add("ok");//adiciona a classe ok
    } else {
        numero.innerHTML = "Deu tudo errado";//escreve na tela
        numero.classList.add("erro");//adiciona a classe erro
        numero.classList.remove("ok");//
    }
  }, tempo); //tempo que a função será executado
}); //cria uma nova promessa

numero.innerHTML = "Aguardando..."; //escreve na tela aguardando

promise.then((retorno) => {
  //chama a promessa
  numero.innerHTML = retorno; //escreve na tela
}); //chama a promessa

promise.catch((retorno) => {
  //chama a promessa
  numero.innerHTML = retorno; //escreve na tela
}); //chama a promessa

/* let resultado=false; 
let tempo = 3000;

numero.innerHTML="Aguardando...";

setTimeout(() => {//função que será executada após o tempo determinado
    resultado = true;//
    if(resultado){//se o resultado for verdadeiro
        numero.innerHTML = 'Deu tudo certo';//escreve na tela
        numero.classList.remove("erro");//remove a classe erro
        numero.classList.add("ok");//adiciona a classe ok
    }else{//se o resultado for falso
        numero.innerHTML = "Deu tudo errado";//escreve na tela
        numero.classList.add("erro");//adiciona a classe erro
        numero.classList.remove("ok");//
    }//
},tempo);//tempo que a função será executada */
