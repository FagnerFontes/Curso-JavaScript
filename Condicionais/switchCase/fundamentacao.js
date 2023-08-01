//"O switch case" é uma estrutura de controle em JavaScript que permite realizar múltiplas comparações em um único valor. Esssa estrutura é útil quando se deseja executar diferentes blocos de código com base no valor de uma variável ou expressão.

//A sintaxe do "switch case" é a seguinte

switch (expressao) {
  case value1:
    break;
// bloco de código a ser executado se a expressao for igual a valor1
  case value2:
    break;
// bloco de código a ser executado se a expressao for igual a valor2
  case value3:
    break;
// bloco de código a ser executado se a expressao for igual a valor3
  case value4:
    break;
// bloco de código a ser executado se a expressao for igual a valor4
  default:
    // bloco de código a ser executado caso a expressao não corresponda a nenhum dos valores acima
    break;
}

//A expressão dentro do "switch" é avaliada uma vez, e o valor resultante é comparado com cada caso. Se houver correspondência entre o valor da expressão e um dos valores do casos, o bloco de código associado a esse caso será executado. O "break" é usado para sair do "switch case" após a execução de um caso. Se não houver "break", a execução continuará para o próximo caso, o que pode levar a resultados inesperados. 

//O "default" é opcional e é usado para fornecer um bloco de código a ser usado caso nenhum dos casos anteriores corresponda ao valor da expressão. 

//Devemos usar o "if-else" quando: 

//1. Temos uma condição simples: O "if-else" é mais adequado quando temos uma condição para verificar e não precisa de várias altenativas. 

//2. As condições são baseadas em expressões lógicas: Se suas condições envolvem operações lógicas como maior que (>) ou igual a (>=), menor que (<) ou igual a (<=), igual a (=== ou ==), ou diferentes de (!== ou !=), o if-else é uma escolha adequada.

//3. As condoções não são exautivas. Se temos um conjunto de condições idependentes, em que apenas uma delas deve ser satisfeita, o "if-else" é preferível. Se nenhuma das condições for atendida, o código simplesmente continuará sem executar nenhuma ação específica. 

//Por outro lado, devemos usar o "switch case" quando: 

//1. Quando temos várias condições exaustivas e independentes. O "switch case" é mais adequado quando temos várias condições possíveis que são exautivas (cobrem todos os casos) independentes (não tem dependência entre entre si). 

//2. As condições são baseadas em valores específicos: O "switch case" é útil quando suas condiçõees são baseadas em valores específicos de uma variável ou expressão. 

//3. Quando precisamos melhorar a legibilidade do código: Em alguns casos, o "switch case" pode tornar o código mais legível, especialmen.te quando há muitas condoções diferentes. 

//Em resumo, use "if-else" quando precisa de condições simples e independentes ou quando as condições envolverem exepressões lógicas. Use "switch case" quando tiver várias condições exaustivas e independentes, baseadas em valores específicas. 