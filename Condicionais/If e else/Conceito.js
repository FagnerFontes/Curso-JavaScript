//Faça um programa que lê três notas obtidas por aluno numa disciplina ao longo de um semestre, e calcule a sua média. A atribuição de conceitos obedece à tabela abaixo:
//media de Aproveitamento  Conceito
//Entre 9.0 e 10.0            A
//Entre 7.5 e 9.0             B
//Entre 6.0 e 7.5             C
//Entre 4.0 e 6.0             D
//Entre 4.0 e zero            e

//O algoritmo deve mostrar na tela as notas, a média, o conceito correspondente e a mensagem "APROVADO" se o conceito for A,B ou C "REPROVADO" se o conceito for D e E.

/* const nota1 = parseFloat(prompt("Digite a primeira nota"))
const nota2 = parseFloat(prompt("Digite a segunda nota"))
const nota3 = parseFloat(prompt("Digite a terceira nota"))
 */

function calcularMedia(notas) {
    let soma = 0;
    for (let nota of notas) {
      soma += nota;
    }
    return soma / notas.length;
  }
  
  function obterConceito(media) {
    if (media >= 9.0 && media <= 10.0) {
      return "A";
    } else if (media >= 7.5 && media < 9.0) {
      return "B";
    } else if (media >= 6.0 && media < 7.5) {
      return "C";
    } else if (media >= 4.0 && media < 6.0) {
      return "D";
    } else {
      return "E";
    }
  }
  
  function exibirResultado(notas, media, conceito) {
    console.log("Notas: " + notas.join(", "));
    console.log("Média: " + media.toFixed(2));
    console.log("Conceito: " + conceito);
    
    if (conceito === "A" || conceito === "B" || conceito === "C") {
      console.log("APROVADO");
    } else {
      console.log("REPROVADO");
    }
  }
  
  const notasAluno = [8.5, 7.0, 9.2]; // Altere as notas aqui
  const mediaAluno = calcularMedia(notasAluno);
  const conceitoAluno = obterConceito(mediaAluno);
  
  exibirResultado(notasAluno, mediaAluno, conceitoAluno);