function fruitShop([product, day, quantity]) {
    let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    let products = ['banana', 'apple', 'orange', 'grapefruit', 'kiwi', 'pineapple', 'grapes'];

    let productsPrices = {
        inWeekdays: {
            banana: 2.50,
            apple: 1.20,
            orange: 0.85,
            grapefruit: 1.45,
            kiwi: 2.70,
            pineapple: 5.50,
            grapes: 3.85,
        },
        inWeekends: {
            banana: 2.70,
            apple: 1.25,
            orange: 0.90,
            grapefruit: 1.60,
            kiwi: 3.00,
            pineapple: 5.60,
            grapes: 4.20,
        }
    }

    if (daysOfWeek.includes(day) && products.includes(product)) {
        if(day == "Saturday" || day == "Sunday"){
            console.log((productsPrices.inWeekends[product] * +quantity).toFixed(2));
        }else{
            console.log((productsPrices.inWeekdays[product] * +quantity).toFixed(2));
        }
    } else {
        console.log("error")
    }
}