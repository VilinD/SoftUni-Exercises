﻿using System;

namespace _07._Triangle_Area
{
    class Program
    {
        static void Main(string[] args)
        {
            double a = double.Parse(Console.ReadLine());
            double h = double.Parse(Console.ReadLine());

            double area = a * h / 2;

            Console.WriteLine($"{area:F2}");
        }
    }
}
