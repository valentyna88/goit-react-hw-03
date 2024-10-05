import { MdPerson, MdPhone } from 'react-icons/md';

import css from './Contact.module.css';

const Contact = ({ name, number, onDelete }) => {
  return (
    <li className={css.contactItem}>
      <div>
        <p className={css.contactInfo}>
          <MdPerson />
          {name}
        </p>
        <p className={css.contactInfo}>
          <MdPhone />
          {number}
        </p>
      </div>
      <button type="button" className={css.btn} onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
