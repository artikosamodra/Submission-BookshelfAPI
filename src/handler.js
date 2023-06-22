const {nanoid} = require('nanoid');
const books = require('./books');

// Handler Add-Book
const addBookHandler = (request, h) => { };

// Handler GetAll-Book
const getAllBooksHandler = () => ({});

// Handler GetDetail-Book
const getBookByIdHandler = (request, h) => { };

// Handler EditData-Book
const editBookByIdHandler = (request, h) => { };

// Handler Delete-Book
const deleteBookByIdHandler = (request, h) => { };

module.exports = {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
};
