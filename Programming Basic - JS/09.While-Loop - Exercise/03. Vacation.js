function vacation(input) {
    let neededMoney = +input.shift();
    let currentMoney = +input.shift();

    let countSpends = 0;
    let countDays = 0;

    while (true) {
        let command = input.shift();
        let money = +input.shift();
        countDays++;
        if (command == "spend") {
            countSpends++;
            currentMoney = currentMoney - money < 0 ? 0 : currentMoney - money;

            if (countSpends == 5) {
                console.log("You can't save the money.");
                console.log(countDays);
                break;
            }
        } else {
            countSpends = 0;
            currentMoney += money;

            if (currentMoney >= neededMoney) {
                console.log(`You saved the money for ${countDays} days.`);
                break;
            }
        }
    }
} 