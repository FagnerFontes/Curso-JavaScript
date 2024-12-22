const caixa1=document.querySelector("#caixa1")
const caixa2=document.querySelector("#caixa2")
const btn=document.querySelector("#btn_copiar")
const todosCursos=[...document.querySelectorAll(".curso")]

todosCursos.map((el)=>{
    el.addEventListener("click",(evento)=>{
        const curso=evento.target
        curso.classList.toggle("selecionado")
    })
})

btn.addEventListener("click",()=>{
    const cursosSelecionados=[...document.querySelectorAll(".selecionado")]
    //console.log(cursosSelecionados);

    const cursosNaoSelecionado = [...document.querySelectorAll(".curso:not(.selecionado)")]
    //console.log(cursosNaoSelecionado);
    cursosSelecionados.map((el)=>{
        caixa2.appendChild(el)
    })

    cursosNaoSelecionado.map((el)=>{
        caixa1.appendChild(el)
    })
})