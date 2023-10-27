//O polimorfismo é um conceito importante na POO e também pode ser aplicado em JavaScript. O termo "polimorfismo" significa "muitas formas" e, em JavaScript, ele relaciona à capacidade de diferentes objetos responderem de maneira diferente a uma chamada de método com o mesmo nome. Isso permite que se trate objetos de classes diferentes de maneira uniforme, desde que eles tenham o mesmo método (com o mesmo nome). 

//Aqui está uma explicação mais detalhada do polimorfismo em JavaScript: 

//1. Herança e Polimorfismo: No contexto da herança em JavaScript, o polimorfismo ocorre quando várias classes (ou objetos) compartilham um método com o mesmo nome, mas cada classe implementa o método de maneira específica para seu próprio comportamento. 

//2. Exemplo de Polimorfismo: Vamos considerar um exemplo em que temos uma classe base "Veículo" e duas classes derivadas "Carro" e "Moto". Ambas as classes derivadas têm um método "acelerar", mas cada uma o implementa de maneira diferente. 

class Veiculo{
    acelerar(){
        console.log("Acelerando o veículo");
    }
}

class Carro extends Veiculo{
    acelerar(){
        console.log("Acelerando o carro.");
    }
}

class Moto extends Veiculo{
    acelerar(){
        console.log("Acelerando a moto.");
    }
}

//3. Uso do Polimorfismo: O polimorfismo permite tratar objetos da clase base e das classes derivadas da mesma maneira, mesmo que implementam o método de maneira diferente. 

const veiculo = new Veiculo(); 
const carro = new Carro(); 
const moto = new Moto(); 

const listaVeiculos = [veiculo, carro, moto]

listaVeiculos.forEach((veiculo)=>{
    veiculo.acelerar()
})

//O resultado será:
//Acelerando o veículo.
//Acelerando o carro.
//Acelerando a moto.

//Apesar de chamarmos o mesmo método "acelerar" em diferentes objetos, o resultado é diferente para cada um, graças ao polimorfismo. 

//4. Beneficios do Polimorfismo: 

    //* Permite escrever código genérico que pode lidar com objetos de classes diferentes de maneira uniforme. 

    //* Facilita a manutenção e extensão do código, pois podemos adicionar novas classes derivadas sem afetar o código existente que usa polimorfismo. 

//O poliformismo é uma parte importante da programação orientada a objetos e é amplamente utilizado para criar código mais flexível, reutilizável e fácil de entender em JavaScript e outras linguagens de programação orientada a objetos. Ele ajuda a promover a abstração e a generalização de comportamento comum entre objetos diferentes. 
