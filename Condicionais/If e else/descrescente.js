//Faça um programa que leia três números e mostre-os em ordem decrescente.

const valor1 = parseFloat(prompt("Insira o primeiro valor"));

const valor2 = parseFloat(prompt("Insira o segundo valor"));

const valor3 = parseFloat(prompt("Insira o terceiro valor"));

function decrescente(a, b, c) {
  //Verifica as combinações possíveis para ordenar os números em ordem decrescente

  if (valor1 >= valor2 & valor1 >= valor3) {
    if (valor2 >= valor3) {
      console.log(`${valor1}, ${valor3}, ${valor2}`);
    } else {
      console.log(`${valor1}, ${valor3}, ${valor2}`);
    }
  }else if(valor2 >= valor1 && valor2 >= valor3){
    if (valor1 >= valor3) {
        console.log(`${valor2}, ${valor1}, ${valor3}`);
    } else {
        console.log(`${valor2}, ${valor3}, ${valor1}`);
    }

  }else{
    if (valor1 >= valor2) {
        console.log(`${valor3}, ${valor1}, ${valor2}`);
    }else{
        console.log(`${valor3}, ${valor2}, ${valor1}`);
    }
  }
}

decrescente ()
