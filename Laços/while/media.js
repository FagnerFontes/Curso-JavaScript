//Faça um programa que calcule a média de 5 notas informadas pelo usuário. 

let soma = 0 
let contador = 1

while(contador <=2){
    let nota = parseFloat(prompt(`Digite a ${contador}ª nota: `))
    //Verifica se a nota é válida (entre 0 e 10)
    
    if(nota >= 0 && nota <=10){
        soma += nota; 
        contador++
    }else{
        alert("Nota inválida. Digite um valor entre 0 e 10")
    }
}

const media = soma / 5 //Calcula a média dividindo a soma total das notas
//return media //retorna o valor da media


/* const mediaFinal = calcularMedia()//Chama a função calcularMedia() e armazena o resultado a variável mediaFinal*/
console.log(`A média final das notas é: ${media.toFixed(2)}`);//Exibe a média final no cole com 2 casas decimais.  

