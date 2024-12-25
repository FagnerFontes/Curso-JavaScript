function regressiva(tempo) {
    let i = tempo;
    let id = setInterval(() => {
        console.log(i);
        i--;
        if (i < 0) {
            clearInterval(id);
        }
    }, 1000);
}
regressiva(10);


