//Faça um programa para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que depende do salário bruto (conforme a tabela abaixo) e 3% para o Sindicato e que o FGTS  corresponde a 11% do Salário bruto, mas não é descontado (é a empresa que deposita). O Salário Líquido corresponde ao Salário bruto menos os descontos.  O programa deve deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês. 

// Desconto do IR 
//Salário Bruto de  até 900 - isento 
//Salário Bruto de até 1500 - desconto de 5% 
//Salário Bruto de até 2500 - desconto de 10%
//Salário Bruto acima de 2500 - desconto de 20% 

const valorHora = parseFloat(prompt("Qual o valor da hora trabalhada?"))

const quantHora = parseFloat(prompt("Quantas horas você trabalhou?"))

const salarioBruto = valorHora * quantHora

function contraCheque(valorHora, quantHora) {
    
    if (salarioBruto < 1280) {
        
        const sindicato = salarioBruto * 0.03
        const FGTS = salarioBruto * 0.11 
        const INSS = salarioBruto * 0.10
        const salarioLiquido = salarioBruto - FGTS - INSS - sindicato

        console.log(`O salário bruto é de ${salarioBruto.toFixed(2)}`);
        console.log(`O desconto para o Sindicato é de ${sindicato.toFixed(2)}`);
        console.log(`O desconto para o INSS é de ${INSS.toFixed(2)} `);
        console.log(`O desconto para o FGTS é de ${FGTS.toFixed(2)}`);
        console.log(`O salário liquído é de ${salarioLiquido.toFixed(2)}`);
    } else if(salarioBruto >900  && salarioBruto  <=1500){

        const ImpostoRenda = salarioBruto * 0.05
        const sindicato = salarioBruto * 0.03
        const FGTS = salarioBruto * 0.11 
        const INSS = salarioBruto * 0.10
        const salarioLiquido = salarioBruto - FGTS - INSS - sindicato - ImpostoRenda

        console.log(`A quantidade horas trabalhadas foi de: ${quantHora}`);
        console.log(`O valor da horas trabalhadas foi de: ${valorHora} `);
        console.log(`O salário bruto é de:  ${salarioBruto.toFixed(2)}`);
        console.log(`O desconto para o Sindicato é de: ${sindicato.toFixed(2)}`);
        console.log(`O desconto para o INSS é de: ${INSS.toFixed(2)} `);
        console.log(`O desconto para o FGTS é de: ${FGTS.toFixed(2)}`);
        console.log(`O desconto do imposto de renda é de: ${ImpostoRenda.toFixed(2)}`);
        console.log(`O salário liquído é de: ${salarioLiquido.toFixed(2)}`);
    }else if(salarioBruto >= 1500 && salarioBruto <= 2500){

        const ImpostoRenda = salarioBruto * 0.10
        const sindicato = salarioBruto * 0.03
        const FGTS = salarioBruto * 0.11 
        const INSS = salarioBruto * 0.10
        const salarioLiquido = salarioBruto - FGTS - INSS - sindicato - ImpostoRenda

        console.log(`A quantidade horas trabalhadas foi de: ${quantHora}`);
        console.log(`O valor da horas trabalhadas foi de: ${valorHora} `);
        console.log(`O salário bruto é de:  ${salarioBruto.toFixed(2)}`);
        console.log(`O desconto para o Sindicato é de: ${sindicato.toFixed(2)}`);
        console.log(`O desconto para o INSS é de: ${INSS.toFixed(2)} `);
        console.log(`O desconto para o FGTS é de: ${FGTS.toFixed(2)}`);
        console.log(`O desconto do imposto de renda é de: ${ImpostoRenda.toFixed(2)}`);
        console.log(`O salário liquído é de: ${salarioLiquido.toFixed(2)}`);

    }else if(salarioBruto > 2500){

        const ImpostoRenda = salarioBruto * 0.20
        const sindicato = salarioBruto * 0.03
        const FGTS = salarioBruto * 0.11 
        const INSS = salarioBruto * 0.10
        const salarioLiquido = salarioBruto - FGTS - INSS - sindicato - ImpostoRenda

        console.log(`A quantidade horas trabalhadas foi de: ${quantHora}`);
        console.log(`O valor da horas trabalhadas foi de: ${valorHora} `);
        console.log(`O salário bruto é de:  ${salarioBruto.toFixed(2)}`);
        console.log(`O desconto para o Sindicato é de: ${sindicato.toFixed(2)}`);
        console.log(`O desconto para o INSS é de: ${INSS.toFixed(2)} `);
        console.log(`O desconto para o FGTS é de: ${FGTS.toFixed(2)}`);
        console.log(`O desconto do imposto de renda é de: ${ImpostoRenda.toFixed(2)}`);
        console.log(`O salário liquído é de: ${salarioLiquido.toFixed(2)}`);
    }


    return contraCheque
}

const valorContraCheque = contraCheque(valorHora, quantHora)