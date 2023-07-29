//Faça um programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: 
//F - Feminino 
//M - Masculino 
//Sexo inválido. 

function sexo(letra) {
  
    console.log(
        `M = Masculino, F = Feminino`
    );
    
    if (letra === "M") {
        console.log(`Masculino`);
    }else if (letra === "F") {
        console.log(`Feminino`);
    }else{
        console.log("Sexo inválido");
    }
}
const letraDigitada =  prompt("Digite uma letra")//Recebe o valor digitado pelo usuário
resultado = sexo(letraDigitada)//Chama a função e passa o valor digitado como parâmetro. 

//Neste código, a função "sexo(letra)" recebe um parâmetro chamado "letra" que representa a letra digitada pelo usuário. Em seguida, a função exibe as opções disponiveis" M = Masculino, F = Feminino" através do console.log. 

