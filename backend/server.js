import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import db from './db/db.js';
import bookRoutes from './routes/books.js';
import inventoryService from './services/inventoryService.js';
import pool from './db/dbConfig.js';
const app = express();
app.set('db', db);

const allowedOrigins = ['http://localhost:3000', 'localhost:3000', 'http://localhost:3000/add-book', process.env.REACT_APP_API_URL];
const corsOptions = {
  origin: allowedOrigins,
};

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use('/books', bookRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'Backend is up and running!' });
});


app.get('/analyze-inventory', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM books');
    const analysisResult = await inventoryService(rows);
    res.json(analysisResult);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao realizar análise de inventário' });
  }
});