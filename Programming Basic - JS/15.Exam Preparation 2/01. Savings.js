function savings(input){
    let moneyForMonth = +input.shift();
    let months = +input.shift();
    let neededMoney = +input.shift();

    let savingsForMonth = moneyForMonth - (neededMoney + (moneyForMonth * 0.3));

    let totalSavings = savingsForMonth * months;

    let percentFromAllIncomes = (savingsForMonth / moneyForMonth) * 100;

    console.log(`She can save ${percentFromAllIncomes.toFixed(2)}%\n${totalSavings.toFixed(2)}`);
}