import React, { useState, useEffect } from 'react';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Box } from './Box';
import { GlobalStyle } from './GlobalStyle';
import FilerChange from './Filter/FilerChange';

export function App() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('contacts')) || [
        { id: 'id-1', name: 'Rosie Simpson', number: '459 12 56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443 89 12' },
        { id: 'id-3', name: 'Eden Clements', number: '645 17 79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227 91 26' },
      ]
    );
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const submitForm = data => {
    const noRepitData = contacts.filter(
      item =>
        item.name.toLowerCase() === data.name.toLowerCase() ||
        item.number === data.number
    );
    noRepitData.length < 1
      ? setContacts([...contacts, data])
      : alert(`${data.name} User or number ${data.number} alredy in contacts `);
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(item => item.id !== id));
  };

  const handleChange = evt => {
    setFilter(evt.currentTarget.value);
  };

  const filteredList = contacts =>
    filter === ''
      ? contacts
      : contacts.filter(item => item.name.includes(filter));

  const filteredContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Box maxWidth="500px" bg="background" ml="auto" mr="auto" mt={6} p={5}>
      <ContactForm newUserData={submitForm} />
      <ContactList data={filteredList(contacts)} deleteContact={deleteContact}>
        <FilerChange
          value={filter}
          onChange={handleChange}
          contactlist={filteredContact}
        />
      </ContactList>
      <GlobalStyle />
    </Box>
  );
}
