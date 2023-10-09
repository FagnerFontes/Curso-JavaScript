class ValidadorSenha{
    static validarSenha(senha){
        if(senha.length < 8){
            return false;
        }

        if (!/[a-z]/.test(senha)) {
            return false;
        }

        if (!/[A-Z]/.test(senha)) {
            return false;
        }

        if(!/\d/.test(senha)){
            return false
        }
        return true
    }
}

console.log(ValidadorSenha.validarSenha("Silvia15"));
console.log(ValidadorSenha.validarSenha("senhaFraca"));