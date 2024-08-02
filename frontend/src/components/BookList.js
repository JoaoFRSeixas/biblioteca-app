import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import HomeContainer from './containers/HomeContainer';
import GlassEffectContainer from './containers/GlassEffectContainer';
import ButtonContainer from './containers/ButtonContainer';

// Estilos
const BookListContainer = styled(HomeContainer)`
  padding: 20px;
`;

const BookItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.8);
  margin-bottom: 10px;
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

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  opacity: ${props => (props.show ? '1' : '0')};
  transition: opacity 0.3s;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [bookToDelete, setBookToDelete] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`${process.env.API_URL}/books`);
        if (!response.ok) {
          throw new Error('Erro ao buscar livros');
        }
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error('Erro ao buscar livros:', error);
      }
    };
    fetchBooks();
  }, []);

  const handleEdit = (bookId) => {
    history.push(`/edit-books/${bookId}`);
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`/books/${bookToDelete}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Erro ao excluir livro');
      }
      setBooks(books.filter(book => book._id !== bookToDelete));
      setShowModal(false);
    } catch (error) {
      console.error('Erro ao excluir livro:', error);
    }
  };

  const openDeleteModal = (bookId) => {
    setBookToDelete(bookId);
    setShowModal(true);
  };

  const closeDeleteModal = () => {
    setShowModal(false);
    setBookToDelete(null);
  };

  return (
    <BookListContainer>
      <GlassEffectContainer>
        <h1>Lista de Livros</h1>
        <ul>
          {books.map(book => (
            <BookItem key={book._id}>
              <span>{book.name} por {book.author}</span>
              <div>
                <StyledButton onClick={() => handleEdit(book._id)}>Editar</StyledButton>
                <StyledButton onClick={() => openDeleteModal(book._id)}>Excluir</StyledButton>
              </div>
            </BookItem>
          ))}
        </ul>
        <Modal show={showModal}>
          <ModalContent>
            <h2>Confirmação</h2>
            <p>Você tem certeza que deseja excluir este livro?</p>
            <ButtonContainer>
              <StyledButton onClick={handleDelete}>Confirmar</StyledButton>
              <StyledButton onClick={closeDeleteModal}>Cancelar</StyledButton>
            </ButtonContainer>
          </ModalContent>
        </Modal>
      </GlassEffectContainer>
    </BookListContainer>
  );
};

export default BookList;
