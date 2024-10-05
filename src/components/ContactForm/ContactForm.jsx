import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';

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

  const handleSubmit = (values, actions) => {
    onAdd({ ...values, id: nanoid() });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.wrapper}>
          <label>Name</label>
          <Field className={css.field} type="text" name="name" />
          <ErrorMessage
            name="name"
            component="p"
            className={css.errorMessage}
          />
        </div>

        <div className={css.wrapper}>
          <label>Number</label>
          <Field className={css.field} type="text" name="number" />
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
