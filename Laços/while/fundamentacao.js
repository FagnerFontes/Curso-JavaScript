//O laço "while" é uma estrutura de repetição que permite executar um bloco de código repetidamente enquanto uma condição específica for verdadeira. A estrutura geraldo laço "while" é a seguinte. 

//while (condition) {    
    //Bloco de código a ser executado enquanto a condição for verdadeira
//}

//O funcionamento do laço "while" é simples: antes de cada iteração, a condição é avaliada. Se a condição ainda for verdadeira, o bloco de código é executado novamente, e esse processo se repete até que a condição seja falsa. Quando a condição se torna falsa, o laço "while" é encerrado e a execução do programa continua a próxima linha de código após o "while"

let contador = 1; 

while (contador <=5) {
    console.log(contador);
    contador++
}

//Neste exemplo, o laço "while" irá imprimir os números de 1 a 5, porque a condição "contador <=5" é verdadeira. Na primeira iteração, o valor de "contador" é 1, que é impresso. Em seguida, "contador" é incrementado para 2, e o bloco de código é executador novamente. Isso se repete até que "contador" seja igual a 6, momento em que a codição "contador <=5" se torna falsa, e o laço é encerrado. 

//É importante tomar cuidado com a condição do "while" o laço entrará em um loop infinito, causando travamento do programa. É necessário garantir que a condição seja atualizada corretamente dentro do bloco de código do "while", para que eventualmente ela se torne falsa e e o laço seja encerrado. 
