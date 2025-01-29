//Abaixo temos um exemplo de callback, onde a função mensagem é passada como argumento para a função setTimeout, que chama a função mensagem após 3 segundos.
const mensagem = function(){//
    console.log("Essa mensagem é mostrada após 5 segundos");//Essa mensagem é mostrada após 5 segundos
}

setTimeout(mensagem, 5000); //Essa mensagem é mostrada após 5 segundos

//

