# Esse projeto é um Simulador de dado( ͡° ͜ʖ ͡°).
# Simular um lançamento de dado de 1 a 6 

import random 
from PySimpleGUI import PySimpleGUI as sg 

class SimuladorDeDado:
    def __init__(self) : #Definindo uma classe inicial
        self.valor_minimo = 1
        self.valor_maximo = 6
        self.mensagem = "Você gostaria de gerar um novo para o dado"
        
        layout = [
            {sg.Text('Jogar o dado')},
            {sg.Button('Sim'),sg.Button('Não')}
        ]
        

    def  start(self):
        self.janela =sg.Window('Simulador de Dado', layout.layout)
        
        self.eventos, self.valores = janela.Read()
        
        
        resposta = input(self.mensagem)
        try:
            if resposta == 'sim' or resposta =='s':
                self.GerarValorDoDado()
            elif resposta =='não' or resposta =='n':
                print('Obrigrado por usar esse programas')
            else:
                print('Digite uma opção valida sim ou não')
        except:
            print('Ocorre um problema ao receber sua resposta')
    
    def GerarValorDoDado(self):
        print(random.randint(self.valor_minimo, self.valor_maximo))
        
simulador = SimuladorDeDado()
simulador.start()
