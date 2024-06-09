import React, { useState, useContext, useEffect, useCallback } from 'react';

const URL = "http://openlibrary.org/search.json?title=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("the lost world");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");
  const [view, setView] = useState('home');
  const [selectedBook, setSelectedBook] = useState(null);

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${URL}${searchTerm}`);
      const data = await response.json();
      const { docs } = data;

      if (docs) {
        const newBooks = docs.slice(0, 20).map((bookSingle) => {
          const { key, author_name, cover_i, edition_count, first_publish_year, title } = bookSingle;
          return {
            id: key,
            author: author_name,
            cover_id: cover_i,
            edition_count: edition_count,
            first_publish_year: first_publish_year,
            title: title
          }
        });
        setBooks(newBooks);
        setResultTitle(newBooks.length > 0 ? "Your Search Result" : "No Search Result Found!");
      } else {
        setBooks([]);
        setResultTitle("No Search Result Found!");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchBooks();
  }, [searchTerm, fetchBooks]);

  return (
    <AppContext.Provider value={{
      loading, books, setSearchTerm, resultTitle, setResultTitle,
      view, setView, selectedBook, setSelectedBook
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider };