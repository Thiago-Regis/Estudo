using System;

namespace Calculadora
{
    class Program
    {
        static void Main(string[] args)
        {
            string intermediario;
            int operacao, qtd_de_operacao;
            float num, num1, num2,resultado;

            int escolhaOperacao (){
                Console.WriteLine("Escolha 1-soma(+), 2-subtração(-), 3-multiplicação(*) e 4-divisão(/)");
                intermediario = Console.ReadLine();
                operacao = Int32.Parse(intermediario);
                return operacao;
            }


            float escolhaDoNumero(){
                    Console.WriteLine("Digite um numero");
                    intermediario = Console.ReadLine();
                    num = Int32.Parse(intermediario);
                    return num;
            }

            Console.WriteLine("Digite o quantidade de operação que você quer fazer");
            intermediario = Console.ReadLine();
            qtd_de_operacao = Int32.Parse(intermediario);  
   
            
            for (int contador = 0; contador<qtd_de_operacao; contador++){
             operacao = escolhaOperacao();
    

            switch (operacao)
                {
                /*soma entrada de dados basico  usando uma função*/
                case 1:
                    num1 = escolhaDoNumero();
                    num2 = escolhaDoNumero();
                    resultado = num1 + num2;
                    Console.WriteLine("Sua resposta é:" + resultado);
                    Console.ReadKey();

                    break;

                /*subtração entrada de dados basico  usando uma função*/
                case 2:
                    num1 = escolhaDoNumero();
                    num2 = escolhaDoNumero();
                    resultado = num1 - num2;
                    Console.WriteLine("Sua resposta é:" + resultado);
                    Console.ReadKey();

                    break;
                /*multiplicação entrada de dados basico  usando uma função*/
                case 3:
                    num1 = escolhaDoNumero();
                    num2 = escolhaDoNumero();
                    resultado = num1 * num2;
                    Console.WriteLine("Sua resposta é:" + resultado);
                    Console.ReadKey();

                    break;

                /*divisão entrada de dados basico usando uma função*/
                case 4:
                    num1 = escolhaDoNumero();
                    num2 = escolhaDoNumero();
                    resultado = num1 / num2;
                    Console.WriteLine("Sua resposta é:"+resultado);
                    Console.ReadKey();

                    break;

                }
            }
        }
    }
}