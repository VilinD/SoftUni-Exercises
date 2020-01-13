function operations([a, b, operator]) {
    a = +a;
    b = +b;

    let evenOrOdd = "odd";

    switch (operator) {
        case "+":
            if ((a + b) % 2 == 0) {
                evenOrOdd = "even"
            }
            console.log(`${a} + ${b} = ${a + b} - ${evenOrOdd}`)
            break;
        case "-":
            if ((a - b) % 2 == 0) {
                evenOrOdd = "even"
            }
            console.log(`${a} - ${b} = ${a - b} - ${evenOrOdd}`)
            break;
        case "/":
            if (b == 0) {
                console.log(`Cannot divide ${a} by zero`)
            } else {
                console.log(`${a} / ${b} = ${(a / b).toFixed(2)}`)
            }
            break;
        case "*":
            if ((a * b) % 2 == 0) {
                evenOrOdd = "even"
            }
            console.log(`${a} * ${b} = ${a * b} - ${evenOrOdd}`)
            break;
        case "%":
            if (b == 0) {
                console.log(`Cannot divide ${a} by zero`)
            } else {
                console.log(`${a} % ${b} = ${a % b}`)
            }
            break;
    }
}