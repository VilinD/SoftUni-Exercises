function toyShop([tripPrice,puzzlesCount,dollsCount,teddyBearsCount,minionsCount,trucksCount]){
    tripPrice = +tripPrice;
    puzzlesCount = +puzzlesCount;
    dollsCount = +dollsCount;
    teddyBearsCount = +teddyBearsCount;
    minionsCount = +minionsCount;
    trucksCount = +trucksCount;

    let toys = {
        puzzle:2.60,
        doll:3,
        teddyBear:4.10,
        minion:8.20,
        truck:2,
    }

    let result = (puzzlesCount * toys.puzzle) + (dollsCount * toys.doll) + (teddyBearsCount * toys.teddyBear) + (minionsCount * toys.minion) + (trucksCount * toys.truck);

    let totalOrders = puzzlesCount + dollsCount + teddyBearsCount + minionsCount + trucksCount;

    result = totalOrders >= 50 ? result * 0.75 : result;
    result *= 0.90;

    let diff = result - tripPrice;

    if(diff >= 0){
        console.log(`Yes! ${Math.abs(diff).toFixed(2)} lv left.`)
    }else{
        console.log(`Not enough money! ${Math.abs(diff).toFixed(2)} lv needed.`)
    }
}