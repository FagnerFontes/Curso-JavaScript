//A sequência de Fibonacci é uma série de números em que cada número é a soma dos dois números anteriores. A sequência começa geralmente com os números 0 e 1, e a partir deles, os próximos numeros são obtidos somando os dois números anteriores. A sequência de Fibonacci continua inifitamente. 

function fibonacci(n) {
    let fibArray = [0,1]

    for(let i = 2; i < n; i++){
        fibArray[i] = fibArray[i - i] + fibArray[i - 2]
    }

    return  fibArray 
    

}

const n = parseInt(prompt("Digite o número de termos da sequência de Fibonacci"))

    const fibSequence = fibonacci(n)

    console.log("Sequencia de Fibonacci: ");
    console.log(fibSequence.join(", "));
