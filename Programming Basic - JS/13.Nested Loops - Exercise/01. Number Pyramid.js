function numberPyramid([number]){

    let counter = 0;
    for (let i = 1; i <= +number; i++) {
        let row = [];
        for (let j = 1; j <= i; j++) {
            counter++;
            row.push(counter);
            if(counter == +number){
                console.log(row.join(' '));
                return;
            }
        }
        console.log(row.join(' '));
    }
}