const p_array = document.querySelector("#array")
const btnReduzir = document.querySelector("#btnReduzir")
const resultado = document.querySelector("#resultado")

const elemento_array = [5, 8]
let aux = []

p_array.innerHTML = elemento_array

btnReduzir.addEventListener("click", (evt) => {
    resultado.innerHTML = elemento_array.reduce((anterior, atual, pos) => {
   
        return anterior * atual

    })
})

