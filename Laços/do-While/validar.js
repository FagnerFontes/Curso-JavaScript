
 dadosCorretos = false 

let nome = prompt("Qual o nome?")
let idade = parseFloat(prompt("Qual a idade?"))
let salario = parseFloat(prompt("Qual o salário?"))
let sexo = prompt("Qual o sexo?")
let estadoCivil = prompt("Qual o estado civil?")


do{
if (nome.length > 3 && idade > 0 && idade < 150 && salario > 0 && (sexo === "feminino" || "masculino") && (estadoCivil === "solteiro" || estadoCivil ==="casado" || estadoCivil === "viuvo" || estadoCivil === "divorciado") ) {
    dadosCorretos = true
}else{

    console.log("Dados incorretos digite os dados novamente"); /*
    let nome = prompt("Qual o nome?")
    let idade = parseFloat(prompt("Qual a idade?"))
    let salario = parseFloat(prompt("Qual o salário?"))
    let sexo = prompt("Qual o sexo?")
    let estadoCivil = prompt("Qual o estado civil?") */
}
}while(!dadosCorretos)

console.log(`Nome de usuário: ${nome}`); 
console.log(`Idade do usuário: ${idade} `);
console.log(`Salário do usuário: ${salario}`);
console.log(`Sexo do usuário: ${sexo}`);
console.log(`Estado civil do usuário: ${estadoCivil}`);

