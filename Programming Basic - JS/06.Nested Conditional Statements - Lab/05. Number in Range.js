function numberInRange([number]){
    return +number <= 100 && +number >= -100 && +number != 0 ? "Yes" : "No";
}