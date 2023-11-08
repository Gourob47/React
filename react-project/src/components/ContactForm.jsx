import React from 'react';
import '../assets/css/style.css'
function ContactForm() {
  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
