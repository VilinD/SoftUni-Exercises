function fishingBoat([fishersMoney,season,fishersCount]){
    fishersMoney = +fishersMoney;
    fishersCount = +fishersCount;

    let discount = getDiscount(fishersCount);
    let result = 0;
    if(season == "Spring"){
        result = 3000 * discount;
        if(fishersCount % 2 == 0){
            result *= 0.95;
        }
    }else if(season == "Winter"){
        result = 2600 * discount;
        if(fishersCount % 2 == 0){
            result *= 0.95;
        }
    }else{
        result = 4200 * discount;
        if(fishersCount % 2 == 0 && season != "Autumn"){
            result *= 0.95;
        }
    }


    let diff = fishersMoney - result;

    if(diff < 0){
        console.log(`Not enough money! You need ${Math.abs(diff).toFixed(2)} leva.`)
    }else{
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
    }



    function getDiscount(fishers){
        if(fishers <= 6){
            return 0.9;
        }else if(fishers <= 11){
            return 0.85;
        }else{
            return 0.75;
        }
    }
}