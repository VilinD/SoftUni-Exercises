function invalidNumber([number]){
    return (+number >= 100 && +number <= 200) || +number == 0 ? "" : "invalid";
}