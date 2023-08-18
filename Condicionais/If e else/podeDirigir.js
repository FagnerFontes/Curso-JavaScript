//Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade)

const idade = parseFloat(prompt("Qual sua idade?"))

function maiorIdade(idade) {
    
    if (idade > 18) {
        console.log(`Você tem ${idade} anos, e pode dirigir`);
    } else {
        console.log(`Você tem ${idade} anos, e não tem permissão digigir`);  
    }
}

maiorIdade(idade)