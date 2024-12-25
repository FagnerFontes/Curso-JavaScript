// Define a função temporizador
function temporizador(mensagem, tempo) {
    // Usa setTimeout para exibir a mensagem após o tempo especificado
    setTimeout(() => {
        console.log(mensagem); // Exibe a mensagem no console
    }, tempo); // Tempo em milissegundos
}

// Chamadas da função com diferentes mensagens e tempos
temporizador("Olá, mundo!", 3000); // Mostra "Olá, mundo!" após 3 segundos
temporizador("JavaScript é divertido!", 5000); // Mostra "JavaScript é divertido!" após 5 segundos
temporizador("Aprendendo a usar setTimeout!", 2000); // Mostra "Aprendendo a usar setTimeout!" após 2 segundos


