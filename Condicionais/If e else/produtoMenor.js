//Faça um programa que pergunte o preço de três produtos e informe qual produto deve comprar, sabendo que a decisão é sempre pelo mais barato. 


//Solicita ao usuário que diite três números
const produto1 = parseFloat(prompt("Qual o valor do primeiro produto? "))//

const produto2 = parseFloat(prompt("Qual o valor do segundo produto?"))

const produto3 = parseFloat(prompt("Qual o valor do terceiro produto?"))


//função que recebe três númeross e retorna um 
function produtoMenor(a, b, c) {
    
    if (a < b && a < c) {//Verifica se o valor do produto "a" é o menor
        console.log(`Este é o valor mais barato ${a}`);//Imprime o valor de "a"
    } else if(b < a && b < c) {//Verifica se o valor do produto "b" é o menor
        console.log(`Este é o valor mais barato ${b}`);//Imprime o valor de "b"
    }else if(c < a && c < b){//Verifica se o valor do produto "b" é o menor
        console.log(`Este é o valor mais barato ${c}`);//Imprime o valor de "c"
    }
}

produtoMenor(5,10,15)//Chama a função produtoMenor