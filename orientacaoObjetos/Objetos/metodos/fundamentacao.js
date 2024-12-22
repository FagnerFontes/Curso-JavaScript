//Métodos são funções associadas a objetos. Eles representam o comportamento ou ações que um objeto pode realizar.

//1. Em JavaScript podemos definir funções como propriedades de um objeto. Esas funções são chamada de método quando estão associadas a um objeto. Um método é, portante, uma função dento de um objeto. 

let pessoa = {
    nome: "Esmeralda Fontes", 
    idade: 68, 
    saudacao: function(){
        console.log("Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos");
    }
}

pessoa.saudacao()

//2. Referência ao Objeto com "this": Dentro de um método, podemos usar a palavra-chave "this" para se referir ao objeto ao qual o método pertence. Isso permite que modifiquenos as propriedades do objeto dentro do método. 

//3. Acesso a Propriedades: Os métodos podem acessar e manipular  as propriedades do objeto ao qual estão ligados. Isso permite que eles interajam com os dados do objeto de maneira significativa. 

//4. Invocação de Métodos: Chamamos um método de um objeto usando a notação de ponto, como "obnjeto.metodo()". Isso executa a função associada ao método e pode incluir argumentos, se o método os aceitar. 

let calculadora = {
    soma: function(a,b){
        return a + b
    },

    subtracao: function (a,b) {
        return a -b
    }
}

let resultadoSoma = calculadora.soma(5,3)
console.log(`O resultado da soma é: ${resultadoSoma}`);

let resultadoSubracao = calculadora.subtracao(10,4)
console.log(`O resultado da subtração é:  ${resultadoSubracao}`);

//5. Método como Propriedades: Em JavaScript, os métodos são tratados como propriedades de um objeto e podem ser passados como argumentos para funções, armazenados em variáveis e até mesmo adicionados ou removidos dinamicamente do objeto. 

//6. Métodos Pré-definidos: Além criar seus próprios métodos, a linguagem JavaScript fornece muitos método pré-definidos para objetos incorporados, como arrays ("push", "pop", "forEach") e estrings ("toUpperCase", "toLowerCase", "chart"), entre outros. Esses métodos simplificam a manipulação de objetos comuns em JavaScript. 

//Em resumo, os métodos em JavaScript são funções que são associadas a objetos e permitem que esses objetos realizem ações específicas ou forneçam funcionalidade relacionada a eles. Eles desempenham um papel crucial na programação orientada a objetos em JavaScript e ajudam a encapsular comportamento relacionados a objetos em métodos reutilizáveis. 



