function christmasSweets(input) {
    let baklavaPrice = +input.shift();
    let muffinsPrice = +input.shift();
    let stollenQuantity = +input.shift();
    let sweetsQuantity = +input.shift();
    let bisctuitsQuantity = +input.shift();

    let total = 0;
    let stollenPrice = baklavaPrice * 1.60;
    total += stollenPrice * stollenQuantity;
    let sweetsPrice = muffinsPrice * 1.80;
    total += sweetsPrice * sweetsQuantity;
    total += bisctuitsQuantity * 7.50;

    console.log(total.toFixed(2));
}