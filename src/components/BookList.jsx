import React from 'react';
import { useGlobalContext } from '../context';
import './BookList.css';

const BookList = () => {
  const { books, setView, setSelectedBook } = useGlobalContext();

  const handleBookClick = (book) => {
    setSelectedBook(book);
    setView('bookDetails');
  };

  return (
    <div className="book-list">
      <button className="back-button" onClick={() => setView('home')}>
        Back to Home
      </button>
      <div className="books-container">
        {books.map((book) => (
          <div key={book.id} className="book" onClick={() => handleBookClick(book)}>
            {book.cover_id && (
              <img
                src={`http://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`}
                alt={book.title}
              />
            )}
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;