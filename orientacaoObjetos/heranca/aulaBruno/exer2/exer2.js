
//Seleciona elementos do HTML pelo ID e atribui a variáveis
const f_tipoMilitar = document.querySelector("#f_tipoMilitar")
const f_tipoNormal = document.querySelector("#f_tipoNormal")
const f_blindagem = document.querySelector("#f_blindagem")
const f_municao = document.querySelector("#f_municao")
const f_nome = document.querySelector("#f_nome")
const f_portas = document.querySelector("#f_portas")
const carros = document.querySelector("#carros")
const btn_addCarro = document.querySelector("#btn_addCarro")

//A "a_carros" é inicializada como um array vazio para armazenar objetos de carros posteriormente: 
let a_carros = []

//São definidos ouvkintes de eventos para os elementos HTML "f_tipoMilitar" e "f_tipoNormal". Quando o usuário clkica nesses elementos, ou ouvintes de eventos executam ações com base na seleção:
f_tipoMilitar.addEventListener("click", (evt) => {

    //Define valore padrão quando o tipo de carro militar é selecionado 
    f_nome.value = ""
    f_portas.value = 0
    f_blindagem.value = 0
    f_municao.value = 0
    console.log("Teste");
    f_blindagem.removeAttribute("disabled")
    f_municao.removeAttribute("disabled")
})

//Define um evento de clique para o elemento com ID "f_tipoNormal"
f_tipoNormal.addEventListener("click", (evt) => {
    f_nome.value = ""
    f_portas.value = 0
    f_blindagem.setAttribute("disabled", "disabled")
    f_municao.setAttribute("disabled", "disabled")
    console.log("Testando");
})

//Função para gerenciar a exibição de carros na página 
const gerenciarExibicaoCarros = () => {
    carros.innerHTML = ""
    a_carros.forEach((c) => {
        const div = document.createElement("div")
        div.setAttribute("class", "carro")
        div.innerHTML = `Nome: ${c.nome}<br/>`
        div.innerHTML += `Portas: ${c.portas}<br/>`
        div.innerHTML += `Blindagem: ${c.blindagem}<br/>`
        div.innerHTML += `Munição: ${c.municão}<br/>`
        carros.appendChild(div)

    })
}

//Define um evento de click para o botão "Adicionar Carro"
btn_addCarro.addEventListener("click", () => {
    if (f_tipoNormal.checked) {
        //Cria um objeto da classe Carro se o tipo de carro normal estiver selecionado 
        const c = new Carro(f_nome.value, f_portas.value)
        a_carros.push(c)//Adiciona o carro ao array de carros
    } else {
        //Cria um objeto da classe Militar se o tipo de carro militar estiver selecionado
        const c = new Militar(f_nome.value, f_portas.value, f_municao.value, f_blindagem.value)
        a_carros.push(c)//Adioona o carro ao array de carros
    }
    gerenciarExibicaoCarros()//ATualiza a exibição de carros na página 
})

class Carro {//Classe PAI 


    constructor(nome, portas) {
        this.nome = nome;
        this.portas = portas,
            this.cor = undefined,
            this.ligado = false,
            this.vel = 0

    }

    ligar = function () {
        this.ligado = true
    }

    desligar = function () {
        this.ligado = false
    }

    setCor = function (cor) {
        this.cor = cor
    }
}

class Militar extends Carro {
    constructor(nome, portas, blindagem, municão) {
        super(nome, portas)
        this.blindagem = blindagem
        this.municão
    }

    atirar = function () {
        if (this.municão > 0) {
            this.municão--
        }
    }
}
const carro1 = new Carro("Normal", 4)
carro1.ligar()
carro1.setCor("Verde")

const carro2 = new Militar("Vingador", 6, 100, 50)


console.log(`${carro1.nome}`);
console.log(`${carro1.portas, 4}`);
console.log(`Ligado: ${(carro1.ligado ? "sim" : "Não")}`);
console.log(`Velocidade: ${carro1.vel}`);
console.log(`Cor: ${carro1.cor}`);
console.log("=========================");

console.log(`${carro2.nome}`);
console.log(`${carro2.portas, 4}`);
console.log(`Ligado: ${(carro2.ligado ? "sim" : "Não")}`);
console.log(`Velocidade: ${carro2.vel}`);
console.log(`Cor: ${carro2.cor}`);
console.log("=========================");