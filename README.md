📚 Biblioteca App
Uma aplicação simples para gerenciar um inventário de livros, incluindo a capacidade de adicionar, editar, remover e listar livros, além de realizar análises de estoque usando Python.

Índice
Visão Geral
Funcionalidades
Tecnologias Utilizadas
Configuração do Ambiente
Execução do Projeto
Deploy no GCP App Engine
Documentação
Visão Geral
Esta aplicação é composta por três partes principais:

Backend: Um servidor Node.js com Express que expõe APIs REST para gerenciamento dos livros.
Frontend: Uma interface em React.js para interação com o inventário.
Análise: Um script Python para realizar análises de estoque dos livros.
Funcionalidades
Adicionar novos livros ao inventário.
Editar informações de livros existentes.
Remover livros do inventário.
Listar todos os livros.
Filtrar livros por categoria.
Analisar estoque e gerar relatórios.
Tecnologias Utilizadas
Backend: Node.js, Express, MongoDB
Frontend: React.js, Axios
Análise: Python, Pandas
Configuração do Ambiente
Requisitos
Node.js e npm
Python 3 e pip
MongoDB
Estrutura de Pastas
plaintext
Copiar código
/biblioteca-app
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── server.js
│   ├── package.json
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── App.js
│   │   ├── index.js
│   └── package.json
├── analysis
│   └── analysis.py
└── README.md
Execução do Projeto
Backend
Instalar dependências:

bash
Copiar código
cd backend
npm install
Configurar conexão com MongoDB:
Adicione sua string de conexão MongoDB em backend/server.js.

Rodar o servidor:

bash
Copiar código
npm start
Frontend
Instalar dependências:

bash
Copiar código
cd frontend
npm install
Rodar a aplicação:

bash
Copiar código
npm start
Análise com Python
Instalar dependências:

bash
Copiar código
pip install requests pandas
Rodar o script de análise:

bash
Copiar código
python analysis/analysis.py
Deploy no GCP App Engine
Configuração
Criar os arquivos de configuração:
backend/app.yaml:

yaml
Copiar código
runtime: nodejs14

handlers:
  - url: /.*
    script: auto
frontend/app.yaml:

yaml
Copiar código
runtime: static

handlers:
  - url: /
    static_files: build/index.html
    upload: build/index.html

  - url: /static
    static_dir: build/static

  - url: /.*
    script: auto
Fazer o deploy:

Backend:

bash
Copiar código
cd backend
gcloud app deploy
Frontend:

bash
Copiar código
cd frontend
npm run build
gcloud app deploy
Documentação
Estrutura do Projeto
Backend: Configuração do servidor e rotas em Node.js.
Frontend: Componentes React.js para gerenciamento dos livros.
Python: Script para análise e geração de relatório.
Instruções
Configuração e Execução Local: Siga as instruções nas seções de backend, frontend e análise para rodar a aplicação localmente.
Deploy na Cloud: Utilize as instruções da seção de deploy para configurar e fazer o deploy no Google Cloud Platform.
Comandos Úteis
Backend:

bash
Copiar código
npm start
Frontend:

bash
Copiar código
npm start
Análise:

bash
Copiar código
python analysis/analysis.py


## Configuração do Banco de Dados MySQL

Para configurar o banco de dados MySQL necessário para rodar a aplicação, siga estes passos:

1. **Acesse o MySQL:**

   Abra o terminal e execute o comando para acessar o MySQL com o usuário `root`:

   ```bash
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
