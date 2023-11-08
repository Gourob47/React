import React from 'react'
import Navbar from '../components/Navbar'
import ContactForm from '../components/ContactForm'
import Map from '../components/Map'
import ContactList from '../components/ContactList'
import ContactSocialLinks from '../components/ContactSocialLinks'

const Contact = () => {
  return (
    <>
        <Navbar/>
        <ContactForm/>
        <Map/>
        <ContactList/>
        <ContactSocialLinks/>
    </>
  )
}

export default Contact