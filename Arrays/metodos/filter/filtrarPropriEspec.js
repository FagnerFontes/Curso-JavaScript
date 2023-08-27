//Este código filtra objetos com propriedade específica: 

const produtos = [
    {nome: "Camista", preco: 15}, 
    {nome: "Calça", preco: 50},
    {nome: "Tênis", preco: 80}, 
    {nome: "Boné", preco: 15}, 
] 
console.log(`${produtos.nome}`);
const produtosCaros = produtos.filter(produto => produto.preco > 30)

console.log(produtosCaros);
