//Faça um programa que verifique se a letra é vogal ou consoante. 

function verificarLetra(letra) {
    const vogais = "AEIOUaeiou"

    if(letra.length !==1){//Verifica se a entrada possui apenas uma letra
        console.log("Digite apenas uma letra");
    }else if(vogais.includes(letra)){
        //verifica se a letra está presente na lista de vogais
        console.log(`A letra ${letra} é uma vogal.`);
    }else{
        //Se não for vogal é consolante
        console.log(`A letra ${letra} é uma consoante.`);
    }
}

resultado = verificarLetra("c")