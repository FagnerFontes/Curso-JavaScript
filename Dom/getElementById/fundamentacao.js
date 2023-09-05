//O elemento getElementById é uma função pertecente ao objeto "document" no JavaScript, que permite selecionar um elemento HTML com base no valor de seu atributo "id". O "id" é um atributo único atribuído a um elemento HTML que o identifica de maneira exclusiva no contexto do documento. 

//A sintaxe básica do método "getElementById" é a seguinte

//const elemento = document.getElementById("id do elemento")

// * Onde: 

//* "elemento": é uma variável que armazenará a referência ao elemento encontrado. 

//* "idElemento": é o valor do atributo "id" do elemento HTML que deseja selecionar

//Este método retorna um único elemento que corresponde ao ID especificado, ou "null" se nenhum elemento for encontrado com o ID especificado. 

//Imagine que temos o seguinte elemento HTML: 

//<div id="meuElemento">Este é um elemento com ID</div>


 
//console.log("Teste");

const elemento1 = document.getElementById("HTML")
console.log(elemento1);
console.log(elemento1.id);
console.log(elemento1.innerHTML);
elemento1.innerHTML = "Curso HTML"
console.log(elemento1.innerHTML);


const elemento2= document.getElementById("CSS")
console.log(elemento2);

const elemento3 = document.getElementById("React")
console.log(elemento3);
console.log();

const elemento4= document.getElementById("MySql")
console.log(elemento4);

const elemento5 = document.getElementById("Java")
console.log(elemento5);