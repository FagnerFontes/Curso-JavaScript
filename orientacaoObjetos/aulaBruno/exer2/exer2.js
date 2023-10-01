class Carro {//Definição da classe Carro com um construtor que aceita um parâmentro "pnome"
    constructor(pnome,ptipo ){
        this.nome=pnome//Inicializa a propriedade "nome" do objeto 
        this.tipo=ptipo
        if (ptipo===1) {
            this.tipo="Esportivo"
            this.velMax=300
        }else if(ptipo===2){
            this.tipo="SUV"
            this.velMax=180
        }else if(ptipo){
            this.tipo="Passeio"
            this.velMax=160
        }
    }
}

//Criação de três instâncias (objetos) da classe Carro com nomes diferentes. 
let p1 = new Carro("Ferrari", 1)
// Cria uma instância "p1" da classe Carro com o nome "Argo".
let p2 = new Carro("G63", 2 )
// Cria uma instância "p1" da classe Carro com o nome "Chronos".
let p3 = new Carro("Cruze",3)
// Cria uma instância "p1" da classe Carro com o nome "Prisma".

// Exibe as instâncias "p1" e "p2" no console.
console.log(p1);// Exibe o objeto "p1" no console, que inclui a propriedade "nome" com o valor "Argo".
console.log(p2);// Exibe o objeto "p2" no console, que inclui a propriedade "nome" com o valor "Chronos".
console.log(p3);// Exibe o objeto "p3" no console, que inclui a propriedade "nome" com o valor "Prisma".

//Este código define uma classe chamada "Carro" com um construtor que aceita um parâmetro "pnome". Em seguinda, ele cria três objetos da classe "Carro" (p1, p2,p3) com nomes diferentes e os exibe no console. 

//Cada objeto "Carro" criado possui uma propriedade "nome" que inicializa com valor fornecido ao criar a instância. No exemplo fornecido, três carros são criados com os nomes "Argo", "Chronos" e "Prisma". O console exibe os objetos "p1", "p2" e "p3" que contêm esses nomes como parte de seus dados. 



