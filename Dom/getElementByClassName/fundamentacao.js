//O método "getElementsByClasName()" é uma função JavaScript que permite selecionar elementos HTML com nase em suas classes CSS. Ele retorna uma coleção HTML(não uma matriz) de todos os elementos que têm uma classe especifíca. Essa coleção é semelhante a um array, mas não possui todos os métodos os métodos de array, apenas alguns, como o "length". 

//Aqui está como podemos usar o "getElementsByClasName()"

const elementos1 = document.getElementsByTagName("div")
console.log(elementos1);

const elementos = document.getElementsByClassName("minha-classe")
// console.log(elementos);

//Neste exemplo, todos os elementos que têm a classe CSS "nome-da-classe" serão selecionados e armazenados na variável "elementos". Podemos substituir "nome-da-classe" pelo nome da classe que desejamos selecionar.

//Aqui está alguns pontos importantes a serem observados: 

//1. Retorna uma coleção: "getElementsByClasName" retorna uma coleção HTML (chamada de nodeList) de elementos correspondentes. Isso significa que podemos acessar os elementos usando um índice, assim como faria com um array, mas as operações de array não estão disponíveis diretamente. Por exemplo, podemos acessar o primeiro elemento como "elementos[0]". 

//2. Selecionado múltiplas classes: Podemos selecionar elementos que têm várias classes especificando todas as classes desejadas no argumento. Por exemplo: "document.getElementsByClasName("classe1 classe2")"; 

//3. Atualizações dinâmicas: A coleção retorna é ao vivo, que significa que reflete as mudanças no DOM em tempo real. Se elementos com a classe especificada forem adicionados ou removidos do documento, a coleção será atualizada. 

//4. O "getElementsByClasName" é suportado em todos os navegadores modernos. No entanto, o comportamento em relação a espacos em branco na classe pode variar. 

//Aqui está um exemplo de uso: 
for(let i = 0; i < elementos.length; i++){
    elementos[i].textContent = "Nova classe"
}

console.log(elementos)

//Neste exemplo, todos os elementos com a classe "minha-classe" terão seu conteúdo alterado para "Nova-Classe". 
