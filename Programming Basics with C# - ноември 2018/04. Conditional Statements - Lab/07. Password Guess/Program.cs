using System;

namespace _07._Password_Guess
{
    class Program
    {
        static void Main(string[] args)
        {
            string passwordInput = Console.ReadLine();

            string passwordToMatch = "s3cr3t!P@ssw0rd";

            if (passwordInput == passwordToMatch)
            {
                Console.WriteLine("Welcome");
            }
            else
            {
                Console.WriteLine("Wrong password!");
            }
        }
    }
}
