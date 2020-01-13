function walking(input){
    let steps = input.shift();
    let totalSteps = 0;

    while(steps != "Going home"){
        totalSteps += +steps;

        if(totalSteps >= 10000){
            return 'Goal reached! Good job!';
        }
        steps = input.shift();
    }

    steps = input.shift();
    totalSteps += +steps;

    if(totalSteps >= 10000){
        return 'Goal reached! Good job!';
    }else{
        return `${10000 - totalSteps} more steps to reach goal.`;
    }    
}