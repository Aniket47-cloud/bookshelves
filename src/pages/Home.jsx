import React from 'react';
import { useGlobalContext } from '../context';
import SearchForm from '../components/SearchForm';
import './Home.css'
const Home = () => {
  const { setView } = useGlobalContext();

  return (
    <div>
      <h1>Home</h1>
      <SearchForm />
      <button onClick={() => setView('about')}>About</button>
      <button onClick={() => setView('bookList')}>View Books</button>
    </div>
  );
};

export default Home;