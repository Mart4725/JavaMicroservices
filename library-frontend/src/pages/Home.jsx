import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome Library</h1>
      <button onClick={() => navigate('/create')}>Add Book</button>
      <button onClick={() => navigate('/read')}>See Books</button>
      <button onClick={() => navigate('/update')}>Edit Book</button>
      <button onClick={() => navigate('/delete')}>Delete Book</button>
    </div>
  );
}
