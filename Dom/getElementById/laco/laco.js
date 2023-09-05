//Selecionando elementos HTML por seus IDs e amarzenando-os em variáveis
const elemento1 = document.getElementById("HTML")
const elemento2 = document.getElementById("CSS")
const elemento3 = document.getElementById("JavaScript")
const elemento4 = document.getElementById("PHP")
const elemento5 = document.getElementById("React")
const elemento6 = document.getElementById("MySql")
const elemento7 = document.getElementById("Java")


//Criando um array que contém os elementos HTML
const arrayElementos=[elemento1, elemento2, elemento3, elemento4, elemento5, elemento6, elemento7]


//Usando o método "map()" para percorrer o array de elementos. 
arrayElementos.map((e)=> {
    //Exibindo cada elemento no console
    console.log(e);
})
