import { Form, Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import React from 'react';
import propTypes from 'prop-types';
import { Input } from './Filter.styled';

const yupFilter = yup.object({
  filter: yup.string().min(1).max(20),
});

export const Filter = props => {
  const initialValues = {
    filter: '',
  };

  const getUserData = (val, { resetForm }) => {
    props.filterContact(val);
    resetForm();
  };

  return (
    <>
      <p>Find contacts by name</p>
      <Formik
        onSubmit={getUserData}
        initialValues={initialValues}
        validationSchema={yupFilter}
      >
        <Form>
          <Input type="text" name="filter" placeholder="Search Name" />
          <ErrorMessage name="filter" />
        </Form>
      </Formik>
    </>
  );
};

Filter.propTypes = {
  props: propTypes.func,
};
