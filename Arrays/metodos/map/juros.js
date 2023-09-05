// Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles.

let produtos =  [
    {nome: "Pendrive", preco: 60.00},
    {nome: "Fone Lenovo", preco: 120.78},
    {nome: "Cabo USB", preco: 41.43},
    {nome: "Mouse Dazz", preco: 150.00 },
    {nome: "Teclado Corsa", preco: 180.45},
    {nome: "Teclado Dazz", preco: 180.45},
    {nome: "Teclado Multilaser", preco: 79.15},
    {nome: "Monitor LG", preco: 780.45},
    {nome: "Monitor Samsumg", preco: 880.45}
]

let novosPrecos = produtos.map(produto=>produto.preco * 0.05 + produto.preco
)

console.log(novosPrecos);

console.log("=========================================");


const produtos2 = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.80 }
   ]

   const precosAtualizados = produtos2.map((produto2)=> produto2.preco * 0.05 + produto2.preco)

   console.log(precosAtualizados);