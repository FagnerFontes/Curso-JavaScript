class Carro {//Definição da classe Carro com um construtor que aceita um parâmentro "pnome"
    constructor(pnome){
        this.nome=pnome//Inicializa a propriedade "nome" do objeto 
    }
}

//Criação de três instâncias (objetos) da classe Carro com nomes diferentes. 
let p1 = new Carro("Argo")
// Cria uma instância "p1" da classe Carro com o nome "Argo".
let p2 = new Carro("Chronos")
// Cria uma instância "p1" da classe Carro com o nome "Chronos".
let p3 = new Carro("Prisma")
// Cria uma instância "p1" da classe Carro com o nome "Prisma".

// Exibe as instâncias "p1" e "p2" no console.
console.log(p1);// Exibe o objeto "p1" no console, que inclui a propriedade "nome" com o valor "Argo".
console.log(p2);// Exibe o objeto "p1" no console, que inclui a propriedade "nome" com o valor "Chronos".
console.log(p3);// Exibe o objeto "p1" no console, que inclui a propriedade "nome" com o valor "Prisma".

//Este código define uma classe chamada "Carro" com um construtor que aceita um parâmetro "pnome". Em seguinda, ele cria três objetos da classe "Carro" (p1, p2,p3) com nomes diferentes e os exibe no console. 

//Cada objeto "Carro" criado possui uma propriedade "nome" que inicializa com valor fornecido ao criar a instância. No exemplo fornecido, três carros são criados com os nomes "Argo", "Chronos" e "Prisma". O console exibe os objetos "p1", "p2" e "p3" que contêm esses nomes como parte de seus dados. 



