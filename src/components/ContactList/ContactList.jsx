import React from "react";
import PropTypes from 'prop-types';
import css from './ContactList.module.css'

const ContactList = ({ contacts, onRemove }) => (
  <div className={css.container}>
  <ul className={css.list}>
    {contacts.map((contact) => (
      <li className={css.item} key={contact.id}>
        {contact.name}: {contact.number}
        <button className={css.button} onClick={() => onRemove(contact.id)}>delete</button>
      </li>
    ))}
  </ul>
  </div>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onRemove: PropTypes.func,
};

export default ContactList;