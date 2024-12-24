//Exibe a mensagem "Inicio" no console imediatamente quando o script começa a ser Executado. 
console.log("Inicio");

//Define uma função para ser executada após 2000 milissegundos (2 segundos)
setTimeout(()=>{
    //Após dois segundos, esta mensagem será exibida no console. 
    console.log("Executado após 2 segundos");
}, 5000); //200 milissegundo = 2 segundos

//Exibe a mensagem "Fim" no console imediatamente, sem esperar o 'setTimeout'
console.log("Fim");
