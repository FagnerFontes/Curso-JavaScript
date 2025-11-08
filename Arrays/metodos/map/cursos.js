//A funao do metodo map()  criar um novo array com os resultados da chamada de uma funo para cada elemento do array original.

// Objetivo: Criar um array com os nomes dos cursos
// 1. Criar um array com os nomes dos cursos
// 2. Percorrer o array cursos
// 3. Imprimir o índice e o nome do curso
// 4. Imprimir o array com os nomes dos cursos

//Neste código o metodo

const cursos = ["PHP", "JavaScript", "CSS", "HTML", "React", "C", "Java"]//Cria um array com os nomes dos cursos

const nomesCursos = cursos.map((curso, i)=>{//Cria um array com os nomes dos cursos. Aqui é utilizado o método map para percorrer o array cursos
    console.log(i+1 + "-", curso);//Imprime o índice e o nome do curso
})

console.log(`${nomesCursos}`);//Imprime o array com os nomes dos cursos