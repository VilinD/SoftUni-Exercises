using System;

namespace _04._Number_1_to_9_to_Text
{
    class Program
    {
        static void Main(string[] args)
        {
            int number = int.Parse(Console.ReadLine());

            string numberAsText = String.Empty;
            switch (number)
            {
                case 1:
                    numberAsText = "one";
                    break;
                case 2:
                    numberAsText = "two";
                    break;
                case 3:
                    numberAsText = "three";
                    break;
                case 4:
                    numberAsText = "four";
                    break;
                case 5:
                    numberAsText = "five";
                    break;
                case 6:
                    numberAsText = "six";
                    break;
                case 7:
                    numberAsText = "seven";
                    break;
                case 8:
                    numberAsText = "eight";
                    break;
                case 9:
                    numberAsText = "nine";
                    break;
                default:
                    numberAsText = "number too big";
                    break;
            }

            Console.WriteLine(numberAsText);
        }
    }
}
