//Um tipo fundamental de dados de JavaScript é o "objeto". Um objeto é um valor composto: ele agrega diversos valores (valores primitivos ou outros objetos) e permite armazenar esse valores pelo nome. Um objeto é um conjunto não ordenado de "propriedades", cada uma das quais tendo o um nome e um valor. Os nome de propriedades são strings; portanto dizer que os objetos mapeiam strings em valores. Esse mapeamento de string em valor recebe vários nomes: Provavelmente já conhecemos a estrutura de dados fundamental pelo nome "hash", "tabela de has", "dicionário" ou "array associativo". Contudo, um objeto é mais do que um simples mapeamento de strings em valores. Além de manter seu próprio conjunto de propriedades, um objeto JavaScript também herda as propriedades de outro objeto, conhecido como "protótipo". Os métodos de um objeto normalmente são propriedades herdas e essa "herança de protótipos" é um recurso importante em JavaScript. 

//Os objetos JavaScript são dinâmicos - normalmente propriedades podem ser adicionadas e excluídas -, mas podem ser usadas para simulas os objetos e as "estruturas" estáticas das linguagens estaticamente tipadas. 

//Qualquer valor em JavaScript que não seja uma string, um "numero", "booleano", "null" ou "underfined", é um "objeto". E mesmo que strings, números e valores booleano não sejam objetos, eles se comportam como objetos imutáveis. 

// As coisas mais comuns feitascom objetos são: criá-los e configurar, consultar, excluir, testar e enumerar suas propriedades. 

//Uma "propriedade" tem um nome e um valor. Um nome de propriedade pode ser qualquer string, incluindo a string vazia, mas nenhum objeto pode ter duas propriedades com o mesmo nome. O valor pode ser qualquer valor de JavaScript ou uma função com o mesmo nome. O valor pode ser qualquer valor de JavaScript ou uma função "getter" ou "setter" ou (ambas). Além de seu nome e valor, cada propriedade tem valores associados que chamamos de "atributos de propriedade". 

    // * O Atributo gravável especifica se o nome da propriedade po ser configurado. 

    // * O atributo unumerável específica se o nome da propriedade é retornado por um laço for/in. 

    //* O atributo configurável especifica se a propriedade pode ser excluída e se seus atributos podem alterados. 


//Além de suas propriedades, todo "objeto" tem três "atibutos de objeto" associados: 

    //* O "protótipo" de um objeto é uma referência para outro objeto do qual as propriedades são herdadas. 

    //* A classee de um objeto é uma string que classifica o tipo do objeto. 

    //* A flag extensível de um objeto específica se novas propriedades e podem ser adicionadas no objeto. 
    
//Por fim, aqui estão alguns termos que vamos usar para diferenciar entre três categorias amplas de objetos de JavaScript e dois tipos de propriedades: 

    //* "objeto nativo": é um objeto ou uma classe de lobjetos definida pela especificação ECMAScript. Arrays, funções, datas e expressões regulares são objetos nativos. 

    //* "objeto hospedeiro": é um objeto definido pelo ambiente hospedeiro (como uma navegador Web) dentro do qual o impretador JavaScript está incorporado. Os objetos HTML-Element, que representam a estrutura de uma página Web em JavaScript do lado do cliente, são objetos hospedeiros. Os objetos hospedeiros também podem ser objetos nativos, como quando o ambiente hospedeiro define que são objetos Function normais de JavaScript. 

//* Um objeto definido pelo usuário é qualquer objeto criado pela execução de código JavaScript. 

//* Uma propriedade própria é uma propriedade definida diretamente em um objeto. 

//* Uma propriedade herdada é uma propriedade definida pelo objeto protótipo de um objeto. 


