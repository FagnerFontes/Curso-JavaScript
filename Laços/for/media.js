//Calcula a média de um array de números e imprimir o resultado. 


function calcularMedia(vetor) {
    let soma = 0; //Inicializa a variável soma com valor zero 


    for(let i = 0; i < vetor.length; i++){
        soma += vetor[i]
        media = soma / vetor.length 
    }

    //return soma 
    return media
}

const numeros = [1,2,3,]
const resultado = calcularMedia(numeros)
console.log(resultado);


