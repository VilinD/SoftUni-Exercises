function christmasDecoration(input) {
    let budget = +input.shift();
    let data = input.shift();
    
    while(data != 'Stop'){
        let cost = 0;
        for (let i = 0; i < data.length; i++) {
            cost += data[0].charCodeAt(0);
        }

        if((budget - cost) >= 0){
            console.log("Item successfully purchased!");
            budget -= cost;
        }else{
            return "Not enough money!"
        }

        data = input.shift();
    }

    console.log(`Money left: ${budget}`);
}
christmasDecoration(["3000",
    "star",
    "Christmas tree",
    "tinsel",
    "Tree stand"])