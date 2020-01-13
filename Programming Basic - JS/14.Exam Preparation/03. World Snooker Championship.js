function worldSnooker(input) {
    let tickets = {
        "Quarter final":{
            "Standard":55.50,
            "Premium":105.20,
            "VIP":118.90,
        },
        "Semi final":{
            "Standard":75.88,
            "Premium":125.22,
            "VIP":300.40,
        },
        "Final":{
            "Standard":110.10,
            "Premium":160.66,
            "VIP":400,
        },
    }

    let finalPoint = input.shift();
    let ticketType = input.shift();
    let ticketsQuantity = +input.shift();
    let wantPhoto = input.shift();

    let price = tickets[finalPoint][ticketType] * ticketsQuantity;

    if(price > 4000){
        price *= 0.75;
    }else if(price > 2500){
        price *= 0.90;
        if(wantPhoto == 'Y'){
            price += ticketsQuantity * 40;
        }
    }else{
        if(wantPhoto == 'Y'){
            price += ticketsQuantity * 40;
        }
    }

    console.log(price.toFixed(2));
}