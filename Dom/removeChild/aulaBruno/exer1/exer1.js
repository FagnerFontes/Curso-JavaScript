//Este código JavaScript cria elementos HTML representando cursos e os adiciona a um elemento com a ID "caixa1" no DOM. 

const caixa1 = document.querySelector("#caixa1")
const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySql", "Corel Draw"]
//Define um array chamado "cursos" contendo nomes dos cursos
cursos.map((el, chave)=>{

    //Crie um novo elemento HTML "div". 
    const novoElemento = document.createElement("div")
    
    //Defina o atributo "id" do novo elemento como "c" seguido pelo índice "chave".  
    novoElemento.setAttribute("id", "c"+chave)

    //Define o atributo "class" do novo elemento como "curso c1". 
    novoElemento.setAttribute("class", "curso c1")

    //Define o conteúdo interno (texto) do novo elemento como o valor atual do array "cursos". 
    novoElemento.innerHTML = el

    //Cria um novo elemento de imagem (um icone de lixeira)
    const btn_lixeira = document.createElement("img")

    //Define o atributo "src" parro caminho da imagem da lixeira
    btn_lixeira.setAttribute("src","./lixeira.png" )

    //Define o atributo "class" para a classe CSS "lixeira"
    btn_lixeira.setAttribute("class", "lixeira" )

    //Adiciona um ouvinte de evento de clique para o elemento de imagem da lixeira
    btn_lixeira.addEventListener("click", (evt)=>{
      //Quando o ícone lixeira é clicado, esta funçÃo de retorno de evento é acionada
        
      //Remove o elemento pai (que contém o íncone de lixeira) do DOM
         caixa1.removeChild(evt.target.parentNode) 
})
 
//Adiciona o íncone de lixeira como filho do elemento "novoElemento"
novoElemento.appendChild(btn_lixeira)

//Adiciona "novoElemento" como filho do elemento com ID "caixa1" do DOM
caixa1.appendChild(novoElemento)

})