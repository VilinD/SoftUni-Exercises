function oldBooks(input){
    let wantedBook = input.shift();
    let booksToSeach = +input.shift();
    let count = 0;
    let book = input.shift();

    while(count != booksToSeach){
        if(book == wantedBook){
            return `You checked ${count} books and found it.`
        }
        count++;
        book = input.shift();
    }

    console.log("The book you search is not here!");
    console.log(`You checked ${booksToSeach} books.`);
}