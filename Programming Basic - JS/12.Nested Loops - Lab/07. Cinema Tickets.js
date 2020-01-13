function cinemaTickets(input){
    let studentsCount = 0;
    let standardsCount = 0;
    let kidsCount = 0;
    while(true){
        let movieName = input.shift();
        let countSeats = 0;
        if(movieName == "Finish"){
            break;
        }

        let freeSpace = +input.shift();

        while(true){
            let ticketType = input.shift();

            if(ticketType == "End"){
                break;
            }
            countSeats++;

            if(ticketType == "standard"){
                standardsCount++;
            }else if(ticketType == "kid"){
                kidsCount++;
            }else{
                studentsCount++;
            }

            if(countSeats == freeSpace){
                break;
            }
        }

        let result = (freeSpace / countSeats) * 100;
        console.log(`${movieName} - ${result.toFixed(2)}% full.`);
    }
    let totalTickets = studentsCount + kidsCount + standardsCount
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((studentsCount / totalTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standardsCount / totalTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidsCount / totalTickets) * 100).toFixed(2)}% kids tickets.`);
}
cinemaTickets(["Taxi",
    "10",
    "standard",
  "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"
    ])