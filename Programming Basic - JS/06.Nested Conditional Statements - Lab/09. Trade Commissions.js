function tradeCommissions([town, money]) {
    money = +money;
    let towns = ['Sofia', 'Varna', 'Plovdiv'];

    let commissionInTowns = {
        Sofia: 0,
        Varna: 0,
        Plovdiv: 0,
    }
    let result = 0;
    if (towns.includes(town) && money >= 0) {
        if (money <= 500) {
            commissionInTowns.Sofia = 0.05;
            commissionInTowns.Varna = 0.045;
            commissionInTowns.Plovdiv = 0.055;

            result = money * commissionInTowns[town];
        }else if(money <= 1000){
            commissionInTowns.Sofia = 0.07;
            commissionInTowns.Varna = 0.075;
            commissionInTowns.Plovdiv = 0.08;

            result = money * commissionInTowns[town];
        }else if(money <= 10000){
            commissionInTowns.Sofia = 0.08;
            commissionInTowns.Varna = 0.10;
            commissionInTowns.Plovdiv = 0.12;

            result = money * commissionInTowns[town];
        }else{
            commissionInTowns.Sofia = 0.12;
            commissionInTowns.Varna = 0.13;
            commissionInTowns.Plovdiv = 0.145;

            result = money * commissionInTowns[town];
        }
    } else {
        return 'error';
    }

    console.log(result.toFixed(2));
}

