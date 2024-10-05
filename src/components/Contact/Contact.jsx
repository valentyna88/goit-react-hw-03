import { BsFillPersonFill } from 'react-icons/bs';
import { MdPhone } from 'react-icons/md';

import css from './Contact.module.css';

const Contact = ({ name, number, onDelete }) => {
  return (
    <li className={css.contactItem}>
      <div className={css.contactInfo}>
        <p>
          <BsFillPersonFill />
          {name}
        </p>
        <p>
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
