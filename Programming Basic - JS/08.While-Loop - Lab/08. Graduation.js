function graduation(input) {
    let name = input.shift();
    let grades = [];
    while (grades.length != 12) {
        let grade = input.shift();
        if (grade >= 4) {
            grades.push(+grade);
        }
    }
    let sum = grades.reduce((a, b) => +a + +b)
    let averageGrade = sum / 12;

    console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);

}