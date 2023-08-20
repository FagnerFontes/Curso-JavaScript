const soma = function(a,b) {
    return a +b
}

console.log(soma(15,3)); 

//Neste exemplo, a função anônima é atribuída à variável "soma". Ela aceita dois argumentos e retorrna a soma. Ela aceita dois argumentos e retorna a soma desses argumentos. A função é definida usando a palavra-chave "function", seguida pelo parâmetros e o corpo da função. 

//Função anônimas são frequentemente usadas como argumentos para outras funções de ordem superior como ("map", "filter", forEach) e eventos de manipulação do DOM. Por exemplo: 

document.getElementById("myButton").addEventListener("click", function() {
    console.log("Botão clicado!");
});

//Isso garante que o código JavaScript só será executado após o carregamento completo do DOM, evitando problemas de elementtos não encontrados