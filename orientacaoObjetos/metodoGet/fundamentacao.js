//O método "get" faz parte da funcionalidade dos "método de acesso" (getters) de propriedades de objeto, é usado para acessar o valor de uma propriedade de forma controlada. Os métodos "get" permitem que defina um comportamento personalizado para recuperar o valor de uma propriedade, em vez de acessar diretamente o valor da propriedade. 

//Aqui estão algumas fundamentações sobre o método "get" em JavaScript: 

//No código abaixo, o método "get" é usado para criar "getters" em objetos JavaScript. Gettters são métodos especiais que permitem o acesso a propriedade de objetos de forma controlada. Eles são usados para obter o valor de uma propriedade, mas antes de retornar o valor, podemos adicionar lógica personalizada

//1. Definição de um Getter: Para criar um getter para uma propriedade, precisamos definir uma função dentro do objeto e a associa a uma propriedade usando a palavra-chave "get". Quando essa propriedade é acessada, a função getter é automaticamente chamada. 

const objeto = {
    _valor: 42, 

    get valor(){
        return this._valor
    }
}

console.log(` o valor do objeto è: ${objeto.valor}`);

//2. Acesso a Propriedade controlado: O uso de getter permite que controlemos a propriedade é acessada. Podemos adicionar lógica personalidada para calcular ou transformar o valor antes de entregá-lo. 

const pessoa = {
    _nome: "Fagner ",
    _sobreNome: "Fontes Batista",

    get nomeCompleto(){
        return `Meu nome é ${this._nome}${this._sobreNome}`
    }
}

console.log(pessoa.nomeCompleto);

//3. Convenção de Nomenclatura com "_": É como usar uma convenção de nomenclatura com um sublinhado  "_" no início do nome da propriedade para indicar que ela é uma propriedade privada. Isso não é uma regra do JavaScript, mas é uma prática comum pra indicar que a propriedade deve acessada por meio de um "getter". 

//4. Getters e Setters: Os "getters" são frequentemente usados em um conjunto com "setters" (métodos "set") para criar propriedades que podem ser lidas e gravadas de forma controlada. Enquando os "getters" permitem a leitura personalizada de propriedades, os "setters" permitem a gravação personalizada. 

const pessoa2 = {
    _nome: '', 
    set nome(novoNome){
        if(novoNome.length > 1){
            this._nome = novoNome
        }else{
            console.log(`Nome inválido`);
        }
    }, 

    get nome(){
        return this._nome
    }
}; 

pessoa2.nome = "F"
pessoa2.nome = "Fagner Fontes"

console.log(pessoa2.nome);