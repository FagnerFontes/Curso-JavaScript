//Operador ternário: é uma forma simplificada de escrever condicionais que retoram um valor dependendo de uma condição. 



//Como já dito o "operador ternário" é uma forma concisa de escrever condicionais em JavaScript. Ele é chamado de "ternário" porque envolve três partes: a expressão condicional, o valor a ser retornado caso a expressão seja verdadeira e o valor a ser retornado caso a expressão seja falsa. 

//A sintaxe do operador ternário é a seguinte: 

//condição ? valorSeVerdadeiro : valoSeFalso 

console.log("================Exer1====================");
const idade = 20
const mensagem = idade >=18 ? "Maior de idade": "Menor de idade"
console.log(mensagem); 

//Nesse exemplo, a expressão "idade >= 18" é avaliada. Se a idade for maior ou igual a 18, a condição será verdadeira e a string "Maior idade" será atribuída à variável "mensagem". Caso contrário, a condição será falsa e a string "Menor de idade" será atribuída à variável "mensagem". 
//O operador ternário é útil quando precisamos tomar uma decisão simples com base em uma única condição. Elee torna o código mais conciso e legível, especialmente quando o valor a ser retornado é curto. 

console.log("================Exer2====================");
//Escreva uma função que receba um número como parâmetro e retorne a mensagem "Número par" se o número for par, e "Número ímpar" caso contrário.

function parImpar(a) {//Declara a uma função chamada parImpar
    
    
    const result = a % 2 == 0 ? "Este número é par": "Este número é impar" //Verifica o número é par ou impar
    return result//Adiciona a return aqui para retorna o valor correto
}
const resultado = parImpar(3)
console.log(resultado);

console.log("================Exer3====================");

//Escreva uma função que receba o nome de uma pessoa como parâmetro e retorne a mensagem "Olá, {nome}" se o nome não estiver vazio, e "Olá, desconhecido" caso contrário.

function ola(nome) {
    return nome !== "" ? `Olá, ${nome}` : `Olá, desconhecido`
}

console.log(ola("João"));
console.log(ola("Fagner"));
console.log(ola("Esmé"));

console.log("================Exer4====================");
