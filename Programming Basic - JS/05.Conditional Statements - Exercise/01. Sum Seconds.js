function sumSeconds(input){
    
    let totalSeconds = input.map(x => +x).reduce((a,b) => a + b);
    let minutes = parseInt(totalSeconds / 60); 
    let seconds = totalSeconds % 60 < 10 ? `0${totalSeconds % 60}` : totalSeconds % 60;

    console.log(`${minutes}:${seconds}`)
    
    
}
