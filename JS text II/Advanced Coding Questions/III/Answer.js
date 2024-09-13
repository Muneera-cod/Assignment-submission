const books = [
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', pages: 281, genre: 'Fiction' },
    { title: '1984', author: 'George Orwell', pages: 328, genre: 'Dystopian' },
    { title: 'Moby Dick', author: 'Herman Melville', pages: 720, genre: 'Adventure' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', pages: 180, genre: 'Classic' },
    { title: 'War and Peace', author: 'Leo Tolstoy', pages: 1225, genre: 'Historical' }
   ]


   //print title of all books
  books.map(book=>(
    console.log(book.title)))

  // Find the book with the highest number of pages.9

  
  const bookWithMostPages = books.reduce((max, book) => (book.pages > max.pages ? book : max));
  
  console.log("The book with the highest number of pages is ",bookWithMostPages.title," with ",bookWithMostPages.pages, "pages");

 //. Find the total number of pages of all books
 const totalNumbrofPages =books.reduce((total,noOfPages)=>total+noOfPages.pages,0)
 console.log("Toal number of pages of all books: ",totalNumbrofPages)

 //find all books in a specific genre (e.g., Fiction).
 books.filter((book)=>
  (book.genre==='Fiction'?console.log("Books in Fiction genre: ",book):
 (book.genre==='Classic'?console.log("Books in Classic genre",book):
 (book.genre==='Dystopian'?console.log("Books in Dystopian genre",book):
 (book.genre==='Historical'?console.log("Books in Historical",book):console.log("Books in Avendure",book))))))


 /// Print the names of authors who have written more than one book
 const authorCount={}
  books.forEach((book)=>{
     if(authorCount[book.author]){
        authorCount[book.author]++;
      }
      else{
        authorCount[book.author]=1;  } 
  
  })
  console.log(Object.keys(authorCount))
  Object.keys(authorCount).forEach((items)=>{
         authorCount[items]>1?console.log(items):null
  })


  ///Sort books based on the number of pages (descending order)
const sortedBooks = books.sort((a, b) => b.pages - a.pages);
sortedBooks.forEach((book) => {
  console.log(`${book.title}: ${book.pages} pages`);
});

//. Find the book with the smallest number of pages
const smallestnoOfBook=books.reduce((min,book)=>book.pages<min.pages?book:min)
console.log("Smallest number of book is ",smallestnoOfBook)

//. Find the book with the longest title.
function findBookWithLongestTitle(books) {
  return books.reduce((longestBook, Book) => {
    return Book.title.length > longestBook.title.length ? Book : longestBook;
  }, books[0]);  
}
const longestTitleBook = findBookWithLongestTitle(books);
console.log("Book with the longest title:", longestTitleBook.title);


//Find the book with the shortest title.

function findBookWithShortestTitle(books) {
  return books.reduce((shortestBook, Book) => {
    return Book.title.length <shortestBook.title.length ? Book : shortestBook;
  }, books[0]);  
}

const shortestTitleBook= findBookWithShortestTitle(books);
console.log("Book with the shortest title:", shortestTitleBook.title);


//Find the average number of pages of all books
const totalNofPages =books.reduce((total,noOfPages)=>total+noOfPages.pages,0)
console.log("Toal number of pages of all books: ",totalNofPages)
console.log("Average number of pages of all books: ",totalNofPages/(books.length))