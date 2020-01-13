function summerOutfit([degrees,time]) {
    let whatToWear = {
        morning: [{ outfit: "Sweatshirt", shoes: "Sneakers", },
        { outfit: "Shirt", shoes: "Moccasins", },
        { outfit: "T-Shirt", shoes: "Sandals", },
        ],
        afternoon: [{ outfit: "Shirt", shoes: "Moccasins", },
        { outfit: "T-Shirt", shoes: "Sandals", },
        { outfit: "Swim Suit", shoes: "Barefoot", },
        ],
        evening: [{ outfit: "Shirt", shoes: "Moccasins", },
        { outfit: "Shirt", shoes: "Moccasins", },
        { outfit: "Shirt", shoes: "Moccasins", },
        ],
    }

    let outfitToPut = "";
    let shoesToPut = "";

    if(+degrees <= 18){
        outfitToPut = whatToWear[time.toLowerCase()][0].outfit;
        shoesToPut = whatToWear[time.toLowerCase()][0].shoes;
    }else if (+degrees <= 24){
        outfitToPut = whatToWear[time.toLowerCase()][1].outfit;
        shoesToPut = whatToWear[time.toLowerCase()][1].shoes;
    }else{
        outfitToPut = whatToWear[time.toLowerCase()][2].outfit;
        shoesToPut = whatToWear[time.toLowerCase()][2].shoes;
    }

    console.log(`It's ${degrees} degrees, get your ${outfitToPut} and ${shoesToPut}.`)
}