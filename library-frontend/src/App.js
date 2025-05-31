import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/CreateBook';
import ReadBooks from './pages/ReadBooks';
import UpdateBook from './pages/UpdateBook';
import DeleteBook from './pages/DeleteBook';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateBook />} />
        <Route path="/read" element={<ReadBooks />} />
        <Route path="/update" element={<UpdateBook />} />
        <Route path="/delete" element={<DeleteBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
