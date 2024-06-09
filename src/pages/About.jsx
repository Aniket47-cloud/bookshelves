import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About This Bookshelf</h1>
      <p>This application allows you to search for books using the Open Library API and view details about them.</p>
      <p>You can search for books by title and see a list of books with their covers, authors, and other details.</p>
    </div>
  );
};

export default About;