import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { Button } from 'style/style';
import s from './FormikContactForm.module.css';
import propTypes from 'prop-types';

export const FormikContactForm = props => {
  const initialValues = { name: '', number: '' };
  const shemaContactsForm = yup.object().shape({
    name: yup.string().required().min(2).max(16),
    number: yup.string().max(15).required().min(10),
  });
  const getValues = (values, { resetForm }) => {
    values.id = nanoid();
    props.onNewVal(values);
    resetForm();
  };
  return (
    <>
      <h1>Phonebook</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={getValues}
        validationSchema={shemaContactsForm}
      >
        <Form>
          <label htmlFor="Name" className={s.labelFormik}>
            Name
            <Field
              className={s.fieldFormik}
              type="text"
              name="name"
              id="contactInListName"
            ></Field>
          </label>
          <ErrorMessage name="name" />
          <label htmlFor="Number" className={s.labelFormik}>
            Number
            <Field
              className={s.fieldFormik}
              type="tel"
              name="number"
              id="numberInListName"
              placeholder=""
            ></Field>
          </label>
          <ErrorMessage name="number" />
          <Button type="submit">Add contact</Button>
        </Form>
      </Formik>
    </>
  );
};

FormikContactForm.propTypes = {
  onNewVal: propTypes.func,
};
