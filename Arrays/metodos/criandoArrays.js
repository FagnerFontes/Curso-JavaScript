//A maneira mais fácil de criar um array literal, que é simplesmente uma lista dde elemeentos de array separados com vírgulas dentro de colchetes. Por exemplo. 

let vazio = [] ; 
let primos = [2,3,5,11]; 
let misto = [1.1, true, "a"]

//Os valores de um array não precisam ser constantes. Podem ser expressões arbitrárias: 
let base = 10244;
let tabela = [base, base+1, base+3];

//Os array literais podem conter objetos literais ou outros literais: 
var b = [[1,{x:1, y:2}], [2, {x:3, y:4}]];

//Se um array contém várias vírgulas seguiddas sem qualquer valor entre elas, o array é esparso. Os elementos de array para os quais os valores omitidos não existem, mas aparecem como underfined se você os consulta. 

let contador = [1,3]//Elementos nos índices 0 e 2. cont[1] => underfined
let underfined = [,,]//Array sem elementos mas com comprimento 2 

//Sintaxe de array literal permite uma vírgula opcional à direita; portanto, [,,] tem apenas dois elementos, não três. 

//Outro moddo de criar um array é com a construtorra Array(). Essa construtora "Array ()". Essa construtora pode ser chamada dde três maneiras distintas: 

// * Chamadda sem argumentos: 
    let a = new Array(); 
//Esse método cria um array vazio sem elementos e é equivalente ao array literal []

//* Chamada com um único argumento numérico, o qual especifica um comprimento: 
    let b = new Array(10)

//Essa técnica cria um array com o comprimento especificado. Essa forma da construtora "array()" pode ser usada para fazer a alocação prévia de um array quando se sabe antecipadamente quantos elementos vão ser necessários. Note que valor algum é armazenado no array e que as propriedades de índice "0", "1", etc. do array nem mesmo são definidas para o array. 

//* Especificação explícita de dois ou mais elementos de array ou de apenas um elemento não númerico para o array. 
let c = new Array(5,4,3,2,1, "testando, testando"); 

//Nesta forma, os argumentos da construtora se tornam os elementos do novo array. Usar um array literal é quase sempre mais simples do que essa utilização da construttora Array().  