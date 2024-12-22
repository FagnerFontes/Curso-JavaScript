//Definição da classe Calculadora 
class Calculadora {
    //Método estático para realizar a operação de soma 
    static soma(a, b) {
        return a + b
    }

    //Método estático para realizar a operação de subtração
    static subtração(a, b) {
        return a - b
    }

    //Método estático para realizar a operação de multiplicação 
    static multiplicacao(a, b) {
        return a * b
    }

    //Método estático para realizar a operação de divisão 
    static divisao(a,b) {
        //Verifica se o divisor (b) não é zero para evitar divisão por zero
        if (b !== 0) {
            return a / b
        } else {
            //Retorna uma mensagem de erro caso a divisão por zero seja detectada
            return "Divisão por zero não é permitida"
        }
    }
}

console.log(`O resultado da soma é: ${Calculadora.soma(5,2).toFixed(1)}`);
console.log(`O resultado da subtação é: ${Calculadora.subtração(5,2).toFixed(1)}`);
console.log(`O resultado da multiplicação é: ${Calculadora.multiplicacao(5,2).toFixed(1)}`);
console.log(`O resultado da divisão é: ${Calculadora.divisao(5,2).toFixed(1)}`);
