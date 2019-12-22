function areaOfFigures([figure, ...arguments]) {
    switch (figure) {
        case "square":
            let a = +arguments.shift();
            console.log((a * a).toFixed(3));
            break;
        case "rectangle":
            let b = +arguments.shift();
            let c = +arguments.shift();
            console.log((b * c).toFixed(3));
            break;
        case "circle":
            let r = +arguments.shift();
            console.log((Math.PI * Math.pow(r,2)).toFixed(3));
            break;
        case "triangle":
            d = +arguments.shift();
            let h = +arguments.shift();
            console.log((0.5 * d * h).toFixed(3));
            break;
    }
}

