//O laço "for" é uma estrutura de controle utilizada em programação para repetir um bloco de código várias vezes, com base em uma condição pré-estabelecida. Ele é especialmente útil quando se deseja executar uma tarefa um número específico de vezes ou quando se precisa percorrer elementos de uma lista ou array. 

//A estrutura do laço "for" é composta por três partes: 

//1. Inicialização: Nesta etapa, é definida ma variável de controle  e seu valor inicial. Ela é executada apenas um vez, no início do laço. 

//Condição: É a condição que será verificada a cada iteração do laço. Enquanto a condição for verdadeira, o bloco de código dentro laço será executado repetidamente. 

//Incremento/Decremento: É a operação que será realizada na variável de controle a cada iteração. Isso é essencial para que, em alguem momento, a condição do laço se torne falsa e a execução seja encerrada. 

//A sintaxe geral do laço "for" é a seguinte: 

//for(inicialização; condiição;  incremento/incremento ){
    //bloco de código a ser executado repetidamente
//}

//Exemplo de laço for que imprime os números de 1 a 50 

for(let i =1; i <=5; i++){
    console.log(`${i}`);
}

//Neste exemplo, o laço "for" irá imprimir os números de 1 a 5, pois a variável "i" começa com o valor1, e a condição de incremento "i <= 5" indica que o bloco de código será executado enqaunto "i" for menor ou igual a 5. A cada iteração, a variável "i" é incrementada em 1 ("i++"), e o laço continua até que a condiição seja falsa (quando "i" atinge o valor 6). 
