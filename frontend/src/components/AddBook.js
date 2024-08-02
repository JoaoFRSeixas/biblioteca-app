import React, { useState } from 'react';
import styled from 'styled-components';
import HomeContainer from './containers/HomeContainer';
import GlassEffectContainer from './containers/GlassEffectContainer';
import ButtonContainer from './containers/ButtonContainer';

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 1.2em;
  background-color: #CD90FF;
  color: white;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #b57fe8;
  }
`;

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  padding: '20px',
  borderRadius: '10px',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  background: 'rgba(255, 255, 255, 0.8)',
};

const inputStyle = {
  padding: '10px',
  border: '1px solid rgba(255, 255, 255, 0.5)',
  borderRadius: '5px',
  background: 'rgba(255, 255, 255, 0.9)',
};

const titleStyle = {
  marginBottom: '20px', // Adiciona espaço entre o título e o formulário
};

const messageStyle = {
  margin: '10px 0',
  padding: '10px',
  borderRadius: '5px',
  backgroundColor: '#d4edda', // Cor verde claro para sucesso
  color: '#155724', // Cor verde escuro
};

const errorMessageStyle = {
  ...messageStyle,
  backgroundColor: '#f8d7da', // Cor vermelha clara para erro
  color: '#721c24', // Cor vermelha escura
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '10px',
};

const apiUrl = process.env.REACT_APP_API_URL;

const AddBook = () => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !author || !category || !stock) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    setLoading(true);
    setMessage('');
    setError('');

    try {
      const response = await fetch(`http://localhost:5000/books`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, author, category, stock }),
      });

      if (!response.ok) {
        throw new Error('Erro ao adicionar o livro.');
      }

      const data = await response.json();
      setMessage('Livro adicionado com sucesso!'); // Mensagem de sucesso
    } catch (error) {
      setError(error.message); // Mensagem de erro
    } finally {
      setLoading(false);
    }
  };

  return (
    <HomeContainer>
      <GlassEffectContainer>
        <h1 style={titleStyle}>Adicionar Livro</h1>
        <form onSubmit={handleSubmit} style={formStyle}>
          <label>
            Título:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
            />
          </label>
          <label>
            Autor:
            <input
              type="text"
              name="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              style={inputStyle}
            />
          </label>
          <label>
            Categoria:
            <input
              type="text"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={inputStyle}
            />
          </label>
          <label>
            Estoque:
            <input
              type="number"
              name="stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              style={inputStyle}
            />
          </label>
          <ButtonContainer style={buttonContainerStyle}>
            <StyledButton type="submit">
              {loading ? 'Carregando...' : 'Adicionar'}
            </StyledButton>
            <StyledButton type="button" onClick={() => window.location.href = '/'}>Home</StyledButton>
          </ButtonContainer>
        </form>
        {message && <div style={messageStyle}>{message}</div>}
        {error && <div style={errorMessageStyle}>{error}</div>}
      </GlassEffectContainer>
    </HomeContainer>
  );
};

export default AddBook;
