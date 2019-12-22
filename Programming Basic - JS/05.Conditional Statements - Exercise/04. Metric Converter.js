function metricConverter([number, from, to]) {

    let result = +number;

    switch (from) {
        case "mm":
            if (to == "m") {
                result /= 1000;
            } else {
                result /= 10;
            }
            break;
        case "m":
            if (to == "cm") {
                result *= 100;
            } else {
                result *= 1000;
            }
            break;
        case "cm":
            if (to == "mm") {
                result *= 10;
            } else {
                result /= 100;
            }
            break;
    }
    console.log(result.toFixed(3))
}
