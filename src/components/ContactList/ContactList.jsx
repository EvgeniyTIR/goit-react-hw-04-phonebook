import React from 'react';
import { Button } from 'style/style';

export const ContactList = ({ data, children, deleteContact }) => {
  return (
    <>
      <h2>Contacts</h2>
      {children}
      <ul onClick={deleteContact}>
        {data.map(item => (
          <li key={item.id}>
            {' '}
            {item.name}: {item.number}
            <Button
              type="button"
              id={item.number}
              onClick={() => deleteContact(item.id)}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
};
