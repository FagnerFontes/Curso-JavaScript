//Funções geradoras, também conhecidas como geradoras, são uma forma especial de funções em JavaScript que permitem pausar e retornar sua execução, mantendo seu contexto interno. Isso significa que, quando uma função geradora é chamada, ela não é executada imediatamente até o final. Em vez disso, ela retorna um objeto chamado "gerador" que pode ser iterado para obter os valores produzidos pela função ao longo do tempo. 

//As funções geradoras são definidas usando a sintaxe da função "função", e dentro delas, podemos usar a instução "yeld" para produzir valores e "pausar" a execução. Quando iteramos sobre o gerador usando o método ".next()". 

//Isso é útil para lidar com sequências de valores infinitas ou grandes volumes de dados que não precisam ser carregados todos de uma vez na memória. 

//Aqui está  um exemplo simples de uma função geradora que gera uma sequência infinita de números pares: 

function * numerosPares(){
    let numero = 0; 

    while(true){
        yield numero; 
        numero += 2
    }
}

const gerador = numerosPares()

console.log(gerador.next().value);
console.log(gerador.next().value);
console.log(gerador.next().value);
console.log(gerador.next().value);

//Neste exemplo, a função "numerosPares" é uma função geradora que produz números pares indefinidamente quando iterada. Cada vez que chamamos "gerador.next", a execução é pausada no "yeld" e o valor é retornado. Isso permite que criemos sequências de valores que precisam ser carregados de uma vez na memória, economizando recurso e possibilitam o processamente sob medida