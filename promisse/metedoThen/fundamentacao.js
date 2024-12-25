const myPromise = new Promise((resolve, reject) =>{
    //Silmulando uma operação assíncrona que leva 1 segundo para ser  concluída. 
    setTimeout(()=>{//Executa uma função após um determinado período de tempo.
        const randomNumber = Math.random();//Gera um número aleatório entre 0 e 1. A função Math.random() retorna um número pseudo-aleatório no intervalo [0, 1). Ela tem uma distribuição uniforme, ou seja, a probabilidade de cada número ser gerado é a mesma. O objetivo é gerar um número aleatório entre 0 e 1. Ela usada quando em sorteios, jogos, etc.
        if(randomNumber > 0.5){//Verifica se o número aleatório gerado é maior que 0.5
            resolve(randomNumber); //Se o número aleatório gerado for maior que 0.5, a promessa é resolvida com o número aleatório gerado.
        } else{//Se o número aleatório gerado for menor ou igual a 0.5, a promessa é rejeitada com um erro.
            reject(new Error('Erro')); //Se o número aleatório gerado for menor ou igual a 0.5, a promessa é rejeitada com um erro.
        }

    },1000)//Tempo em milissegundos que a função setTimeout() deve esperar antes de executar a função passada como argumento.
})

myPromise.then((result)=>{//O método then() é chamado quando a promessa é resolvida com sucesso. Ele recebe uma função de retorno de chamada que será executada quando a promessa for resolvida. O valor retornado pela função de retorno de chamada é passado para a próxima promessa.
    console.log(`Promise resolvida: ${result}`);//Exibe uma mensagem com o valor retornado pela promessa.
}).catch((error)=>{//O método catch() é chamado quando a promessa é rejeitada. Ele recebe uma função de retorno de chamada que será executada quando a promessa for rejeitada. O valor retornado pela função de retorno de chamada é passado para a próxima promessa.
    console.error(`Promise rejeitada : ${error}`)//Exibe uma mensagem com o erro retornado pela promessa.
})//O método catch() é chamado quando a promessa é rejeitada. Ele recebe uma função de retorno de chamada que será executada quando a promessa for rejeitada. O valor retornado pela função de retorno de chamada é passado para a próxima promessa.

myPromise.then((result)=>{//myPromise.then((result)=>{//O método then() é chamado quando a promessa é resolvida com sucesso. Ele recebe uma função de retorno de chamada que será executada quando a promessa for resolvida. O valor retornado pela função de retorno de chamada é passado para a próxima promessa.
    console.log(`Primeiro then : ${result}`);//Exibe uma mensagem com o valor retornado pela promessa.
    return result * 2 //Retorna um valor para ser passado pora o próximo then
}).then((result)=>{//Aqui o resultado do primeiro then é passado como argumento para o segundo then 
    console.log(`Segundo then : ${result}`);//Exibe uma mensagem com o valor retornado pela promessa.
}).catch((error=>{//Aqui o catch retorna um erro caso a promessa seja rejeitada. 
    console.error(`Error: ${error}`);
}))

myPromise.then((result)=>{
    console.log(`Promise resolvida : ${result}`);
}).catch((error)=>{
    console.error(`Error: ${error}`);
})