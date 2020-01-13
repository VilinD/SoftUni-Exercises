function onTime([examHours, examMinutes, currentHours, currentMinutes]) {
    examHours = +examHours;
    examMinutes = +examMinutes;
    currentHours = +currentHours;
    currentMinutes = +currentMinutes;

    let totalExamSeconds = (examHours * 3600) + (examMinutes * 60);
    let totalCurrentSeconds = (currentHours * 3600) + (currentMinutes * 60);

    let diff = totalExamSeconds - totalCurrentSeconds;

    let minutes = parseInt(Math.abs(diff) / 60);
    let hours = 0;

    while(minutes >= 60){
        minutes -= 60;
        hours++;
    }

    if (diff == 0) {
        console.log("On time");
    } else if (diff < 0) {
        console.log("Late");
        if (hours == 0) {
            console.log(`${minutes} minutes after the start`);
        } else {
            console.log(`${hours}:${minutes < 10 ? `0${minutes}` : minutes} hours after the start`);
        }
    } else {
        if (diff <= 1800) {
            console.log("On time");
            if (hours == 0) {
                console.log(`${minutes} minutes before the start`);
            } else {
                console.log(`${hours}:${minutes < 10 ? `0${minutes}` : minutes} hours before the start`);
            }
        }else{
            console.log("Early");
            if (hours == 0) {
                console.log(`${minutes} minutes before the start`);
            } else {
                console.log(`${hours}:${minutes < 10 ? `0${minutes}` : minutes} hours before the start`);
            }
        }
    }
}