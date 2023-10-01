//Este código define uma classe "Pessoa" que possui propriedades de nome e idade, bem como métodos "getters" e "setter" para acessar e modkificar essas propriedades. Em seguida, ele cria uma interface simples no HTML, onde podemos adicionar pessoas com nome e idades e exibi-las na página  quando o botão "Adicionar" é clicado. O código utiliza manipulação do DOM para interagir com elementos HTML e JavaScript para criar e gerenciar objetos "Pessoa" em um array "pessoas"

class Pessoa {//Definição da classe Carro com um construtor que aceita um parâmentro "pnome"
    constructor(pnome, pidade) {
        this.nome = pnome//Inicializa a propriedade "nome" do objeto com valor de "pnome" 
        this.idade = pidade//Inicializa a propriedade "idade" do objeto com valor de "pidade".
    }

    //Método para obter o nome da pessoa. 
    getNome() {
        return this.nome
    }

    getIdade() {//Método par aobter a idade da pessoa
        return this.idade
    }

    //Método para definir o nome da pessoa. 
    setNome(nome) {
        return this.nome
    }

    setIdade(idade) {//Método para definir a idade da pessoa
        return this.idade
    }

    //Método para exibir informações da pessoa no console
    info() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);
        console.log(`======================`);
    }
}


let pessoas = []//Um array para armazena objetos Pessoa 
const btn_add = document.querySelector("#btn_add")//seleciona o botão com o id "btn_add" no HTML. 
const res = document.querySelector(".res")//Seleciona um elemento com a classe "res" no HTML


//Função para adicionar pessoas à lista e exibi-las na página 
const addPessoa = () => {
    res.innerHTML = ""//Lima o conteúdo anterior exibido
    pessoas.map((p) => {
        const div = document.createElement("div")//Cria um elemento <div>
        div.setAttribute("class", "pessoa")//Define a classe "pessoa" para a <div>. 
        div.innerHTML = `Nome: ${p.getNome()} <br/>Idade: ${p.getIdade()}`//Define o conteúdo da <div> com informações da pessoa; 
        res.appendChild(div)//Adiciona a <div> à página. 
    })
}

//Adiciona um ouvinte de eventos ao botão "Adicionar". 
btn_add.addEventListener("click", (evt) => {
    const nome = document.querySelector("#f_nome");//Seleciona o elemento de entrada de texto com o id "f_nome" 
    const idade = document.querySelector("#f_idade");//Seleciona o elemento de entrada de texto com o id "f_idade"
    const p = new Pessoa(nome.value, idade.value)//Cria um objeto Pessoa com o nome e idade fornecidos.  
    pessoas.push(p)//Adiciona o objeto Pessoa ao ao array de pesssoas
    nome.value = ""//Limpa o campo nome. 
    idade.value = ""//Limpa o campo idade
    nome.focus()//Coloca o foco de volta no campo de nome. 
    addPessoa()//Chama a função para exibir a lista atualizada de pessoas. 
})