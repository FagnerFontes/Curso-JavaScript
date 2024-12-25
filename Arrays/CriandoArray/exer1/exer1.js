//Uma literal de array é a maneira mais fácil de criar um array JavaScript. Assim 

console.log("========== Todos os elementos do Array ============");//Imprime todos os elementos do array
//Cria um array de marcas de carros
const Carros = ["Fiat", "Wolks", "Ford", "Kia", "Hyunday", "Audi", "Mercedez"]//Cria um array de marcas de carros
console.log(`${Carros}`);//Imprime os elementos do array carros

console.log("========== Acessando elementos  ============");//Imprime o elemento da 3ª posição do array.
const Carros2 = ["Fiat", "Wolks", "Ford", "Kia", "Hyunday", "Audi", "Mercedez"]//Cria um array de marcas de carros
console.log(`${Carros[3]}`);//Imprime o elemento da 3ª posição do array. //Kia

console.log("========== Adicionando elementos  ============");
//Cria um Array chamado Carros3
const Carros3 = ["Fiat", "Wolks", "Ford", "Kia", "Hyunday", "Audi", "Mercedez"] 
console.log(` Array Original: ${Carros3}`);//Imprime o array original
Carros3[0] = "BMW"//Modifica o conteúdo da posição 0 do array
console.log(`Array Modificado: ${Carros3}`);//Imprime o conteúdo da posição 0 do array 

console.log("==== Acessando o ultimo elemento do array  =======");
const Carros4 = ["Fiat", "Wolks", "Ford", "Kia", "Hyunday", "Audi", "Mercedez"] 
console.log(`O último elemento do array carros é:${Carros4[Carros4.length-1]}`);


console.log("========== Percorrendo um array  ============");
const Carros5 = ["Fiat", "Wolks", "Ford", "Kia", "Hyunday", "Audi", "Mercedez"]

for(let i = 0; i < Carros5.length; i++){//Percorre o array Carros5
  console.log(Carros[i]);//
}