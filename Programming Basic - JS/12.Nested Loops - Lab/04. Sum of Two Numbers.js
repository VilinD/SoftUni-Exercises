function sumOfTwo(input){
    let start = +input.shift();
    let end = +input.shift();
    let magicalNumber = +input.shift();

    let counter = 0;

    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            counter++;
            let result = i + j;
            if(result == magicalNumber){
                return `Combination N:${counter} (${i} + ${j} = ${result})`;
            }
        }
    }

    return `${counter} combinations - neither equals ${magicalNumber}`;

}
