const myPromise = new Promise((resolve, reject) =>{
   
    //Cria uma nova Promise. A função passada para o contrutor recebe dois parâmetros. 
    //'resolve' é chamado para marcar a Promise como resolvida 
    // 'reject' é chamado para marcar a Promise como rejeitada
     //Silmulando uma operação assíncrona que leva 1 segundo para ser  concluída. 
    setTimeout(()=>{
        const randomNumber = Math.random();
        //Gera um valor aleatório entre 0 e 1

        if(randomNumber > 0.5){
            //Se o número gerado for maior que 0.5, considera a operação bem-sucedida 

            resolve(randomNumber); 
            //Chama 'resolve' para resolver a Promise, passando o número gerado com o resultado. 

        } else{
            //Caso contrario, considera que ocorreu um erro

            reject(new Error('Erro')); 
        }   //Chama 'reject' para rejeitar a Promise, passando um instância de 'erro' com a mensagem "Erro". 

    },1000)//Operação simulada ocorre após 1 segundo (1000 ms)
})

myPromise.then((result)=>{
    //Adiciona um manipulador que será chamado quando a Promise for resolvida. 

    console.log(`Promise resolvida: ${result}`);
    //Imprime no console o valor retornado pela Promise

})
.catch((error)=>{
    //Adiciona um manipulador que será chamado quando a Promise for rejeitada. 

    console.error(`Promise rejeitada : ${error}`)
    //Imprime no console o erro retornado pela Promise
})

myPromise.then((result)=>{
    //Este é outro encadeamento 'then', usado para manipular o mesmo resultado da Promise.

    console.log(`Primeiro then : ${result}`);
    //Imprime no console o resultado da Promise.

    return result * 2 //Retorna o resuldado multiplicado por 2, que será passado para o próximo 'then'.  


}).then((result)=>{
    //Manipula o valor retornado pelo 'then' anterior. 

    console.log(`Segundo then : ${result}`);
    //Imprime no console o valor multiplicado por 2. 
})
.catch((error=>{
    //Captura qualquer erro ocorrido em qualquer etapa da cadeia de 'then'. 

    console.error(`Error: ${error}`);
    //Imprime no console o erro capturado. 
}))