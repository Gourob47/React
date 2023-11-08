import React from 'react';

import '../assets/css/style.css'
function ContactList() {
  const contacts = [
    {
      name: 'John Doe',
      position: 'CEO',
      email: 'john@example.com',
      phone: '(123) 456-7890',
    },
    {
      name: 'Jane Smith',
      position: 'Sales Manager',
      email: 'jane@example.com',
      phone: '(987) 654-3210',
    },
  ];

  return (
    <div className="contact-list">
        <h2>Board of Trusties</h2>
      {contacts.map((contact, index) => {
       return(
        <>
              <div className="contact-card">
      <h3>{contact.name}</h3>
      <p>{contact.position}</p>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
    </div>
        </>
       )
       })}
    </div>
  );
}

export default ContactList;
