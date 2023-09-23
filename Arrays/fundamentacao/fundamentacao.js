//Arrays são estruturas de dados fundamentais em JavaScript e em muitas outras linguagens de programação. Eles são usados para armazenar coleções de elementos, que podem ser de qualquer tipo, como números, strings, objetos, funções e até mesmo outros arrays. Abaixo, vamos fundamentar os arrays em JavaScript. 

//===================== Declaração de Arrays ========================
//1. Podemos  declarar um array usando colchetes "[]". Por exemplo: 

let frutas = ["Maçã", "Banana", "Laranja", "Uva", "Jaca", "Pera"]//Declara arrays
console.log(`Array original: ${frutas}`);


//===================== Acesso a Elementos ========================
//3.  Podemos acessar elementos em um array usando sua posição, começando com 0 para o primeiro elemento. Por exemplo: 

let primeiraFruta = frutas[0];//"Maçã"
let segundaFruta = frutas[1];//"Banana"´

console.log(`Esta é a primeira fruta ${primeiraFruta}`);
console.log(`Esta é a segunda fruta  ${segundaFruta}`);

//===================== Tamanho do Array ========================
//4.  A propriedade "length" de um array retorna o número de elementos no array 

let numFrutas = frutas.length
console.log(`O array frutas tem ${numFrutas} elementos`);

//================ Modificação do elementos do Array ==================
// 5. Podemos modificar elementos existentes em um array atribuindo um novo valor à posição desejada. 
frutas[1] = "Abacate" //Altera o segundo elemento para "Abacate"
console.log(`Array modificado: ${frutas}`); 

//================ Adição de elementos do Array =====================
//5. Podemos adicionar elementos ao final de um array usando o método "push()"
frutas.push("Morango") //Adiciona "Morango" ao final do array
console.log(`${frutas}`);//Imprime o Array 

//================ Remoção de elementos do Array =====================
frutas.pop("Morango")//Remove o último elemento do array 
console.log(`${frutas}`);

//================ Iteração de elemento  Array =====================
//6. Podemos percorrer os elementos de um array usando loops como "for", "for...of" e "forEach". 

console.log("======= Iteração de elemento  Array con (for) =========");
for(let i = 0; i <frutas.length; i++){
    console.log(frutas[i]);
}

console.log("======= Iteração de elemento  Array con (for of) =========");
for(let fruta of frutas){//Itera os elementos do array 
    console.log(fruta);
}

console.log("======= Iteração de elemento  Array con (for in) =========");
for(let fruta in frutas){//Itera o índice do array
    console.log(fruta);
}

console.log("======= Iteração de elemento  Array con (forEach) =========");
frutas.forEach(function(frutas){
console.log(frutas);
})