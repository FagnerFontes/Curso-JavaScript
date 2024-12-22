//Selecio o elemento HTML com o ID "array" e armazena-o em p_array
const p_array = document.querySelector("#array")

//Seleciona o botão "btnVerificar" e armazena-o em btnVerificar
const btnVerificar = document.querySelector("#btnVerificar")

//Seleciona o botão com o ID "resultado" e armazena-o em em resultado
const resultado = document.querySelector("#resultado")

//Define um array de idades chamado "elemento_array"
const elemento_array = [89,35,38,32,19,55,18,22,5]

//Atualiza o conteúdo do elemento "p_array" para exibir o array como uma uma string. 
p_array.innerHTML=elemento_array

//Adiciona um ouvinte de evento de clique ao botão "btnVerificar"
btnVerificar.addEventListener("click", (evt)=>{
   
    //Utiliza o metodo "every()" para verificar  se todas as idades no array são maiores que 18 
    const ret = elemento_array.every((e, i)=>{

        //Verifica se a idade atual (e) é menor que 18
        if(e<18){
             resultado.innerHTML = "Array não conforme na posição: " + i + " que corresponde a idade " + elemento_array[i]
        }
        //Retorna true se a idade atual for maior que 18
       return e > 18
    })
    //Verifica o valor de "ret" após a verificação com "avery()"
    if(ret){
        //Se todas as idade forem maiores que18, atualiza o conteúdo do elemento "resultado" para "OK"
        resultado.innerHTML ="OK"
    }

    })