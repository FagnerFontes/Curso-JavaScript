const data = new Date();/* 1 */

console.log(data.getDate());//Exibe o dia do mês atual.
console.log(data.getDay());//Exibe o dia da semana atual.
console.log(data.getMonth());//Exibe o mês atual.
console.log(data.getFullYear());//Exibe o ano atual.
console.log(data.getHours());//Exibe a hora atual.
console.log(data.getMinutes());//Exibe os minutos atuais.
console.log(data.getSeconds());//Exibe os segundos atuais.
console.log(data.getMilliseconds());//Exibe os milisegundos atuais.
console.log(data.getTime());//Exibe o número de milisegundos desde 1 de janeiro de 1970.

//Para converter a data para o formato dd/mm/yyyy hh:mm:ss:sss, podemos usar o seguinte código: 
console.log(`${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}:${data.getMilliseconds()}`);//Exibe a data e a hora no formato dd/mm/yyyy hh:mm:ss:sss.

console.log(`${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`);


data.innerHTML= `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}:${data.getMilliseconds()}`;//

//exibir dia mes e ano no navegador
document.write(`${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`);//