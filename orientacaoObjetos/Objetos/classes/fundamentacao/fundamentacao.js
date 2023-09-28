//As classes são uma das principais características introduzidas na versão ES6 para suportar a programação orientada a objetos. Eles fornecem uma maneira mais clara e estruturada de definir objetos e construtores em comparação com a abordagem de "prototipagem" usada anteriormente. Aqui estão as fundamentações sobre classes em JavaScript: 

//1. Declaração de Classe: Para declarar uma classe usa-se a palavra-chave "class", seguida pelo nome da classe. Por convensão, o nome da classe começa com letra maiúscula. 

// class Pessoa1 {
//     //conteúdo aqui
// }

//2. Construtor: O construtor é um método especial dentro de classe que é chamado quando um objeto é criado a partir da classe. Ele definido usando a palavra-chave "constructor" e é usado para incializar propriedade no objeto. 

// class pessoa2 {
//     constructor(nome){
//         this.nome = nome; 
//         this.idade = idade
//     }
// }

//3. Dentro do construtor e de outro método de instância, podemos definir propriedades de instância usando "this". Esssas propriedades são específicas para cada objeto criado a partir da classe. 

//4. Métodos de Instância: Além do construtor, podemos definir outros métodos dentro da classe que se tornam métodos de instância, ou seja, métodos que podem ser chamados em objetos criados a partir da classe. 

class Pessoa{
    constructor(nome, idade){
        this.nome = nome; 
        this.idade = idade;
    }
    saudacao(){
        console.log(`olá, meu nome é ${this.nome} e tenho ${this.idade} anos`);
    }
}

const pessoa1 = new Pessoa("Fagner", 43)
pessoa1.saudacao()

const pessoa2 = new Pessoa("Esmeralda", 68)
pessoa2.saudacao()

const pessoa3 = new Pessoa("Wackson", 36)
pessoa3.saudacao()