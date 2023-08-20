//Os parâmetros REST são um recurso em JavaScript que  permite que uma função aceite um número variável de argumenttos como um array. Isso é especialmente útil quando sabemos quantos argumentos serão passados para a função no momento da chamada. Os parâmetros REST são representados pelo operador de três pontos ("...") seguido pelo nome do parâmetro. 

//Vamos entender como o parâmetros REST funcionam: 

/* function minhaFuncao(parametro1, parametro2, ...restoDosParametros) {
    
} */

//O operador "..." antes do nome do parâmetro "restoDosParametros" indica que ele vai capturar todos os argumenttos passaddos à função a partir desse ponto e colocá-los em array chamado "restoDosParametros".
/* 
function somar(...numeros) {
    let total = 0 
    for(let i of numeros){
        total += i
    }
    return total
}

console.log(somar(1,2,3,)); 
console.log(somar(10, 20, 30, 40, 50)); */

//Nesse exemplo, a função "somar" aceita um número variável de argumentos e os adiciona todos juntos. 

//1. Benefícios: 

    //* Flexibilidade: Podemos passar quantos argumentos quiser paaraa a função sem necessidade de definir cada parâmetro separadamente. 

    //* Tratamento de Dados: Podemos manipular todos os argumentos como um array, o que facilita a realização de operações em lote. 

//* Evita erros: Ao usar os parâmetros REST, não precisamos nos preocupar com a quantidade exata de argumentos que serão passados. A função cuidará disso automaticamentte. 

//2. Lempre-se: 

    //* Os parâmetros REST devem sempre ser últimos parâmetros na lista de parâmetros da função. 

    //* Uma funçãopode ter apenas um único parâmetro REST. 

//Os parâmetros RESTT são especialmente úteis quando desejamos criar funções genéricas que possam lidarr com diferenttes quantidades de dados de entradda. Eles são uma maneira poderosa de tornar suas funções mais flexívveis e reutilizávis. 

//======================= REST com For =============================
function soma(...valores) {

    let tamanho = valores.length
    res = 0 
    for(let i = 0; i < tamanho; i++){
        res+=valores[i]
    }
    return res
}

console.log(soma(2,5,4));

//======================= REST com For in ==========================

function soma2(...valores) {
    
    let res = 0 
    for(let v of valores){
        res+= v
    }

    return res
}

console.log(soma2(12,8));