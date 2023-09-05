//Dado uma array de produtos, onde cada produtos é um objeto com "nome", "preço" e categoria, retorne um novo array com o nome dos da categoria limpeza. 

const produtos = [
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


   console.log(`Os produtos de limpeza são: `);
  const produtosLimpeza = produtos.filter((produto)=>{

    if(produto.categoria === "Limpeza"){
        console.log(`---${produto.nome}-----`);
    }
  })






  
  
  
  





















/*    const produtosLimpeza = [];

for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].categoria === "Limpeza") {
        produtosLimpeza.push(produtos[i].nome);
    }
} */

console.log(produtosLimpeza);
/* Nesse exemplo, inicializamos um array vazio chamado produtosLimpeza. Em seguida, usamos um loop for para percorrer a array de produtos. Dentro do loop, verificamos se a categoria do produto é "Limpeza" usando um if. Se for o caso, adicionamos o nome do produto ao array produtosLimpeza. No final do loop, o array produtosLimpeza conterá apenas os nomes dos produtos da categoria "Limpeza". */





