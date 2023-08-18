

const qualTurno = prompt("Qual turno você estuda?")

function turno(turno) {
    
    switch(turno){
        case "M": 
            return "Bom dia";
        case "V": 
            return "Boa Tarde";
        case "N": 
            return "Boa noite"  
        
            default: 
            return "Turno inválido"
    }
}

const mensagem = turno(qualTurno)
console.log(mensagem);