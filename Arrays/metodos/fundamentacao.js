//um "array" é conjunto ordenado de valores. Cada valor é chamado de "elemento" e cada "elemento" tem uma posição númerica do "array", conhecida como "indice". Os "arrays" em JavaScript são "não tipados": um elemento do array  podde ser de qualquer tipo e diferentes elementos do mesmo "array" podem ser de tipos diferentes. Os elementos podem ser até objetos de outros "arrays", que permite a criação de estruturas de dados complexas, como arrays de objetos e arrays de arrays. Os arrays em JavaScript são baseados em zero e usam índices de 32 bits: o índice do primeiro elemento é 0 e o índice mais alto é 4294967294 (232−2), para um tamanho de array máximo de 4.294.967.2954.294.967.295 elementos. 

// Os "arrays" em JavaScript são dinâmicos: eles crescem ou diminuem conforme o necessário e não há necessidade de declarar um tamanho fixo para o array ao criá-lo ou realocá-lo quando o tamanho muda. os arrays em javaScript podem esparços: os elementos não precisam ter índices contíguos e pode haver lacunas. Todo array em JavaScript tem uma propriedadde "length". Para arrays não esparsos, essa propriedadde específica o número de elementos no array. Para arrays esparsos, "length" é maior do que o índice de todos os elementos. 

//Arrays em JavaScript são uma forma especializada de objeto e os índices de array são na verdade pouco mais do que nomes de propriedade que por acaso são inteiros. Vamos falar mais sobre as especializações de arrays em outra parte desde capítulo. As implementações normalmente otimizam os arrays, de modo que o acesso aos elementos indexadas numericamente em geral é muito mais rápido do que o acesso às propriedades de objetos normais. 

//Os arrays herdam propriedade de array.prototype, que define um conjunto rico de métodos de manipulação de array. A maioria desses métodoss é "génericca", ou seja, funcionam corretamente não apenas para verdadeiros, mas para qualquer "objeto semelhante a um array". Vamos 

//Se tivermos uma lista de itens (uma lista de nome de carros, por exemplo), armazenarr os carros em variáveis úniccas poderia ser assim. 

let car1 = "Audi"
let car2 = "Volvo"
let car3 = "BMW"

console.log(`${car1}, ${car2}, ${car3}`);
console.log(`${car1[0]} ${car1[1]} ${car1[2]} ${car1[3]}`);
console.log(`${car2[0]} ${car2[1]} ${car2[2]} ${car2[3]} ${car2[4]}`);
console.log(`${car3[0]} ${car3[1]} ${car3[2]}`);


console.log(`=========== for =========`);
for(let i = 0; i < car1.length; i++){
    console.log(car1[i]);
}

//No entanto se tiversemos quer percorrer e encontrar um específico? E não tiversemos 3 carros carros, mas 300? 
//A solução é uma matriz! 
//Uma matriz conter muitos valores sob um único nome e podemos acessar os valores referindo-se a um número de índice. 
