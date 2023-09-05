const verificaImpar = (numero, imprimir)=> {
    if(numero % 2 !=0){

        imprimir()
    }
}

const imprimeMensagem = (valor)=>{
    console.log(`Sim!! é impar`);
}

verificaImpar(9, imprimeMensagem)