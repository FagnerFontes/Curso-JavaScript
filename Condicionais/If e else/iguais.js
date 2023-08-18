//Crie uma função que receba 2 números. Compare esses números entre si. Se os números forem iguais, retorna uma mensagem de sucesso 


let num1 = parseFloat(prompt("Insira o primeiro número"))
let num2 = parseFloat(prompt("Insira o segundo número"))


 function iguais(num1, num2) {
   
    
if (num1 === num2) {
    console.log("Sucesso");
    }else(
        console.log("Os números não são iguais")
    )
} 

iguais(num1, num2)

 
