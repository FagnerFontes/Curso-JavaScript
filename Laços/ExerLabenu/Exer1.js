let quantPet = parseInt(prompt("Quantos bichinhos de estimação você tem?"))
let nomePets = []

if(quantPet === 0 ){
    console.log("Que pena!! Você pode adotar um pet!!!");
}else if(quantPet > 0){

    for(let i = 0 ; i < quantPet; i++){
        let nomePet = prompt(`Insira nome do se ${i + 1}º pet:`)
        nomePets.push(nomePet)
    }
console.log("Nomes dos pets: ");
for(let nome of nomePets){
    console.log(nome);
}
}

