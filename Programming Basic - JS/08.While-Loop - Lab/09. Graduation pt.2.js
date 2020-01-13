function graduation(input) {
    let name = input.shift();
    let grades = [];
    let count = 0;

    while (grades.length != 12) {
        let grade = input.shift();
        count++;
        if (grade >= 4) {
            grades.push(+grade);
        }else{
            return `${name} has been excluded at ${count} grade`
        }
    }
    let sum = grades.reduce((a, b) => +a + +b)
    let averageGrade = sum / 12;

    console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
}