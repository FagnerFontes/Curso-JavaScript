//Faça um programa que calcule a média de 5 notas informadas pelo usuário. 

function calcularMedia() {//Cria uma função, que utiliza um laço "for" para solicitar ao usuário as 5 notas. 

    let soma = 0 

   for(let i = 1; i <=5; i++){
    let nota = parseFloat(prompt(`Digite a ${i}ª nota: `))//Cada ota 

    // Verifica se a nota é válida (entre 0 e 10)
    if(nota >= 0 && nota <=10){
        soma += nota; //Se a nota for válida, incrementa a nota à soma total 
    }else{
        alert("Nota inválida. Digite um valor entre 0 e 10")
        i--//Decrementa o índice para repetir a leitura da nota inválida
    }
   }

   const media = soma / 5 //Calcula a média dividindo a soma total das notas
   return media //retorna o valor da media
}

const mediaFinal = calcularMedia()//Chama a função calcularMedia() e armazena o resultado a variável mediaFinal
console.log(`A média final das notas é: ${mediaFinal.toFixed(2)}`);//Exibe a média final no cole com 2 casas decimais. 