function moving(input){
    let width = +input.shift();
    let length = +input.shift();
    let height = +input.shift();

    let boxes = input.shift();

    let space = width * length * height;
    let neededSpace = 0;

    while(boxes != "Done"){
        neededSpace += +boxes;

        if(space - neededSpace < 0){
            return `No more free space! You need ${neededSpace - space} Cubic meters more.`
        }
        boxes = input.shift();
    }

    return `${space - neededSpace} Cubic meters left.`
}