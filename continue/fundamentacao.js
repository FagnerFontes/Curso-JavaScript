//A instrução "continue" é outra estrutura de controle em JavaScript, semelhante à instrução "break", mas com um comportamento um pouco diferente. Enquanto a instrução "break" é usada para sair completamente de um loop ou switch-case, a instrução "continue" é usada para pular a iteração atual de um loop e continuar com a próxkima iteração. 

//Aqui está explicação mais detalhada sobre o uso da instrução "continue"

//========================Loops:============================ 

//Quando a instrução "continue" é encontrada dentro de um loop dentro de um loop (como for, while ou do...while), ela interrompe a iteração atual do loop e passa para a próxima iteração. Isso pode ser útil quando se deseja pular um determinado valor ou condição sem sair completamente do loop. 

//Exemplo de uso em um loop "for" para pular números ímpares:
for(let i = 0; i <= 30; i++){
    if(i % 2 ===0){
        continue; 
    }


    console.log(i);
}

