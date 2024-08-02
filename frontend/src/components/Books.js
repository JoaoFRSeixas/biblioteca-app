import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import HomeContainer from './containers/HomeContainer';
import GlassEffectContainer from './containers/GlassEffectContainer';

// Estilos
const BookListContainer = styled.div`
  padding: 20px;
`;

const SearchContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const BookTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const BookItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.8);
`;

const BookDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
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
  visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
  opacity: ${props => (props.isVisible ? '1' : '0')};
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
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchCategory, setSearchCategory] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [bookToDelete, setBookToDelete] = useState(null);
  const navigate = useNavigate();

  const fetchBooks = async () => {
    try {
      const response = await fetch('http://localhost:5000/books');
      const data = await response.json();
      setBooks(data);
      setFilteredBooks(data); // Inicialmente, todos os livros são exibidos
    } catch (error) {
      console.error('Erro ao buscar livros:', error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleEdit = (bookId) => {
    navigate(`/edit-book/${bookId}`);
  };

  const handleDelete = async () => {
    if (bookToDelete) {
      try {
        const response = await fetch(`http://localhost:5000/books/${bookToDelete}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          fetchBooks(); // Recarrega a lista de livros após a exclusão
          setShowModal(false);
          setBookToDelete(null); // Limpa o estado do ID do livro
        } else {
          throw new Error('Erro ao excluir livro');
        }
      } catch (error) {
        console.error('Erro ao excluir livro:', error);
      }
    }
  };

  const openDeleteModal = (bookId) => {
    setBookToDelete(bookId); // Atualiza o estado com o ID do livro a ser excluído
    setShowModal(true);
  };

  const closeDeleteModal = () => {
    setShowModal(false);
    setBookToDelete(null); // Limpa o estado do ID do livro
  };

  const handleSearch = async () => {
    if (searchCategory) {
      try {
        const response = await fetch(`http://localhost:5000/books/category/${searchCategory}`);
        const data = await response.json();
        setFilteredBooks(data);
      } catch (error) {
        console.error('Erro ao buscar livros por categoria:', error);
      }
    } else {
      setFilteredBooks(books); // Se a pesquisa estiver vazia, mostra todos os livros
    }
  };

  return (
    <HomeContainer>
      <GlassEffectContainer>
        <BookListContainer>
          <h1>Lista de Livros</h1>
          <SearchContainer>
            <input
              type="text"
              value={searchCategory}
              onChange={(e) => setSearchCategory(e.target.value)}
              placeholder="Pesquisar por categoria"
            />
            <StyledButton onClick={handleSearch}>Pesquisar</StyledButton>
            <HomeButton onClick={() => navigate('/')}>Home</HomeButton>
          </SearchContainer>
          <BookTable>
            {filteredBooks.map(book => (
              <BookItem key={book._id}>
                <BookDetails>
                  <div><strong>Id:</strong> {book.id}</div>
                  <div><strong>Nome:</strong> {book.name}</div>
                  <div><strong>Autor:</strong> {book.author}</div>
                  <div><strong>Categoria:</strong> {book.category}</div>
                  <div><strong>Estoque:</strong> {book.stock}</div>
                </BookDetails>
                <div>
                  <StyledButton onClick={() => handleEdit(book.id)}>Editar</StyledButton>
                  <StyledButton onClick={() => openDeleteModal(book.id)}>Excluir</StyledButton>
                </div>
              </BookItem>
            ))}
          </BookTable>
          <Modal isVisible={showModal}>
            <ModalContent>
              <h2>Confirmação</h2>
              <p>Você tem certeza que deseja excluir este livro?</p>
              <div>
                <StyledButton onClick={handleDelete}>Confirmar</StyledButton>
                <StyledButton onClick={closeDeleteModal}>Cancelar</StyledButton>
              </div>
            </ModalContent>
          </Modal>
        </BookListContainer>
      </GlassEffectContainer>
    </HomeContainer>
  );
};

export default BookList;
