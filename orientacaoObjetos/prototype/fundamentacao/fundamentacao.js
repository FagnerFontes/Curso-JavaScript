//O protótipo ("prototype") é uma parte fundamental da herança em JavaScript e é um dos principais conceitos que permite que objetos herdem propriedades e métodos de outros objetos. Aqui está uma explicação mais detalhada sobre o protótipo em JavaScript: 

//1. Objetos em JavaScript: Em JavaScript, todos os objetos têm um protótipo. Um objeto é uma instância de uma função construtora ou um objeto literal. Por exemplo, podemos criar objetos usando uma função construtora, uma classe ou simplesmente usando um objeto literal: 

//2. Protótipo como Cadeia de Herança: A herança em JavaScript é baseada em protótipos. Cada objetos tem uma referência a seu protótipo, que é outro objeto. Esses protótipos formam uma cadeia de herança que permite que um objeto herde propriedades e métodos de seu protótipo. Isso é conhecido como herança protótípica. 

//3. Propriedade "prototype" de Funções Construtoras: Quando criamos uma função construtora, ela possui uma propriedade especial chamada "prototype". Podemos adicionar métodos e propriedades a essa propriedade "prototype", e eles serão compartilhados por todas as instâncias criadas a partir da função construtora. 

function Carro(marca) {
    this.marca=marca;
}

Carro.prototype.acelerar=function(){
    console.log(`${this.marca} está acelerando.`);
}

console.log();

const meuCarro = new Carro("Toyota")
meuCarro.acelerar()

//4. Herança através do Protótipo: Quando criamos um objeto a partir de uma função construtora (usando "new"), o objeto resultante herda automaticamente todas as propriedades e métodos do protótipo da função construtora. 


//Objeto "Object.prototype": é o protótipo de todos os objetos em JavaScript. Isso significa que todos os objetos herdam métodos comuns, como "toString", de "Object.prototype". Isso é a base da herança em JavaScript. 

const objeto = {nome:"Fagner"}; 
console.log(objeto.toString());

//6. Herança de Cadeia de Protótipos: Em JavaScript, objetos podem herdar propriedade e métodos de protótipos em cadeia contínua. Isso permite criar hierarquias de herança complexas, onde um objeto pode herdar de outro, que por sua vez herda de outro, assim por diante. 

function Animal() {
    this.nome="Gato"
}

Animal.prototype.falar = function(){
    console.log("Som genérico do Animal");
}

function Cachorro() {
    this.call(this)
    this.nome
    this.nome="Cachorro"
}

Cachorro.prototype=object.create(Animal.prototype)

const meuCachorro=new Cachorro()
meuCachorro.falar()

//O prototype é uma parte essencial da flexibilidade da herança em JavaScript, permitindo que compartilhe funcionalidade comuns entre objetos e crie estruturas de herança mais complexas quando necessário. É importante entender como o protótipo funciona para tirar o máximo proveito da linguagem JavaScript. 


