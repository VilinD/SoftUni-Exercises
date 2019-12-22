function charityCampaing([daysCount,bakersCount,cakesCount,wafflesCount,pancakesCount]){
    let cakesPrice = +cakesCount * 45;
    let wafflesPrice = +wafflesCount * 5.80;
    let pancakesPrice = +pancakesCount * 3.20;

    let moneyForDay = (cakesPrice + wafflesPrice + pancakesPrice) * +bakersCount;
    let totalMoney = (moneyForDay * +daysCount) *  0.875;

    console.log(totalMoney.toFixed(2))
}