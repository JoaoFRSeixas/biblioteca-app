📚 Biblioteca App
Uma aplicação simples para gerenciar um inventário de livros, incluindo a capacidade de adicionar, editar, remover e listar livros, além de realizar análises de estoque usando Python.

Esta aplicação é composta por três partes principais:

Backend: Um servidor Node.js com Express que expõe APIs REST para gerenciamento dos livros.
Frontend: Uma interface em React.js para interação com o inventário.
Análise: Um script Python para realizar análises de estoque dos livros.

Funcionalidades
- Adicionar novos livros ao inventário.
- Editar informações de livros existentes.
- Remover livros do inventário.
- Listar todos os livros.
- Filtrar livros por categoria.
- Analisar estoque e gerar relatórios.

Tecnologias Utilizadas

Backend: Node.js, Express, MySQL
Frontend: React.js, Axios
Análise: Python, Pandas

Configuração do Ambiente
Requisitos
Node.js e npm
Python 3 e pip
MySQL

Execução do Projeto
Backend
Instalar dependências:
cd backend
npm install

Configurar conexão com MySQL:

Adicione sua string de conexão MySQL em backend/server.js.

Rodar o servidor:

npm start
Frontend
Instalar dependências:

cd frontend
npm install

Rodar a aplicação:

npm start

Análise com Python
Instalar dependências:
pip install requests pandas
Rodar o script de análise:

python analysis/analysis.py


Backend: Configuração do servidor e rotas em Node.js.
Frontend: Componentes React.js para gerenciamento dos livros.
Python: Script para análise e geração de relatório.
Instruções

Configuração e Execução Local: Siga as instruções nas seções de backend, frontend e análise para rodar a aplicação localmente.

Configuração do Banco de Dados MySQL
Para configurar o banco de dados MySQL necessário para rodar a aplicação, siga estes passos:

Acesse o MySQL:

Abra o terminal e execute o comando para acessar o MySQL com o usuário root:

bash
Copiar código
mysql -u root -p
Insira a senha do usuário root quando solicitado.

Crie o Banco de Dados e Usuário:

No prompt do MySQL, execute os seguintes comandos para criar o banco de dados e o usuário:

sql
Copiar código
CREATE DATABASE my_database;
CREATE USER 'my_user'@'localhost' IDENTIFIED BY 'my_password';
GRANT ALL PRIVILEGES ON my_database.* TO 'my_user'@'localhost';
FLUSH PRIVILEGES;
my_database é o nome do banco de dados.
my_user é o nome do usuário.
my_password é a senha do usuário.
Conecte-se ao Banco de Dados:

Teste a conexão ao banco de dados com o usuário criado:

bash
Copiar código
mysql -u my_user -p my_database
Insira a senha my_password quando solicitado.