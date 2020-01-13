function combinations([number]) {
    let counter = 0;
    for (let i = 0; i <= +number; i++) {
        for (let j = 0; j <= +number; j++) {
            for (let k = 0; k <= +number; k++) {
                let result = i + j + k;
                if(result == +number){
                    counter++;
                }
            }
        }
    }
    console.log(counter);
}