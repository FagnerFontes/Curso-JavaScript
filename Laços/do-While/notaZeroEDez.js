//Faça um programa que peça uma nota, entre zero  dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido. 

let nota//Declara a variável nota que será usada para armazenar a nota digitada pelo usuário.   
let notaValida = false;//Declara a variável notaValida que será usada para controlar se a nota digitada pelo usuário é válida. Inicialmente, a nota não é válida.

do{//O bloco de código dentro do "do" será executado pelo menos uma vez, pois a condição "notaValida" só será avaliada após a primeira execução do bloco.
     nota = parseFloat(prompt("Digite uma nota valida"))//
    if (nota >= 0 && nota <= 10) {//
       //console.log("insira uma nota entre 0 e 10");
       notaValida = true//Se a nota estiver dentro do intervalo válido, atualiza a variável de controle 
    } else{//
        //console.log("Por favor insira uma nota entre 0 e 10");
    }
}while(!notaValida)//Continua o loop enquanto a nota não for válida (notaValida for false) 

console.log("Nota válida inserida: ", nota);//Exibe a mensagem com a nota válida inserida pelo usuário.
//Neste exemplo, o bloco de código dentro do "do" será executado