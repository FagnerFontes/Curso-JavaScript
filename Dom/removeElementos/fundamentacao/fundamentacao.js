//A função "remove()" é um método disponível para elementos do DOM em JavaScript, que é usado para remover um elementos específico do documento HTML. Essa função é maneira mais eficaz e direta de manipular o DOM para adicionar ou remover elementos, o que é comunente usado em aplicações web para interatividade e manipulação dinâmica da página. 

//Aqui estão alguns pontos-chave sobre a função "remove()"

 // 1. Antes de poder usar o método "remove()"

    //1. Seleção do elemento: Antes de pode usar o método "remove()", precisamos selecionar o elemento que deseja remover. Isso pode ser feito usando métodos como "document.getElementId()", "document.querySelector()", ou qualquer outra técnica de seleção de elementos do DOM. 

    //2. Chamando o Método Remove: Após selecionar o elemento, podemos chamar o método "remove()" nell. Exemplo: 
    const elementoParaRemover = document.getElementById("Curso")
   elementoParaRemover.remove()//Isso remove o elemento com o ID "meuElemento" do DOM. ´

   // 3. Sem Suporte a Argumentos: O método "remove" não aceita argumentos, o que significa que não podemos passr um elemento-alvo como argumento para o método. Em vez disso, devemos chamar o método "remove()" diretamente no elemento que deseja remover. 

   // 4. Efeito Colateral: A função "remove()" remove o elemento do DOM e também o desconecta de qualquer manipulação adicional no código JavaScript. Após ser removido, ele não poderá ser usado ou acessado a menos que seja adicionado de volta a DOM. 
   
   // 5. Alternativa ao "removeChild()":  A função "remove()" é a alternativa mais moderna e conveniente ao método "removeChild()", que constumava ser usado para remover elementos. O "removeChild" exigia que acessassemos o pai do elemento e, em seguida, chamasse "removeChild()" nele, enquanto o "remove()" permite que remova diretamente o elemento. 
   
   const botaoRemover = document.getElementById("botaoRemover")
   const elementoRemover = document.getElementById("elementoParaRemover")

   botaoRemover.addEventListener("click",()=>{
    elementoRemover.remove()
   })

   //Neste exemplo, ao clicar no botão "Remover, o elemento com o ID "elementoParaRemover"  é removido do DOM. Issso demonstra como a função "remove()" pode ser usada para interativamente adicionar e remover elementos da página da web. 
   console.log(5 + 9);