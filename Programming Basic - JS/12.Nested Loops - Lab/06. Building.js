function building([h,w]){

    let floorsCount = 0;
    let floor = [];

    for (let i = +h; i >= 1; i--) {
        for (let j = 0; j < +w; j++) {
            if(floorsCount == 0){
                floor.push(`L${i}${j}`);
            }else if(i % 2 == 1){
                floor.push(`A${i}${j}`);
            }else{
                floor.push(`O${i}${j}`);
            }
        }
        console.log(floor.join(' '));
        floor = [];
        floorsCount++;
    }
}