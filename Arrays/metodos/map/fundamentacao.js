//O método "map()" é uma função de alto nível em JavaScript que é usada para criar um novo array a partir de outro array, aplicado uma função  de transformação a cada elemento do array original. Ele retorna um novo array com o mesmo tamanho do array original, onde cada elemento é resultado da aplicação da função de callback. 

//A assinatura básica do método "map()" é a seguinte: 

// Const novoArray = arrayoriginal.map(callback(elementoAtual, index, arrayoriginal))


//------------------------sintaxe-----------------------------

//* arrayOriginal: O array no qual se deseja aplicar a transformação. 

//* callback: Uma função que é chamada para cada elemento do array. Ela recebe três argumentos: 

    //* elementoAtual: O elemento atual sendo processado no array. 
    
    //* index: (opcional): O índice do elemento atual no array. 

    //* arrayOriginal (opcional): O próprio array original. 
    
//----------------------------------------------------

//A função de callback é executada uma vez para cada elemento do array original, e o valor retornado por ela é colocado no novo array resultante. Ao final, o método "map()" retorna o novo array completo, que contém os resultados das transformações aplicadas a cada elemento do array original. 

//Aqui está um exemplo de uso do método "map()": 

const numeros = [1,2,3,4,5,6,7,8,9]
const quadrados = numeros.map(numero => numero * numero)

console.log(`  ${numeros}`);
console.log(`${quadrados}`);

//Neste exemplo, o método "map()" foi usado para criar um novo array "quadrados" com os quadrados de cada número no array original "numeros". 

//O método "map()" é uma ferramenta poderosa para transformar arrays e é frequentemente usado para gerar listas de elementos renderizados em interfaces de usuário, realizar cálculos em massa e manipular dados de maneira eficiente. 