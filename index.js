function Book(title, author, numPg, read) {
    this.title = title;
    this.author = author;
    this.numPg = numPg;
    this.read = read;
    this.info = function() {
        return (title + " by " + author + ", " + numPg + " pages, " + read);
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", "295", false);

console.log(theHobbit.info());