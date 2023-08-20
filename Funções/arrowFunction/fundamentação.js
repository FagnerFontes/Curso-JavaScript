//Arrow function, ou funções de seta, são uma sintaxe mais curta para definir funções em JavaScript. Elas oferecem uma maneira mais concisa de escrever funções, especialmente quanddo se trata de funções simples e anônimas. 

console.log("Bom dia Fagner Fontes");

//Características importantes ddas arrws functions: 

// 1. Sintaxe Concisa: 
//A sintaxe das arrows functions é mais curta em comparação com as funções tradicionais. Elas geralmente consistem em uma lista de parâmetros, seguida pelo operador de setaa ("=>"), e finalmente a exepressão de retorno da função. Se a função tiver apenas um parâmetro, os parênteses em torno do parâmetro podem ser omitidos. 

//2. "this" Lexical: 
//Uma das principais características das arrows functions é que elas não possuem seu próprio valor "this". Em vez disso, elas herdam o valorr "this" do escopo externo no qual estão definidas. Isso evita muitos problemas comuns relacionados ao uso de "this" em functions regulares. 

//3. Não são adequadas parra Métodos de Objetos: 
//Devido à ausência do próprio "this", as arrow functions não são adequadas para serem usadas como métodos de objetos, pois, "this" não se comportarria da maneira esperada em relação ao objeto 