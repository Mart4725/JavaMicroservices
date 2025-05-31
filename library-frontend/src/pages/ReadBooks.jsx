import React, { useEffect, useState } from 'react';
import { getAllBooks } from '../services/bookService';

export default function ReadBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAllBooks().then(res => setBooks(res.data));
  }, []);

  return (
    <div>
      <h2>Books List</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.title} - {book.author} ({book.year})</li>
        ))}
      </ul>
    </div>
  );
}
