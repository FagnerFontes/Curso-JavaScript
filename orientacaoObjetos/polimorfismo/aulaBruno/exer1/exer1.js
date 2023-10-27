//Definição da classe Carro
class Carro{
    constructor(tipo, estagioTurbo){
        //Cria uma instância da classe Turbo e atribui a propriedade "turbo" ao objeto Carro. 
        this.turbo=new Turbo(estagioTurbo)

        //Determina as características do caro com base no valor do parâmetro "tipo"
        if (tipo==1) {
            this.velMax=120
            this.nome="Normal"
        }else if (tipo==2) {
            this.velMax=160
            this.nome="Esportivo"
        }else if(tipo ==3){
            this.velMax=200
            this.nome="Super Esportivo"
        }

        //Aumenta a velocidade máxima do carro com base na potência do turbo
        this.velMax+=this.turbo.pot
    }

    //Método "info" para exibir informações do carro 
    info(){
        console.log(`Nome: ${this.nome}`);
        console.log(`Vel.Maxima: ${this.velMax}`);
        console.log(`Pot. Turbo: ${this.turbo.pot}`);
        console.log(`==============`);
    }
}


//Definição da classe Turbo
class Turbo{
    constructor(e){
        //Determina a potência do turbo com base no valor do parâmetro "e"
        if (e==0) {
            this.pot=0
        }else if(e==1){
            this.pot=50
        }else if(e==2){
            this.pot=75
        }else if(e==3){
           this.pot=100 
        }      
    }
}

//Definição da classe CarroEspecial que herda de Carro 
class CarroEspecial extends Carro{
    constructor(estagioTurbo){
        //Chama o construtor da classe pai (carro) com o tipo 4 e o estágio do turbo
        super(4,estagioTurbo)
        //Define o características específicas para CarroEspecial.
        this.velMax=300+this.turbo.pot
        this.nome="Carro Especial"
    }

    //Substitui o método "info" da classe pai (carro)
    info(){
        super.info()//chama o método "info" da classe pai (carro)
    }
}

//Cria instâncias de Carro e CarroEspecial
const c1=new Carro(1,0) 
const c2=new Carro(1,1)
const c3=new CarroEspecial(3)

//Chama o método "info" para exibir informações dos carros
c1.info()
c2.info()
c3.info()

//No código acima, o polimorfismo é aplicado por meio de uso de herança e métodos comuns em classes diferentes, permitindo que objetos de classes distintas sejam tratados de maneira uniforme ao chamar métodos com o mesmo nome. O principal exemplo de polimorfismo ocorre na classe "Carro" e "CarroEspecial". 

//Vamos analisar como o polimorfismo é usado neste código: 

//1. Classe Base e Derivadas: O código inclui uma classe base chamada "carro" e uma classe derivada chamada "CarroEspecial". Ambas herdam de Carro. 

//2.Método "info": Ambas as classes possuem um método chamado "info" que exibe informações sobre o carro, como nome, velocidade máxima e potência do turbo. 

//3. Sobrescita de método "info": Na classe "CarroEspecial", o método "info"  é sobrescrito isso significa que a classe "CarroEspecial" fornece uma implementação específica para o método "info" que substitui a implementação da classe base "Carro". A sobrescrita do método "info" na classe "CarroEspecial" permite que ela exiba informações adicionais especificas para carros especiais. 

//4. Uso Polimórfico: Mesmo que o método "info" seja chamado em objetos de diferentes classes ("Carro" e "CarroEspecial"), o polimorfismo garante que o método adequado seja executado, dependendo do tipo de objeto. Isso significa que, ao chamar "c1.info()", "c2.info()" ou "c3.info()", o JavaScript determina automaticamente qual implementação do método "info" usar com base no tipo do objeto. Isso é uma manifestação do polimorfismo, onde objetos de classes diferentes podem ser tratados de maneira uniforme ao chamar métodos com o mesmo nome. 

//No código de exemplo, o uso do polimorfismo permite que você trate carros normais e carros especiais da mesma forma ao chamar o método "info", tornando o código mais flexível e de fácil manutenção. Isso é uma característica fundamental da programação orientada a objetos, que promove a abstração e a reutilização de código.

