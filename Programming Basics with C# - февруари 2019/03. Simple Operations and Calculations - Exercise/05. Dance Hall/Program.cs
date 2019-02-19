using System;

namespace _05._Dance_Hall
{
    class Program
    {
        static void Main(string[] args)
        {
            double roomLength = double.Parse(Console.ReadLine());
            double roomWidth = double.Parse(Console.ReadLine());
            double wardrobeSide = double.Parse(Console.ReadLine());


            double roomArea = (roomLength * 100) * (roomWidth * 100);
            double wardrobeArea = (wardrobeSide * 100) * (wardrobeSide * 100);
            double benchArea = roomArea / 10;
            double remainingRoomArea = roomArea - wardrobeArea - benchArea;

            double totalCountOfDancers = Math.Floor(remainingRoomArea / (40 + 7000));

            Console.WriteLine($"{totalCountOfDancers}");

        }
    }
}
