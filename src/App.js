import React from 'react';
import { useGlobalContext } from './context';
import Home from './pages/Home';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import About from './pages/About';
import Loader from './components/Loader';
import './App.css';

const App = () => {
  const { loading, view, setView } = useGlobalContext();

  return (
    <div className="app-container">
      {(view === 'home' || view === 'about') && (
        <nav>
          <button onClick={() => setView('home')}>Home</button>
          <button onClick={() => setView('about')}>About</button>
        </nav>
      )}
      {loading ? (
        <Loader />
      ) : (
        <>
          {view === 'home' && <Home />}
          {view === 'bookList' && <BookList />}
          {view === 'bookDetails' && <BookDetails />}
          {view === 'about' && <About />}
        </>
      )}
    </div>
  );
};

export default App;
