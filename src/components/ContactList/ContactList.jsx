import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({ contacts, ondeleteContact }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          onDelete={() => ondeleteContact(id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;
