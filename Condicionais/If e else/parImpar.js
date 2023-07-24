//Escreva uma função que receba um número como parâmetro e retorne a mensagem "Número par" se o número for par, e "Número ímpar" caso contrário.

function parImpar(a) {//Inicia uma função chamar parImpar
    if(a % 2 === 0){//Verificar se o numero é par ou ímpar
        console.log(`O número ${a} é par`);//Imprime se o número é par
    }else{
        console.log(`O número ${a} é impar`);//Imprime se o número é ímpar
    }
}

resultado = parImpar(1)//Imprime o se é par ou impar
resultado = parImpar(2)//Imprime o se é par ou impar
resultado = parImpar(3)//Imprime o se é par ou impar
resultado = parImpar(4)//Imprime o se é par ou impar
resultado = parImpar(5)//Imprime o se é par ou impar
resultado = parImpar(6)//Imprime o se é par ou impar