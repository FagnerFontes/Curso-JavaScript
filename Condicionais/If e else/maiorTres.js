//Faça um programa que leia três números e mostre o maior deles. 

function maiorTres(a,b,c) {//Cria uma função chamada "maiorTres" que recebe três números como parãmetros. 
    
    if(a > b &&  a > c ){//"Verifica se "a" é maior ou igual a "b" e "c""
        console.log(`O maior número digitado é: ${a}`);
    }else if(b > a && b > c) {// Verifica se "b" é maior ou igual a "a" e "c"
        console.log(`O maior número digitado é: ${b}`);
    } else if(c > a && c > b){ // Caso contrário, "c" é o maior número
        console.log(`O maior número digitado é: ${c}`);
    }
}
// Chama a função "maiorTres" com os valores 5, 10 e 15 como argumentos
maiorTres(5,10,15)