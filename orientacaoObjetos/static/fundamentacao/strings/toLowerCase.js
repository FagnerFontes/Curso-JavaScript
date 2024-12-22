//Este método transforma todas as letras da sua string em minúsculas 

//1.Crie um programa que receba uma string como parâmetro e retorna essa string em letras minúsculas
/* const nome = "Fagner Fontes Batista"//recebe uma string
const nomeMinusculo = nome.toLowerCase()//Transforma todas as letras da string em minúsculas. 
console.log(nomeMinusculo);//Imprime todas as palavras da string em minúsculas. 
 */
//2. Escreva um programa que verifica se uma entrada de usuário é igual a determinada palavra, independentemente de estar em maiúsculas ou minúsculas. 

const userInput = prompt("Digite uma palavra")
const targetWord = "javascript"

if(userInput.toLowerCase() === targetWord){
    console.log("Palavra correta");
}else{
    console.log("Palavra incorreta");
}