let btn =document.querySelector('.fa-eye')
 
/* inicio da função entrar */

function entrar(){
   let usuario = document.querySelector('#usuario')
   let labelUsuario = document.querySelector('#labelUsuario')
   
   
   let senha = document.querySelector('#senha')
   let labelSenha = document.querySelector('#labelSenha')

   let msgError = document.querySelector('#msgErro')

   let listaUser = [] /* to falando que é uma lista */
    let userValid = {
        nome:'',
        user:'',
        senha:''
    }

    listaUser =JSON.parse(localStorage.getItem('listaUser')) /* Fazendo isso você já tem a lista salva nessa variavel */
    /*console.log(listaUser)*/

    listaUser.forEach((item)=>{
       if(usuario.value == item.userCad && senha.value == item.senhaCad){
        userValid = {
            nome:item.nomeCad,
            user:item.userCad,
            senha:item.senhaCad
        }

    }
    })
   if(usuario.value == userValid.user && senha.value == userValid.senha){
    window.location.href = '../tela_inicio/inicio.html'
    let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
    localStorage.setItem('token',token)

    localStorage.setItem('userLogado',JSON.stringify(userValid))
   }else{
    labelUsuario.setAttribute('style','color:red')
    usuario.setAttribute('style','border-color:red')
    labelSenha.setAttribute('style','color:red')
    senha.setAttribute('style','border-color:red')
    msgError.setAttribute('style','display;block')
    msgError.innerHTML = 'Usuário ou senha incorretos'
    usuario.focus()
   }
    
}


/* fim da função entrar */
btn.addEventListener('click',()=>{
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type', 'password')
    }
})

/*o metodo getAtributo pega e le o atributo e o setAtribute muda o atributo*/ 

