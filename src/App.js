
import React, { useEffect, useState } from 'react';
import Bookscard from './Bookscard';
import './Style.css'

export default function App() {
  const [books, setBooks] = useState([]);
  const [searchBook, setSearchBook] = useState('');
  //fetching url
  const searchBookname = async () => {
  const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchBook}`);
  const data = await response.json();
  setBooks(data.items || []);
     
  };

  useEffect(() => {
    searchBookname('');
  }, []);

  return (
      // here i have created input box and serach button
    <div className='app'>
      <div className='main'>
        <h1>Virtual Bookstore App</h1>
        <input
          type='text'
          placeholder='Enter Book name'
          value={searchBook}
          onChange={(e) => setSearchBook(e.target.value)}
        />
        <button onClick={searchBookname}>Search</button>
      </div>
 
      {/* /// mapping */} 
      {books.length > 0 ? (
        <div className='container'>
          {books.map((book) => (
            <Bookscard key={book.id} book={book.volumeInfo} />
          ))}
        </div>
      ) : (
        <div className='empty'>
        
        </div>
      )}
    </div>
  );
}

