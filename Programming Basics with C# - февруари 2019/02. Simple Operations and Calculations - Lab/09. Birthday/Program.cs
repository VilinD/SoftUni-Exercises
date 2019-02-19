using System;

namespace _09._Birthday
{
    class Program
    {
        static void Main(string[] args)
        {
            int a = int.Parse(Console.ReadLine());
            int b = int.Parse(Console.ReadLine());
            int c = int.Parse(Console.ReadLine());
            double percents = double.Parse(Console.ReadLine());

            int totalVolume = a * b * c;
            double totalLiters = totalVolume * 0.001;
            double percent = percents * 0.01;

            double result = totalLiters * (1 - percent);

            Console.WriteLine($"{result:f3}");
        }
    }
}
