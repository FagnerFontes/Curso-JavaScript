const minhaPromessa = new Promise ((resolve, reject)=>{
    //resolve('Promessa resolvida') //Aqui a promessa é resolvida   
    setTimeout(()=>{   //Simula uma operação assíncona  
        const success = true; //Simula o sucesso da operação
        if(success){    //Se a operação for bem sucedida
            resolve('Promessa resolvida') //Aqui a promessa é resolvida 
        }else{  //Se a operação não for bem sucedida    
            reject('Promessa rejeitada') //Aqui a promessa é rejeitada
        }   
})//Aqui a promessa é rejeitada 
})  //Aqui a promessa é criada e o resolve e reject são passados como parâmetros

//Consumindo a promessa
.then(result => console.log(result)) //O método then é chamado para tratar o sucesso da promessa
.catch(error => console.log(error)) //O método catch é chamado para tratar o erro da promessa
.finally(()=>console.log('Promessa finalizada')) //O método finally é chamado para finalizar a promessa