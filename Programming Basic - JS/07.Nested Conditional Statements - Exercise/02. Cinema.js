function cinema([ticketType,a,b]){
    let tickets = {
        Premiere:12,
        Normal:7.50,
        Discount:5,
    }   

    let result = tickets[ticketType] * (+a * +b);

    console.log(result.toFixed(2));
}