function skiTrip([daysCount,roomType,feedback]){
    let room = roomType.split(' ').join('-');
    daysCount = +daysCount;

    let roomsPrices = {
        'room-for-one-person':{
            price:18,
            discount:1,
        },
        'apartment':{
            price:25,
            discount:0,
        },
        'president-apartment':{
            price:35,
            discount:0,
        },
    }

    let result = roomsPrices[room].price * (daysCount - 1);

    if(daysCount < 10){
        roomsPrices.apartment.discount = 0.70;
        roomsPrices['president-apartment'].discount = 0.90;

        result *= roomsPrices[room].discount;
    }else if(daysCount <= 15){
        roomsPrices.apartment.discount = 0.65;
        roomsPrices['president-apartment'].discount = 0.85;

        result *= roomsPrices[room].discount;
    }else{
        roomsPrices.apartment.discount = 0.50;
        roomsPrices['president-apartment'].discount = 0.80;

        result *= roomsPrices[room].discount;
    }

    result *= feedback == 'negative' ? 0.90 : 1.25;
    
    console.log(result.toFixed(2));
}