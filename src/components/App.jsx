import React, { Component } from "react";
import ContactForm from './ContactForm/ContactForm.jsx'
import Filter from "./Filter/Filter.jsx";
import ContactList from "./ContactList/ContactList.jsx";
import { nanoid } from 'nanoid';
import css from './App.module.css'

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const storedContacts = localStorage.getItem('contacts')
    if (storedContacts) {
      this.setState({contacts: JSON.parse(storedContacts)})
    }
  }

  componentDidUpdate(prevProps, prevState ) {
    if(prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  handleSubmit = data => {
    const chosenName = this.state.contacts.find(
      element => element.name.toLowerCase() === data.name.toLowerCase()
    )
   if (chosenName) {
  alert (chosenName.name + ' is already in concats')
  } else {
    data.id = nanoid()
  this.setState(perv => ({contacts: [data, ...perv.contacts]}))
  }}

  changeFilter = event => {
    event.preventDefault()
    this.setState({filter: event.currentTarget.value})
  }

  getVisibleContact = () => {
    const {filter, contacts} = this.state
    const normalizedFilter = filter.toLowerCase()
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
  }
 removeContact = contactID => {
  this.setState(prevState => {
    return {
      contacts: prevState.contacts.filter(contact => contact.id !== contactID)
    }
  })
 }
 render() {
  const visibleContact = this.getVisibleContact()
  const filter = this.state.filter
  const contacts = this.state.contacts
  return (
    <div>
      <div>
        <h2 className={css.header}>Phonebook</h2>
      <ContactForm onSubmit={this.handleSubmit}/>
      </div>
      <div>
        <h2 className={css.header}>Contacts</h2>
      {contacts.length > 0 ? (
         <Filter value={filter} onChange={this.changeFilter} />
      ) : ( <span>Your phonebook is empty. Add first contact!</span>)}
      {contacts.length > 0 && (<ContactList contacts={visibleContact} onRemove={this.removeContact}/>)}
    
      </div>
    </div>
  )
  }
  
}


export default App