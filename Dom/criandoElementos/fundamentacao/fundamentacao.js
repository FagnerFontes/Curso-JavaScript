console.log("Testando");

//A criação de novos elementos e a adição deles no DOM em JavaScrip é uma parte fundamental da manipulação dinâmica de conteúdo em páginas da web. Isso permite que se adicione, remova ou modifique elementos HTML de forma programática em resposta a eventos ou outras condições. Aqui está como funciona e por que é importante. 


//========================== Criação de elementos ======================== 
//Podemos criar novos Elementos HTML no JavaScript usando o construtor "document.createElement()". Por exemplo: 

   // const novoParagrafo = document.createElement("p")//Cria 
    //Isso cria um novo elementos "<p>" na memória mas não está visível na página. 
    //console.log(novoParagrafo);

    

//========================== Criação de elementos ======================== 
//Modificação de elementos: 
    //Podemos definir novos atributos, texto e outros valores os elementos criados. Por exemplo 
    //novoParagrafo.textContent = "Novo Paragráfo adicionado."
    // novoParagrafo.setAttribute("class", "destaque")

    // const novoH3 = document.querySelector("h3")//Busca o elemento com h3 
    // console.log(novoH3);//Imprime o texto atual 
    // novoH3.textContent = "Programando em  Java Script"//Modifica e imprime um novo texto

    //========================== Adição de elementos ========================
    //Adição de Elementos ao DOM:
        //Para tornar um elementos visível na página, devemos adicioá-lo ao DOM.Podemos fazer isso usando métodos como "appendChild()", "insertBefore()". "prepend" entre outros.   
    
    //Seleciona o elemento HTML com o ID "elementoPai" e armazena-o na variável pai
   const pai = document.getElementById("elementoPai")

   
   console.log(elementoPai);//Imprime no console o valor de uma variável chamada "elementoPai"

   const filho = document.createElement("div")//Cria um novo elemento HTML <div> e armazena na variável filho 
   pai.appendChild(filho)//Adiciona um elemento "filho" como filho do elemento "pai" que foi selecionado anteriormente
   console.log(filho);

 
    //========================== Adição de elementos ========================