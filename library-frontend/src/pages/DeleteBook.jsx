import React, { useState } from 'react';
import { deleteBook } from '../services/bookService';

export default function DeleteBook() {
  const [id, setId] = useState('');

  const handleDelete = async () => {
    await deleteBook(id);
    alert('Book deleted');
  };

  return (
    <div>
      <input placeholder="Book ID" value={id} onChange={(e) => setId(e.target.value)} required />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
