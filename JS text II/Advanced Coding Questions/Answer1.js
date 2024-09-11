class Book{
    constructor(title, author, totalCopies, pricePerBook){
    this.title = title;
    this.author = author;
    this.totalCopies = totalCopies;
    this.pricePerBook = pricePerBook;
}
}

const myBook = new Book("The Great Gatsby", "F. Scott Fitzgerald", 100, 15.99);
console.log(myBook);
