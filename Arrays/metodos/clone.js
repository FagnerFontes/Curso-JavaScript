//Criar um vetor A com 5 elementos inteiros. Construir um vetor B de mesmo tipo e tamanho e com os mesmo elementos do vetor A, ou seja, B[i] = A[i].
const A = [1,2,3,4,5]//Cria um array com 5 elementos 
const B = [...A]//Cria uma cópia do array A 

console.log(`Vetor original: ${A}`);//Imprime o array original 
console.log(`Novo vetor: ${B}`);//Imprime a cópia do array A 
