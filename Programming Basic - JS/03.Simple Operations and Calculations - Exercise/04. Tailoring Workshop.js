function tailoringWorkshop([tablesQuantity, tableLenght, tableWidth]) {
    tablesQuantity = +tablesQuantity;
    tableWidth = +tableWidth;
    tableLenght = +tableLenght;

    let tableclothArea = tablesQuantity * (tableLenght + 0.60) * (tableWidth + 0.60);

    let tableEdgingArea = tablesQuantity * Math.pow(tableLenght / 2,2);

    let priceInDollars = tableclothArea * 7 + tableEdgingArea * 9;
    let priceInLev = priceInDollars * 1.85;

    console.log(`${priceInDollars.toFixed(2)} USD`);
    console.log(`${priceInLev.toFixed(2)} BGN`);
}
