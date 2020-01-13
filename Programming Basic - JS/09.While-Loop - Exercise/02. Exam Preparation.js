function examPrep(input) {
    let maxMistakes = +input.shift();
    let exercise = input.shift();
    let degree = +input.shift();

    let allDegrees = [];
    let countOfMistakes = 0;
    let lastProblem = '';

    while (exercise != "Enough") {
        if (degree <= 4) {
            countOfMistakes++;
            if (countOfMistakes == maxMistakes) {
                return `You need a break, ${maxMistakes} poor grades.`
            }
        }
        allDegrees.push(degree);
        lastProblem = exercise;
        
        exercise = input.shift();
        degree = +input.shift();
    }

    let sum = allDegrees.reduce((a, b) => a + b);

    console.log(`Average score: ${(sum / allDegrees.length).toFixed(2)}`);
    console.log(`Number of problems: ${allDegrees.length}`);
    console.log(`Last problem: ${lastProblem}`);

}