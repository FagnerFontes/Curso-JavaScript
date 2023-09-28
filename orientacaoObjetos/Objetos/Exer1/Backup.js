/* //Em JavaScript, objetos são estuturas de dados que permitem armazenar e organizar informações relacionadas em pares de chave-valor. Cada chave (também chamada de propriedade) está associada a um valor, esses pares chave-valor são agrupados dentro de um objeto. Os Os objetos são uma das estruturas de dados mais fundamentais e poderosas em JavaScript, permitindo criar estruturas complexas e representar entidade do mundo real de forma organizada. 

/* const objeto = {
    chave1: valor1, 
    chave2: valor2
}
 */
//"objeto": é o nome do objeto que estamos criando. Pode ser qualquer nome válido em JavaScript. 

//"chave": é a chave (propriedade) do objeto, que é uma string e funciona como um identificador único para o valor associado. 

//"valor": é o valor associado à chave. Pode ser qualquer tipo de dado válido em JavaScript, como números, string, arrays, outros objetos e até mesmo funções. 

//Exemplo de objeto em JavaScript: 


/* const pessoa = {
    nome: "Fagner", 
    idade: "30", 
    cidade: "Vitoria", 
    hobbies: ["ler", "correr", "cozinhar"], 
    saudacao: function () {
        return `Olá meu nome é ${this.nome} e eu tenho ${this.idade} anos. `
    }
}

//console.log(pessoa.nome = "Fagner");
console.log(pessoa.saudacao());
console.log(pessoa); */

//Os objetos em JavaScript são muito versáteis e fundamentais para a criação de extruturas complexas, representação de dados e interação com APIs e bancos de dados. Eles desempenham um papel crucial no desenvolvimeto de aplicações modernas em JavaScript.  */

//*************************CFB Cursos****************************/

//=====================Concatena Arrays==========================/

/* let n1 = [10, 20, 30]
let n2 = [11,22,33,44,50]
let n3 = [...n1, ...n2]

console.log("n1:" + n1);
console.log("n2:" + n2);
console.log("n3:" + n3); */

//==================== HTML Colecttions=========================
const objetos1 = document.getElementsByTagName("div")
const objetos2 = [...document.getElementsByTagName("div")]

console.log(objetos1);
console.log(objetos2[2]);

