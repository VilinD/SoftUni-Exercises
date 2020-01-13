function coins([money]) {
    money = +money;
    let coins = [2.0, 1.0, 0.5, 0.2, 0.1,0.05, 0.02, 0.01];
    let count = 0;
    while (money != 0) {
        let bestChoice = coins.find(x => x <= money);
        money = +(money - bestChoice).toFixed(2);
        count++;
    }
    console.log(count);
}