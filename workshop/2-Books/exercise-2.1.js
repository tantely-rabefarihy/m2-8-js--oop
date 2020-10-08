// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//    - title (string)
//    - genre (string)
//    - author (string)
//    - isRead (boolean - whether or not you've read the book)
//
// Declare the books as book1, book2, book3, book4, book5
//
// If the book doesn't provide a value for `isRead`, it should default to
// `false`.
//
// Console.log them to verify that all is working.

class Book {
  constructor(title, genre, author, isRead) {
    (this.title = title),
      (this.genre = genre),
      (this.author = author),
      (this.isRead = isRead);
  }
}

let book1 = new Book("To Kill A Mockingbird", "drama", "Harper Lee", false);
let book2 = new Book(
  "Great Expectations",
  "historical",
  "Charles Dickens",
  true
);
let book3 = new Book("Lord of the Flies", "thriller", "William Golding", false);
let book4 = new Book("Wuthering Heights", "Emily Brontë", "thriller", true);
let book5 = new Book("The Institute", "Stephen King", "thriller", false);

console.log(book1, book2, book3, book4, book5);
