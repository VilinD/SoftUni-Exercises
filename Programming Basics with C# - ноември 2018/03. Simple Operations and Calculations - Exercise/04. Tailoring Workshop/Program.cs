using System;

namespace _04._Tailoring_Workshop
{
    class Program
    {
        static void Main(string[] args)
        {
            int countOfTables = int.Parse(Console.ReadLine());
            double lengthOfTables = double.Parse(Console.ReadLine());
            double widthOfTables = double.Parse(Console.ReadLine());

            double totalTableclothArea = countOfTables *
                ((lengthOfTables + 2 * 0.30) *
                (widthOfTables + 2 * 0.30));
     
            double squaresArea = countOfTables * ((lengthOfTables / 2) * (lengthOfTables / 2));

            double priceInDollars = totalTableclothArea * 7 + squaresArea * 9;
            double priceInLev = priceInDollars * 1.85;

            Console.WriteLine($"{priceInDollars:F2} USD");
            Console.WriteLine($"{priceInLev:F2} BGN");
        }
    }
}
