//Escreva uma função que receba a idade de uma pessoa como parâmetro e retorne a mensagem "Maior de idade" se a idade for maior ou igual a 18 anos, caso contrário, retorne a mensagem "Menor de idade".

function idade(a) {//Inicia uma função chamada idade
    if(a >=18 ){//Verifica a idade baseada no número digitado 
        console.log("Maior de idade");//Imprime "maior idade"
    }else{
        console.log("Menor de idade");//Imprime "menor idade"
    }
}

const resultado = idade(15)//Chama e imprime a função idade