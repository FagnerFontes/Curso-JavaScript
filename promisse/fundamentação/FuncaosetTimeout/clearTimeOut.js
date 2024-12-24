const timeoutId = setTimeout(()=>{
    console.log("Isso não será executado");
    }, 5000)

    clearTimeout(timeoutId);//Cancela o timeoutId antes de ser executado. 