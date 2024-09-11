class Book {
    constructor(title, availableCopies, pricePerBook) {
        this.title = title;
        this.availableCopies = availableCopies;
        this.pricePerBook = pricePerBook;
    }

    returnBooks(numberOfBooksReturned) {
        this.availableCopies += numberOfBooksReturned;
        const refundAmount = numberOfBooksReturned * this.pricePerBook;
        return refundAmount;
    }
}


const myBook = new Book("JavaScript Essentials", 10, 15);
const refund = myBook.returnBooks(3);
console.log("Refund Amount: ",refund); 
console.log("Available Copies: ",myBook.availableCopies); 
