const p_array = document.querySelector("#array")
const btnPesquisar = document.querySelector("#btnVerificar")
const resultado = document.querySelector("#resultado")

const elemento_array = [5,6,9,11,14,16,4,3,19]
p_array.innerHTML=elemento_array

btnVerificar.addEventListener("click", (evt)=>{
   
    
    const ret = elemento_array.some((e, i)=>{

        if(e<18){
             resultado.innerHTML = "Array não conforme na posição: " + i + " que corresponde a idade " + elemento_array[i]
        }
       return e > 18
    })

    if(ret){
        resultado.innerHTML ="OK"
    }

    })

    console.log("Teste");