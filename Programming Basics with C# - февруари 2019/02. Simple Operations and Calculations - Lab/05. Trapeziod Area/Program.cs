﻿using System;

namespace _05._Trapeziod_Area
{
    class Program
    {
        static void Main(string[] args)
        {

            double b1 = double.Parse(Console.ReadLine());
            double b2 = double.Parse(Console.ReadLine());
            double h = double.Parse(Console.ReadLine());

            double result = (b1 + b2) * h / 2;

            Console.WriteLine($"{result:F2}");
        }
    }
}
