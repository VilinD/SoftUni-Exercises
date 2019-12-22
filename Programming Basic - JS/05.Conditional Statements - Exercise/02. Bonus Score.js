function bonusScore([number]){
    number = +number;

    let totalBonusPoints = number % 2 == 0 ? 1 : 0;
    totalBonusPoints += number % 10 == 5 ? 2 : 0;

    if(number <= 100){
        totalBonusPoints += 5;
    }else if(number > 1000){
        totalBonusPoints += number * 0.10;
    }else{
        totalBonusPoints += number * 0.20;
    }

    console.log(totalBonusPoints);
    console.log(number + totalBonusPoints);
}
