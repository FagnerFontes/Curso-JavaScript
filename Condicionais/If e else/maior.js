//Faça um programa que peça dois números e imprima o maior deles. 

function maior(a,b) {//Declara uma função chamada maior
    if (a > b) {//Verfica se é maior que b 
        console.log(`Este é o maior número: ${a}`);//Imprime se o valor maior de a
    }else{
        console.log(`Este é o maior número: ${b}`);//Imprime se o valor maior de b
    }
}

resultado = maior(15,10)//Chama a função 