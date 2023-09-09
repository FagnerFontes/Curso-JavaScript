
// const msg = ()=>{//Definindo uma função chamada "msg" que exibe um alerta com a mensagem
//     alert("Item adicionado")
// }

//-------------------- Exer1--------------------------------
  
const c1 = document.querySelector("#c1")//Selecionando o elemento HTML com ID "c1" e atribuindo-o à variárvel "c1"

//Adicionando um ouvinte de evento para o evento "click" no elemento "c1"
//A função "msg" será chamada, exibindo um alerta com a mensagem "item adicionado". 
//c1.addEventListener("click", msg)

//Adicionando outro ouvinte de evento para o evento  "click" no elemento "c1". Quando "c1" é clicado novamente.
//Esta função anônima será chamada, que destaca o elemento "c1" adicionando a classe CSS "destaque". 
// c1.addEventListener("click",(evento)=>{
//     const el=evento.target//Obtém o elemento que foi clicado
//     el.classList.add("destaque")//Adiciona a classe "destaque" ao elemento para destacá-lo visualmente. 
// })

//------------------- Exer2---------------------------------

//Selecionando o elemento HTML com o ID "c2" e atribuindo-o à variável "c2". 
//const c2 = document.querySelector("#c2")

//Adicionando um ouvinte de evento para o evento "click" no elemento "c2". 
//A função será "msg" será chamada, exibindo um alerta com a mensagem "item adicionado"
//c2.addEventListener("click", msg)

//Adicionando um outro ouvinte de evento para o evento "click" no elemento "c2". Quando "c2" é clicado novamente. 
//A função anônimma será chamada, que destaque o elemento "c2" adicionando a classe CSS "destaque". 

// c2.addEventListener("click",(evento)=>{
//     const el=evento.target//Obtém o elemento que foi clicado
//     el.classList.add("destaque")//Adiciona a classe "destaque" ao elemento para destacá-lo visualmente. 
// })
//----------------- Exer3 -------------------------------
const curso = [...document.querySelectorAll(".curso")]

curso.map((elemento)=>{
    elemento.addEventListener("click", (evento)=>{
        const elemento = evento.target
        elemento.classList.add("destaque")
        console.log(elemento.innerHTML + " foi clicado");
    })
})



