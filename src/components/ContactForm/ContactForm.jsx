import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { MainTitle, Input, Button } from './ContactForm.styled';
import { nanoid } from 'nanoid';
import propTypes from 'prop-types';

export const ContactForm = props => {
  const initialValues = { name: '', number: '' };
  const yupContactForm = yup.object().shape({
    name: yup.string().required().min(3).max(20),
    number: yup
      .number()
      .min(5)
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .required('A phone number is required'),
  });
  const getValues = (val, { resetForm }) => {
    val.id = nanoid();
    props.newUserData(val);
    resetForm();
  };
  return (
    <>
      <MainTitle>Phonebook</MainTitle>
      <Formik
        onSubmit={getValues}
        initialValues={initialValues}
        validationSchema={yupContactForm}
      >
        <Form>
          <label htmlFor="name">
            Name
            <br />
            <Input type="text" name="name" placeholder="Name"></Input>
          </label>
          <ErrorMessage name="name" />
          <label htmlFor="number">
            <br />
            Number
            <br />
            <Input type="tel" name="number" placeholder="+111 11 11"></Input>
          </label>
          <ErrorMessage name="number" />
          <br />
          <Button type="submit">Add contact</Button>
        </Form>
      </Formik>
    </>
  );
};

ContactForm.propTypes = {
  onNewVal: propTypes.func,
};
