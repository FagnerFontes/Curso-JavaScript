//Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:


let arrayOriginal = [5, 10, 15, 20, 25, 30, 40, 45, 50, 55,60]
resultado = []
console.log("==============ExerA=====================");
/*  function imprimeNumeros(arrayOriginal) {
    for(let i = 0; i < arrayOriginal.length; i++ ){
        console.log(arrayOriginal[i]);
    }
}

imprimeNumeros(arrayOriginal)  */

console.log("==============ExerB=====================");
function divide(arrayOriginal) {
    //Criando um array para armazenarr os resultados das divisões
    let resultados = []

    //Iterando sobre cada elemento do array original 
    for (let i = 0; i < arrayOriginal.length; i++) {

        //Realizando a divisão do elemento atual por 2 
        let divideNumeros = arrayOriginal[i] / 4

        //Adicionando o resultado da divisão ao array de resultados 
        resultados.push(divideNumeros)

    }
    //Retornando o array de resultados 
    return resultados
}


//Chamando a função "divide" com o array original como argumento 
const resultadosDivisao = divide(arrayOriginal)

//Imprimindo os resultados das divisões 
console.log(resultadosDivisao);


console.log("==============ExerC=====================");

function pares(arrayOriginal) {
    let numerosPares = []
  


    for (let i = 0; i < arrayOriginal.length; i++) {

        if (arrayOriginal[i] % 2 === 0) {

            numerosPares.push(arrayOriginal[i])
        }
    }
    return numerosPares
}

const numerosPares = pares(arrayOriginal)
console.log(`Estes são os numeros pares do array: ${numerosPares}`);