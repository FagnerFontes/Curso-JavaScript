//O método "every()" é uma função disponível em arrays em JavaScript que verifica se todos os elementos de um array satisfazem um determinada condição. Ele é usado para testar se todos os elementos de um array atendem a uma condição especifica. Aqui estão os fundamentos do método "every()": 

//* Sintaxe: A sintaxe geral do "every()" é a seguinte: 
    // array.every(funcaoDeTeste(elemento, indice, array), thisArg); 

    //* "funcaoDeTeste": é uma função que é executada para cada elemento do array. 

    //* "elemento": é o elemento atual sendo avaliado. 

    //* "indice": é o indice do elemento atual. 

    //* "array":  é o array original sendo percorrido

    //* "thisArg": (opcional) é o valor usado como "this" quando a função de teste é executada. 

//* Retorno: O método "every()" retirna "true".  Se a função de teste retornar "true" para todos os elementos no array. Caso contrário, ele retorna "false". 

//* Comportamento: O "every()" percorre o array da esquerda para a direita, ou seja, do primeiro elemento ao último. Assim que encontra um elemento para o qual a função retorna "false", ele para de pecorrer o array e retorna "false". Isso signica que se pelo menos um elemento não atender ao critério, a função "every()" retornará "false". 

const numeros = [10,20,30,40,50,15 ]

const todosMaioresQue5 = numeros.every(numero => numero > 5)
console.log(todosMaioresQue5);

//O método "every()" é útil quando se deseja verificar se todos os elementos de um array atendem a uma condição específica. Ele é usado para realizar validações em todos os elementos do array e retorna um valor booleano com base nessa validação. Se pelo menos um elemento não atender à condição, o método "every()" retorna "false". Caso contrário, ele retorna "true". 