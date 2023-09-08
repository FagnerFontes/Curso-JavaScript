// * É usado para selecionar todos os elementos que correspondem a um seletor CSS específico. 

// * Ele retorna uma NodeList(não um array) contendo todos os elementos correspondentes. 

// * Se nenhum elementos corresponder ao seletor, ele retornará uma NodeList vazia.

const elementos = document.querySelectorAll(".classe")

//Ambos os métodos aceitam qualquer seletor CSS válido como argumento. Podemos selecionar elementos por classe, ID, nome da tag, atributos e qualquer combinação desses. 

//Exemplo de seleção por ID: 
const elemento = document.querySelector("#meuID")

//Exemplo de seleção por nome de tag: 
const elementos1 = document.querySelectorAll("p")

//Exemplo de seleção por atributo 
const elementos2 = document.querySelectorAll("[data-alvo]")

console.log("Oi");

const divTodos = [...elemento.getElementsByTagName("div")]
console.log(div);