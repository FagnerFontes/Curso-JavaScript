const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const jobSelect = document.querySelector("#job")
const messageTextarea=document.querySelector("#message")

form.addEventListener("submit",(event)=>{

    event.preventDefault(); 
    //Verifica se o nome está vazio
    if(nameInput.value === ""){
        alert("Por favor, preencha o seu nome")
        return;  
    }

    if(emailInput === "" || !isEmailValid(emailInput.value)){
        alert("Por favor, preencha o seu e-mail")
        return
    }


    if(passwordInput.value === "" || !isPasswordValid(passwordInput.value)){
        alert("Digite a senha")
        return
    }


    //Verifica se a situação do candidato foi preenchida 
    if(jobSelect.value === ""){
        alert(`Selecione a situação de trabalho`)
        return
    }

    //Verifica se a mensagem do candidato foi preenchida
    if(messageTextarea.value === ""){
        alert(`Falta o campo mensagem!!`)
        return
    }


    //Se todo os campos estiverem corretamente preenchidos, envie o formulário 
    form.submit() 
} ); 

//Função que valida  e-mail
function isEmailValid(email){
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    ); 

    if(emailRegex.test(email)){
        return true; 
    }

    return false;
}

//Fun]ção que valida senha
function isPasswordValid(password){
// Pelo menos 8 caracteres
// Pelo menos uma letra minúscula
// Pelo menos uma letra maiúscula
// Pelo menos um número
// Pode conter caracteres especiais

    const passwordRegex = new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    )

    if(passwordRegex.test(password)){
        return true
    }
    return false;
}

