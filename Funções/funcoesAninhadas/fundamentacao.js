//Funções aninhadas, também conhecjidas como funções internas ou funções dentro de funções, são funções que são definidas dentro do escopo de outra função. Essas funções aninhadas podem acessar variáveis e parâmetros da função externa, além de terem sua própria lógica e comportamento. 

// A principal vantagem das funções aninhadas é que elas podem encapsular comportamentos específicos e manter um escopo limitado para as variáveis internas. Isso ajuda a organizar e modularizar o código, tornando-o mais legível e mais fácil de entender. Além disso, as funções aninhadas podem ser usadas para implementar lógica auxiliares ou detalhes de implementação que não precisam ser visíveis ou acessível fora da função principal. 

//Aqui está um exemplo simples de como as funções aninhadas funcionam: 

const saudacao = (nome) =>{

    const mensagem =() =>{
        return `Olá, ${nome}! Bem-vindo!`
    }
    return mensagem()
}

const resultado = saudacao("Fagner Fontes")
console.log(resultado);

//No exemplo acima, a função "mensagem" está aninhada dentro da função "saudação". Ela tem acesso ao parâmetro "nome" da função externa e pode retornar uma mensagem personalizada. A função externa "saudação" interna mensagem e retorna seu resultado. 

//No entanto, é importante notar que as funções aninhadas não são acessíveis fora da função externa konde foram definidas. Isso ajuda a evitar conflitos de nomes de funções e variáveis e a manter um escopo controlado. 

// Embora as funções aninhadas sejam lpoderosas, é importante usá-las com moderação e considerar a clareza e a organização do código ao decidir quando e onde usá-las. 