//O código abaixo é um exemplo de uma função chamada "calculadoraAvancada" que recebe três parâmetros: num1, num2 e operador. A função calculadoraAvancada retorna o resultado da operação matemática entre os dois números, dependendo do operador passado como argumento. A função calculadoraAvancada utiliza funções aninhadas para realizar as operações matemáticas de soma, subtração, multiplicação e divisão. A função calculadoraAvancada é chamada quatro vezes com diferentes operadores para realizar as operações matemáticas de soma, subtração, multiplicação e divisão entre os números 10 e 5. O resultado de cada operação é exibido no console.

const calculadoraAvancada = (num1, num2, operador)=>{//função calculadoraAvancada com 3 parametros num1, num2 e operador
    let soma//declara a variável let soma   

    let subtracao//declara a variável let subtração
     soma = ()=>{//declara a função soma
        return num1 + num2; //retorna a soma dos valores de num1 e num2
    }//fim da declaração da função soma

    subtracao =()=>{//declara a função subtração
        return num1 - num2 //
    }//fim da declaração da função subtração

    multiplicacao =()=>{//declara a função multiplicação
        return num1 * num2//retorna a multiplicação dos valores de num1 e num2
    }//fim da declaração da função multiplicação
    
    divisao =()=>{//declara a função divisão
        return num1 / num2//retorna a divisão dos valores de num1 e num2
    }



    switch(operador){//estrutura de controle switch que avalia a variável operador
        case "+": return soma()//caso a variável operador seja igual a "+", a função soma é chamada
        case "-": return subtracao()//caso a variável operador seja igual a "-", a função subtração é chamada
        case "*": return multiplicacao()//caso a variável operador seja igual a "*", a função multiplicação é chamada
        case "/": return divisao()//caso a variável operador seja igual a "/", a função divisão é chamada
    }//fim da estrutura de controle switch
}//fim da declaração da função calculadoraAvancada

console.log(` O resultado da soma é: ${calculadoraAvancada(10,5, "+")}`);//exibe o resultado da chamada da função calculadoraAvancada com os valores 10, 5 e "+"

console.log(` O resultado da subtração é: ${calculadoraAvancada(10,5, "-")}`);//exibe o resultado da chamada da função calculadoraAvancada com os valores 10, 5 e "-"

console.log(` O resultado da multiplicação é: ${calculadoraAvancada(10,5, "*")}`);//exibe o resultado da chamada da função calculadoraAvancada com os valores 10, 5 e "*" 

console.log(` O resultado da divisão é: ${calculadoraAvancada(10,5, "/")}`);//exibe o resultado da chamada da função calculadoraAvancada com os valores 10, 5 e "/"