function oddEvenSum(input){
    input.shift();

    let numbers = input.map(x => +x);
    let evenNumbersSum = 0;
    let oddNumbersSum = 0;

    for (let i = 0; i < numbers.length; i++) {
        if(i % 2 == 0){
            evenNumbersSum += numbers[i];
        }else{
            oddNumbersSum += numbers[i];
        }    
    }

    let diff = Math.abs(evenNumbersSum - oddNumbersSum);

    if(diff != 0){
        console.log(`No\nDiff = ${diff}`);
    }else{
        console.log(`Yes\nSum = ${evenNumbersSum}`);
    }
    
}
