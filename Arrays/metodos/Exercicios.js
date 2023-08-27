console.log("===============Exer1===============");
//Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima no console a seguinte mensagem: "emailDoUsuário foi cadastrado com sucesso"; 

/* let nome = prompt("Qual o seu nome?")

let email = prompt("Qual o seu email?")

console.log(`O email ${email} foi cadastrado com sucesso, bem vindo ${nome}`)

console.log */("===============Exer2===============");

/* comidas = ["pizza", "pastel", "feijão", "peixe", "requeijão"]

console.log(`A minhas 5 comidas preferidas são: ${comidas}`);

console.log */("===============Exer3===============");
//2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    
//a) Imprima no console o array completo
    
//b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas. 
/* let comidas = ["pizza", "pastel", "feijão", "peixe", "requeijão"]
console.log(`Array original: ${comidas}`);
const comidaFavorita = prompt("Qual a sua comida favorita?")
comidas.splice(0,0, comidaFavorita)
console.log(`Array alterado: ${comidas}`); */


console.log ("===============Exer3===============");
//a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

//c) Imprima o array no console

//d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

//e) Remova da lista o item de índice que o usuário escolheu.

//f) Imprima o array no console
let tarefa1 = prompt("Digite a primeira tarefa");
let tarefa2 = prompt("Digite a segunda tarefa");
let tarefa3 = prompt("Digite a terceira tarefa");

let listaDeTarefas = [tarefa1, tarefa2, tarefa3];

console.log(listaDeTarefas);

let indiceRemover = prompt("Digite o índice da tarefa que você já realizou (0, 1 ou 2):");
indiceRemover = parseInt(indiceRemover); // Convertendo o valor digitado para número inteiro

// Verificando se o índice é válido antes de remover
if (indiceRemover >= 0 && indiceRemover < listaDeTarefas.length) {
  listaDeTarefas.splice(indiceRemover, 1); // Removendo o elemento do array
  console.log(listaDeTarefas);
} else {
  console.log("Índice inválido! Digite um índice válido (0, 1 ou 2).");
}