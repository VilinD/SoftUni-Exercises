function fruitOrVegetable([product]){
    let fruits = ["banana","apple","kiwi","cherry","lemon","grapes"];
    let vegetables = ["tomato","cucumber","pepper","carrot"];

    if(fruits.includes(product)){
        console.log("fruit");
    }else if(vegetables.includes(product)){
        console.log("vegetable");
    }else{
        console.log("unknown");
    }
}