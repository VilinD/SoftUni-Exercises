using System;

namespace _06._Charity_Campaign
{
    class Program
    {
        static void Main(string[] args)
        {
            int countOfDays = int.Parse(Console.ReadLine());
            int countOfBakers = int.Parse(Console.ReadLine());
            int countOfCakes = int.Parse(Console.ReadLine());
            int countOfWaffles = int.Parse(Console.ReadLine());
            int countOfPancakes = int.Parse(Console.ReadLine());

            double totalCakePrice = countOfDays * (countOfBakers * (countOfCakes * 45.0));
            double totalWafflesPrice = countOfDays * (countOfBakers * (countOfWaffles * 5.80));
            double totalPancakePrice = countOfDays * (countOfBakers * (countOfPancakes * 3.20));

            double totalPrice = (totalCakePrice + totalWafflesPrice + totalPancakePrice) * 7 / 8;

            Console.WriteLine($"{totalPrice:F2}");
        }
    }
}
