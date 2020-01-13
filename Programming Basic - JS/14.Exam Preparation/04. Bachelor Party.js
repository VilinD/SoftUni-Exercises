function banchelorParty(input) {
    let singerPrice = +input.shift();
    
    let totalGuests = 0;
    let group = input.shift();
    let total = 0;
    while(group != "The restaurant is full"){
        totalGuests+= +group;
        if(+group >= 5){
            total += +group * 70;
        }else{
            total += +group * 100;
        }

        group = input.shift();
    }
    
    if(total >= singerPrice){
        console.log(`You have ${totalGuests} guests and ${total - singerPrice} leva left.`);
    }else{
        console.log(`You have ${totalGuests} guests and ${total} leva income, but no singer.`);
    }

}