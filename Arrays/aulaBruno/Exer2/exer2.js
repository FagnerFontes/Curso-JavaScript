
const caixa = document.querySelector("#caixa")

let cores = ["azul", "amarelo", "vermelho"]
let cursos = ["HTML", "CSS", "JavaScript", cores]


cursos[3] = "C++" //Adiciona um novo elemento ao array cursos

// cursos.push("TypesCript")
// cursos.push("React")

//console.log(cursos);
console.log(cursos[4]);



cursos.map((el)=>{
    let p = document.createElement("p")
    p.innerHTML = el
    caixa.appendChild(p)
})

