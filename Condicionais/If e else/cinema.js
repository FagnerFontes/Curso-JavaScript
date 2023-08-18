//Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistfagir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :

const genero = prompt("Qual genero de filme deseja assistir? ")
const valorIngresso = parseFloat(prompt("Qual o valor do ingresso?"))
const lanche = prompt("Qual lanchinho vai comprar!! ")


function cinema(genero, valorIngresso, lance){
    if(genero === "fantasia" && valorIngresso < 15){
        console.log("Bom filme");
        switch (lanche) {
            case 1: "chocolate"
                break;
            case 2: "Pipoca"
                break
            case 3: "Doce"
                break
            default:
                break;
        }

        console.log(`Aproveite seu ${lanche}`);
    }else{
        console.log("Escolha outro filme");
    }
}

cinema(genero, valorIngresso)