//Inicia o cronoômetro em 1 segundo (1000 milissegundos)    
console.time("1");  
//Define uma função para ser exercutada após 1000 milissegundos (1 segundo)
setTimeout(()=>{
    //Após um segundo, esta mensagem será exibida no console. 
    console.log("1 segundo");
    //continua o cronômetro para o segundo
    console.log("2 segundos");//Exibe a mensagem 2 no console imediatamente, sem esperar o 'setTimeout' 
    console.log("3 segundos");//Exibe a mensagem 3 no console imediatamente, sem esperar o 'setTimeout' 
    console.log("4 segundos");//Exibe a mensagem 4 no console imediatamente, sem esperar o 'setTimeout'   
    console.log("5 segundos");//Exibe a mensagem 5 no console imediatamente, sem esperar o 'setTimeout' 
    console.log("6 segundos");//Exibe a mensagem 6 no console imediatamente, sem esperar o 'setTimeout'
    console.log("7 segundos");//Exibe a mensagem 7 no console imediatamente, sem esperar o 'setTimeout'
    console.log("8 segundos");//Exibe a mensagem 8 no console imediatamente, sem esperar o 'setTimeout' 
    console.log("9 segundos");//Exibe a mensagem 9 no console imediatamente, sem esperar o 'setTimeout'     
    console.log("10 segundos");//Exibe a mensagem 10 no console imediatamente, sem esperar o 'setTimeout'   
    //
}, 1000);//Fim do 'setTimeout'  
console.log("Inicio");//Exibe a mensagem fim
//Finaliza o cronômetro.