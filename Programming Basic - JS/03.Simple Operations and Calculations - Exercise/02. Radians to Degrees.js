function radiansToDegrees(input){
    const radians = +input.shift();
    
    const degrees = radians * 180 / Math.PI;
    
    console.log(degrees.toFixed(0));
}