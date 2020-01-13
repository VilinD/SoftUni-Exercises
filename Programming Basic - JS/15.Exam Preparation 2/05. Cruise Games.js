function cruiseGames(input) {
    let name = input.shift();
    let rounds = +input.shift();

    let countVolleyball = 0;
    let countTennis = 0;
    let countBadminton = 0;

    let totalVolleyball = 0;
    let totalTennis = 0;
    let totalBadminton = 0;

    let totalPoints = 0;

    for (let i = 0; i < rounds; i++) {
        let game = input.shift();
        let points = +input.shift();

        switch (game) {
            case "volleyball":
                points *= 1.07;
                countVolleyball++;
                totalVolleyball += points;
                break;
            case "tennis":
                points *= 1.05;
                countTennis++;
                totalTennis += points;
                break;
            case "badminton":
                points *= 1.02;
                countBadminton++;
                totalBadminton += points;
                break;
        }
        totalPoints += points;
    }

    totalVolleyball = Math.ceil(totalVolleyball / countVolleyball);
    totalTennis = Math.ceil(totalTennis / countTennis);
    totalBadminton = Math.ceil(totalBadminton / countBadminton);

    if(totalVolleyball >= 75 && totalTennis >= 75 && totalBadminton >= 75){
        console.log(`Congratulations, ${name}! You won the cruise games with ${parseInt(totalPoints)} points.`);
    }else{
        console.log(`Sorry, ${name}, you lost. Your points are only ${parseInt(totalPoints)}.`);
    }
}

cruiseGames(["Pepi",
    "2",
    "volleyball",
    "78",
    "tennis",
    "98",
    ])