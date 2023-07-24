//Em JavaScript, "funções" são blocos de código reutilizáveis que realizam tarefas especificas ou calculam valores. Elas são uma parte fundamental da programação, permitindo que você encapsule um conjunto de instruções em um único bloc nomeado e, sem seguida, chame essa função várias vezes ao longo do seu código, evitando repetições e tornando o código mais organizado e legível. 
//As funções em javaScript podem receber parâmetros (valores de entrada) e retornas um valor de saída. Elas podem ser definidas usando a palavra-chave "function", seguinda pelo nome da função e os parâmetros entre parêntes. O corpo da função é delimitado por chaves "{}" e contém as instruções que serão executdas quando a função for chamada. Assim: 
//function name(params) {
//    }

//Aqui está a sintaze básica para definir uma função em JavaScrit

/* function nomeFuncao(parametro1, parametro2) {
    Corpo da função - conjunto de instruções a serem executadas 
    Pode incluir cálculos, condicionais, loops, entre outros

    return valorDeRetorno//Opcional: retorna um valor após a execução da função
} */


//Para chamar uma função, basta usar o nome da função seguido dos parêntes contendo os argumetos (valores) que serão passados para os parâmetros da função, se houver. A chamada de função pode ser utilizada como uma expressão, ou seja, pode ser usada como parte de uma operação ou atribuição. 

//===================Exer1=====================================
function somar(a,b) {
    return a * b 
}
const resultado = somar(5,3)
console.log(resultado);
//Neste exemplo, temos uma função chamada "somar" que recebe dois parâmetros "a" e "b" e retorna a soma desses dois valores. Ao chamar a função "somar(5,3)", o valor 5 é atribuido ao parâmetro "a" e o valor 3 é atribuido ao parametro "b", resultando na soma 5 + 3, que é 8. O valor de retorno da função (8) é armazenado na variável "resultado" e, em seguida, é impresso no console. 

//As funções são um conceito poderoso em JavaScript e são essenciais para a programação modular, organizada e reutilizável. Elas permitem dividir o código em partes meores, o que facilita o desenvolvimento, a manutenção e a leitura do código. Além disso, as funções desempenham um papel fundamental na programação assincrona em JavaScript, tornando possível trabalhar com callbacks, promessas e funções assíncronas. 
















/* function olaMundo(){
    console.log(`Olá Mundo!!`);
}

olaMundo() */