# 📚 Biblioteca App

Uma aplicação simples para gerenciar um inventário de livros, incluindo a capacidade de adicionar, editar, remover e listar livros, além de realizar análises de estoque usando Python.

Esta aplicação é composta por três partes principais:

Backend: Um servidor Node.js com Express que expõe APIs REST para gerenciamento dos livros.
Frontend: Uma interface em React.js para interação com o inventário.
Análise: Um script Python para realizar análises de estoque dos livros.
Hubspot: Ao criar um livro, o Autor é criado como contato no Hubspot. 

Funcionalidades
- Adicionar novos livros ao inventário.
- Editar informações de livros existentes.
- Remover livros do inventário.
- Listar todos os livros.
- Filtrar livros por categoria.
- Analisar estoque e gerar relatórios.
- Criar contatos no Hubspot.

Tecnologias Utilizadas

- Backend: Node.js, Express, MySQL

- Frontend: React.js, Axios

- Análise: Python, Pandas

## Configuração do Ambiente ##
- Requisitos
- Node.js e npm
- Python 3 e pip
- MySQL

## Execução do Projeto ##
O jeito mais simples de rodar todas as dependencias ao mesmo tempo é executando o seguinte comando na raiz:

`bin/dev`

Para rodar cada dependencia separada:

### Backend ###
Instalar dependências:
`cd backend`

`npm install`

 ### Configurar conexão com MySQL: ###

 - Adicione sua string de conexão MySQL em backend/server.js.

  ### Rodar o servidor: ### 
` npm start `

### Frontend
- Instalar dependências:

`cd frontend `

`npm install`

### Rodar a aplicação: ###

`npm start`

### Análise com Python ###
Instalar dependências:

`pip install requests pandas`


Rodar o script de análise:

`python analysis/analysis.py`


Backend: Configuração do servidor e rotas em Node.js.
Frontend: Componentes React.js para gerenciamento dos livros.
Python: Script para análise e geração de relatório.


### Configuração do Banco de Dados MySQL ###
Para configurar o banco de dados MySQL necessário para rodar a aplicação, siga estes passos:

1. Acesse o MySQL:
.2 Abra o terminal e execute o comando para acessar o MySQL com o usuário root:
`mysql -u root -p`
3. Insira a senha do usuário root quando solicitado.
4. Crie o Banco de Dados e Usuário:
No prompt do MySQL, execute os seguintes comandos para criar o banco de dados e o usuário:

`CREATE DATABASE my_database;`

`CREATE USER 'my_user'@'localhost' IDENTIFIED BY 'my_password';`

`GRANT ALL PRIVILEGES ON my_database.* TO 'my_user'@'localhost';`

`FLUSH PRIVILEGES;`

- my_database é o nome do banco de dados.
- my_user é o nome do usuário.
- my_password é a senha do usuário.


Teste a conexão ao banco de dados com o usuário criado:

`mysql -u my_user -p my_database`

Insira a senha my_password quando solicitado.
