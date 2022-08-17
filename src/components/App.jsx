import React, { Component } from 'react';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { Box } from './Box';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459 12 56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443 89 12' },
      { id: 'id-3', name: 'Eden Clements', number: '645 17 79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227 91 26' },
    ],
    filter: '',
  };

  SubmitForm = data => {
    const noRepitData = this.state.contacts.filter(
      item => item.name.toLowerCase() === data.name.toLowerCase()
    );
    noRepitData.length < 1
      ? this.setState(prevState => ({
          contacts: [...prevState.contacts, data],
        }))
      : alert(`${data.name} User alredy in contacts.`);
  };

  filterContact = val => {
    this.setState({
      filter: val.filter,
    });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id),
    }));
  };

  filteredList = contacts =>
    this.state.filter === ''
      ? contacts
      : contacts.filter(item => item.name.includes(this.state.filter));

  render() {
    const { contacts } = this.state;

    return (
      <Box maxWidth="400px" bg="background" ml="auto" mr="auto" mt={7} p={5}>
        <ContactForm newUserData={this.SubmitForm} />
        <ContactList
          data={this.filteredList(contacts)}
          deleteContact={this.deleteContact}
        >
          <Filter filterContact={this.filterContact} />
        </ContactList>
        <GlobalStyle />
      </Box>
    );
  }
}
