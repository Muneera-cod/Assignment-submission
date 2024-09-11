const books = [
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', pages: 281, genre: 'Fiction' },
    { title: '1984', author: 'George Orwell', pages: 328, genre: 'Dystopian' },
    { title: 'Moby Dick', author: 'Herman Melville', pages: 720, genre: 'Adventure' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', pages: 180, genre: 'Classic' },
    { title: 'War and Peace', author: 'Leo Tolstoy', pages: 1225, genre: 'Historical' },
   ]


   //print title of all books
  books.map(book=>(
    console.log(book.title)))

  // Find the book with the highest number of pages.

  
  const bookWithMostPages = books.reduce((max, book) => (book.pages > max.pages ? book : max), books[0]);
  
  console.log("The book with the highest number of pages is ",bookWithMostPages.title," with ",bookWithMostPages.pages, "pages");

 