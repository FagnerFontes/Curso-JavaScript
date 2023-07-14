


//prompt("Qual o seu nome")
//console.log(prompt("Qual o nome?"));//Solicita que o usuário digite seu nome, e imprime no console

//const novaVariavel = 100// Const é imutável 
//console.log(novaVariavel);

//let idade = 23


//console.log(idade = 20);

/* let primeiroNome = prompt ("Digite seu nome")//Solicita ao usuário que digite primeiroNome
let segundoNome = prompt("Digite seu sobrenome") //Solicita ao usuário  que digite o segundoNome
let idade = 43 //Imprime a idade do usuário
let estudante = true */

//console.log("Meu nome é ", primeiroNome, segundoNome, ", e tenho", idade , " anos", estudante);//Imrime as informações do usuário
//console.log(typeof idade );


//******************** Lógica de Programação **************************/

/* let a = 20 

resto = 20 % 4 

console.log(resto); */

//=====================Simplificadores Aritméticos==========================
let resultado = 0; // Inicializa a variável resultado com o valor 0

// Soma 20 ao resultado
//resultado = resultado + 20;
//console.log(resultado);

// Outra forma de somar 20 ao resultado
//resultado += 20;
//console.log(resultado);

// Subtrai 10 do resultado
//resultado = resultado - 10;
//console.log(resultado);

// Outra forma de subtrair 10 do resultado
//resultado -= 10;
//console.log(resultado);

// Multiplica o resultado por 5
//console.log(resultado);
//resultado *= 5;
//console.log(resultado);

// Divide o resultado por 4
//console.log(resultado);
//resultado /= 4;
//console.log("O resultado da divisão é " + resultado);


//**********************Strings*******************/

//Método length
const nome = "   Fagner Fontes Batista"//Cria uma constante de string
console.log(nome.length);//Verifica quantos caracteres contém a string

//Método toLowerCase()
//Este método transforma todas as letras da sua string em minúsculas 
const nomeMinusculo = nome.toLowerCase()
console.log(nomeMinusculo);

//Método toUpperCase() 
//Este método transforma todas as letras da sua string em maiúsculas
const nomeMaiusculo = nome.toUpperCase()
console.log(nomeMaiusculo);

//Método trim 
//Este método retira os espaços que existem antes e depois da string 
console.log(nome.trim());


//nome.includes("Fagner")
console.log(nome.includes("Fagner"));