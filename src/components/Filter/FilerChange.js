import React from 'react';
import propTypes from 'prop-types';
const FilerChange = props => {
  return (
    <>
      <p>Find contacts by name</p>
      <label>
        <input
          contactlist={props.contactslist}
          onChange={props.onChange}
          value={props.value}
          type="text"
          name="filter"
          placeholder="Search Name"
        />
      </label>
    </>
  );
};

export default FilerChange;

FilerChange.propTypes = {
  contactlist: propTypes.array.isRequired,
  onChange: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
};
