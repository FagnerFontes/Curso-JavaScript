const div_data=document.querySelector("div_data");//div que vai mostrar a data
const div_relogio=document.getElementById("div_relogio");//div que vai mostrar o relógio

//cria um novo objeto Date e pega a data e hora atual
const data=new Date(); //cria um objeto Date

let dia=data.getDate(); //dia do mês
dia=dia<10 ? "0"+dia : dia; //se o dia for menor que 10, acrescenta um 0 à frente

let mes=data.getMonth(); //mês

const data_r=dia+"/"+mes+"/"+data.getFullYear(); //data formatada

div_data_r=dia+"/"+mes+"/"+data.getFullYear(); //mostra a data no HTML

const relogio=()=>{
    const data=new Date(); //cria um novo objeto Date
    let hora=data.getHours(); //hora

    hora=hora<10 ? "0"+hora : hora; //se a hora for menor que 10, acrescenta um 0 à frente
    let minuto=data.getMinutes(); //minuto
    minuto=minuto<10 ? "0"+minuto : minuto; //se o minuto for menor que 10, acrescenta um 0 à frente

    let segundo=data.getSeconds(); //segundo
    segundo=segundo<10 ? "0"+segundo : segundo; //se o segundo for menor que 10, acrescenta um 0 à frente

    const hora_completa=hora+":"+minuto+":"+segundo; //hora formatada
    div_relogio.innerHTML=hora_completa; //mostra a hora no HTML

}; //função que vai mostrar o relógio

const intervalo=setInterval(relogio,1000); //chama a função relogio a cada 1 segundo


