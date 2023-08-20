//As funções com retorno em JavaScript são blocos de código que realizam uma tarefa especifica e retornam um valor. O retorno permite que a função forneça um resultado que pode ser usado posteriormentte em outras partes do programa. Aqui estão os principais pontos que fundamentam as funções com retorno: 

//Encapsulamento: Funções com retorno permitem encapsular um lógica em uma unidade coesa de código. Isso facilita a organização e manutenção do código, pois podemos dividir o programa em funções menores e reutilizáveis. 

//Reutização de Resultados: Uma vez que uma função retorna um valor, esse valor pode ser usado em várias partes do programa. Isso evita a necessidade de replicar o mesmo código em várias áreas e promove a reutilização, economizando tempo e evitando erros. 

//Comunicação de Resultados: Funções com retorno permitem que uma função "comunique" seu resultado de voltta para o local onde foi chamada. Isso é particularmente útil quando você precisa usar o resultado da função parra realizar outras operações ou tomar decisões. 

//A capacidade de dividir um programa em funções com retornos ajuda a criarr um código modular e mais legívvel. Cada função pode ser considerada como um bloco de construção independente tornando mais fácil entender o fluxo de execução do programa. 

//Flexibilidade: Funções com retorno podem ser usadas em várias situações, desde simples cálculos até processos complexos. Elas permitem que você escreva código e flexível que pode ser adaptado para diferenttes casos de uso. 


function calcularSoma(a, b){

    const soma = a * b;;
    return soma; 
}

//const resultado = calcularSoma(5,9)
console.log(calcularSoma(8,9));

