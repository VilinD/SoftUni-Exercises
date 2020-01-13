function newHouse([flower, quantity, money]) {
    quantity = +quantity;
    let result = 0;

    switch (flower) {
        case 'Roses':
            result = quantity * 5;
            result *= quantity > 80 ? 0.9 : 1;
            break;
        case 'Dahlias':
            result = quantity * 3.80;
            result *= quantity > 90 ? 0.85 : 1;
            break;
        case 'Tulips':
            result = quantity * 2.80;
            result *= quantity > 80 ? 0.9 : 1;
            break;
        case 'Narcissus':
            result = quantity < 120 ? quantity * (3 * 1.15) : quantity * 3;
            break;
        case 'Gladiolus':
            result = quantity < 80 ? quantity * (2.50 * 1.20) : quantity * 2.50;
            break;
    }
    let diff = +money - result;

    if(diff >= 0){
        console.log(`Hey, you have a great garden with ${quantity} ${flower} and ${diff.toFixed(2)} leva left.`)
    }else{
        console.log(`Not enough money, you need ${Math.abs(diff).toFixed(2)} leva more.`)
    }
}