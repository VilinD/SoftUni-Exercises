function coding([numbers]){
    let loops = numbers.length;
    for (let i = 0; i < loops; i++) {
        let number = numbers % 10;
        numbers = parseInt(numbers / 10);

        if(number == 0){
            console.log("ZERO");
            continue;
        }
        let result = String.fromCharCode(number + 33);
        console.log(result.repeat(number));
        
    }
}