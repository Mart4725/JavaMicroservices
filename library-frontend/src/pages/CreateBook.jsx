import React, { useState } from 'react';
import { createBook } from '../services/bookService';

export default function CreateBook() {
  const [book, setBook] = useState({ title: '', author: '', year: '' });

  const handleChange = (e) => setBook({ ...book, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await createBook({ ...book, year: parseInt(book.year) });
    alert('Book created');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" onChange={handleChange} required />
      <input name="author" placeholder="Author" onChange={handleChange} required />
      <input name="year" type="number" placeholder="Year" onChange={handleChange} required />
      <button type="submit">Create</button>
    </form>
  );
}
