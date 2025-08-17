/* function minhafunção(objeto){
    objeto.ano = "Fiat"
}

var meuCarro = {marca: "Audi", modelo: "Accord", ano: 1998, cor : "preto"}// declara o objeto meuCarro com as propriedades make, model e year
var marca, cor, ano, modelo// declara as variáveis marca, cor, ano e cor

 marca = meuCarro.marca// x recebe o valor da propriedade make do objeto meuCarro
 cor = meuCarro.cor// y recebe o valor da propriedade model do objeto meuCarro
 modelo = meuCarro.modelo// z recebe o valor da propriedade year do objeto meuCarro
ano = meuCarro.ano// z recebe o valor da propriedade year do objeto meuCarro



console.log(marca)// imprime no console o valor da variável x
console.log(cor)// imprime no console o valor da variável y;
console.log(modelo)// imprime no console o valor da variáv;
console.log(ano)// imprime no console o valor da variável z;


//console.log(cor)// imprime no console o valor da variável y
//console.log(ano)// imprime no console o valor da variável z  */
map(
    function (x) {// declara a função cube que recebe um parâmetro x
      return x * x * x;// retorna o valor de x ao cubo
    },// fim da declaração da função cube
    [0, 1, 2, 5, 10],// declara um array com os valores 0, 1, 2, 5 e 10 
  ); // => [0, 1, 8, 125, 1000]
  console.log(map(// imprime no console o resultado da função map
    function (x) {// declara a função cube que recebe um parâmetro x
      return x * x * x;// retorna o valor de x ao cubo
    },// fim da declaração da função cube
    [0, 1, 2, 5, 10],   // declara um array com os valores 0, 1, 2, 5 e 10
  )); // => [0, 1, 8, 125, 1000]

  const minhafunção = (objeto) => {// declara a função minhafunção que recebe um parâmetro objeto
    objeto.ano = "Fiat";// define a propriedade ano do objeto como "Fiat"
  }