function sumPrime(input) {
    let number = input.shift();
    let allNonPrimeSum = 0;
    let allPrimeSum = 0;

    while (number != 'stop') {
        if (+number < 0) {
            console.log("Number is negative.")
        } else {
            if (isPrime(+number)) {
                allPrimeSum += +number;
            } else {
                allNonPrimeSum += +number;
            }
        }
        number = input.shift();
    }

    console.log(`Sum of all prime numbers is: ${allPrimeSum}`);
    console.log(`Sum of all non prime numbers is: ${allNonPrimeSum}`);

    function isPrime(num) {
        for (let i = 2; i < num; i++)
            if (num % i === 0) return false;
        return num > 1;
    }
}
