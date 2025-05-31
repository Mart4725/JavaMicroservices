import React, { useState } from 'react';
import { updateBook } from '../services/bookService';

export default function UpdateBook() {
  const [id, setId] = useState('');
  const [book, setBook] = useState({ title: '', author: '', year: '' });

  const handleChange = (e) => setBook({ ...book, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateBook(id, { ...book, year: parseInt(book.year) });
    alert('Book updated');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Book ID" value={id} onChange={(e) => setId(e.target.value)} required />
      <input name="title" placeholder="New Title" onChange={handleChange} required />
      <input name="author" placeholder="New Author" onChange={handleChange} required />
      <input name="year" type="number" placeholder="New Year" onChange={handleChange} required />
      <button type="submit">Update</button>
    </form>
  );
}
