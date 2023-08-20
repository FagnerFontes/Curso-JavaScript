function calcularMedia(...notas) {
    let total = notas.reduce((acc, nota) => acc + nota, 0)
    return total / notas.length; 
}

console.log(calcularMedia(7,8,9));