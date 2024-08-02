import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'my_user',
  password: 'my_password',
  database: 'my_database'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    return;
  }
  console.log('Conectado ao MySQL com sucesso.');
});

export default connection;
