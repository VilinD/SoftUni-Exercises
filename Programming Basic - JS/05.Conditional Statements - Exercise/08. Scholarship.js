function scholarship([income,averageGrade,minIncome]){
    income = +income;
    averageGrade = +averageGrade;
    minIncome = +minIncome;

    let socialScholarship = 0;
    let excellentScholarship = 0;

    if(income <= minIncome && averageGrade >= 4.50){
        socialScholarship = parseInt(minIncome * 0.35);
    }
    if(averageGrade >= 5.50){
        excellentScholarship = parseInt(averageGrade * 25);
    }

    if(socialScholarship > excellentScholarship){
        console.log(`You get a Social scholarship ${socialScholarship} BGN`);
    }else if(excellentScholarship > socialScholarship){
        console.log(`You get a scholarship for excellent results ${excellentScholarship} BGN`);
    }else{
        console.log("You cannot get a scholarship!");

    }
}