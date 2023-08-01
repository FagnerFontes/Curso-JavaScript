//Imprime os números pares de 1 a 20

let pares = ""

for(let i = 0; i <= 50; i++){
    if (i % 2 == 0) {
        //console.log(`Pares: ${i}`);
        pares += ` ${i} `
    }    
}

console.log(`Pares são : ${pares}`);