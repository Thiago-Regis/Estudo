let btn = document.querySelector('#verSenha');
let btnConfirm = document.querySelector('#verConfirmeSenha');

/*mesagens */
let msgError = document.querySelector('#msgErro');
let msgSucess = document.querySelector('#msgSucesso')

/*Nome */
let nome = document.querySelector('#nome');
let labelNome = document.querySelector('#labelNome')
let validNome = false
/*Usuario*/
let usuario = document.querySelector('#usuario');
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false
/*Senha*/
let senha = document.querySelector('#senha');
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false
/* confirme Senha*/
let confirmeSenha = document.querySelector('#confirmeSenha')
let labelConfirmeSenha = document.querySelector('#labelConfirmeSenha')
let validConfirmeSenha = false

nome.addEventListener('keyup',()=>{
    if (nome.value.length <= 2){
        labelNome.setAttribute('style','color:red')
        labelNome.innerHTML = 'Nome "Insira no minimo 3 caracteres"'
        nome.setAttribute('style','border-color:red')
        validNome = false 
    }else{
        labelNome.setAttribute('style','color:green')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color:green')
        validNome = true
    }
})

usuario.addEventListener('keyup',()=>{
    if (usuario.value.length <= 4){
        labelUsuario.setAttribute('style','color:red')
        labelUsuario.innerHTML = 'Usuario "Insira no minimo 5 caracteres"'
        usuario.setAttribute('style','border-color:red')
        validUsuario = false
    }else{
        labelUsuario.setAttribute('style','color:green')
        labelUsuario.innerHTML = 'Usuario'
        usuario.setAttribute('style', 'border-color:green')
        validUsuario  = true
    }
})

senha.addEventListener('keyup',()=>{
    if (senha.value.length <= 5){
        labelSenha.setAttribute('style','color:red')
        labelSenha.innerHTML = 'senha "Insira no minimo 6 caracteres"'
        senha.setAttribute('style','border-color:red')
        validSenha = false
    }else{
        labelSenha.setAttribute('style','color:green')
        labelSenha.innerHTML = 'senha'
        senha.setAttribute('style', 'border-color:green')
        validSenha = true
    }
})

confirmeSenha.addEventListener('keyup',()=>{
    if (senha.value != confirmeSenha.value){
        labelConfirmeSenha.setAttribute('style','color:red')
        labelConfirmeSenha.innerHTML = 'As senhas não são iguais'
        confirmeSenha.setAttribute('style','border-color:red')
        validConfirmeSenha = false
    }else{
        labelConfirmeSenha.setAttribute('style','color:green')
        labelConfirmeSenha.innerHTML = 'Confirme Senha'
        confirmeSenha.setAttribute('style', 'border-color:green')
        validConfirmeSenha =true
    }   
})



function cadastrar(){
    if (validNome && validUsuario && validSenha && validConfirmeSenha){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    
        listaUser.push(
        {
            nomeCad: nome.value,
            userCad: usuario.value,
            senhaCad: senha.value
        }
        )
    
        localStorage.setItem('listaUser', JSON.stringify(listaUser))
        
        msgSucess.setAttribute('style','display:block')
        msgSucess.innerHTML = '<storng>Cadastrado o usario...</strong>'
        msgError.setAttribute('style','display:none')
        msgError.innerHTML = ''
        setTimeout(()=>{
            window.location.href = '../Login/index.html'
        },3000)
        
    }else{
        msgError.setAttribute('style','display:block')
        msgError.innerHTML = '<storng>Prencha todos os campos corretamente antes de cadastrar </strong>'
        msgSucess.setAttribute('style','display:none')
        msgSucess.innerHTML = ''
    }
}

/* fim validação  */
btn.addEventListener('click',()=>{
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type', 'password')
    }
})

/*o metodo getAtributo pega e le o atributo e o setAtribute muda o atributo*/ 

btnConfirm.addEventListener('click',()=>{
    let inputConfirmeSenha = document.querySelector('#confirmeSenha')

    if(inputConfirmeSenha.getAttribute('type') == 'password'){
        inputConfirmeSenha.setAttribute('type', 'text')
    }else{
        inputConfirmeSenha.setAttribute('type', 'password')
    }
})
/* função para fazer o ver a senha */

