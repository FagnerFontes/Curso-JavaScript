//Faça um programa que peça uma nota, entre zero  dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido. 

let nota
let notaValida = false; 

do{
     nota = parseFloat(prompt("Digite uma nota valida"))
    if (nota >= 0 && nota <= 10) {
       //console.log("insira uma nota entre 0 e 10");
       notaValida = true//Se a nota estiver dentro do intervalo válido, atualiza a variável de controle 
    } else{
        //console.log("Por favor insira uma nota entre 0 e 10");
    }
}while(!notaValida)//Continua o loop enquanto a nota não for válida (notaValida for false) 

console.log("Nota válida inserida: ", nota);