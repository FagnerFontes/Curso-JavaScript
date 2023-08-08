//Faça um programa que peça uma nota, entre zero  dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido. 


let nota 
let notaValida = false 
12
let contador = 0 

while(!notaValida){
    nota = parseFloat(prompt("Digite uma nota nova válida"))
    contador++ 
    if(nota >= 0 && nota <= 10){
        notaValida = true
      
    }
}

console.log("Nota válida inserida: ", nota);