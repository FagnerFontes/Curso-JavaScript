//O método "splice()" é ma função de array em JavaScript que permite modificar o conteúdo de um array, adicionando ou removendo elementos. Ele é uma das operações mais flexíveis para a manipulação de arrays, pois pode ser usado para adicionar, remover ou substituir elementos em qualquer posição do array. 

//A sintaxe do método "splice()" é a seguinte: 

//array.splice(indice, quantidade, elemento1, elemento2, ...)

//*"array": O array que será modificado 
//*"indice": O índice onde a operação de inserção, remoção ou substituição será realizada.

//*"quantidade":Opcional. A quantidade de elementos a serem removidos, e se for omitido, todos os elementos a partir do "indice" serão removidos. 
//"elemento1, elemento2", ...Opcional. Os elementos a serem adicionados no array a partir do "indice". Se nenhum elemento for especificado, o método fará apenas uma operação de remoção. 

console.log("==================Exer1=======================");

const frutas = ["maçã", "banana", "laranja"]//Inicializa um array de frutas
console.log(`Array original: ${frutas}`);//imprime o array original
frutas.splice(2,0,"uva", "abacaxi")//Modifica o array original iserindo novas frutas.  
console.log(`Array modificado: ${frutas}`);//Imprime o array modificado 
//Neste exemplo, temos um array chamado "frutas". Usando o método "splice()", adicionamos dois novos elementos ("uva" e "abacaxi") a partir do índice2()posição da laranja no array. O primeiro argumento do "splice()" é o índice onde a operação de inserá realizada (2), o segundo argumento é a quantidade elementos a serem removidos (0, porque queremos apenas adicionar), e os elementos subsequentes são os que queremos adicionar("uva", e "abacaxi"). O resultado é array modificado com os novoss elementos inseridos. 

console.log("==================Exer2=======================");
//substituir elementos em um array: 

const animais = ["cachorro", "gato", "pássaro"]//Inicializa um array chamado "animais"
console.log(`Array original: ${animais}`);//imprime o array original
animais.splice(1,1, "peixe")//Modifica o array original, substituindo o elemento "gato" pelo elemento "peixe"
console.log(`Array modificado com elementos substituídos: ${animais}`);//Imprime o array ja com as alterações 
//No exemplo acima, temos um array chamado"animais". Usando o método "splice()", substituímos um elemennxto a partir do índice 1(posição do "gato" no array) pelo elemento "peixe". O primeiro argumento do "splice()" é o indice onde a operação de substituição será realizada (1) o segundo argumento é a quantidade de elementos a serem removido 

animais.splice(0,1)
console.log(animais);