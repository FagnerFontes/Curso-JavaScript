//Funções parametrizadas, também conhecidas como funções para parâmetros, são funções em programação que aceitam argumenttos ou valores de entrada quando são chamadas. Esses argumentos são passados para a função quando ela é invocada e são usaddos dentro da função para realizar operações ou cálculos específicos. Os parâmetros permitem que as funções  sejam flexíveis e reutilizávvel, pois permitem que personalizemos o comportamento da função para diferente situações. 

//Definindo uma Função Parametrizaada
function saudacao(nome) {
    console.log(`Olá, ${nome}`);
}

//Ao chamar a função "saudacao" com diferentes argumentos, podemos personalizar a saudacao que a função produz, sem precisar reescrever a function para cada nome

saudacao("Fagner")
saudacao("Esmeralda")