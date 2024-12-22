//Este código JavaScript cria elementos HTML representando cursos e os adiciona a um elemento com a ID "caixa1" no DOM. 

//
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

    //Anexe o novo elemento à caixa com o ID "caixa1". 
    caixa1.appendChild(novoElemento)
})