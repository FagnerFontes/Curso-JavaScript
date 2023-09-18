const p_array = document.querySelector("#array")
const txt_pesquisar = document.querySelector("#txt_pesquisar")
const btnPesquisar = document.querySelector("#btnPesquisar")
const resultado = document.querySelector("#resultado")

const familia = ["Esmeralda", "Fagner", "Fernando" ,"Jack", "Wackson"]
p_array.innerHTML= familia
console.log(familia);


btnPesquisar.addEventListener("click", ()=>{
    const ret = familia.find((e,i)=>{
        if(e.toUpperCase() == txt_pesquisar.value.toUpperCase()){
            resultado.innerHTML="Nome Pesquisado foi : " + e + ": na posição: " + i

            return e
        }
        
    })
    console.log(ret);
})


