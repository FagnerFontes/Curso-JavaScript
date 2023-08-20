//Crie uma função que recebe um número variável de argumentos e retorna o maiorr número dentre eles. 


function maiorNumero(...numeros){
    return Math.max(...numeros)
}

console.log(maiorNumero(5,10, 2, 8, 12, 15));