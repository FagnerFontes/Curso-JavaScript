//O "querySelector" é usado para selecionar o primeiro elemento que corresponde a um seletor CSS específico. 

//Ele retorna apenas o primeiro elemento que corresponde ao seletor especificado. 

//Se nenhum elemento corresponder ao seletor, ele retorna "null"

//const elemento = document.querySelector(".classe")



// console.log("Bom Dia Fagner");

// const TodasDiv=[...document.getElementsByClassName("div")]//Busca todos os cursos 
// console.log(TodasDiv);//Imprime todos os cursos

// const cursoc1 = [...document.getElementsByClassName("curso c1")]//Busca todos o cursos com a classe c1 
// console.log(cursoc1);//Imprime todos os cursos c1

// const cursoc2 = [...document.getElementsByClassName("curso c2")]
// console.log(cursoc2);//Imprime todoss os cursos c2

// cursoc1.map((el)=>{
//     el.classList.add("destaque")
// })

const query_primeiroElemento = document.querySelector("div")
console.log(query_primeiroElemento);

const quere_TodosElementos = document.querySelectorAll(".curso")
console.log(quere_TodosElementos);


const query_cursosc1 = [...document.querySelectorAll(".c1")]
console.log(query_cursosc1);

const query_cursosc2 = [...document.querySelectorAll(".c2")]
console.log(query_cursosc2);