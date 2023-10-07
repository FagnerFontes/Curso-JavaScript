//A herança em POO é um dos conceitos fundamentais da linguagem é uma parte importante da Programação Orientada a Objetos. Ela permite que se crie hierarquias de objetos, onde um objeto (subclasse ou filho) herda propriedades e métodos de outro objeto (superclasse ou pai). Isso é útil para reutizar código, organizar objetos relacionados e estabelecer relações de especificações entre objetos. 

//Aqui estão os conceitos fundamentais relacionados à herança: 


//1: Prototypes: A herança é baseada no sistema de protótipos. Cada objeto em JavaScript possui uma propriedades especial chamada "[Prototype]" (que pode ser acessada como "proto"). Essa propriedade ou método é acessado em um objeto, o JavaScript procurar essa propriedade no objeto atual e, se não encontrar, busca no seu  protóripo, criando assim uma cadeia de protótipos. 

//2: Constructor Functions: A herança em JavaScript é frequentemente implementada usando funções construtoras. Podemos criar uma função construtora que define propriedades e métodos que serão compartilhados por objetos criados a partir dela. 

// function Animal(nome) {
//     this.nome=nome
// }

// Animal.prototype.emitirSom = function() {
//     console.log(`${this.nome} faz um som.`);
// }

// const animal = new Animal("Rex")
// animal.emitirSom()
//console.log();

//1. Herança de Protótipo: Podemos estabelecer herança de prótipo criando uma nova função que define um novo objeto de protótipo, baseado no protótipo de outra função construtora. 

// function Cachorro(nome){
//     Animal.call(this, nome)
// }

// Cachorro.prototype=Object.create(Animal.prototype)

// Cachorro.prototype.latir= function(){
//     console.log(`${this.nome} está latindo`);
// }

// const cachorro = new Cachorro("Buddy")
// cachorro.emitirSom()
// cachorro.latir()

//"class" Syntax: A partir do ECMAScript, a sintaxe de classe foi introduzida para facilitar a criação de classes e herança em JavaScript. Embora herança seja baseada em protótipos, a sintaxe de classe fornece uma maneira mais declarativa de criar e estabelecer herança. 

//Definição da classe Animal
class Animal{
    //Constructor da classe Animal que aceita um parâmetro "nome"
    constructor(nome){
        this.nome=nome//Incializa a propriedade "nome" do objeto
    }
    
    emitirSom(){//Metodo da classe Animal para emitir um som genérico
        console.log(`${this.nome} faz um som.`);
    }
}
//Definição da classe Cachorro que estende a classe Animal (herança)
class Cachorro extends Animal {
    latir(){//Método da classe Cachorro para latir
        console.log(`${this.nome} está latindo`);
    }
}

//Criação de uma instância da classe Cachorro chamada "cachorro"  com o nome "Buddy"
const cachorro = new Cachorro("Buddy")//

//Chama o método "emitirSon" da classe Animal através da instância "cachorro"
cachorro.emitirSom()//Saída: "Buddy faz um som"

//chama o método "latir" da classe Cachorro atrávés da instância "cachorro"
cachorro.latir()//Saída: "Buddy está latindo"

//Aqui está a explicação do código: 

//1. "class Animal {...}:" Define a classe "Animal". 
