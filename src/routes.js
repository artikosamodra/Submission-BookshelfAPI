const {addBookHandler, getAllBooksHandler, getBookByIdHandler, editBookByIdHandler, deleteBookByIdHandler} = require('./handler');

const routes = [

    // Add-Book
    {
        method: 'POST',
        path: '/books',
        handler: addBookHandler, 
    },

    // GetAll-Books
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler,
    },

    },

    // GetDetail-Book
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getBookByIdHandler,
    },

    // EditData-Book
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: editBookByIdHandler,
    },

    // Delete-Book
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: deleteBookByIdHandler,
    },
];

module.exports = routes;