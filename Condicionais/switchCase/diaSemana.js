//Faça um programa que leia um número e exibao dia correspondente da semana. (1- Domingo, Segunda - 2, etc), se digitar outro valor deve aparecer valor inválido. 


const numero = parseFloat(prompt("Digite o número do dia da Semana")) 

function diaSemana(numero) {
    
    switch (numero) {
        case 1:
            return "Domingo"; 
            break;
        case 2:
                return "Segunda-Feira"; 
                break;
        case 3:
                return "Terça-feira"; 
                break;
        case 4:
                return "Quarta-Feira"; 
                break;
        case 5:
                return "Quinta-Feira"; 
                break;
        case 6:
                return "Sexta-feira"; 
                break;
        case 7:
                 return "Sábado"; 
                break;
       


        default:
            return "Número inválido"
            break;
    //return diaSemana()
        
    }

}

console.log(diaSemana(numero));