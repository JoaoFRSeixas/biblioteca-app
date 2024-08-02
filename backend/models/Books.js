export const getAllBooks = (db, callback) => {
  db.query('SELECT * FROM books', callback);
};
export const getBookById = (db, id, callback) => {
  db.query('SELECT * FROM books WHERE id = ?', [id], (err, row) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, row);
  });
};

export const getBooksByCategory = (db, category, callback) => {
  db.query('SELECT * FROM books WHERE category = ?', [category], callback);
};

export const addBook = (db, { name, author, category, stock }, callback) => {
  const query = 'INSERT INTO books (name, author, category, stock) VALUES (?, ?, ?, ?)';
  db.query(query, [name, author, category, stock], callback);
};

export const updateBook = (db, { id, name, author, category, stock }, callback) => {
  const query = 'UPDATE books SET name = ?, author = ?, category = ?, stock = ? WHERE id = ?';
  db.query(query, [name, author, category, stock, id], callback);
};

export const deleteBook = (db, id, callback) => {
  db.query('DELETE FROM books WHERE id = ?', [id], callback);
};
