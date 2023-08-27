//Já vimos o modo mais simples de adicionarr elementos em um array: basta atribuir valores a novo índices: 

a = [] // Começa com um array vazio 
console.log(`${[a]}`);//Imprime os elementos do array

a[0] = 1 //Adiciona o elemento "1" a posição 0 do array
console.log(`${[a]}`);//Imprime os elementos array

a[1] = 2//Adiciona o elemento "2" a posição 1 do array
console.log(`${[a]}`);//Imprime os elementos array

a[2] = 3//Adiciona o elemento "2" a posição 1 do array
console.log(`${[a]}`);//Imprime os elementos array

//O método push() também pode ser usado para adicionar um ou mais valores no final de um array: 


console.log("=============== Método Push ================");
b = [] //começa com um array vazio 

b.push(0)//Adiciona o elemento "0" a posição 0 do array
console.log(`${b}`);//Imprime os elementos array

b.push(1)//Adiciona o elemento "1" a posição 0 do array
console.log(`${b}`);//Imprime os elementos array

b.push(2)//Adiciona o elemento "2" a posição 0 do array
console.log(`${b}`);//Imprime os elementos array

b.push(4)//Adiciona o elemento "3" a posição 0 do array
console.log(`${b}`);//Imprime os elementos array

b.push(3)//Adiciona o elemento "4" a posição 0 do array
console.log(`${b}`);//Imprime os elementos array



//Inserir um valor em um array é o mesmo que atribuir o vvalor a b[a.lenth]. O método unshift(). Pode ser usado para inserir um valor no inicio de um array, deslocando os elementos existentes no array para índices mais altos. 