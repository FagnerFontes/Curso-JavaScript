//A remoção de elementos do DOM em JavaScript é uma opeção comjum para manipular a estrutura da página da web. O método "removeChild" é uma das maneiras de realizar essa tarefa. Ele é usado para remover um nó filho específico de um nó pai. 

//Aqui está como funciona e como é fundamentado: 
    
    //1. Seleção do nó pai: Promeiro precisa selecionar o nó pai do elemento que deseja remover. Podemos fazer isso usando métodos como "document.getElementById", "document.querySelector", ou qualquer outras técnica de seleção de elementos. 

    //2. Seleção do nó filho: Em seguida, seleciona o nó filho que deseja remover. Isso pode ser feito usando métodos semelhantes de seleção de elementos. 

    //3. Chamada do método "removeChild": Agora que temos o nó e o nó filho que deseja remover, chamamos o método "removeChild" no nó pai. Isso requer passar o nó filho que que desejamos remover como argumento para o método. A remoção é realiza quando esse método é chamado. 

    //Aqui está um exemplo de código que demonstra a remoção de um elemento do DOM: 

    //Seleciona o nó pai
    const pai = document.getElementById("Elemento Pai")
    console.log(pai);
     const filho = document.getElementById("Elemento Filho")
    // console.log(filho);

    //Remove o nó filho do nó pai
    pai.removeChild(filho)

    //=================== Fundamentos ======================

        //* O método "removeChild" é uma parte do modelo de objeto de documento (DOM) do JavaScript e é usado para manipular a estrutura de árvore do DOM. 

        //* Ele é capaz para remover elementos específicos com base em sua referência permitindo um controle precisop sobre o que é removido. 

        //* Lembre-se de que, após a remoção, o elemeo filo não é apenas escondido; ele removido do DOM e não pode ser acessado. Posteriormente, a menos que seja adicionado de volta. 

        //* Podemos também remover elementos com base em seu índice de nó filho usando o método "removeChild", mas a seleção precisa ser um pouco dirente nesse caso.