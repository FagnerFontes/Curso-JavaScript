//JSON, que significa "JavaScrit Object Notation," é um formato de dados amplamente utilizado em JavaScript (e em outras linguagens de programação) para representar dados estruturados. Ele é uma notação textual que permite armazenar e trocar informações de forma fácil de ler e escrever. Aqui estão alguns pontos importantes sobre JSON em JavaScript: 

//1. Sintaxe Simples: JSON usa uma sintaxe simples que se assemelha a um objeto literal em JavaScript. Ele consiste em pares chave-valor, onde as chaves (nomes de propriedades) devem estar entre aspas duplas e os valores podem ser strings, números, booleanos, objetos, arrays, null ou outros objestos JSON. 

const pessoa={
    nome: "Fagner Fontes",
    idade:"43",
    cidade: "Belmonte",
    casado: false
    
}; 

const jsonStr = JSON.stringify(pessoa); 
const objPessoa=JSON.parse(jsonStr)

console.log(`${jsonStr}`);
console.log(objPessoa);

//2. Uso de Objetos e Arrays: JSON suporta lobjetos (conjuntos não ordenados de pares chave-valor) e arrays (listas ordenadas de valores). Podemos aninhar lobjetos para criar estruturas de dados mais complexas. 

//3. Serialização e Desserialização: Em JavaScript, podemos usar "JSON.stringify()" para converter um objeto JavaScript em uma string JSON(serialização) e "JSON.parse()" para converter uma string JSON em um objeto JavaScript (desserialização). 

//4. Comunicação de Dados: JSON é amplamente usado na comunicação entre cliente e servidor. Quando um aplicativo da web faz uma solicitação AJAX para um servidor, os dados frequentemente são transmitidos em formato JSON. 

//5. Configurações e Armazenamento de dados: JSON é comumente usado para armazenar connfigurações de aplicativos, preferências do usuário e até mesmo dados locais no navegador, como  no caso do armazenamento local ou de sessão. 

//5. Notação de Texto: JSON é uma notação de texto, o que o torna fácil de ser lido e gerado por humanos. Além disso, é independente de linguagem, o que significa que pode ser usado em várias linguagens de programação. 

//6. Segurança: JSON é seguro para ser avaliado em JavaScript por padrão, pois não permite a inclusão de código executável, tornando-o uma opção segura para a troca de dados entre sistemas. 