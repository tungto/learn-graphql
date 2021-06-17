const { books, authors } = require('../data/static');

const resolvers = {
  //QUERY
  Query: {
    books: () => books,
    book: (parent, args) => books.find((book) => book.id == args.id),
    authors: () => authors,
    author: (parent, args) => authors.find((author) => author.id == args.id),
  },

  Book: {
    author: (parent, args) => {
      console.log(parent);
      return authors.find((author) => author.id == parent.authorId);
    },
  },

  Author: {
    books: (parent, args) => {
      return books.filter((book) => book.authorId == parent.id);
    },
  },

  Mutation: {
    createAuthor: (parent, args) => args,
    createBook: (parent, args) => args,
  },
};

// MUTAION

module.exports = resolvers;
