# Esse projeto é um Simulador de chutes (passou no Neymar é gol)
# Simular um chute de um numero até o usuario acertar
import random


class ChuteONumero:
    def __init__(self):
        self.valor_aleatorio = 0
        self.valor_max = 100
        self.valor_min = 1
        self.try_again = True

    def Iniciar(self):
        self.GerarNumeroAleatorio()
        self.PedirValorAleatorio()
        try:
            while self.try_again == True :
                if int(self.valor_do_chute) > self.valor_aleatorio:
                    print("Chute um valor mais baixo")
                    self.PedirValorAleatorio()
                elif int(self.valor_do_chute) < self.valor_aleatorio:
                    print("Chute um valor mais alto")
                    self.PedirValorAleatorio()
                if int(self.valor_do_chute) == self.valor_aleatorio:
                    print('Parabens você acertou o numero !!!!!')
                    self.try_again = False
        except:
            print('Porfavor digite apenas numeros')
            self.Iniciar()


    def PedirValorAleatorio(self):
        self.valor_do_chute = input("Chute um numero:")

    def GerarNumeroAleatorio(self):
        self.valor_aleatorio = random.randint(self.valor_min, self.valor_max)

chute = ChuteONumero()
chute.Iniciar()

