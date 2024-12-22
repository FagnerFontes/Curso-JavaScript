console.log("Bom Dia Fagner");

const cursosTodos=[...document.getElementsByClassName("curso")]//Busca todos os cursos 
console.log(cursosTodos);//Imprime todos os cursos

const cursoc1 = [...document.getElementsByClassName("curso c1")]//Busca todos o cursos com a classe c1 
console.log(cursoc1);//Imprime todos os cursos c1

const cursoc2 = [...document.getElementsByClassName("curso c2")]
console.log(cursoc2);//Imprime todoss os cursos c2

cursoc1.map((el)=>{
    el.classList.add("destaque")
})