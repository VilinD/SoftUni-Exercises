function sumNumbers(input) {
    let number = Number(input.shift());

    let a = 1;
    while (a <= number) {
        console.log(a);
        a = a * 2 + 1;
    }
}