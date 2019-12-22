function fishTank(input){
    let lenght = Number(input.shift());
    let width = Number(input.shift());
    let height = Number(input.shift());
    let percent = parseFloat(input.shift());

    let aquariumInLitters = (lenght * width * height) * 0.001;
    percent *= 0.01;

    let result = aquariumInLitters * (1 - percent);

    console.log(result.toFixed(3));
}
