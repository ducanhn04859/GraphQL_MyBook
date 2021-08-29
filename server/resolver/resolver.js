const { books, authors } = require('../data/static');

const resolvers = {
    Query: {
        books: () => books,
        book: (parent,args) =>books.find(book => book.id.toString() === args.id),
        authors: () => authors,
        author: (parent, args) => authors.find(author =>author.id.toString() === args.id )
    },
    Book: {
        author: (parent, args) => {
            //console.log(parent)
            const author = authors.find((author) => author.id === parent.authorID);
            //console.log(author)
            return author
        }
    },
    Author: {
        books: (parent, args) => books.filter(book => book.authorID === parent.id )
    }
}

module.exports = resolvers