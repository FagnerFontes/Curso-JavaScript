//Faça um programa que calcule  as raízes de uma equação do segundo grau, na forma a x 2 + bx + c. O programa deverá pedidir os valores de a, b, c e fazer as consistênias, informando ao usuário nas seguintes situações: 
//a) Se o usuário informar o valor de A igual a zero, a equação não é do segundo grau e o programa não deve fazer pedir os demais valores, sendo encerrado. 
//b) 

function calcularRaizesEquacaoSegundoGrau(a, b, c) {
    // Verifica se a é igual a zero, pois uma equação do segundo grau não pode ter a igual a zero
    if (a === 0) {
      console.log("A equação não é do segundo grau.");
      return;
    }
  
    // Calcula o valor do delta
    const delta = b ** 2 - 4 * a * c;
  
    // Verifica o valor do delta para determinar a quantidade de raízes reais
    if (delta > 0) {
      // Se o delta for maior que zero, a equação possui duas raízes reais diferentes
      const x1 = (-b + Math.sqrt(delta)) / (2 * a);
      const x2 = (-b - Math.sqrt(delta)) / (2 * a);
      console.log(`As raízes da equação são: x1 = ${x1} e x2 = ${x2}`);
    } else if (delta === 0) {
      // Se o delta for igual a zero, a equação possui uma única raiz real
      const x = -b / (2 * a);
      console.log(`A equação possui uma única raiz real: x = ${x}`);
    } else {
      // Se o delta for menor que zero, a equação não possui raízes reais
      console.log("A equação não possui raízes reais.");
    }
  }
  
  // Exemplo de uso:
  calcularRaizesEquacaoSegundoGrau(1, -5, 6);
