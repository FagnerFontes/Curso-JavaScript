//Faça um programa para a leitura de outras notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
//A mensagem "Aprovado com distinção, se a média for menor do que sete; "
// *A mensagem "Aprovado", se a média for menor que sete; 
// * A mensagem "Reprovado se a média for menor menor que 7"

let primeiraNota = prompt("Digite a primeira nota");
let segundaNota = prompt("Digite a segunda nota");
let terceiraNota = prompt("Digite a terceira nota");

// Convertemos as notas para números usando parseFloat
let nota1 = parseFloat(primeiraNota);
let nota2 = parseFloat(segundaNota);
let nota3 = parseFloat(terceiraNota);

let media = (nota1 + nota2 + nota3) / 3; // Correção na fórmula da média

function aprovado(media) {
    if (media === 10) {
        console.log("Aprovado com distinção");
    } else if (media >= 7) {
        console.log("Aprovado");
    } else if (media < 7) {
        console.log("Reprovado");
    }
}

aprovado(media); // Correção na chamada da função