function lefAndRightSum(input){
    let count = +input.shift();

    let leftPart = input.splice(0,count);
    
    let leftSum = leftPart.reduce((a,b) => +a + +b);
    let rightSum = input.reduce((a,b) => +a + +b);

    let diff = Math.abs(leftSum - rightSum);

    if(diff != 0){
        console.log(`No, diff = ${diff}`);
    }else{
        console.log(`Yes, sum = ${leftSum}`);
    }
}
