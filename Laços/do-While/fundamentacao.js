//O laço "do-while" é uma extrutura de repetição em JavaScript que executa um bloco de código repetidamente enquanto a condição especificada for verdadeira. A difereça entre o "do-while" e o "while" é que o "do-while" garante que o bloco de código seja executado pelo menos uma vez, mesmo que a condição já seja na primeira avaliação. 

//A sintaxe do laço "do-while" é a seguinte: 

/*
do{

}while(condição)*/

//Aqui está o fluxo de execução do laçp "do-while": 

//1. O bloco de código dentro "do" é executado. 
//2. Em seguida, a condição é verificada. Se a condição for verdadeira, o bloco de código será executado novamente, caso contrário, o laço será interrompido e a execução continua após o laço "do-while" 

//Aqui está um exemplo de uso do "do-while" para ler um número digitado pelo usuário e exibir uma mensagem até que o número digita seja igual a zero: 

let numero; 

do{
    numero = parseFloat(prompt("Digite um número"))
    console.log(`Você digitou o número ${numero}`);
}while(

    (numero !==0)
)

//Neste exemplo, o bloco de código dentro do "do" será executado pelo menos uma vez, pois a condição "numero !==0" só será avaliada após a primeira execção do bloco. Se o número digitado pelo usuário for zero, o laço será interrompido e a execução continuará após o laço "do-while". Caso contrário, o bloco será executado novamente para solicitar um novo número ao usuário. 
