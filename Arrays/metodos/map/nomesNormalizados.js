const nomes = ['Alice", "bob", "cARol", "dAVid"]']

const normalizados = nomes.map(nome => {const primeira = nome[0].toUpperCase();
    const restante = nome.slice(1).toLowerCase();
    return primeira + restante; })

console.log(`Nomes originais: ${nomes}`);
console.log(`Nomes normalizados: ${normalizados}`);
//Neste exemplo, o array nomes contém os nomes originais com diferentes combinações de maiúsculas e minúsculas. O método map() é chamado no array nomes, e para cada nome, a função anônima divide o nome em duas partes: a primeira letra (primeira) e o restante do nome (restante). A primeira letra é convertida para maiúscula usando toUpperCase(), e o restante do nome é convertido para minúscula usando toLowerCase(). Em seguida, as duas partes são concatenadas e retornadas. O resultado é armazenado no array normalizados. Finalmente, os nomes originais e os nomes normalizados são exibidos no console.
//O método map() é uma maneira eficiente e concisa de transformar arrays em JavaScript, permitindo aplicar uma função a cada elemento do array original e retornar um novo array com os valores modificados.    