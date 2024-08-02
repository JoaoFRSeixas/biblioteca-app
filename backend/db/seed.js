import pool from './dbConfig.js';

const seedDatabase = async () => {
  try {
    const connection = await pool.getConnection();

    await connection.query('DELETE FROM books');

    const books = [
      { name: 'Livro 1', author: 'Autor 1', category: 'Categoria 1', stock: 10 },
      { name: 'Livro 2', author: 'Autor 2', category: 'Categoria 2', stock: 5 },
      { name: 'Livro 3', author: 'Autor 3', category: 'Categoria 3', stock: 7 },
    ];

    for (const book of books) {
      await connection.query('INSERT INTO books SET ?', book);
    }

    console.log('Banco de dados seedado com sucesso!');
    connection.release();
  } catch (error) {
    console.error('Erro ao seedar banco de dados:', error);
  }
};

seedDatabase();
