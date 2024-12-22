//O método "addEventListener" é uma função em JavaScript que permite registre ou anexe um ouvinte de evento(event listener) a um element HTML. Esse ouvinte de evento escuta por eventos especificos que que ocorrem no elemento e esceuta uma função ou código quando o evento ocorre. É amplamente utilizado para adicionar interatividade a páginas web, tornando-as reativas a ações do usuário ou a outros eventos. 

//Aqui estão alguns dos conceitos-chave relacionados ao "addEventLintener": 

    // *ElementoHtML: Precisamos selecionar o elemento HTML ao qual deseja adicionar o ouvinte de evento. Isso pode ser feito usando métodos como "getElementById", "querySelector", "getElementTagName" ou outros. 

    //*Função de Callback. Fornecemos uma função (callback) que será executada quanto o vento ocorrer. Essa função é chamada de "função de tratamento de eventos". Quando o evento específico é desencadeado no elemento, essa função é chamada. 

    //Aqui está um exemplo simples de uso do "addEventListener"

    //Selecionando o elemento de botão por ID
    const botao = document.getElementById("curso c2")

    //adicionando um ouvinte de evento para o evento de clique
    botao.addEventListener("click", function() {
        alert("Você Clicou no botão")
    })

    

    //Neste exemplo, quando o botão com o ID "meubotao" é clicado, a função anônima passada como o segundo argumento será executada e exibirá um alerta. 

    //O "addEventListener" é muito flexível e versátil. Podemos usá-lo para lidar uma variedade de eventos, como cliques de mouse, toques em dispositivos móveis, pressionamentos de tecla, envio de formulários e muito mais. Também permite a remoção posterior de ouvintes de eventos usando o método "removeEventListener", se necessário. 

    //Em resumo, o "AddEventListener" é uma ferramenta poderosa para tornar sua página da web interativa e responsiva a ações do usuário, tornando a experiência do usuário dinâmica e envolvente.
