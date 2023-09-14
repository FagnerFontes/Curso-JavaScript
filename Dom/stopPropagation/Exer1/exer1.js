const caixa1 = document.querySelector("#caixa1")
const btn_c1 = document.querySelector("#c1") 
const cursos = [...document.querySelectorAll(".curso")]


//=================== Exemplo1 ========================
caixa1.addEventListener("click", (evento)=>{
    console.log("clicado");
    console.log(evento);
} )

//=================== Exemplo2 ========================
btn_c1.addEventListener("click", (evento)=>{
  evento.stopPropagation()
   
})

//=================== Exemplo3 ========================
cursos.map((el)=>{
    el.addEventListener("click",(evento)=>{
        evento.stopPropagation()
    })
})

