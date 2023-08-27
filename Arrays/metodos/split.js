//Este método é usado para strings. Ele divide uma string em substrings e retorna como um array. 

//A sintaxe é: string.split(separador, limite)

//* O separador: aqui define como dividir uma string, por vírgula ou outro separador. 

//* O limite: determina o número de divisões que devem ser realizadas. 

let nome = 'Fagner Fontes Batista'

console.log(`Array original: ${nome}`);
let teste = nome.split(" " )

console.log(`Array modificado: ${teste}`);

//console.log(`Array original: ${nome}`);


//================= Fundamentação II =======================

//O método "split()" em JavaScript é usado para dividir uma string em um array de substrings com base em um separador especificado. Ele retorna um novo array contendo as partes da string original que foram separadas pelo separador. 

//Aqui está a sintaxe básica do método "split": 

//const newArray = string.split(separador, limite)

//----------------------------------------------------------

//* "string": A string que deseja dividir.

//* "separador": O caractere ou expressão regular usado para determinar onde a strig deve ser dividida. Este é um parâmetro obrigatório. 

//* "limite" (opicional): Um valor numérico opcional que define o número máximo de substrings no array resultante. Se esse parâmetro for omitido, o método dividirá a string inteira


console.log(`============ Exer2 ================`);
const frase = "Olá, como vai você"
console.log(`Array original: ${frase}`);
const palavras = frase.split(" ")

console.log(`${palavras}`);