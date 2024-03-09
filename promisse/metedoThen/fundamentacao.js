const myPromise = new Promise((resolve, reject) =>{
    //Silmulando uma operação assíncrona que leva 1 segundo para ser  concluída. 
    setTimeout(()=>{
        const randomNumber = Math.random();
        if(randomNumber > 0.5){
            resolve(randomNumber); //Resolve a Promise com um valor aleatório   
        } else{
            reject(new Error('Erro')); 
        }

    },1000)
})

myPromise.then((result)=>{
    console.log(`Promise resolvida: ${result}`);
}).catch((error)=>{
    console.error(`Promise rejeitada : ${error}`)
})

myPromise.then((result)=>{
    console.log(`Primeiro then : ${result}`);
    return result * 2 //Retorna um valor para ser passado pora o próximo then
}).then((result)=>{
    console.log(`Segundo then : ${result}`);
}).catch((error=>{
    console.error(`Error: ${error}`);
}))

myPromise.then((result)=>{
    console.log(`Promise resolvida : ${result}`);
}).catch((error)=>{
    console.error(`Error: ${error}`);
})