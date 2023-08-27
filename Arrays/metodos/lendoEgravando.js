//Um elemento de um array pode ser acessaddo com o operador []. Uma referência ao array deve aparecer à esquerda  dos colchetes. Uma expressão arbitrária que tenha um valor inteiro não negativo deve ficar dentro dos colchetes. Essa sintaxe pode ser usadda tanto parra ler como para gravar o valor de um elemento de um array. Assim, todas as instruções JavaScript a seguir são válidas. 

let d = ["Mundo"]
let valor = a[0]
a[1] = 3.14; // Grava o elemento 1
i = 2;
a[i] = 3; // Grava o elemento 2
a[i + 1] = "hello"; // Grava o elemento 3
a[a[i]] = a[0]; // Lê os elementos 0 e 2, grava o elemento 3a[1] = 3.14; // Grava o elemento 1
i = 2;
a[i] = 3; // Grava o elemento 2
a[i + 1] = "hello"; // Grava o elemento 3
a[a[i]] = a[0]; // Lê os elementos 0 e 2, grava o elemento 3

//Lembre-se de que os arrays são um tipo especializado do objeto. Os colchetes para acessar elementos do array funcionam exatamente como os colchetes usados para acessar propriedades de objeto. JavaScript converte o índice númerico especificado do array em uma string - o índice 1 se torna a string "1" - e, então, usa essa string como um nome de propriedadde. Não há nada de especial na conversão do índice, de número para string. Isso também pode ser feito com objettos normais: 

x = {}         //Cria um objeto comum 
y [1] = "um"   //O indexa com um inteiro 

//O que há de especial com os arrays é que, quando se utiliza nomes de propriedade que são inteiros não negativos menores do que 2 elevado a 32, o array mantém automaticamente o valor da propriedade "lenght". Anteriormente, por exemplo, criamos um array "a" com um único elemento. Então, atribuímos valores no índices 1,2,3. A propriedade "lenght" do array mudou quando fizemos isso: 
a.length //=> 4

//É útil distinguir claramente um "índice de array de um nome de propriedade de objeto". Todos os índices são nomes de propriedade, mas somente nomes de propriedade que são inteiros entre 0 e 2 elevado 32 - 2 são índices. Todos os arrays são objetos e pode-se criar propriedades de qualquer nome deles. Contudo, se forem usadas propriedades que são índices de array, os arrays vão ter o comportamento especial de atualizarr suas propriedades "lenght" quando necessário. 

//Note que um "array" pode ser indexado usando-se números negativos ou que não são inteiros. Quando se faz isso, o númerico é convertido em uma string é utilizada como nome de propriedade. Como o nome não é um inteiro não negativo, ele é tratado como uma propriedade de objeto normal e não como um índice de array. Além disso, se inderxarmos um "array" com uma string que não é inteiro não negativo, ela se comporta como um índice de array e não como uma propriedade de objeto. O mesmo acontece se usarmos um número em ponto flutuante que ígual a um inteiro. 