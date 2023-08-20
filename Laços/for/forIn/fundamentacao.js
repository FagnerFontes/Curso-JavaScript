//A instrução forIn utiliza a palavra-chavve for, mas é um tipo de laço completamente diferente do laço "for" normal. Um laço "for/in" é como segue: 

//for(variável in objeto)
// instrução 

//variável normalmente nomeia uma variável, mas pode ser qualquer exepressão que seja avaliada como 1value ou uma instrução var que declare uma úniccca variável - deve ser algo apropriado para o lado esquerddo de uma exepressão ddde atribuição. Objeto: é uma expressão avaliada como um objeto. Como sempre. "instrução" é a instrução ou bloco de instruções que serve como corpo do laço. 

//É fácil usar uma laço "for" normal para interar pelos elementos de um arry: 


console.log("================== laço for ========================");
/* let a = [1,2,3,4,5,6,7,8,9,10,11,12]//Declara um array de números 

for(let i = 0; i < a.length; i++)//Atribui índices do array à variável i 
    console.log(a[i]);//Imprime o valor de cada elemento do array

 */

 

console.log("================== laço for in =====================");
//O laço for/in torna fácil fazer o mesmo para as propriedades de um objeto.

/* for(let p in a)//Atribui nomes de propriedade de a variável p 
    console.log(`${a[p]}`);//Imprime o valor de cada propriedadde 
 */

    //Para executarr uma instrução for/in, o interpretador JavaScript primeiramente avalia a expressão objeto. Se for avaliada como null ou underfined, o interpretador pula o laço e passa para a instrução seguinte. Se a expressão é avaliada como um valor primitivo, esse valor é convertido em seu objeto enpacotador equivalente. Caso contrário, a expressão já um objeto. Contudo antes de cada iteração, o interpretador avalia a expressão "variável" e atribui o nome da propriedade (um valorr string a ela). 

    //Note que a "variável" no laço forIn pode ser uma expressão arbitrária, desde que seja avaliada como algo adequado ao laddo esquerdo de uma atribuição. Essa expressão é avaliada em cada passagem pelo laço, ou seja, ela pode ser avaliada de forma diferente a cada vez. Por exemplo, é possível usar código como o seguinte para copiar os nomes de toddas as propriedades de objeto em um array. 

    let o = {x:1, y:2, z:3}
    let a = [], i = 0

    for(a[i++] in o){
      console.log(i);
    }

    for(i in a){
      console.log(i);
    }

    //for(a[i++] in a){}



//O loop "for in" é usado para percorrer as propriedadee enumeráveis de um objeto. Ele itera sobre sobre as chaves (propriedade) do objeto, incluindo as chaves presentes em seu protótipo. É mais usado para objetos normais. 

/* const objeto = {a: 1, b: 2, c: 3, d: 4, e:5 }

for(const numeros in objeto){
    console.log(objeto[numeros]);
} */

//

  
 