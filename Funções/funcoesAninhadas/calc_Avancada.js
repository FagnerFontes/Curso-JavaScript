const calculadoraAvancada = (num1, num2, operador)=>{

    let subtracao
     soma = ()=>{
        return num1 + num2; 
    }

    subtracao =()=>{
        return num1 - num2 
    }

    multiplicacao =()=>{
        return num1 * num2
    }
    
    divisao =()=>{
        return num1 / num2
    }



    switch(operador){
        case "+": return soma()
        case "-": return subtracao()
        case "*": return multiplicacao()
        case "/": return divisao()
    }
}

console.log(` O resultado da soma é: ${calculadoraAvancada(10,5, "+")}`);

console.log(` O resultado da subtração é: ${calculadoraAvancada(10,5, "-")}`);

console.log(` O resultado da multiplicação é: ${calculadoraAvancada(10,5, "*")}`);

console.log(` O resultado da divisão é: ${calculadoraAvancada(10,5, "/")}`);