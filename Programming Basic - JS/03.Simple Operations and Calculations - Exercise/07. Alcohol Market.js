function alcoholMarket([whiskeyPrice,beerQuantity,wineQuantity,rakiaQuantity,whiskeyQuantity]){
    let rakiaPrice = +whiskeyPrice / 2;
    let winePrice = rakiaPrice * 0.60;
    let beerPrice = rakiaPrice * 0.20;
    
    let totalPrice = (whiskeyPrice * +whiskeyQuantity) + (beerPrice * +beerQuantity) + (winePrice * +wineQuantity) + (rakiaPrice * +rakiaQuantity);

    console.log(totalPrice.toFixed(2));
}