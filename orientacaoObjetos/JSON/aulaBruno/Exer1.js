const pessoa={
    nome: "Fagner", 
    canal: "Virtual Line", 
    curso:"JavaScript", 
    aulas:{
        aula1: "Introdução", 
        aula2: "Variáveis", 
        aula3: "Condicional"
    }
}

const string_pessoa={"nome":"Fagner","canal":"Virtual Line","curso":"JavaScript","aulas":{"aula1":"Introdução","aula2":"Variáveis","aula3":"Condicional"}}

const s_jsonPessoa=JSON.stringify(pessoa)

//console.log(pessoa);
console.log(s_jsonPessoa);
console.log(string_pessoa);