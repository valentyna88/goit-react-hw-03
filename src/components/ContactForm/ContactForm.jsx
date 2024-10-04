import { Field, Form, Formik } from 'formik';
import css from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form className={css.form}>
        <label htmlFor="">Name</label>
        <Field className={css.field} type="text" name="name" id="" />

        <label htmlFor="">Number</label>
        <Field className={css.field} type="text" name="number" id="" />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
