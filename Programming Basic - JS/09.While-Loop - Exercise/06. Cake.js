function cake(input){
    let w = +input.shift();
    let h = +input.shift();

    let cakeSize = w * h;
    let pieces = input.shift();
    while(pieces != "STOP"){
        cakeSize -= +pieces;
        if(cakeSize < 0){
            return `No more cake left! You need ${Math.abs(cakeSize)} pieces more.`
        }
        pieces = input.shift();
    }
    return `${cakeSize} pieces are left.`
}