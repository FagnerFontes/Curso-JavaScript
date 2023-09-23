//Dado um uma  array de objetos representado por compras, onde cada objeto tem um atributo "preco" use o método "reduce()" para calcular o total gasto em compras. 

let compras = [
    
    {nome: "Pendrive", preco: 62.89},
    {nome: "Fone Lenovo", preco: 120.78},
    {nome: "Cabo USB", preco: 38.43},
    {nome: "Mouse Dazz", preco: 150.00 },
    {nome: "Teclado Corsa", preco: 180.45},
    {nome: "Teclado Dazz", preco: 180.45},
    {nome: "Teclado Multilaser", preco: 79.15},
    {nome: "Monitor LG", preco: 580.45},
    {nome: "Monitor Samsumg", preco: 880.45}
]

const totalCompras = compras.reduce((acumulador , produtoAtual)=> {
    return acumulador + produtoAtual.preco
}, 0 )

console.log(`O valor do carrinho é: ${totalCompras} reais`);