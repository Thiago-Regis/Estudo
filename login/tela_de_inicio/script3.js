let userLogado = JSON.parse(localStorage.getItem('userLogado'))
let logado = document.querySelector('#logado')

logado.innerHTML = `Olá  ${userLogado.nome}` 


if(localStorage.getItem('token') == null){
    alert('Você não está logado, é necessario fazer o login para acessar essa pagina.')
    window.location.href = '../Login/index.html'
}

function sair(){
    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')
    window.location.href = '../Login/index.html'
}