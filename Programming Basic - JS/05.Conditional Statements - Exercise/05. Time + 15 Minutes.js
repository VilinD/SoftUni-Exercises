function timePlus15([hours,minutes]){
    minutes = +minutes + 15;
    hours = +hours;

    if(minutes > 59){
        minutes -= 60;
        hours++;

        if(hours > 23){
            hours -= 24
        }
    }

    minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

    console.log(`${hours}:${minutes}`)
}