//Condicionais em JavaScript são estruturas de contole que permitem ao código tomar decisão com base em condições especificas. As condicionais permitem que o programa execute diferentes blocos de código dependendo se uma codição é verdadeira ou falsa. Isso é essencial para criar lógica e comportamentos dinâmicos em um programa, permitindo que ele responda a diferentes cenários. 

//"if": É a estrutura condicional mais básica. Ele avalia uma expressão entre parênteses e, se a expressão for verdadeira (ou seja, retorna "true"), o bloco de código dentro do "if" é executado. Assim: 

let idade = 21//Inicia uma variável chamada idade

if(idade >= 18){//
    console.log("Você é maior de idade");
}else{
    console.log("Vocé é menor de idade");
}

//"else if": permite adicionar múltiplas condições intermediárias entre o "if" e o "else". O bloco de código do promeiro "else if" cuja condição for verdadeira será executado

let nota = 10

if(nota >9){
    console.log("Ótima nota parabéns!!!");
}else if(nota >=7){
    console.log("Nota razoável, pode melhorar.");
}else{
    console.log("Nota insuficiente. Estude mais");
}