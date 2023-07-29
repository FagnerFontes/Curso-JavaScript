//Uma determinada empresa resolveu dar um aumento de salário aos seus colabores e lhe contrataram para desenvolver programa que calculará os reajustes . 

// Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual: 

//Salários de R$ 1.280,00: aumento de 20%
//Salários de R$ 1.280,00 e R$ 1.700,00: aumento de 15% 
//Salários de R$ 1.700,00 e R$ 2.000,00: aumento de 10%
//Salários de R$ 2.000,00 em diante: aumento de 5%. 

//Após o aumento ser realizado, informe na tela: 
//O salário antes do reajuste; 
//O percentual de aumento aplicado;
//O valor do aumento; 
// O novo salário, após o aumento
const salario = parseFloat(prompt("Infome do salário"))



function novoSalario(salario) {
    if(salario == 1280){

        const salarioAntigo = salario
        const porcento = salario * 0.20
        const novoSalario = salario + porcento
        console.log(`O salario antigo era de ${salarioAntigo}`);
        console.log(`O aumento no salário foi de 20%`);
        console.log(`O aumento foi  de ${porcento}`);
        console.log(`O novo salário é de ${novoSalario}`);
    }else if(salario > 1280 & salario <= 1700){

        const salarioAntigo = salario
        const porcento = salario * 0.15
        const novoSalario = salario + porcento
        console.log(`O salario antigo era de ${salarioAntigo}`);
        console.log(`O aumento no salário foi de 15%`);
        console.log(`O aumento foi  de ${porcento}`);
        console.log(`O novo salário é de ${novoSalario}`);
        
    }else if(salario >= 1700 & salario <= 2000){

        const salarioAntigo = salario
        const porcento = salario * 0.10
        const novoSalario = salario + porcento
        console.log(`O salario antigo era de ${salarioAntigo}`);
        console.log(`O aumento no salário foi de 10%`);
        console.log(`O aumento foi  de ${porcento}`);
        console.log(`O novo salário é de ${novoSalario}`);
        
    }else if (salario > 2000){

        const salarioAntigo = salario 
        const porcento = salario * 0.05
        const novoSalario = salario + porcento
        console.log(`O salario antigo era de ${salarioAntigo}`);
        console.log(`O aumento no salário foi de 5%`);
        console.log(`O aumento foi  de ${porcento}`);
        console.log(`O novo salário é de ${novoSalario}`);

    }
}

novoSalario(salario)
