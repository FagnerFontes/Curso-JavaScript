//Funções são trechos de código reutilizáveis. 

//Elas recebem variáveis como parâmetro. 

//Funções podem ser atribuídas à variáveis (chamadas de funções não nomeadas). 

//Quando uma função é recebida como entrada de outra função, chamamos de callback. 


//Uma função de callback, em termos simples, é uma função que é passada como argumento para outra função e é executada dentro dessa função. Ela é usada principalmente em programação assíncrona e é ma forma de controlar o fluxo de execução do código quando operações demoradas, como solicitações de rede ou bancos de dados, estão envolvidas. 




//Em JavaScript, as funções callback são amplamente utilizadas em situações como: 

//-------------------------------------------------------

//* Assincronia: Quando uma operação assincrona é concluída, a função de callback é chamada para lidar com o resultado. 

//* Quando um even.to ocorre, como um clique do mouse, a função de callback associada a esse evento é executada. 

//* Iterações: Em métodos como "forEach", "map", "filter", "reduce", as funções de callback são usadas para definir a lógica a ser aplicada a cada elemento de um array. 

//* Temporizadores: Em funções como "setTimeout" e "setInterval", a função de callback é executada um determinado tempo. 

const verificaPar = (numero, imprimir) => {
    if(numero % 2 === 0){
        const resultado = numero / 2
        imprimir(resultado) 
    }
}

const imprimeMensagem =(valor)=>{
    console.log(`O resultado da sua conta é: ${valor}`);
}

verificaPar(10, imprimeMensagem)