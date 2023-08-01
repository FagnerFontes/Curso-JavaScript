//Imprime a tabuada do 7

const multiplicador = parseFloat(prompt("Qual tabuada deseja?"))

for (let i = 1; i <= 10; i++) {
  resultado = multiplicador * i;
  console.log(`${multiplicador} X ${i}  = ${resultado}`);
}
