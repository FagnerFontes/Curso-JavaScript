//O método "reduce()" é um dos métodos fundamentais para trabalhar com arrays em JavaScript. Ele é usado para iterar sobre os elementos de um array e acumular um resultado a partir desses elementos. A ideia principal do "reduce()" é reduzir um a um único valor, aplicando uma função em cada elemento e acumulando o resultado.

//A assinatura do método "reduce" é a seguinte: 

//* array.reduce(callback, valorInicial)

//-------------------- sintese ---------------------------

//* "callback": Uma função que é executada em cada elemento do array, recebendo argumentos: 
    
    //* acumulador
    //* valor atual
    //* array original 
    
//* A função deve retornar o valor que será acumulado. 

//* "valorInicial" (opcional): Um valor inicial opcional para o acumulador. Se não for fornecido, o primeiro elemento do array será usado como valor inicial e a iteração começará do segundo elemento. 

//Aqui está um exemplo para ilustrar como o "reduce()" funciona: 

const numeros = [1,3,4,5]

const soma = numeros.reduce((acumulador, valorAtual)=>{
    return acumulador + valorAtual; 
}, 0)

console.log(soma);

//Neste exemplo, estamos usando o "reduce()" para calcular a soma de todos os números do array. A cada iteração, a função de callback recebe o acumulador (que começa em 0) e o valor atual do array. A função de callback retorna a soma do acumulador com o valor atual, que se torna o novo acumulador para a próxima a iteração. 

//O método "reduce" é muito versátil e pode ser usado para realizar uma variedade de operações em arrys, como cálculos de média, encontra o maior ou menor valor, concatenar strings, entre outros. É uma ferramenta poderosa para transformar e resumir dados em um arrays. 
