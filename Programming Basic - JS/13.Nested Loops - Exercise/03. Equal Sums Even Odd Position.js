function equalSums([start,end]){
    let equalNumbers = [];
    for (let i = +start; i <= +end; i++) {
        let even = 0;
        let odd = 0;
        let number = i;
        for (let j = 0; j < 6; j++) {
            let n = number % 10;
            number = parseInt(number / 10);
            if(j % 2 == 0){
                even += n;
            }else{
                odd += n;
            }
        }

        if(even == odd){
            equalNumbers.push(i);
        }
    }
    console.log(equalNumbers.join(" "));
}