//A instrução "break" é uma estrutura de controle em JavaScript que é usada para interromper a execcução de um loop("for", "while", "do...while") ou um switch-case antes de alcançar ko final normal. Ela permite sairr do loop ou switch-ccase mais cedo, sem executar o restante das iterações ou caso. 

//Aqui está uma explicação mais detalhada sobre o uso da instrução "break": 

//Loops: 
//Quando a instrução "break" é encontrada dentro de um loop  (como for, while ou do...while),  (como for, while ou do...while), o loop é interrompido imediatamente e o controle é transferrido para o próximo código após o loop. Isso é útil quando você deseja sair de um loop assim que uma determinada condiççao for atendida, mesmo que o número total de iterações não tenha sido alcançado. 

let i = 0 //Inicia a variável em 0 

while(i < 10){//Verifica se i é menor que 10
    if(i === 6){//
        break//Interompe o loop quando i for igual a 5 
    }

    console.log(i);
    i++
}

//Switch-case: 
//No caso de uma instrução "switch", a instrução "break" é usada para interromper o fluxo após um caso ter sido correspondido e execuyttado. Isso evita que outros casos sejam executado indevidamente. 

const diaSemana = "terça"

switch (diaSemana) {
    case 'segunda':
        console.log(`Hoje é segunda-feira`);
        break;//Interompe o switch após o caso "segunda" ser executado
    case 'terça': 
        console.log('Hoje é terça-feira');
        break;
    default:
        console.log('Outro dia da semana');
}
