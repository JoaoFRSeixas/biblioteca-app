import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
import Books from './components/Books'; // Certifique-se de ter criado este componente

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/edit-book/:id" element={<EditBook />} />
        <Route path="/books" element={<Books />} /> { }

      </Routes>
    </Router>
  );
};

export default App;
