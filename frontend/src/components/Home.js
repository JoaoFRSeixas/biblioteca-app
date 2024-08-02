import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('https://cdn.pixabay.com/photo/2022/08/24/15/42/library-7408106_1280.jpg');
  background-size: cover;
  background-position: center;
  
`;

const GlassEffectContainer = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(70px);
  padding: 30px;
  text-align: center;
  max-width: 500px;
`;

const Title = styled.h1`
  color: #333;
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2em;
  color: #0a0c17;
`;

const Highlight = styled.span`
  color: #CD90FF;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
  justify-content: center;
`;

const Button = styled(Link)`
  padding: 10px 20px;
  font-size: 1.2em;
  background-color: #CD90FF;
  color: white;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;

  &:hover {
    background-color: #b57fe8;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <GlassEffectContainer>
        <Title>Biblioteca - Home</Title>
        <Description>
          Bem-vindo à <Highlight>Biblioteca!</Highlight> Gerencie seus livros de forma fácil e eficiente.
        </Description>
        <ButtonContainer>
          <Button to="/add-book">Criar Novo Livro</Button>
          <Button to="/books">Ver Biblioteca</Button>
        </ButtonContainer>
      </GlassEffectContainer>
    </HomeContainer>
  );
};

export default Home;
