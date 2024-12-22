//Definição da função construtora "Nave" que recebe uma parâmetro "energia"
const Nave=function(energia) {
    this.energia=energia//Define a propriedade "energia" do objeto sendo criado. 
    this.disparos=150;//Define a propriedade "disparos" do objeto sendo criado 
}

//Cria uma instância da nave(n1) com 100 de energia
const Jogador1 = new Nave(100)

//Define uma propriedade "vidas" no protótipo da função "Nave"
Nave.prototype.vidas=10

//Define um método "disparar" no protótipo da função Nave
Nave.prototype.disparar=function(){
    if (this.disparos >0) {
        this.disparos--//Reduz o numero de disparos disponíveis
    }
}

//Chama o método "disparar" 12 vezes na instância n1 para esgotar dos diparos
Jogador1.disparar()
Jogador1.disparar()
Jogador1.disparar()
Jogador1.disparar()
Jogador1.disparar()
Jogador1.disparar()
Jogador1.disparar()
Jogador1.disparar()
Jogador1.disparar()
Jogador1.disparar()
Jogador1.disparar()
Jogador1.disparar()

//Imprime no console informações sobre a função construtora "Nave" e a instância n1
console.log(Nave);//Exibe a função construtora da Nave
console.log(Jogador1);//Exibe a instância n1 da Nave
console.log(`Energia==> ${Jogador1.energia}`);//Exibe a energia da instância n1
console.log(`Vidas==> ${Jogador1.vidas}`);//Exibe as vidas da instância n1
console.log(`Disparos Restantes==> ${Jogador1.disparos}`);//Exibe os disparos restantes na instância n1

