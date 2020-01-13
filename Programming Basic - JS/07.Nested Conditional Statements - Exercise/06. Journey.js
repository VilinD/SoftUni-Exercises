function jorney([money, season]) {
    money = +money;

    if (money <= 100) {
        console.log("Somewhere in Bulgaria")
        if (season == 'summer') {
            money *= 0.30;
            console.log(`Camp - ${money.toFixed(2)}`);
        } else {
            money *= 0.70;  
            console.log(`Hotel - ${money.toFixed(2)}`);
        }
    } else if (money <= 1000) {
        console.log("Somewhere in Balkans")
        if (season == 'summer') {
            money *= 0.40;
            console.log(`Camp - ${money.toFixed(2)}`);
        } else {
            money *= 0.80;
            console.log(`Hotel - ${money.toFixed(2)}`);
        }
    } else {
        console.log("Somewhere in Europe")
        console.log(`Hotel - ${(money * 0.9).toFixed(2)}`);
    }
}