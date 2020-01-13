function sumNumbers(input){
    input.shift();

    let sum = input.reduce((a,b) => +a + +b,0);

    console.log(sum);
}