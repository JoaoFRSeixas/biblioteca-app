import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import db from './db/db.js';
import bookRoutes from './routes/books.js';

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
