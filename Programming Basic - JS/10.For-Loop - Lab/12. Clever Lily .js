function cleverLiLy([years,machinePrice,toyPrice]){
    let toysCount = 0;
    let moneyForBD = 10;
    let totalMoney = 0;

    for (let i = 1; i < +years; i++) {
        if(i % 2 == 1){
            toysCount++;
        }else{
            totalMoney += moneyForBD - 1;
            moneyForBD += 10;
        }
    }

    totalMoney += +toyPrice * toysCount;

    let diff = totalMoney - +machinePrice;

    if(diff > 0){
        console.log(`Yes! ${diff.toFixed(2)}`);
    }else{
        console.log(`No! ${Math.abs(diff).toFixed(2)}`);
    }
}

cleverLiLy(['10',
    '170.00',
    '6'])