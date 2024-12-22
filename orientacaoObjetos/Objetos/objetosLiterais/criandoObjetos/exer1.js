//Os objetos podem ser criados com objetos literais, com a palavra-chave new e com a função Object.creat(). 

// Objetos literais: A maneira mais fácil de criar um objeto é incluir um objeto literal no código JavaScript. Um objeto literal é uma lista separada com vírgulas  de pares com nome: valor separados por dois-pontos, colocados entre chaves. Um nome de propriedade é um identificador JavaScript ou uma string literal (a string vazia é permitida). Um valor de propriedade é qualquer expressão JavaScript; o valor da expressão (pode ser um valor primitivo ou um valor de objeto) se torna o valor da propriedade. Aqui estão alguns exemplos: 

// let vazio = {nome: "Fagner", idade: "43"}
// let ponto = {x:0, y:0}

// console.log(vazio);
// console.log(ponto);

//Objetos literais em JavaScript, também conhecidos como notação de lobjetos literais ou objetos de sintaxe literal, são uma forma de criar objetos de maneira concisa e direta usando a sintaxe de {}. Essa é a maneira mais comum e prática de criar objetos em JavaScript. Aqui estão os principais conceitos sobre objetos literais em JavaScript. 

//1. Sintaxe Básica: Criamos um objeto literal envolvendo um conjunto de pares chave-valor em chaves "{}". A chave é uma string que atual como o nome da propriedade, seguida por dois pontos ":" e o valor da propriedade. Vários pares chave-valor são separados por vírgulas. 

const pessoa = {
    nome: "Fagner",
    idade: 43, 
    cidade: "Belmonte" 
}

console.log(pessoa.nome);

//2. Pares Chave-Valor: Cada par chave-valor em um objeto literal é chamado de propriedade. A chave (nome da propriedade) deve ser uma string ou um símbolo, enqunato o valor pode ser qualquer tipo de dado válido em JavaScript, incluindo números, strings, booleanos, outros objetos, funções e até mesmo outros objetos literais. 


console.log("========= Acesso a propriedades ==============");
//3. Acesso a propriedades: Podemos acessar as propriedades de um objeto literal usando a notação de ponto ("objeto.propriedade") ou a notação de colchetes ("objeto["propriedade"]")
// console.log(pessoa.nome);

console.log("======= Adição e Remoção de Propriedades =======");
//4. Podemos adicionar ou remover propriedades de um objeto literal dinamicamente, mesmo após a criação do objeto. 
// pessoa.cidade = "Vitoria"
// console.log(pessoa.cidade);
// delete pessoa.cidade
// console.log(pessoa);

console.log("======= Valores de  Propriedade Dinâmica =======");
//5. As chaves de propriedade podem ser calculadas dinamicamente usando a notação do colchetes. Isso é útil quando não conhecemos a chave antecipadamente ou ela é armazenada em uma variável. 

const teste = "Esmeralda"; 
console.log(pessoa[teste]);

console.log("======= Objetos Aninhados  =======");
//6. Podemos criar objetos aninhados dentro de objetos literais. Isso permite representar estruturas de dados complexas. 

const aluno = {
    nome: "Fagner", 
    notas: {
        matematica: 9.0,
        Portugues: 8.3, 
        Historia: 9.5, 
        Geografia: 9.0, 
        Ciencias: 7.8
    }
}

console.log(aluno.notas);

console.log("================ Métodos  ==================");
const retangulo = {
    largura: 10.8, 
    altura: 5.9, 
    calcularArea: function(){
       return this.largura * this.altura
    }
};

console.log(retangulo.calcularArea());