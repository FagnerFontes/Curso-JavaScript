const numero = document.getElementById("numero");//pega o elemento pelo id
const btn = document.getElementById("btn_promessa");//pega o elemento pelo id

 btn.addEventListener("click", (evt) => {//adiciona um evento de click no botão  btn 

    numero.innerHTML = "Processando...";//escreve na tela
    /* evt.preventDefault();//previne o comportamento padrão
    numero.innerHTML = "Carregando...";//escreve na tela
    numero.classList.remove("erro");//remove a classe erro
    numero.classList.remove("ok");//remove a classe ok */

        let promise = new Promise((resolve, reject) => {//cria uma nova promessa
        let resultado = true; //cria uma variável resultado que recebe false
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
 }); //adiciona um evento de click no botão  btn

 numero.innerHTML = "Aguardando..."; //escreve na tela aguardando

  