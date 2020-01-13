function accountBallance(input) {
    input.shift();
    let result = 0;
    input.map(x => +x).forEach(num => {
        if (num < 0) {
            console.log('Invalid operation!')
        } else {
            console.log(`Increase: ${num.toFixed(2)}`)
            result += num;
        }
    })

    console.log(`Total: ${result.toFixed(2)}`);
}