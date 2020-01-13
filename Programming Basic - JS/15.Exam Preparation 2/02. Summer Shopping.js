function summerShopping(input) {
    let budget = +input.shift();
    let towelPrice = +input.shift();
    let discount = +input.shift();

    let umbrellaPrice = 2/3 * towelPrice;
    let flipFlopsPrice = umbrellaPrice * 0.75;
    let bagPrice = 1 / 3 * (towelPrice + flipFlopsPrice);
    let total = towelPrice + umbrellaPrice + flipFlopsPrice + bagPrice;
    total *= 1 - (discount / 100);
    
    let diff = budget - total;

    if(diff >= 0){
        console.log(`Annie's sum is ${total.toFixed(2)} lv. She has ${diff.toFixed(2)} lv. left.`);
    }else{
        console.log(`Annie's sum is ${total.toFixed(2)} lv. She needs ${Math.abs(diff).toFixed(2)} lv. more.`);
    }
}