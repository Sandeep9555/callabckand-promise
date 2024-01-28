function arrangeBooks(books, callback) {
    const titles = books.map(book => book.title);
    titles.sort();

    callback(titles);
}

// Example usage:
const booksList = [
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 }
];

const logTitlesCallback = (titles) => console.log("Titles in alphabetical order:", titles);
arrangeBooks(booksList, logTitlesCallback);
