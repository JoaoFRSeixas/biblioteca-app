import pool from './dbConfig.js';

const seedDatabase = async () => {
  try {
    const connection = await pool.getConnection();

    await connection.query('DELETE FROM books');

    const books = [
      { name: 'A Brief History of Time', author: 'Stephen Hawking', category: 'Science', stock: Math.floor(Math.random() * 21) },
      { name: '1984', author: 'George Orwell', category: 'Fiction', stock: Math.floor(Math.random() * 21) },
      { name: 'To Kill a Mockingbird', author: 'Harper Lee', category: 'Fiction', stock: Math.floor(Math.random() * 21) },
      { name: 'Pride and Prejudice', author: 'Jane Austen', category: 'Fiction', stock: Math.floor(Math.random() * 21) },
      { name: 'The Great Gatsby', author: 'F. Scott Fitzgerald', category: 'Fiction', stock: Math.floor(Math.random() * 21) },
      { name: 'Moby Dick', author: 'Herman Melville', category: 'Fiction', stock: Math.floor(Math.random() * 21) },
      { name: 'The Catcher in the Rye', author: 'J.D. Salinger', category: 'Fiction', stock: Math.floor(Math.random() * 21) },
      { name: 'The Hobbit', author: 'J.R.R. Tolkien', category: 'Fantasy', stock: Math.floor(Math.random() * 21) },
      { name: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', category: 'Fantasy', stock: Math.floor(Math.random() * 21) },
      { name: 'The Da Vinci Code', author: 'Dan Brown', category: 'Thriller', stock: Math.floor(Math.random() * 21) },
      { name: 'The Alchemist', author: 'Paulo Coelho', category: 'Fiction', stock: Math.floor(Math.random() * 21) },
      { name: 'The Lord of the Rings', author: 'J.R.R. Tolkien', category: 'Fantasy', stock: Math.floor(Math.random() * 21) },
      { name: 'The Chronicles of Narnia', author: 'C.S. Lewis', category: 'Fantasy', stock: Math.floor(Math.random() * 21) },
      { name: 'The Road', author: 'Cormac McCarthy', category: 'Fiction', stock: Math.floor(Math.random() * 21) },
      { name: 'Brave New World', author: 'Aldous Huxley', category: 'Science Fiction', stock: Math.floor(Math.random() * 21) },
      { name: 'The Hitchhiker\'s Guide to the Galaxy', author: 'Douglas Adams', category: 'Science Fiction', stock: Math.floor(Math.random() * 21) },
      { name: 'Sapiens: A Brief History of Humankind', author: 'Yuval Noah Harari', category: 'Non-Fiction', stock: Math.floor(Math.random() * 21) },
      { name: 'Educated', author: 'Tara Westover', category: 'Non-Fiction', stock: Math.floor(Math.random() * 21) },
      { name: 'Becoming', author: 'Michelle Obama', category: 'Non-Fiction', stock: Math.floor(Math.random() * 21) },
      { name: 'Where the Crawdads Sing', author: 'Delia Owens', category: 'Fiction', stock: Math.floor(Math.random() * 21) },
      { name: 'The Silent Patient', author: 'Alex Michaelides', category: 'Thriller', stock: Math.floor(Math.random() * 21) },
      { name: 'Little Fires Everywhere', author: 'Celeste Ng', category: 'Fiction', stock: Math.floor(Math.random() * 21) },
      { name: 'The Girl on the Train', author: 'Paula Hawkins', category: 'Thriller', stock: Math.floor(Math.random() * 21) },
      { name: 'Gone Girl', author: 'Gillian Flynn', category: 'Thriller', stock: Math.floor(Math.random() * 21) },
      { name: 'The Shining', author: 'Stephen King', category: 'Horror', stock: Math.floor(Math.random() * 21) },
      { name: 'It', author: 'Stephen King', category: 'Horror', stock: Math.floor(Math.random() * 21) },
      { name: 'Dracula', author: 'Bram Stoker', category: 'Horror', stock: Math.floor(Math.random() * 21) },
      { name: 'Frankenstein', author: 'Mary Shelley', category: 'Horror', stock: Math.floor(Math.random() * 21) },
      { name: 'Dune', author: 'Frank Herbert', category: 'Science Fiction', stock: Math.floor(Math.random() * 21) },
      { name: 'Neuromancer', author: 'William Gibson', category: 'Science Fiction', stock: Math.floor(Math.random() * 21) },
      { name: 'Foundation', author: 'Isaac Asimov', category: 'Science Fiction', stock: Math.floor(Math.random() * 21) },
      { name: 'Hyperion', author: 'Dan Simmons', category: 'Science Fiction', stock: Math.floor(Math.random() * 21) },
      { name: 'The Name of the Wind', author: 'Patrick Rothfuss', category: 'Fantasy', stock: Math.floor(Math.random() * 21) },
      { name: 'A Game of Thrones', author: 'George R.R. Martin', category: 'Fantasy', stock: Math.floor(Math.random() * 21) },
      { name: 'The Dark Tower', author: 'Stephen King', category: 'Fantasy', stock: Math.floor(Math.random() * 21) },
      { name: 'The Night Circus', author: 'Erin Morgenstern', category: 'Fantasy', stock: Math.floor(Math.random() * 21) },
      { name: 'The Art of War', author: 'Sun Tzu', category: 'Non-Fiction', stock: Math.floor(Math.random() * 21) },
      { name: 'The Prince', author: 'Niccolò Machiavelli', category: 'Non-Fiction', stock: Math.floor(Math.random() * 21) },
      { name: 'Outliers', author: 'Malcolm Gladwell', category: 'Non-Fiction', stock: Math.floor(Math.random() * 21) },
      { name: 'Blink', author: 'Malcolm Gladwell', category: 'Non-Fiction', stock: Math.floor(Math.random() * 21) },
      { name: 'The Lean Startup', author: 'Eric Ries', category: 'Non-Fiction', stock: Math.floor(Math.random() * 21) },
      { name: 'Start with Why', author: 'Simon Sinek', category: 'Non-Fiction', stock: Math.floor(Math.random() * 21) },
      { name: 'Atomic Habits', author: 'James Clear', category: 'Non-Fiction', stock: Math.floor(Math.random() * 21) }
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
