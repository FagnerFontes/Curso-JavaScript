//Em JavaScript, o uso da palavra-chave "static" é uma característica que pode ser aplicada a métodos e propriedades em classes. Ela define métodos ou propriedades que pertencerem a instâncias individuas da classe. Isso significa que os métodos estátivos não podem ser chamados em instâncias da classe, mas sim diretamente na própria clase. Aqui estão alguns pontos fundamentais sobre o uso do "static" em JavaScript. 

//1. Métodos Estáticos: 

    //* Os métodos estátivos são definidos na classe, mas não têm acesso às propriedades ou métodos de instância. Eles podem ser chamados diretamente na classe, sem a necessidade de criar uma instância da classe. 

    //* Um métodos estático é definido usando a palavra-chave "static" seguida do nome do método. 

    //* Os métodos estáticos são frequentemente usados para criar funções de utilidade que não dependem do estado da instância, mas ainda estão relacionadas à classe.
    
    // class Exemplo{
    //     static propriedadeEstatica = "Valor compartilhado"; 
    // }

    // console.log(Exemplo.propriedadeEstatica);

    //2. Propriedades Estáticas: 

        //* Propriedades estáticas são semelhantes aos métodos estáticos, mas são usadas para armazenar valores que são compartilhados por todas as instâncias da classe. 

    //*3. Uso Comum: 

        //* Um uso comum para métodos estáticos é criar funções de fábrica que retornam instâncias da classe. 
        
        //* Propriedades estáticas são frequetemente usadas para armazenar configurações ou constantes que se aplicam a todas as instâncias da classe. 

class Pessoa{
    constructor(nome, idade){
        this.nome = nome; 
        this.idade = idade
    }

    //Método estático para criar uma pessoa com base no ano de nascimento

    static criarPessoaPeloAnoDeNascimento(nome, anoDeNascimento){
        const idade = new Date().getFullYear()-anoDeNascimento
        return new Pessoa(nome, idade)
    }
}

const pessoa1 = Pessoa.criarPessoaPeloAnoDeNascimento("Fagner", 1979)
console.log(pessoa1);

//4. Limitações: 

    //* Métodos e propriedade estáticos não podem acessar  "this" para se referir a instâncias da classe, pois eles não têm acesso ao contexto de instância. 

    //* Eles também não podem ser chamados em uma instância da classe. Tenta chamá-los em uma instância resultará em um erro. 
    
    //const objeto = new Exemplo(); 
   // objeto.metodoEstatico()//Isso resultará em um erro, pois o método é estático. 


//Em resumo, métodos e propriedades estáticos em JavaScript são úteis quando desejamos definir funcionalidades ou valores que pertencem à classe em si, em vez de a instâncias individuais da classe. Eles são acessados diretamente na classe e são úteis em situções em que precisamos criar funções de utilidade, gerenciar configurações compartilhadas ou realizar tarefas que não depenem do estado de uma instância específica. 


