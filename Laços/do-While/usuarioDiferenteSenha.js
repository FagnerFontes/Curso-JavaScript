//Faça um programa que leia um nome de usuário e sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações. 

//Faça um programa que leeia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações. 


const nomeUsuario = prompt("Insira o usuário")
let senha = (prompt("Insira a senha"))
let senhaValida = false

do{
    if(nomeUsuario !== senha){

        console.log("Senha aceita");
        senhaValida = true
    }else{
        console.log("Senha não pode ser nome do usuário");
        senha = prompt("Insira a senha novamente")
    }
}while(!senhaValida)