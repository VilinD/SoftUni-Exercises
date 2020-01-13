function trainTheTrainers(input) {
    let rounds = +input.shift();
    let countProjects = 0;
    let allDegrees = 0;
    let projectName = input.shift();
    while(projectName != 'Finish'){
        let totalSum = 0;
        for (let i = 0; i < rounds; i++) {
            let number = +input.shift();
            totalSum += number;
        }
        let degree = totalSum / rounds;
        console.log(`${projectName} - ${degree.toFixed(2)}.`);
        countProjects++;
        allDegrees += degree;
        projectName = input.shift();
    }

    console.log(`Student's final assessment is ${(allDegrees / countProjects).toFixed(2)}.`);

}