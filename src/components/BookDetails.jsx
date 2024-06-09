import React from 'react';
import { useGlobalContext } from '../context';
import './BookDetails.css';

const BookDetails = () => {
  const { selectedBook, setView } = useGlobalContext();

  return (
    <div className="book-details">
      <button className="back-button" onClick={() => setView('bookList')}>
        Back to Book List
      </button>
      <div className="details-container">
        {selectedBook.cover_id && (
          <img
            src={`http://covers.openlibrary.org/b/id/${selectedBook.cover_id}-L.jpg`}
            alt={selectedBook.title}
          />
        )}
        <div className="book-info">
          <h2>{selectedBook.title}</h2>
          <h3>{selectedBook.author}</h3>
          <p>First Published: {selectedBook.first_publish_year}</p>
          <p>{selectedBook.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;