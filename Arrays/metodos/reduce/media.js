const numeros = [7,7,6,5]

const soma = numeros.reduce((acumulador, valorAtual)=>{
    return acumulador + valorAtual / numeros.length; 
}, 0)

console.log(soma.toFixed(1));