
import React from 'react';

export default function Bookscard({ book }) {
  return (
    <div className='book'>
      <div>
        <img
          src={book.imageLinks?.thumbnail}
          alt={book.title}
        />
        <span>{book.type}</span>
        <h3>{book.title}</h3>
        <p>{book.authors?.join(', ')}</p>
      </div>
    </div>
  );
}
