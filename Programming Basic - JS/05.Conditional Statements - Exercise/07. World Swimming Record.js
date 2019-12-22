function swimmingRecord([timeToBeat,distance,secondsForMeter]){
    let swimmerTime = +distance * +secondsForMeter;

    let timeToAdd = parseInt(+distance / 15) * 12.5;

    let totalTime = swimmerTime + timeToAdd;

    let diff = totalTime - +timeToBeat;

    if(diff < 0){
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    }else{
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`)
    }
}
