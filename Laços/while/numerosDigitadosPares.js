const numeroDigitado = parseFloat(prompt("Digite um número: "))

/* let numeroAtual = 0 

console.log("Numeros de pares de 0 até o número digitado: ");

while(numeroAtual <= numeroDigitado){
    if(numeroAtual % 2 === 0){
        console.log(numeroAtual);
    }

    numeroAtual++
} */

let contador = 0 

console.log("Números pares: " )

while (contador <= numeroDigitado) {
    if(contador % 2 === 0){
        console.log(contador);
    }

    contador++
}