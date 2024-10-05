import css from './App.module.css';

import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';

import contactsData from '../../contacts.json';
import { useState } from 'react';

function App() {
  const [contacts, setContacts] = useState(contactsData);
  const [searchContact, setSearchContact] = useState('');

  const handleSearchChange = value => {
    setSearchContact(value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchContact.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox
        searchValue={searchContact}
        onSearchChange={handleSearchChange}
      />
      <ContactList contacts={filteredContacts} />
    </div>
  );
}

export default App;
