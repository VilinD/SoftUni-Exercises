function petShop(input) {
    let dogs = parseFloat(input.shift());
    let others = parseFloat(input.shift());

    let result = (dogs * 2.50) + others * 4; 

    console.log(`${result.toFixed(2)} lv.`)
}