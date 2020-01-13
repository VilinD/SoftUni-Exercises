function christmasMarket(input) {
    let neededMoney = +input.shift();
    let fantasticQuantity = +input.shift();
    let horrorQuantity = +input.shift();
    let romanticQuantity = +input.shift();

    let total = fantasticQuantity * 14.90 + horrorQuantity * 9.80 + romanticQuantity * 4.30;
    let moneyForSellers = 0;
    
    total *= 0.80;

    if(total > neededMoney){
        moneyForSellers = parseInt((total - neededMoney) * 0.10);
        neededMoney += (total - neededMoney) - moneyForSellers;
        console.log(`${neededMoney.toFixed(2)} leva donated.\nSellers will receive ${moneyForSellers} leva.`);
    }else{
        console.log(`${(neededMoney - total).toFixed(2)} money needed.`);
    }
}