//Simular uma API de login
//A API deve receber um objeto com usuário e senha
//A API deve retornar uma promessa
//A promessa deve ser resolvida após 3 segundos
//A promessa deve ser rejeitada após 1 segundo
//A promessa deve ser rejeitada com a mensagem 'Usuário ou senha inválidos'
//A promessa deve ser resolvida com a mensagem 'Login efetuado com sucesso'
//A promessa deve ser consumida com os métodos then, catch e finally
//A promessa deve ser consumida com arrow functions
//A promessa deve ser consumida com async await

const login = (user) => {//Função que simula uma API de login
    return new Promise((resolve, reject) => {//Retorna uma promessa
        setTimeout(() => {//Simula uma operação assíncrona
            if (user.usuario === 'admin' && user.senha === 'admin') {//Se o usuário e senha forem iguais a 'admin'
                resolve('Login efetuado com sucesso')//Aqui a promessa é resolvida
            } else {
                reject('Usuário ou senha inválidos')//Se o usuário e senha não forem iguais a 'admin'
            }//Aqui a promessa é rejeitada
        }, 3000)
    })//Aqui a promessa é criada e o resolve e reject são passados como parâmetros
}//Aqui a promessa é rejeitada

//Consumindo a promessa com os métodos then, catch e finally
login({ usuario: 'admin', senha: 'admin' })//Chama a função login passando um objeto com usuário e senha
    .then(result => console.log(result))//O método then é chamado para tratar o sucesso da promessa
    .catch(error => console.log(error))//O método catch é chamado para tratar o erro da promessa
    .finally(() => console.log('Promessa finalizada'))//O método finally é chamado para finalizar a promessa
