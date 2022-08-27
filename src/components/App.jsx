import React, { Component } from 'react';
import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { Box } from './Box';
import { GlobalStyle } from './GlobalStyle';
import FilerChange from './Filter/FilerChange';

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
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  submitForm = data => {
    const noRepitData = this.state.contacts.filter(
      item => item.name.toLowerCase() === data.name.toLowerCase()
    );
    noRepitData.length < 1
      ? this.setState(prevState => ({
          contacts: [...prevState.contacts, data],
        }))
      : alert(`${data.name} User alredy in contacts.`);
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id),
    }));
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  filteredList = contacts =>
    this.state.filter === ''
      ? contacts
      : contacts.filter(item => item.name.includes(this.state.filter));

  // filterContact = val => {
  //   this.setState({
  //     filter: val.filter,z
  //   });
  // };

  render() {
    const { contacts, filter } = this.state;
    const filteredContact = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <Box maxWidth="500px" bg="background" ml="auto" mr="auto" mt={6} p={5}>
        <ContactForm newUserData={this.submitForm} />
        <ContactList
          data={this.filteredList(contacts)}
          deleteContact={this.deleteContact}
        >
          {/* <Filter filterContact={this.filterContact} /> */}
          <FilerChange
            value={filter}
            onChange={this.handleChange}
            contactlist={filteredContact}
          />
        </ContactList>
        <GlobalStyle />
      </Box>
    );
  }
}
