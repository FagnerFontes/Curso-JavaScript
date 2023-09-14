//Seleciona o elemento com ID "caixa1" e armazena em caixa1
const caixa1=document.querySelector("#caixa1")

//Seleciona o elemento com "caixa2" e armazena em caixa2
const caixa2=document.querySelector("#caixa2")

//Seleciona o elemento com ID "btn_copiar" e armazena em btn
const btn=document.querySelector("#btn_copiar")

//Utiliza o método "document.querySelectorAll" para selecionar o elemento com a classe "curso" e armazena em todos os cursos com um array
const todosCursos=[...document.querySelectorAll(".curso")]


//Utiliza o método "map para iterar sobre cada elemento no array "todosCursos"
todosCursos.map((el)=>{
    //Adiciona um ouvinte de evento de click (click) ao elemento atual (el)


    el.addEventListener("click",(evento)=>{
        //Quando o elemento é clicado, a função de retorno de evento  é acionada. 

        //Pega o elemento que clicado usando o evento (evento.target) e armazena em "curso". 
        const curso=evento.target

        //Usa o método .classList.toggle() para alternar (adicioar ou remover) a classe "selecionado" o elemento "curso"
        curso.classList.toggle("selecionado")
    })
})

//Seleciona o elemento HTML com id "btn_copiar" e adiciona um ouvinte de evento de clique a ele.  
btn.addEventListener("click",()=>{
    
    
    //Seleciona todos os elementos HTML com a classe "selecionado" e os armazea em um array "cursosSelecionado"
    const cursosSelecionados=[...document.querySelectorAll(".selecionado")]
    console.log(cursosSelecionados);

    const cursosNaoSelecionados =[...document.querySelectorAll("curso:not(.selecionado)")]
    console.log(cursosNaoSelecionados);

 //Aqui utiliza o método "map" para iterar cada elemento em "cursosSelecionados"   
    cursosSelecionados.map((el)=>{

        //Para cada elemento, move-o (oppenChild) para dentro do elemento com o id "caixa2"
        caixa2.appendChild(el)

    })

    cursosNaoSelecionados.map((el)=>{
        caixa1.openchild(el)
    })
})

const teste = [document.getElementsByName]