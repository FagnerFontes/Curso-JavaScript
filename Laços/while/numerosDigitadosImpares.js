const numeroDigitado = parseFloat(prompt("Digite um número: "))


let contador = 0 

console.log("Números Impares: " )

while (contador <= numeroDigitado) {
    if(contador % 2 == 1){
        console.log(contador);
    }

    contador++
}