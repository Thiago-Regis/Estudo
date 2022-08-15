using System;

namespace Calculadora
{
    class Program
    {
        static void Main(string[] args)
        {
            string intermediario;
            int operacao, num1, num2,resultado;

            Console.WriteLine("Escolha 1-soma(+), 2-subtração(-), 3-multiplicação(*) e 4-divisão(/)");
            intermediario = Console.ReadLine();
            operacao = Int32.Parse(intermediario);

            switch (operacao)
                {
                /*soma entrada de dados basico*/
                case 1:
                    Console.WriteLine("Digite um numero");
                    intermediario = Console.ReadLine();
                    num1 = Int32.Parse(intermediario);

                    Console.WriteLine("Digite um outro numero");
                    intermediario = Console.ReadLine();
                    num2 = Int32.Parse(intermediario);

                    resultado = num1 + num2;
                    Console.WriteLine("Sua resposta é:" + resultado);
                    Console.ReadKey();

                    break;

                /*subtração entrada de dados basico*/
                case 2:
                    Console.WriteLine("Digite um numero");
                    intermediario = Console.ReadLine();
                    num1 = Int32.Parse(intermediario);

                    Console.WriteLine("Digite um outro numero");
                    intermediario = Console.ReadLine();
                    num2 = Int32.Parse(intermediario);

                    resultado = num1 - num2;
                    Console.WriteLine("Sua resposta é:" + resultado);
                    Console.ReadKey();

                    break;
                /*multiplicação entrada de dados basico*/
                case 3:
                    Console.WriteLine("Digite um numero");
                    intermediario = Console.ReadLine();
                    num1 = Int32.Parse(intermediario);

                    Console.WriteLine("Digite um  outro  numero");
                    intermediario = Console.ReadLine();
                    num2 = Int32.Parse(intermediario);

                    resultado = num1 * num2;
                    Console.WriteLine("Sua resposta é:" + resultado);
                    Console.ReadKey();

                    break;

                /*divisão entrada de dados basico*/
                case 4:
                    Console.WriteLine("Digite um numero");
                    intermediario = Console.ReadLine();
                    num1 = Int32.Parse(intermediario);

                    Console.WriteLine("Digite um outro numero");
                    intermediario = Console.ReadLine();
                    num2 = Int32.Parse(intermediario);

                    resultado = num1 / num2;
                    Console.WriteLine("Sua resposta é:"+resultado);
                    Console.ReadKey();

                    break;

            }
        }
    }
}