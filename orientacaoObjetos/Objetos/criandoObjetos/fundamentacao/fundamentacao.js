//O operador "new" cria e inicializa um novo objeto. A palavra-chave "new" deve ser seguida de uma chamada de função. Uma função usada dessa maneira é chamada de "construtora" e serve para inicializar um objetos recém-criado. JavaScrip básica contém construtoras internas para tipos nativos. Por exemplo: 

let x = new Object() //Cria um objeto vazio: o mesmo que {}
let a = new Array()  //Cria um novo array vazio: o mesmo que []
var d = new Date()   //Cria um objeto Date representado a hora atual

console.log(x);
console.log(a);
console.log(d);

//Em JavaScript, os objetos são uma parte fundamental da linguagem e são usados para representar e organizar dados de maneira estruturada. 

//1. Conceito de Objeto: Um objeto em JavaScript é uma coleção de pares chave-valor, onde cada chave (também chamada de propriedade) está associada a um valor. os valores podem ser de qualquer tipo de dado, incluindo números, strings, funções e até mesmo outros objetos. 

//2. Sintaxe de Objetos: Os objetos em em JavaScript são definidos utilizando "{}" e podem conter zero mais pares chave-valor separados por vírgulas. A sintaxe básica é a seguinte: 


//Criação de um objeto chamado "pessoa" com duas propriedades. 
let pessoa = {
    nome: "Fagner Fontes", //A propriedade "nome" recebe o valor "Fagner"
    idade: 43 // A propriedade "idade" recebe o valor 43
}


//Usa as propriedade de pessoa para criar um mensagem 
 console.log(`Boa noite ${pessoa.nome} você tem, ${pessoa.idade} anos`);

