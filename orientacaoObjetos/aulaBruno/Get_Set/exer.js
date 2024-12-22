class Carro {//Definição da classe Carro com um construtor que aceita um parâmentro "pnome"
    constructor(pnome,ptipo ){
        this.nome=pnome//Inicializa a propriedade "nome" do objeto 
        this.tipo=ptipo
        if (ptipo===1) {
            this.Marca= "Bentley"
            this.tipo="Esportivo"
            this.velMax=300
        }else if(ptipo===2){
            this.Marca = "Mercedes-Bens"
            this.tipo="SUV"
            this.velMax=180
        }else if(ptipo){
            this.Marca = "Mercedes-Bens"
            this.tipo="Passeio"
            this.velMax=160
        }
    }

    getTipo(){
        return this.p3
    }

    getNome(){
        return this.nome
    }

    info(){
        console.log(`Nome: ${this.nome}`);
        console.log(`Tipo: ${this.tipo}`);
        console.log(`Vel.Max: ${this.velMax}`)
        console.log(`Marca: ${this.Marca}`)
    }
}

//Criação de três instâncias (objetos) da classe Carro com nomes diferentes. 
let p1 = new Carro("Mulsanne", 1)
//Cria uma instância "p1" da classe Carro com o nome "Argo".
let p2 = new Carro("G63", 2 )
// Cria uma instância "p1" da classe Carro com o nome "Chronos".
let p3 = new Carro("GLE",3)
// Cria uma instância "p1" da classe Carro com o nome "Prisma".

console.log(p1.getNome());