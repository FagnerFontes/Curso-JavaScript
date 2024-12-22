//Seleciona o elemento com o ID "numero" do html
const numero=document.getElementById("numero")

//Inincializa uma variável booleana chamada "resultado" com o valor falso
let resultado = false

//Define um tempo em milissegundos (3000ms = 3segundos)
let tempo=3000


//Configura um temporizado para executar uma função após "tempo" milissegundos
setTimeout(()=>{
    //Após o tempo especificado, define "resultado" como verdadeiro
    resultado=true
},tempo)
 
//Verifica o valor de "resultado"
if(resultado){

    //Se "resultado" for verdadeiro, altera o conteúdo do elemento "numero"
    numero.innerHTML="Deu tudo certo"

    //Remove a classe "erro" do elemento, caso exista 
    numero.classList.remove("erro")

    //Adiciona a classe "ok" ao elemento
    numero.classList.add("ok")
}else{
    //Se "resultado" for falso, altera o conteúdo do elemento "numero"
    numero.innerHTML="Deu tudo errado"


    numero.classList = "erro"

    //Remove a classe "ok" do elemento, caso exista
    numero.classList.remove("ok")
}

//Altera o cónteúdo do elemento "numero" para indicar um processo em andamento
numero.innerHTML= "Processando..."