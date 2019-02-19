using System;

namespace _07._Alcohol_Market
{
    class Program
    {
        static void Main(string[] args)
        {
            double whiskeyPrice = double.Parse(Console.ReadLine());
            double quantityOfBeer = double.Parse(Console.ReadLine());
            double quantityOfWine = double.Parse(Console.ReadLine());
            double quantityOfRakia = double.Parse(Console.ReadLine());
            double quantityOfWhiskey = double.Parse(Console.ReadLine());

            double rakiaPrice = whiskeyPrice / 2;
            double winePrice = rakiaPrice * 0.6;
            double beerPrice = rakiaPrice * 0.2;

            double totalBeerPrice = beerPrice * quantityOfBeer;
            double totalWinePrice = winePrice * quantityOfWine;
            double totalWhiskeyPrice = whiskeyPrice * quantityOfWhiskey;
            double totalRakiaPrice = rakiaPrice * quantityOfRakia;

            double moneyToPay = totalBeerPrice + totalWinePrice + totalWhiskeyPrice + totalRakiaPrice;

            Console.WriteLine($"{moneyToPay:F2}");

        }
    }
}
