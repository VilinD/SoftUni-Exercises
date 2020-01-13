function maxNumber(input){
    input.shift();

    console.log(Math.max(...input.map(x => +x)));
}