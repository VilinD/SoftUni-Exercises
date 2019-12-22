function yardGreening(input) {
    let yard = parseFloat(input.shift());
    let greeningPrice = yard * 7.61; 
    let discount = greeningPrice * 0.18;

    console.log(`The final price is: ${(greeningPrice - discount).toFixed(2)} lv.`);
    console.log(`The discount is: ${discount.toFixed(2)} lv.`);
}