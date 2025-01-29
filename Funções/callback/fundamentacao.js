//Este programa tem como objetivo explicar o conceito de callback, que é uma função que é passada como parâmetro para outra função.



//Abaixo temos um exemplo de função de callback: que verifica se um número é par e, se for, imprime a metade dele. 
const verificaPar = (numero, imprimir) => {//Aqui a função verifica Par recebe dois parâmetros, o número e a função imprimir
   
    if(numero % 2 === 0){//Aqui é feita a verificação se o número é par

        const resultado = numero / 2//Se 

        imprimir(resultado) //Aqui a função imprimir é chamada e passando o resultado da divisão do número por 2
    }
}

const imprimeMensagem =(valor)=>{// Aqui a função imprime Mensagem recebe um parâmetro valor
    console.log(`O resultado da sua conta é: ${valor}`);//Aqui é feita a impressão do resultado da divisão do número por 2
}

verificaPar(10, imprimeMensagem)//Aqui a função verifica Par é chamada e passado o número 10 e a função imprimeMensagem que irá imprimir o resultado da divisão do número por 2.




 /* document.getElementById('demo').innerHTML=verificaPar(8);//Aqui estamos pegando o elemento com o id demo e atribuindo a variável demo */
