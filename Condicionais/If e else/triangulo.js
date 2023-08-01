//Faça um programa que peça os 3 lados de um triângulo. O programa deverá informar se os valores podem ser um triângulo. Indique, caso os lados formem um triângulo, os mesmo é: equilátero, isósceles ou escaleno. 


/* function verificarSeTriangulo(a, b, c) {
    // Verifica se cada lado do triângulo é maior que zero
    if (a <= 0 || b <= 0 || c <= 0) {
      console.log("Não é um triângulo válido. Um dos lados tem valor não positivo.");
    } else if (a + b > c && a + c > b && b + c > a) {
      console.log("É um triângulo válido.");
    } else {
      console.log("Não é um triângulo válido. As medidas dos lados não formam um triângulo.");


      function tipoTriangulo(a,b,c) {
    if((a == b && a == c) && (b == a && b == c) && (c == a && c == b)){
        console.log(`Este é triangulo equilatero`);
    }
}

  
  verificarSeTriangulo(5, 10, 15);
  tipoTriangulo(5,5,5)

    }
  } */


function tipoTriangulo(a,b,c) {

    if (a <= 0 || b <= 0 || c <= 0) {
        console.log("Não é um triângulo válido. Um dos lados tem valor não positivo.");
      } else if (a + b > c && a + c > b && b + c > a) {
        console.log("É um triângulo válido.");
      } else {
        console.log("Não é um triângulo válido. As medidas dos lados não formam um triângulo.");}

    if((a == b && a == c) && (b == a && b == c) && (c == a && c == b)){
        console.log(`Este é triangulo equilatero`);
    }else if(a == b || b == a ){
        console.log(`Este é um triangulo isósceles`);
    }else if((a != b && a != c) && (b != a && b != c ) && (c != a && c != b) ){
        console.log(`Este é um triangulo Escaleno`);
    }
}

  
  //verificarSeTriangulo(5, 5, 15);
  tipoTriangulo(5,3,6)