let email = document.getElementById('email')
let password = document.getElementById('password')
let form = document.querySelector('form')
let textForm = document.getElementById('textForm')
let textEmail = document.getElementById("textEmail")
let textPassord = document.getElementById("textPassword")

form.addEventListener('submit', (e)=>{

    if(email.value == '' && password.value == ''){
        textForm.textContent= `Você precisa preencher todos os campos!!`

    }else if(validatorEmail(email.value) === true && validatorPassword(password.value) === true){
    console.log(email.value);
    console.log(password.value);
    textForm.textContent = ''
    textEmail.textContent = ''
    textPassord.textContent=''
    }

    else{
        console.log(`Requisição não atendida `);
    }
    e.preventDefault()
})

email.addEventListener("keyup", ()=>{
    if(validatorEmail(email.value) !== true){
        textEmail.textContent = "O formado E-mail deve ser Ex.: nameabc@.com"
    }else{
        textEmail.textContent= ''
    }

    if(validatorPassword(password.value) !== true){
        textPassord.textContent = `
        A senha deve ter pelo menos 8 caracteres
       `
    }else{
        textPassord.textContent = ''
    }
} )

function validatorEmail(email){
    let emailPattern =   /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(email)
}

function validatorPassword(password){
    let passwordPattern =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    return passwordPattern.test(password)
}





