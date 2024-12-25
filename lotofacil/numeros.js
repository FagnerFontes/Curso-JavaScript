//Programa para conferir se os números sorteados na lotofácil estão entre 1 e 25. Sendo os número fixos, com entrada de 15 números pelo usuário.Esses números são armazenados em um array e comparados com o array de números sorteados. O programa deverá ser capaz de distinguir os números sorteados dos números escolhidos pelo usuário por meio de cores. Deverá também ser capaz de armazenar os números para conferencia posteriores.

//1. Definir os números sorteados na lotofácil.
let numerosSorteados = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

//2. Solicitar ao usuário que digite os números escolhidos.
let numerosEscolhidos = [] //Array para armazenar os números escolhidos pelo usuário.   
let contador = 0 //Variável para contar o número de números escolhidos pelo usuário.

//3. Solicitar ao usuário que digite 15 números entre 1 e 25.
do{
    let numero = parseInt(prompt("Digite um número entre 1 e 25")) //Solicita ao usuário que digite um número e converte a entrada para um número inteiro.
    
    //3.1 Verificar se o número digitado pelo usuário está entre 1 e 25.
    if(numero >= 1 && numero <= 25){
        numerosEscolhidos.push(numero) //Adiciona o número escolhido pelo usuário ao array "numerosEscolhidos".
        contador++ //Incrementa o contador de números escolhidos.
    }else{
        alert("Número inválido. Digite um número entre 1 e 25.") //Exibe uma mensagem de erro se o número digitado pelo usuário estiver fora do intervalo permitido.
    }
}  while(contador < 15) //O laço "do-while" é executado até que o usuário tenha digitado 15 números válidos.    

//4. Comparar os números escolhidos pelo usuário com os números sorteados.
for(let i = 0; i < numerosSorteados.length; i++){ //Percorre o array de números sorteados.
    let numeroSorteado = numerosSorteados[i] //Obtém o número sorteado na posição "i".
    let index = numerosEscolhidos.indexOf(numeroSorteado) //Verifica se o número sorteado está presente no array de números escolhidos pelo usuário.
    
    //4.1 Verificar se o número sorteado está presente no array de números escolhidos.
    if(index !== -1){
        numerosEscolhidos[index] = `<span style="color: green">${numeroSorteado}</span>` //Se o número sorteado estiver presente, substitui o número escolhido pelo usuário pelo número sorteado com a cor verde.
    }
}

//5. Exibir os números escolhidos pelo usuário e os números sorteados.
document.write("<h2>Números escolhidos pelo usuário:</h2>")
document.write("<ul>")
for(let numero of numerosEscolhidos){
    document.write(`<li>${numero}</li>`)
}   
document.write("</ul>")
document.write("<h2>Números sorteados:</h2>")
document.write("<ul>")
for(let numero of numerosSorteados){
    document.write(`<li>${numero}</li>`)
}   

document.write("</ul>")

//6. Armazenar os números escolhidos pelo usuário e os números sorteados para conferência posterior.    
localStorage.setItem("numerosEscolhidos", JSON.stringify(numerosEscolhidos)) //Armazena os números escolhidos pelo usuário no armazenamento local.
localStorage.setItem("numerosSorteados", JSON.stringify(numerosSorteados)) //Armazena os números sorteados no armazenamento local.

//Neste programa, solicitamos ao usuário que digite 15 números entre 1 e 25 e armazenamos esses números em um array. Em seguida, comparamos os números escolhidos pelo usuário com os números sorteados na lotofácil. Se um número escolhido pelo usuário for igual a um número sorteado, ele é exibido em verde. Por fim, exibimos os números escolhidos pelo usuário e os números sorteados na tela e armazenamos esses números no armazenamento local para conferência posterior.

//O armazenamento local é uma forma de armazenar dados no navegador do usuário. Ele permite que os dados sejam armazenados de forma persistente no navegador, mesmo após o fechamento da página. No exemplo acima, utilizamos o método "setItem" do objeto "localStorage" para armazenar os números escolhidos pelo usuário e os números sorteados na lotofácil. Os dados são armazenados como strings no formato JSON, utilizando o método "JSON.stringify" para converter os arrays em strings. Para recuperar os dados armazenados, podemos utilizar o método "getItem" do objeto "localStorage" e o método "JSON.parse" para converter as strings em arrays novamente. O armazenamento local é útil para manter o estado da aplicação entre sessões e para armazenar informações importantes que precisam ser acessadas posteriormente.

