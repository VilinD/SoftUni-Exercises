function travelling(input) {
    while (true) {
        let destination = input.shift();

        if (destination == "End") {
            break;
        }
        let neededMoney = +input.shift();
        let totalMoney = 0;

        while(totalMoney < neededMoney){
            let savings = +input.shift();
            totalMoney += savings;
        }

        console.log(`Going to ${destination}!`);
    }
}