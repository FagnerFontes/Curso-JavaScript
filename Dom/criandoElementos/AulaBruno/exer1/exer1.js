//Este código cria um novo elemento "div" com o conteúdo "Corel Draw" e define seus atributos "id" e "class" como "c7" e "curso c1", respectivamente. Em seguinda, ele adiciona esse novo elemento como um filho do elemento como ID "caixa1" no DOM, usando "caixa1.appendChild(novoElemento)".Isso resultará em um novo elemento HTML dentro de "caixa1" com o conteúdo "Corel Draw" e as classe "curso" e "c1"




//Cria um novo elemento HTML <div> e armazena-o na variável "novoElemento". 
const novoElemento = document.createElement("div")

//Define o conteúdo HTML do novo elemento como "Corel Draw"
novoElemento.innerHTML="Corel Draw"

//Define o atributo "id" do novo elemento como "c7"
novoElemento.setAttribute("id", "c7")

//Define o atributo "class" do novo elemento como "curso c1"
novoElemento.setAttribute("class", "curso c1")

//Adiciona o novo elemento como um filho do elemento como ID no DOM
caixa1.appendChild(novoElemento)
