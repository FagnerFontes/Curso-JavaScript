//Faça um programa que leia e valide as seguintes informações: 

//a. Nome: maior que 3 caracteres; 
//b. Idade: entre 0 e 150; 
//c. Salário: maior que zero; 
//d. Sexo: "f" ou "m"; 
//e. Estado Civil: "s", "c", "v", "d"

let nome = prompt("Qual o nome?")
let idade = parseFloat(prompt("Qual a idade?"))
let salario = parseFloat(prompt("Qual o salário?"))
let sexo = prompt("Qual o sexo?")
let estadoCivil = prompt("Qual o estado civil?")

let dadosCorretos = false 

while(!dadosCorretos){

 if (nome.length > 3 && idade > 0 && idade < 150 && salario > 0 && (sexo === "f" || "m") && (estadoCivil === "s" || estadoCivil ==="c" || estadoCivil === "v" || estadoCivil === "d") ) {
    dadosCorretos = true
 }else{
    
    let nome = prompt("Qual o nome?")
    let idade = parseFloat(prompt("Qual a idade?"))
    let salario = parseFloat(prompt("Qual o salário?"))
    let sexo = prompt("Qual o sexo?")
    let estadoCivil = prompt("Qual o estado civil?")
 }

}

console.log("Dados corretos:");
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Salário:", salario);
console.log("Sexo:", sexo);
console.log("Estado Civil:", estadoCivil);