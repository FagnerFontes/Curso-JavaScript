//A coleção "set" em JavaScript é uma estrutura de dados que representa uma coleção de valores únicos, onde cada valor só pode aparecer uma vesz. Isso significa que não há duplicacas em um conjunto (Set). Aqui estão algumas caracteristicas importantes dos conjuntos em JavaScript: 

//1. Valores Únicos: Os conjuntos só podem conter valores únicos. Se tentarmos adicionar um valor que já está presente no conjunto, ele será ignorado. 

//2. Ordem de Inserção: Os conjuntos preservam a ordem dos elementos. Isso significa que, ao iterar sobre um conjunto, os elementos serão retornados na ordem em que foram adicionados. 

//* Operações Básicas: Os conjuntos suportam operações básicas, como adicionar um elementos "(add)", remover um elemento ("delete"), verificar a existência de um elemento ("has"), e limpar o conjunto (clear). 

//* Iteração: Podemos iterar sobre os elementos de um conjunto usando loops "for...of" ou  convertê-los em arrays usando "Array.from()". 

//===================== Resumo do Código ========================

//Este código demonstra o uso de um conjunto ("SET") EM JavaScript e realiza as seguintes operações: 

    //1. Cria um conjunto chamado "meuConjunto" e adiciona seis números a ele. 
    //2. Itera sobre os elementos do conjunto e os exibe. 
    //3. Verifica se o número 2 está presente no conjunto e exibe o resultado true. 
    //4. Remove o número 2 do conjunto. 
    //5. Iera novamente sobre os elementos do conjunto após a remoção. 
    //6. Converte o conjunto em um array usando "Array.from()" e exibe o array resultante. 
    
    //O conjunto é útil para manter valores, e esses exemplos demonstram operações comuns que podemos realizar com conjuntos em JavaScript. 




console.log("=============== Add Elementos =================");

//Criar um conjunto 
const meuConjunto = new Set(); 


//Adicionar elementos ao conjunto 
meuConjunto.add(1)
meuConjunto.add(2)
meuConjunto.add(3)
meuConjunto.add(4)
meuConjunto.add(5)
meuConjunto.add(6)

//Iterar sobre os elementos do conjunto e exibir cada um 
for (const item of meuConjunto){
    console.log(`${item}`);
}

console.log("=====Verificar a existência de um elemento =======");
console.log(meuConjunto.has(2));//Deve exibir "true" porque o 2 foi adicionado anteriormente 

console.log("============ Remover um elemento =============");
//Remover  o número 2 do conjunto
meuConjunto.delete(2)
for (const item of meuConjunto){
    console.log(`${item}`);
}

console.log("===== Converter para array =======");
//Converter o conjunto em um array usando a função Array.from()
const meuArray = Array.from(meuConjunto)

console.log(`Meu array convertido: ${meuArray}`);