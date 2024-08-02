import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import db from './db.js'; // Importa a conexão com o banco de dados
import bookRoutes from './routes/books.js';

const app = express();

// Configura o banco de dados no aplicativo
app.set('db', db);

// Seus domínios permitidos devem estar aqui
const allowedOrigins = ['http://localhost:3000', 'localhost:3000', 'http://localhost:3000/add-book', process.env.REACT_APP_API_URL];
const corsOptions = {
  origin: allowedOrigins,
};

// Middlewares
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use('/books', bookRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Rota de verificação
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'Backend is up and running!' });
});
