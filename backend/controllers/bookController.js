import createContact from '../services/hubspotService.js';

const addBook = async (req) => {
  try {
    const data = req;
    const contactData = data.author;
    await createContact(contactData);
    console.log('Livro adicionado e contato criado no HubSpot.');
  } catch (error) {
    console.error('Erro ao adicionar livro e criar contato no HubSpot.', error);
  }
};

export default addBook;
