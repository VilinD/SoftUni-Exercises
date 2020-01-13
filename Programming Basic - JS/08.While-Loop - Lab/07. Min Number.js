function maxNumber(input){
    input.shift();

    console.log(Math.min(...input.map(x => +x)));
}