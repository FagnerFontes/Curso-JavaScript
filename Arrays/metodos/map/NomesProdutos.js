let produtos =  [
    {nome: "Pendrive", preco: 62.89},
    {nome: "Fone Lenovo", preco: 120.78},
    {nome: "Cabo USB", Preco: 41.43},
    {nome: "Mouse Dazz", Preco: 150.00 },
    {nome: "Teclado Corsa", Preco: 180.45},
    {nome: "Teclado Dazz", Preco: 180.45},
    {nome: "Teclado Multilaser", Preco: 79.15},
    {nome: "Monitor LG", Preco: 780.45},
    {nome: "Monitor Samsumg", Preco: 880.45}
]



const precos = produtos.map(produto => produto.Preco)
console.log(precos);
