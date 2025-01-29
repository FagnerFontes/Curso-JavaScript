//Este código verifica se um número é imparpar e, se for, imprime a metade dele.

// Exemplo de callback com função que verifica se um número é impar
const verificaImpar = (numero, imprimir)=> {//Aqui a função verificaIm par recebe dois parâmetros, o número e a função imprimir
    if(numero % 2 !=0){//Aqui é feita a verificação se o número é impar

        imprimir()//Aqui a função imprimir é chamada
    }
}

const imprimeMensagem = (valor)=>{//Aqui a função imprime Mensagem recebe um parâmetro valor que não será utilizado nesse caso 
    console.log(`Sim!! é impar`);//Aqui é feita a impressão da mensagem "Sim!! é impar"
}

verificaImpar(9, imprimeMensagem)//Aqui a função verifica Impar é chamada e passando o número 9 e a função imprimeMensagem que irá imprimir a mensagem "Sim!! é impar" caso o número seja impar.