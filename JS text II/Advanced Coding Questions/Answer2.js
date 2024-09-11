function borrowBooks(availableCopies, booksRequested, costPerBook) {
    if (booksRequested > availableCopies) {
        return "Not enough copies available.";
    }
    
    availableCopies -= booksRequested;
    const totalCost = booksRequested * costPerBook;
    
    return {
        availableCopies: availableCopies,
        totalCost: totalCost
    };
}

const result = borrowBooks(10, 3, 150);
console.log(result); 
