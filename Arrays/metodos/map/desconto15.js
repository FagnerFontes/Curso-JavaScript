//O Código abaixo tem o objetivo de Calcular um desconto de 15%, queando o preço do produto estiver acima de 100,  em uma lista de preços utilizando o método map() em JavaScript. O método map() é uma função que percorre um array e retorna um novo array com os valores modificados de acordo com a função passada como parâmetro. Nesse caso, a função passada como parâmetro é uma função anônima que multiplica cada preço por 0.85, aplicando um desconto de 15%.

const precos = [55, 80, 100, 200, 300, 400, 500];//Array com os preços originais.
const comDesconto = precos.map(preco => {
    if (preco >= 100) {//Se o preço for maior que 100, aplicar desconto de 15%.
        return preco * 0.85;
    }   else {
        return preco;//Se o preço for menor ou igual a 100, não aplicar desconto.       
    }
});//Array com os preços com desconto de 15% quando o preço for maior que 100.

console.log(`Preços originais: ${precos}`);
console.log(`Preços com 15% de desconto (acima de 100): ${comDesconto}`); 
//Neste exemplo, o array precos contém os preços originais. O método map() é chamado no array precos, e para cada preço, a função anônima verifica se o preço é maior que 100. Se for, calcula o preço com desconto multiplicando o preço por 0.85 (que é equivalente a aplicar um desconto de 15%). Caso contrári  o, retorna o preço original sem desconto. O resultado é armazenado no array comDesconto. Finalmente, os preços originais e os preços com desconto são exibidos no console.  