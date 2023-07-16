//Os operadores de pré-incremento (++) e pós-incremento (++) são utilizados em linguagens de programação para incrementar o valor de uma variável numérica. Eles são comumente utilizados em loops, cálculos matemáticos e outras situações em que é necessário modificar o valor de uma variável de forma rápida e conveniente.

//Vamos explicar cada um deles: 

//1. Operador de pré-incremento(++variável): 

//Operador de pré-incremento é representado por dois sinai de mais(++), Ele utilizado antes da variável e incremeta o valor dela em 1 antes de qualquer outra operação. 

//1. Nesse exemplo, a variável "numero" é incrementada em 1 antes de ser atribuída á variável "resultado" tem o valor de 6 após a operação de pré-incremento. 

console.log("==============Exer1===============");
let numero = 5
let resultado = numero++

console.log("ewre " + numero);
console.log(resultado);
console.log("===============Exer2==============");
//==================================================
//2. Usar o operador de pré-incremento em um loop para imprimir os números de 1 a 5. 

let contador = 1 
while(contador <= 5){
    console.log(contador);
    ++contador 
}

console.log("===============Exer3==============");
//==================================================
//2. Criar uma função que retorna o próximo número após o valor passadr como parâmetro, utilizando o operador de pré-incremento

function proximoNumero(numero) {
    return ++numero
}

let numeroAtual = 10 
let proximo = proximoNumero(numeroAtual)
console.log(proximo);