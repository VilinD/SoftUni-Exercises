function rectArea([x1,y1,x2,y2]){
    let a = Math.abs(+x1 - +x2);
    let b = Math.abs(+y1 - +y2);

    console.log((a * b).toFixed(2));
    console.log((2 *(a +b)).toFixed(2));
}