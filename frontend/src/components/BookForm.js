import React, { useState } from 'react';
import axios from 'axios';

const BookForm = ({ book, setBook }) => {
  const [name, setName] = useState(book?.name || '');
  const [author, setAuthor] = useState(book?.author || '');
  const [category, setCategory] = useState(book?.category || '');
  const [stock, setStock] = useState(book?.stock || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBook = { name, author, category, stock };
    if (book?._id) {
      await axios.put(`/books/${book._id}`, newBook);
    } else {
      await axios.post('/books', newBook);
    }
    setBook(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Autor" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <input type="text" placeholder="Categoria" value={category} onChange={(e) => setCategory(e.target.value)} />
      <input type="number" placeholder="Estoque" value={stock} onChange={(e) => setStock(e.target.value)} />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default BookForm;
