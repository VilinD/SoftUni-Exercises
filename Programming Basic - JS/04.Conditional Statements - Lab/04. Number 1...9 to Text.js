function numberToText([number]){
    let numbers = {
        1:"one",
        2:"two",
        3:"three",
        4:"four",
        5:"five",
        6:"six",
        7:"seven",
        8:"eight",
        9:"nine",
    }
    number = +number;

    if(number in numbers){
        return numbers[number];
    }

    return "number too big";
}