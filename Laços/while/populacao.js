//Supondo que a população de um país A seja da ordem 80.0000 habitantes com uma taxa anual de crescrimento de 3% e que a população de B seja 200.0000 habitantes com uma taxa de crescrimento de 1.5%. Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou igualla população do país B, mantidas as taxas de crescrimento.   


//Inicializa as populações dos países A e B e o contador de anos. 

let paisA = 80000; 
let paisB = 200000
let anos = 0; 

//Enquanto a população dos país A for menor ou igual à população do país B

while (paisA <= paisB) {
    //Atualiza a população do país A addiconanxdo a taxa de crescrimento 3%
    paisA += paisA * 0.03
    

    //Atualiza a população do país B adicionando a taxa de crescimento de 1.5%
    paisB += paisB * 0.015


    //Incrementa o contador de anos

    anos++
}

//Quando o laço terminar, a população do país a ultrapassou ou igualou a população B 

console.log(`Após ${anos} anos, a população do país A ultrapassará a população do país B.`);

//Imprime as populações atualizadas de ambos os países
console.log(`População do país A: ${paisA.toFixed(0)}`);
console.log(`População do país A: ${paisB.toFixed(0)}`);