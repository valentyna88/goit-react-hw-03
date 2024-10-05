import css from './App.module.css';

import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';

import contactsData from '../../contacts.json';
import { useState } from 'react';

function App() {
  const [contacts, setContacts] = useState(contactsData);
  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
