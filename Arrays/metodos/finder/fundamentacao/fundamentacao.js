//O método "find" é uma função disponível em arrays em JavaScript que permite encontrar o primeiro elemento que satisfaça um determinada condição em um array. Ele é usado principalmente para pesquisar um elemento com base em algum critério personalizado a retornar o primeiro item que atenda a esse critério. 

//Aqui estão os fundamentos do método "find()"


    //Sintaxe: A sintaxe geral do "finde()": 

   // array.find(funcaoDeTeste(elemento, indice, array), thisArg);

    //* "funcaoDesteTeste": é uma função que é executada para cada elemento do array. 

    //* "elemento": é o elemento atual sendo avaliado. 

    //* "indece": é o índice do elemento atual. 

    //* "array": é o array original sendo percorrido. 

    ///* "thisArg": (opicional) é o valor usado como "this" quando a função de teste é executada. 

//* Retorno: O método "find()" retorna o primeiro elemento no array para a qual a função de texte retorna "true". Se nenhum elemento atender ao critério, ele retorna "underfined". 

//* Comportamento: O "find()" percorre o array da esquerda para a direita, ou seja, do primeiro elemento ao último. Assim que encontra um elemento que satisfaça a condição da função de texte, ele para de percorrer o array e retorna esse elemento. Isso significa que apenas o primeiro elemento que corresponde ao critério é retornado. 

const numeros = [10,20,30,40,50,60]

const encontrado = numeros.find(elemento => elemento > 19)
console.log(encontrado);

//O método "find()" é útil quando precisamos localizar o primeiro elemento que atenda a uma determinada condição em um array. Se precisamos encontrar todos os elementos que atendam a uma condição, pode usar o método "filter()". 