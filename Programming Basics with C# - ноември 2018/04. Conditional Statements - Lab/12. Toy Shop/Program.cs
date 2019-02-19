using System;

namespace _12._Toy_Shop
{
    class Program
    {
        static void Main(string[] args)
        {
            double tripPrice = double.Parse(Console.ReadLine());
            int puzzlesCount = int.Parse(Console.ReadLine());
            int dollsCount = int.Parse(Console.ReadLine());
            int tedyBearsCount = int.Parse(Console.ReadLine());
            int minionsCount = int.Parse(Console.ReadLine());
            int trucksCount = int.Parse(Console.ReadLine());

            int totalCount = puzzlesCount + dollsCount + tedyBearsCount + minionsCount + trucksCount;

            double totalMoney = (puzzlesCount * 2.60) + (dollsCount * 3.0) + (tedyBearsCount * 4.10) +
                (minionsCount * 8.20) + (trucksCount * 2.0);

            if (totalCount >= 50)
            {
                totalMoney *= 0.75;
            }

            //for rent
            totalMoney *= 0.9;

            if (totalMoney >= tripPrice)
            {
                Console.WriteLine($"Yes! {(totalMoney - tripPrice):F2} lv left.");
            }
            else
            {
                Console.WriteLine($"Not enough money! {Math.Abs(tripPrice - totalMoney):F2} lv needed.");
            }
        }
    }
}
