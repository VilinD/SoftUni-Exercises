function vowelsSum([input]) {
    let vowelsValue = {
        a: 1,
        e: 2,
        i: 3,
        o: 4,
        u: 5,
    }

    let sum = 0;

    for (let i = 0; i < input.length; i++) {
        let letter = input.charAt(i);
        if (letter in vowelsValue) {
            sum += vowelsValue[letter];
        }
    }
    console.log(sum);
}