console.log("Olá!! Bom Dia");

//O método "stopPropagation()" é uma função utilizada em javaScript para impedir a propagação de eventos em um modelo de eventos em cascata, como o modelo de eventos do DOM. 

//Em um modelo de eventos em cascata, um eventos disparado em um elemento DOM é propagado para os elementos pai (subindo na hierarquia) ou para os elementos filhos (descendo na hierarquia) a menos que seja interrompido. Isso significa que, por padrão, um evento pode afetar múltiplos elementos em um documento HTML. 


// 1. Prevenir Propagação de Eventos: Quando chamamos "event.stopPropagation()" em um objeto de evento (geralmente passado como argumento para um ouvinte de evento), ele impede que o evento se propague além do elemento atual. Isso significa que os ouvintes de eventos nos elementos paki serão acionado para esse evento específico. 

//2. Usos Comuns: O "event.stopPropagation()", é frequentemente usado em cenários em que se deseja impedir que um evento seja tratado por elementos pai quanto ele já foi manipulado pelo elemento atual. Por exemplo, em um menu suspenso, podemos usar "event.stopPropagation()" quando o usário clica em um item de menu para evitar que o clique se propague até elemento pai que controla a abertura/fechamento do menu. 

const botao = document.getElementById("meuBotao")
const caixa = document.getElementById("minhaCaixa")

        
        

       botao.addEventListener("click", (event)=>{
            //Faça algo quando o botão for clicado. 
          ///event.stopPropagation();
        console.log(botao);
       })

       caixa.addEventListener("click", ()=>{

       })
       
       
       
       
      
