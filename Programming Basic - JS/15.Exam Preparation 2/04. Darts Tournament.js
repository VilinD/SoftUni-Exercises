function dartsTournamet(input) {
    let startingPoints = +input.shift();
    let counter = 0;

    while(startingPoints > 0){
        let sector = input.shift();
        let score = +input.shift();
        counter++;

        switch(sector){
            case "number section":
                startingPoints -= score; 
                break;
            case "double ring":
                startingPoints -= score * 2; 
                break;
            case "triple ring":
                startingPoints -= score * 3; 
                break;
            case "bullseye":
                return `Congratulations! You won the game with a bullseye in ${counter} moves!`;
        }

        if(startingPoints == 0){
            return `Congratulations! You won the game in ${counter} moves!`;
        }
    }

    return `Sorry, you lost. Score difference: ${Math.abs(startingPoints)}.`;
}