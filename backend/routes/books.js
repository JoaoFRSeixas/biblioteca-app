import express from 'express';
import * as bookModel from '../models/Books.js';

const router = express.Router();

// Middleware para conectar com o banco de dados
router.use((req, res, next) => {
  req.db = req.app.get('db');
  next();
});

// Obter todos os livros
router.get('/', (req, res) => {
  bookModel.getAllBooks(req.db, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Erro ao obter livros' });
      return;
    }
    res.status(200).json(results);
  });
});

// Obter um livro pelo ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  bookModel.getBookById(req.db, id, (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Erro ao obter o livro' });
      return;
    }
    if (!result) {
      res.status(404).json({ error: 'Livro não encontrado' });
      return;
    }
    res.status(200).json(result);
  });
});


// Obter livros por categoria
router.get('/category/:category', (req, res) => {
  const { category } = req.params;
  bookModel.getBooksByCategory(req.db, category, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Erro ao obter livros' });
      return;
    }
    res.status(200).json(results);
  });
});

// Adicionar um novo livro
router.post('/', (req, res) => {
  const { name, author, category, stock } = req.body;
  bookModel.addBook(req.db, { name, author, category, stock }, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Erro ao adicionar livro' });
      return;
    }
    res.status(201).json({ message: 'Livro adicionado com sucesso!', bookId: results.insertId });
  });
});

// Atualizar um livro
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, author, category, stock } = req.body;
  bookModel.updateBook(req.db, { id, name, author, category, stock }, (err) => {
    if (err) {
      res.status(500).json({ error: 'Erro ao atualizar livro' });
      return;
    }
    res.status(200).json({ message: 'Livro atualizado com sucesso!' });
  });
});

// Excluir um livro
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  bookModel.deleteBook(req.db, id, (err) => {
    if (err) {
      res.status(500).json({ error: 'Erro ao excluir livro' });
      return;
    }
    res.status(204).send();
  });
});

export default router;