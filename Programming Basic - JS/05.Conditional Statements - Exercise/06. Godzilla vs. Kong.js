function movieBudget([movieBudget,extrasCount,clothingPrice]){
    movieBudget = +movieBudget;
    extrasCount = +extrasCount;
    clothingPrice = +clothingPrice;
    
    let moneyForDecor = movieBudget * 0.1;
    let totalPriceForClothing = extrasCount >= 150 ? extrasCount * clothingPrice * 0.9 : extrasCount * clothingPrice;

    let neededMoney = totalPriceForClothing + moneyForDecor;

    let diff = movieBudget - neededMoney;
    
    if(diff < 0 ){
        console.log(`Not enough money!\nWingard needs ${Math.abs(diff).toFixed(2)} leva more.`)
    }else{
        console.log(`Action!\nWingard starts filming with ${diff.toFixed(2)} leva left.`)
    }    
}