const TurnOn = document.querySelector('[data-TurnOn]')
const TurnOff = document.querySelector('[data-TurnOff]')
const lamp = document.getElementById('lamp')

function IsLampBroken(){
    return lamp.src.indexOf ('quebrada')>-1
}

function lampOn(){
    if (!IsLampBroken()){
        lamp.src = './imagens/ligada.jpg'
    }

}

function lampOff(){
    if (!IsLampBroken()){
        lamp.src = './imagens/desligada.jpg'
    }
}
TurnOn.addEventListener('click', lampOn);
TurnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover',lampOn);
lamp.addEventListener('mouseleave',lampOff)
lamp.addEventListener('dblclick',()=>{
    lamp.src = './imagens/quebrada.jpg'
})