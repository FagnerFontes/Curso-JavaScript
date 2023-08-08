

let operador = parseFloat(prompt("Digite um número")) 
let cont = 0 //Aqui, declaramos uma variável "contador" e inicializamos com o valor 0. Essa variável será usadas para controlar a execução do loop´. 


while (cont< 10) {//O laço "while" é utilizado para repetir um bloco de código enquanto a condição especificada for verdadeira. Neste caso, o bloco será repetido enquanto o valor da variável "contador" for menor ou igual a 10. 
 cont++//Após imprimir o valor atual do contador, incrementamos o valor da variável" "contador" em 1 usando o operador de incremento "++". Isso é importante para evitar que o loop se torne infinito, garantindo que a condição do "while" eventualmente se torne falsa. 
  
  const resultado = operador * cont//Cria uma variável que recebe o resultado da operação. 
     console.log(`${operador} x ${cont} = ${resultado}`);
}
