//O operador "delete" em JavaScript é usado para remover uma propriedade de um objeto ou para remover um elemento de um array. Ele não é usaddo para remover variáveis ou valores primitivos, apenas para modificar a estrutura de objetos e arrays. 

//Sintaxe básica: 
// delete objeto.propriedade; //
// delete array[indice]; ;//Remove um elemento de um array

//Aqui estão alguns pontos-chave sobre o uso do operador "delete"

//* Remoção de Propriedades de Objettos: 
    //O operador "delete" pode ser usado para remover uma propriedade especifica de um objeto. No entanto, ele não afera variáveis declaradas com "let", nem propriedades que são declaradaas com "let" ou "const". 

    const pessoa = {
        nome: "Fagner Fontes",
        idade: 43

    }

    console.log("Antes do operador delete " , pessoa);
    delete pessoa.nome; 

    console.log("Após o operador delete" , pessoa);

//* Remoção de Elementos de Arrays 
    //O operador "delete" pode ser usado para remover um elemento específico de um array. No entanto, ele não reorganiza os índices dos elementos restantes, resultando em um elemento "underfined" no lugar do elemento removido. 

/* console.log("======Remoção de Elementos de Arrays ========");
    const numeros = [10,20,30, 40]
    console.log("array original: " + numeros); */
    /* delete numeros[1]
    console.log(`Array com elemento removido ${numeros}`); */

 //O uso do "delete" tem algumas limitações e é menos comum do que outras formas de manipular objettos e arrays. Em muitos casos, é preferível definir a propriedade como "null" ou usar métodos específicos para manipulação de objetos e arrays como "splice()" para arrays

/*  numeros.splice(3,1)
console.log(`${numeros}`); */




console.log("=========== Operador delete do JavaScript Definitivo ===========");

//Os elementos de um array podem ser excluídos com o operador "delete", exatamente como se excluir propriedades de objeto. 

vetor= [1,2,3]
console.log(`Array Original: ${vetor}`);

delete vetor[1] //agora "a" não tem elemento no índice 1
console.log(`Array com elemento deletado: ${vetor}`);

let tamanho = vetor.length//Declara uma variável com o tamanho do array

console.log(tamanho);//Imprime o tamanho do array 

//Excluir um elemento de array é semelhantte a atribuir underfined a esse elemento. Note que usar "delete" em um elemento de array não altera a proprieddade "length" e não desloca para baixo os elementos com índices mais altos, a fim de preencher a lacuna deixada pela propriedade excluídda. Se um elemento de um array é excluído, o array se torna exparso. 

//Como vimos, também é possível elementos do final de um array, simplesmente configurando a propriedade "leght" como um novo comprimemento desejado. 

//Os arrays tem têm um método pop() (el funciona com push) que reduz o cumprimento de um array de 1, mas também retorna o valor do elemento excluído. 

//Remover o último elemento de um array: 
const numeros = [1,2,3,4,5]//Inicializa um array chamado números
console.log(`Array original: ${numeros}`);//Imprime o array original
const elementoRemovido = numeros.pop()//Remove o último elemento do array
console.log(`Elemento do array que foi removido:${elementoRemovido}`);//Imprime o elemento do array que foi removido 
console.log(`Array modificado: ${numeros}`);//Imprime o array modificado 

//Por fim, splice() é o método de uso geral para inserir, excluir ou substituir elementos de um array. Ele altera a propriedadde "length" e desloca os elementos do array para índices mais altos ou mais baixos, conforme for necessário. 
console.log("         ");
const frutas = ["maçã", "banana", "laranja"]//Inicializa um array de frutas
console.log(`Array original: ${frutas}`);//imprime o array original
frutas.splice(2,0,"uva", "abacaxi")//Modifica o array original iserindo novas frutas.  
console.log(`Array modificado: ${frutas}`);//Imprime o array modificado 
//Neste exemplo, temos um array chamado "frutas". Usando o método "splice()", adicionamos dois novos elementos ("uva" e "abacaxi") a partir do índice2()posição da laranja no array. O primeiro argumento do "splice()" é o índice onde a operação de inserá realizada (2), o segundo argumento é a quantidade elementos a serem removidos (0, porque queremos apenas adicionar), e os elementos subsequentes são os que queremos adicionar("uva", e "abacaxi"). O resultado é array modificado com os novoss elementos inseridos. 