class Carro {//Classe PAI 


    constructor(nome, portas){
        this.nome = nome; 
        this.portas=portas, 
        this.cor=undefined, 
        this.ligado = false, 
        this.vel=0

    }

    ligar =function() {
        this.ligado=true
    }

    desligar=function(){
     this.ligado=false   
    }

    setCor=function(cor){
        this.cor=cor
    }
}

class Militar extends Carro{
    constructor(nome, portas, blindagem, municão){
        super(nome, portas)
        this.blindagem=blindagem
        this.municão
    }

    atirar=function(){
        if(this.municão > 0){
            this.municão--
        }
    }
}
const carro1 = new Carro("Normal", 4)
carro1.ligar()
carro1.setCor("Verde")

const carro2= new Militar("Vingador", 6, 100, 50)


console.log(`${carro1.nome}`);
console.log(`${carro1.portas, 4}`);
console.log(`Ligado: ${(carro1.ligado?"sim":"Não")}`);
console.log(`Velocidade: ${carro1.vel}`);
console.log(`Cor: ${carro1.cor}`);
console.log("=========================");

console.log(`${carro2.nome}`);
console.log(`${carro2.portas, 4}`);
console.log(`Ligado: ${(carro2.ligado?"sim":"Não")}`);
console.log(`Velocidade: ${carro2.vel}`);
console.log(`Cor: ${carro2.cor}`);
console.log("=========================");