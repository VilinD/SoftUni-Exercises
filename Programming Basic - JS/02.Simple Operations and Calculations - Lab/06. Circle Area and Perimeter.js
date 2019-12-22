function circleAreaAndPerimeter(input){
    let r = Number(input.shift());

    console.log((Math.PI * Math.pow(r,2)).toFixed(2));
    console.log(((r + r) * Math.PI).toFixed(2));
}