function cruiseShip(input) {
    let cruise = {
        "Mediterranean":{
            "standard cabin":27.50,
            "cabin with balcony":30.20,
            "apartment":40.50,
        },
        "Adriatic":{
            "standard cabin":22.99,
            "cabin with balcony":25.00,
            "apartment":34.99,
        },
        "Aegean":{
            "standard cabin":23.00,
            "cabin with balcony":26.60,
            "apartment":39.80,
        },
    }

    let destination = input.shift();
    let cabin = input.shift();
    let nights = +input.shift();
    
    let totalPrice = cruise[destination][cabin] * nights * 4;

    totalPrice = nights > 7 ? totalPrice * 0.75 : totalPrice;

    console.log(`Annie's holiday in the ${destination} sea costs ${totalPrice.toFixed(2)} lv.`);
}