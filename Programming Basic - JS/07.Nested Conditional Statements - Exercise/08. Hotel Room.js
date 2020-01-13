function hotelRoom([month, nights]) {
    nights = +nights;

    let studioPrice = 0;
    let apartmentPrice = 0;

    if (month == 'May' || month == 'October') {
        if (nights > 14) {
            studioPrice = (50 * 0.7) * nights;
            apartmentPrice = (65 * 0.9) * nights;
        } else if (nights > 7) {
            studioPrice = (50 * 0.95) * nights;
            apartmentPrice = 65 * nights;
        } else {
            studioPrice = 50 * nights;
            apartmentPrice = 65 * nights;
        }
    } else if (month == 'June' || month == 'September') {
        if (nights > 14) {
            studioPrice = (75.20 * 0.8) * nights;
            apartmentPrice = (68.70 * 0.9) * nights;
        } else {
            studioPrice = 75.20 * nights;
            apartmentPrice = 68.70 * nights;
        }
    } else {
        if (nights > 14) {
            studioPrice = 76 * nights;
            apartmentPrice = (77 * 0.9) * nights;
        } else {
            studioPrice = 76 * nights;
            apartmentPrice = 77 * nights;
        }
    }

    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.\nStudio: ${studioPrice.toFixed(2)} lv.
    `)
}