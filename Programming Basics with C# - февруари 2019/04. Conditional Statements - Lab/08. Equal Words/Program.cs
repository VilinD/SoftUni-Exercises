using System;

namespace _08._Equal_Words
{
    class Program
    {
        static void Main(string[] args)
        {
            string firstWord = Console.ReadLine().ToLower();
            string secondWord = Console.ReadLine().ToLower();

            Console.WriteLine(firstWord == secondWord ? "yes" : "no");
        }
    }
}
