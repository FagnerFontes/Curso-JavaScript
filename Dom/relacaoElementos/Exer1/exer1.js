const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]


//console.log(caixa1.firstElementChild);
//console.log(caixa1.lastElementChild);
//console.log(caixa1.children);

console.log(caixa1.hasChildNodes());
console.log(btn_c[0].hasChildNodes());
console.log(btn_c[0].childNodes);

if(caixa1.children.length > 0){
    console.log("Possui Filhos");
}else{
    console.log("Não Possui Filhos");
}

//Altera o primeiro elemento de caixa
console.log(caixa1.firstElementChild.innerHTML = "Corel Draw");

//Altera o elemento HTML de acordo com posição vetor escolhida
console.log(caixa1.children[1].innerHTML= "Excel");