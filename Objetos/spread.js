//O operador de propagação, comumento conhecido como "spread", é uma funcionalidadee introduzida no ECMASCRIPT6(ES6). Ele permitque que se copie os elementos de um array ou propriedades de um objeto para outro array ou objeto de maneira de concisa e eficiente. 
//O operador spred é representado por três pontos ("..."). Quando utilizado em arrays ou objetos, ele desdobra os elementos ou propriedades e os coloca individualmente em outro array ou objeto. Isso torna mais fácil criar cópias de arrays e objetos sem alterar diretamente os originais. 

console.log("==================Exer1=========================");
//Usando spread para copiar um array: 
const vetor1 = [1,2,3,4,5]
const vetor2 = [...vetor1]
console.log(`Array original: ${vetor1}`);
console.log(`Cópia do array original: ${vetor2}`);

console.log("==================Exer2=========================");
//Usando spread para concatenar arrays: 
const frutas = ["maçã", "banana", "manga" ]
const novasFrutas = ["pêra", "jaca", "goiaba"]

const teste = [...frutas, ...novasFrutas]
console.log(`Primeira lista ${frutas}`);
console.log(`Segunda lista ${novasFrutas}`);
console.log(`Nova lista de frutas: ${teste}`);

console.log("==================Exer3=========================");
//Usando spread para adicionar elementos em um array existente: 
const array5 = [...vetor1, 6,7,8,9]
console.log(`Array original:  ${vetor1}`);
console.log(`Novo array: ${array5}`);

console.log("==================Exer4=========================");

