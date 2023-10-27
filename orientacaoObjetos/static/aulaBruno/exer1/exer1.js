//Podemos criar métodos ou atributos "static", sendo assim, não precisamos instanciar esses métodos ou atributos para invocá-los. 

class Npc{
        static alerta=true

    constructor(energia){
        this.energia=energia
       
    }

    info=function(){
        console.log(`Energia: ${this.energia}`);
        console.log(`Alerta: ${(Npc.alerta?"sim":"Não")}`);
        console.log(`=================================`);
    }
}

const npc1=new Npc(1000)
const npc2=new Npc(100)
const npc3=new Npc(10)

// npc1.alerta=true
// npc2.alerta=true
// npc3.alerta=true

npc1.info()
npc2.info()
npc3.info()