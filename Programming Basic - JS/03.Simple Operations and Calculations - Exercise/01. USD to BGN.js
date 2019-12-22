function usdToBgn(input){
    let usd = +input.shift();

    let convertedMoney = usd * 1.79549; 
    console.log(convertedMoney.toFixed(2));
}