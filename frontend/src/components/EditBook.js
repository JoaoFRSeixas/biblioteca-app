import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import HomeContainer from './containers/HomeContainer';
import GlassEffectContainer from './containers/GlassEffectContainer';

const apiUrl = process.env.REACT_APP_API_URL;

const EditBookContainer = styled.div`
  padding: 20px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.8);
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  background-color: #CD90FF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #b57fe8;
  }
`;

const HomeButton = styled(StyledButton)`
  background-color: #FF90CD;
  &:hover {
    background-color: #e87fb5;
  }
`;

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({
    name: '',
    author: '',
    category: '',
    stock: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`${apiUrl}/books/${id}`);
        const data = await response.json();
        setBook(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Erro ao buscar livro:', error);
      }
    };
    fetchBook();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/books/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
      });
      if (response.ok) {
        navigate('/books');
      } else {
        throw new Error('Erro ao atualizar livro');
      }
    } catch (error) {
      console.error('Erro ao atualizar livro:', error);
    }
  };

  return (
    <HomeContainer>
      <GlassEffectContainer>
        <EditBookContainer>
          <h1>Editar Livro</h1>
          {isLoading ? (
            <p>Carregando...</p>
          ) : (
            <FormContainer onSubmit={handleSubmit}>
              <FormField>
                <Label htmlFor="name">Título:</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={book.name}
                  onChange={handleChange}
                  placeholder="Título do livro"
                />
              </FormField>
              <FormField>
                <Label htmlFor="author">Autor:</Label>
                <Input
                  type="text"
                  id="author"
                  name="author"
                  value={book.author}
                  onChange={handleChange}
                  placeholder="Autor do livro"
                />
              </FormField>
              <FormField>
                <Label htmlFor="category">Categoria:</Label>
                <Input
                  type="text"
                  id="category"
                  name="category"
                  value={book.category}
                  onChange={handleChange}
                  placeholder="Categoria do livro"
                />
              </FormField>
              <FormField>
                <Label htmlFor="stock">Estoque:</Label>
                <Input
                  type="number"
                  id="stock"
                  name="stock"
                  value={book.stock}
                  onChange={handleChange}
                  placeholder="Estoque do livro"
                />
              </FormField>
              <StyledButton type="submit">Salvar</StyledButton>
              <HomeButton onClick={() => navigate('/')}>Home</HomeButton>
            </FormContainer>
          )}
        </EditBookContainer>
      </GlassEffectContainer>
    </HomeContainer>
  );
};

export default EditBook;
