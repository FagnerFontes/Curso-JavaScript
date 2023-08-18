let  saudacao = parseFloat(prompt("Vamor Jogar"))

let numero = 1 
let chute
chute = parseInt(prompt("Chute um número"))
do {
     

    if(chute < numero){
        console.log(`O numero ${chute} é menor`);
    }else if(chute > numero){
        console.log(` O o numero ${chute} é maior`);
    }else if (chute === numero){
        console.log(`Parabens!!! Você acertou o número`);
    }
}while(chute !== numero);
