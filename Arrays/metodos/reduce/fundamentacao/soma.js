
const numeros = [1,3,4,5,8]

const soma = numeros.reduce((acumulador, valorAtual)=>{
    return acumulador + valorAtual; 
}, 0)

console.log(soma.toFixed(1));
