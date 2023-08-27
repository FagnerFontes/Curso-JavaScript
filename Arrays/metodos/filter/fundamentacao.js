//O método "filter()"é uma função de array em JavaScript que é usada para criar um novo array contedo todos os elementos de um array original que atendem a um determinado critério, definido por uma função de retorno de chamada (callback). 

//Aqui está a sintaxe do método "filter()"

/* let array = [1,2,3,4,5]
console.log(` Array Original: ${array}`);

let novoArray = array.filter(callback(elemento, indice, array){
    //Código de lógica para determinar se o elemento deve ser incuído no novo array 
   // return true; 
}) */

//* array": O array no qual se deseja aplicar a filtragem.

//*callback: Uma função que é chamada para cada elemento do array. Ela recebe três elementos: 

    //* "elemento": O elemento atual do array. 

    //* "índice": (opcional): O índice do elemento atual no array. 
   
    //* "array" (opcional): O prórpio array do original. 

 //* A função "callback" deve retornar "true" se o elemento deve ser incluído no novo array ou "false" caso cotrário. 

 const numeros = [1,2,3,4,5,6,7,8,9,,10]
 const numerosPares = numeros.filter(numero => numero % 2 === 0 )

 console.log(`${numerosPares}`);

 //No exemplo acima, a função "filter()" é usada para criar um novo array contendo somente os números pares do array original "numeros". 
 
 //O método "filter()" é útil quando se precisa criar um subconjunto de elementos de um array com base em determinado critério. Ele não modifica o array origial, mas retorna um novo array contendo os elementos que atendem ao critério definido na função de callback. Isso facilita a  filtragem e a seleção de elementos de acordo com suas necessidades. 