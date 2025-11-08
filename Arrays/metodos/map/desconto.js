//O código abaixo tem o objetivc de Calcular um desconto de 10% em uma lista de preços utilizando o método map() em JavaScript. O método map() é uma função que percorre um array e retorna um novo array com os valores modificados de acordo com a função passada como parâmetro. Nesse caso, a função passada como parâmetro é uma função anônima que multiplica cada preço por 0.9, aplicando um desconto de 10%.

const precos = [55, 80,100, 200, 300, 400, 500];//Array com os preços originais.
const comDesconto = precos.map(preco => preco * 0.9);//Array com os preços com desconto de 10%.

console.log(`Preços originais: ${precos}`);//Array com os preços originais.
console.log(`Preços com 10% de desconto: ${comDesconto}`);//Array com os preços com desconto de 10%.

//Neste exemplo, o array precos contém os preços originais. O método map() é chamado no array precos, e para cada preço, a função anônima calcula o preço com desconto multiplicando o preço por 0.9 (que é equivalente a aplicar um desconto de 10%). O resultado é armazenado no array comDesconto. Finalmente, os preços originais e os preços com desconto são exibidos no console.

//O método map() é muito útil para transformar arrays de forma eficiente e concisa, evitando a necessidade de loops explícitos para percorrer os elementos do array.    
//Além disso, o método map() não modifica o array original, mas retorna um novo array com os valores transformados, o que é uma característica importante para manter a imutabilidade dos dados em muitas situações de programação.
//No exemplo acima, o array precos permanece inalterado, enquanto o array comDesconto contém os preços com o desconto aplicado.
//O método map() é amplamente utilizado em JavaScript para manipulação de arrays e é uma ferramenta poderosa para desenvolvedores que desejam aplicar transformações em conjuntos de dados de forma eficiente.


