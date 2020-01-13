function volleyball([yearType,p,h]){
    let result = ((48 - +h) * 0.75) + +h + (+p * 2 / 3);

    result = yearType == 'leap' ? result * 1.15 : result;

    console.log(Math.floor(result));
}