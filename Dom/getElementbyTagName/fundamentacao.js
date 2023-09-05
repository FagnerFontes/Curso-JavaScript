//O método "getElementByTagName()" é uma função JavaScript que é usada para selecionar elementos HTML com base em sua tag ou nome do elemento. Ele é uma formas mais simples de selecionar elementos no DOM usando JavaScript. 

//Aqui está comoo o método funciona: 

//1. Chamamos o método "getElementByTagName()" em um elemento pai ou diretamente no objeto "document". Por exemplo: 

 const elementoTitulo = document.getElementsByTagName("div");
 let colecaoHTML= [...elementoTitulo]
// console.log(elementoTitulo);

//Neste exemplo, estamos procurando todos os elementos "<div></div>" dentro do documento HTML. 

//1. o método retorna uma coleção de elementos que correspondem à tag especificad. Esta coleção é semelhante a um array, mas não é genuíno. É chamado de NodeList. 

//2. Podemos iterar pelos elementos na coleção NodeList usando um loop, como um loop "for" ou um loop "forEach". 

//Aqui está um exemplo de uso do "getElementsByTagName()" para selecionar e iterar por todos os parágrafos em um documento HTML. 

for(let i = 0; i < elementoTitulo.length; i++){
    elementoTitulo[i].textContent = "Novo texto para a DIV" + i + 1;
}

console.log(elementoTitulo);
console.log(colecaoHTML);

//Isso é útil quando precisamos fazer alterações  em vários elementos com a mesma tag, como estilizá-los, adicionar ou remover conteúdo, ou executar outras operações. 

// Lembre-se de que, como o método "getElementsByTagName()" retorna uma coleção NodeList, podemos tratá-la como uma matriz em termos de a acessar elementos pelo índice, mas não possui todos os método de array, portanto, algumas operaçãoes podem requerer conversão em uma matriz real, se necessário. 

