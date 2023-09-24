//A diferença entre o método "map()" e a coleção  "Map" em JavaScript está relacionada ao seu propósito e ao que eles fazem. 

//1. "map" (método): 

    //* Propósito: O método "map" é um método de arrays em JavaScript que é usado para iterar sobre cada elemento de um array e aplicar uma função a cada elemento, retornando um novo array com os resultados dessas operações. 

    //* Uso: É usado em array para transforma os elementos do array original em novo array com base nas transformações definidas na função fornecida. 

    const numbers = [2,3,4,5,6,7,8,9,10]; 
    const squaredNumbers = numbers.map((number) => number * number)

    console.log(`Array original: ${numbers}`);
    console.log(`Array modificado: ${squaredNumbers}`);

    //1. "map" (Coleção): 

        //* Propósito: O objeto "Map" é uma coleção em JavScript que armazena pares de chave-valor, onde as chaves pode ser de qualquer tipo (não apenas strings) e os valores pode ser qualquer valor, incluindo objetos, funções, etc. 

        //*Uso: É usado para mapear chaves a valores, permitindo um acesso eficiente ao valores ´´
        const myMap = new Map(); 
        myMap.set("nome", "Fagner Fontes Batista")
        //myMap.set("nome", "Esmeralda Fontes Batista")
        console.log(myMap.get("nome"));

        //Resumindo, o método "map()" é usado para tranformar elementos de um array, enquanto a coleção "map" é usada para armazenar associações chave-valor de forma eficiente. Eles têm propósitos e usos muito diferentes em JavaScript
