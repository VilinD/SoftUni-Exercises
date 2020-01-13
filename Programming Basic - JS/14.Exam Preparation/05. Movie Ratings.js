function movieRatings(input) {
    let rounds = +input.shift();

    let bestMovie = "";
    let maxRating = Number.MIN_SAFE_INTEGER;
    let worstMovie = "";
    let minRating = Number.MAX_SAFE_INTEGER;
    let totalRating = 0;

    for (let i = 0; i < rounds; i++) {
        let movieName = input.shift();
        let rating = +input.shift();

        if(rating > maxRating){
            maxRating = rating;
            bestMovie = movieName;
        }

        if(rating < minRating){
            minRating = rating;
            worstMovie = movieName;
        }

        totalRating += rating;
    }

    console.log(`${bestMovie} is with highest rating: ${maxRating.toFixed(1)}`);
    console.log(`${worstMovie} is with lowest rating: ${minRating.toFixed(1)}`);
    console.log(`Average rating: ${(totalRating / rounds).toFixed(1)}`);
}