//Faça um programa que pergunte em que turno você. Peça para para digitar:

//M - matutino
//V - vespertino
//N - noturno

//Imprima a mensagem "Bom Dia!!", "Boa Tarte!! ou "Boa Noite" ou "Valor Inválido" confome o caso.

const horario = prompt("Digite o Turno ");
//const escolha = prompt("M => Matutino, V => Vespertino, N => Noturno");

function saudacaoPorturno(turno) {
  if (turno === "M") {
    console.log("Bom Dia ");
  } else if (turno === "V") {
    console.log("Boa Tarde");
  } else if (turno === "N") {
    console.log("Boa Noite");
  }else {
    console.log("Digite a letra correta ");
  }
}

const turnoDigitado = prompt("Digite o turno (M => Matutino, V => Vespertino, N => Noturno): ");

saudacaoPorturno(turnoDigitado)