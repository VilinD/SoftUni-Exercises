function evenPowersOfTwo([number]){
    for (let i = 0; i <= +number; i++) {
        
        if(i % 2 == 0){
            console.log(Math.pow(2,i));
        }
    }
}