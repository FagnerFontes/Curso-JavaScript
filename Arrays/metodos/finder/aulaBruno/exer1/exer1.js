const p_array = document.querySelector("#array")
const txt_pesquisar = document.querySelector("#txt_pesquisar")
const btnPesquisar = document.querySelector("#btnPesquisar")
const resultado = document.querySelector("#resultado")

const elemento_array = [10,5,8,2,9,15,19,22,25]
p_array.innerHTML=elemento_array

btnPesquisar.addEventListener("click", (evt)=>{
    const ret = elemento_array.find((e,i)=>{
    if(e== txt_pesquisar.value){
        resultado.innerHTML="Valor Pesquisado: " + e + " na posição: " + i

        return e
    }

    })
    console.log(ret);
})