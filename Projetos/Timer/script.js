
const div_data = document.getElementById("div_data");// Pega a div do HTML onde a data será exibida
const div_hora = document.getElementById("div_relogio");//
const btn_ativar = document.getElementById("btn_ativar");// Pega o botão do HTML para ativar o relógio
const btn_desativar = document.getElementById("btn_parar");// Pega o botão do HTML para desativar o relógio
const tmp = document.getElementById("tmp_alarme");// Pega a div do HTML onde o timer será exibido
const btn_alarme = document.getElementById("hora_alarme");// Pega o botão do HTML para ativar o alarme


const som_alarme = new Audio("./audios/funny-alarm-317531.mp3");// Cria um objeto de áudio para o alarme
som_alarme.loop = -1;// Define o áudio para repetir em loop













btn_ativar.addEventListener("click", function() {// Adiciona um evento de clique ao botão ativar
    timer = setInterval(function() {// Inicia um timer que chama a função a cada 1000 milissegundos (1 segundo)
    
})








const data = new Date();// Cria um objeto Date com a data e hora atuais

let dia=data.getDate();// Pega o dia do mês
dia = dia < 10 ? '0' + dia : dia;// Adiciona zero à esquerda se o dia for menor que 10  // Exemplo: 9 -> 09
let mes=data.getMonth() + 1;// Pega o mês (0-11) e adiciona 1 para ficar de 1-12
mes = mes < 10 ? '0' + mes : mes;// Adiciona zero à esquerda se o mês for menor que 10  // Exemplo: 9 -> 09
const data_r=dia + '/' + mes + '/' + data.getFullYear();// Formata a data no formato DD/MM/AAAA
div_data.innerHTML = data_r;// Exibe a data na div do HTML

const relogio = () => {
    const data = new Date();// Cria um novo objeto Date para pegar a hora atual
    let hora = data.getHours();// Pega a hora do dia
    hora = hora < 10 ? '0' + hora : hora;// Adiciona zero à esquerda se a hora for menor que 10  // Exemplo: 9 -> 09
    let minuto = data.getMinutes();// Pega os minutos
    let segundo = data.getSeconds();// Pega os segundos

   
