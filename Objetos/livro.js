//Crie um objeto chamado livro com as seguintes propriedades:
/* 
titulo: string com o título do livro.
autor: string com o nome do autor do livro.
ano: número com o ano de publicação do livro.
resumo: função que imprime uma mensagem no console com um resumo do livro. */

const livro = {

    titulo : "Redes de Computadores", 
    autor: "Andrew Tanembaum", 
    ano: 2003,
    resumo: "Nesta que é a bíblia de redes de computadores, Tanenbaum, Feamster & Wetherall explicam o funcionamento das redes de dentro para fora. Isto é, começam com a camada física das redes, dos computadores e dos sistemas de transmissão e vão até às aplicações. Os capítulos  apresentam os conceitos-chave e são ilustrados por exemplos de redes reais: Internet, redes sem fio, incluindo LANs sem fio; banda larga sem fio e Bluetooth. Esta 6ª edição de Redes de computadores traz muitas mudanças. Todos os capítulos foram atualizados e o Capítulo 8, que trata de segurança, foi completamente reformulado, priorizando a segurança de redes."
} 

console.log(livro);