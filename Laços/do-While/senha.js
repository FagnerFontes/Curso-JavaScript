//Faça um programa que peça ao usuário parpa digitar uma senha. Contineue pedindo a senha até que ele digite a senha correta. 


const senhaCorreta = "123456"//Defina aqui a senha correta 

let senhaDigitada; 

do{
    senhaDigitada = prompt("Digite a senha")//Solicitada a senha ao usuário
    if(senhaDigitada === senhaCorreta){
        console.log("Senha correta");
        break; //Encerra o laço se senha estiver correta 
    }else{
        console.log("Senha incorreta. Tente novamente");
    }
}while(true)//Repete o laço indefinidamente até a senha estar correta. 