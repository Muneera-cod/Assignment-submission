class Book{
    constructor(title,author,availableCopies,price){
        this.title=title;
        this.author=author;
        this.availableCopies=availableCopies
        this.price=price

} 
printDetails(){
    console.log("Title: ",this.title)
    console.log("Author: ",this.author)
    console.log("Available copies: ",this.availableCopies)
    console.log("Price per book",this.price)
}

}
const book = new Book("The Great Gatsby", "F. Scott Fitzgerald", 5, 10.99);
book.printDetails()