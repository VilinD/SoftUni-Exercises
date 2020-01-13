function numberSeq(input){
    input.shift();
    let numbers = input.map(x => +x);

    console.log(`Max number: ${Math.max(...numbers)}`);
    console.log(`Min number: ${Math.min(...numbers)}`);
}