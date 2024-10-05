import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import css from './ContactForm.module.css';

const ContactForm = ({ onAdd }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too short!')
      .max(50, 'Name must be less than 50 characters')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Too short!')
      .matches(
        /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
        'Invalid phone number format'
      )
      .required('Required'),
  });

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={onAdd}
    >
      <Form className={css.form}>
        <div className={css.wrapper}>
          <label htmlFor="nameId">Name</label>
          <Field className={css.field} type="text" name="name" id="nameId" />
          <ErrorMessage
            name="name"
            component="p"
            className={css.errorMessage}
          />
        </div>

        <div className={css.wrapper}>
          <label htmlFor="numberId">Number</label>
          <Field
            className={css.field}
            type="text"
            name="number"
            id="numberId"
          />
          <ErrorMessage
            name="number"
            component="p"
            className={css.errorMessage}
          />
        </div>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
