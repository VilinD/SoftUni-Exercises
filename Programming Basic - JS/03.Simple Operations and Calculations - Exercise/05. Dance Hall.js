function danceHall([hallLenght, hallWidth, wardrobeSide]) {
    
    let hallArea = (+hallLenght * 100) * (+hallWidth * 100);
    let wardrobeSideSize = Math.pow(+wardrobeSide * 100,2);
    let benchSize = hallArea / 10;

    let freeSpace = hallArea - benchSize - wardrobeSideSize;
    let totalDancers = freeSpace / 7040;

    console.log(parseInt(totalDancers));
}
