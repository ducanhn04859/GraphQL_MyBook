/** @format */

// const { books, authors } = require("../data/static")
// const Author = require("../models/Author")
// const Book = require("../models/Book")

const resolvers = {
  //QUERY DATA
  Query: {
    // Cach viet 1
    // books: async (parent, args, context) => {
    //   return await context.mongoDataMethods.getAllBooks()
    // },

    //cach viet 2
    books: async (parent, args, { mongoDataMethods }) => {
      return await mongoDataMethods.getAllBooks()
    },

    book: async (parent, { id }, { mongoDataMethods }) =>
      await mongoDataMethods.getBookById(id),

    authors: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAllAuthors(),

    author: async (parent, { id }, { mongoDataMethods }) =>
      await mongoDataMethods.getAuthorById(id),
  },

  Book: {
    author: async ({ authorId }, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAuthorById(authorId),
  },

  Author: {
    books: async ({ id }, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAllBooks({ authorId: id }),
  },

  // MUTATION
  Mutation: {
    createAuthor: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.createAuthor(args),
    createBook: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.createBook(args),
  },
}

module.exports = resolvers
