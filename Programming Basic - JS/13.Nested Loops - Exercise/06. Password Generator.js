function  passwordGenerator([a,b]) {
    let result = [];
    for (let i = 1; i <= +a; i++) {
        for (let j = 1; j <= +a; j++) {
            for (let k = 0; k < +b; k++) {
                for (let l = 0; l < +b; l++) {
                    for (let m = 1; m <= +a; m++) {
                        if(m > i && m > j){
                            let firstSymbol = String.fromCharCode(97 + k); 
                            let secondsSymbol = String.fromCharCode(97 + l); 
                            result.push(`${i}${j}${firstSymbol}${secondsSymbol}${m}`);
                        }
                    }
                }
            }
        }
    }
    console.log(result.join(' '));
}

passwordGenerator([3,1]);