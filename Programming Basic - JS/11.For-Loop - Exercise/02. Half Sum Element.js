function halfSum(input) {
    let rounds = +input.shift();
    let numbers = input.map(x => +x);
    let maxValue = Math.max(...numbers);
    let index = numbers.indexOf(maxValue);
    let sum = 0;

    for (let i = 0; i < rounds; i++) {
        let currentNumber = numbers.shift();
        sum = numbers.reduce((a, b) => a + b);

        if (sum == currentNumber) {
            return `Yes\nSum = ${sum}`;
        }

        numbers.push(currentNumber);
    }
    numbers.splice(index,1);
    sum = numbers.reduce((a, b) => a + b);

    return `No\nDiff = ${Math.abs(sum - maxValue)}`;
}

console.log(halfSum([3,
    5,
    5,
    1]));