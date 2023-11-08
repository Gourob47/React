import React from 'react'
import Navbar from '../components/Navbar'
import Introduction from '../components/Introduction'
import CompanyHistory from '../components/CompanyHistory'
import TeamMembers from '../components/TeamMembers'
import ContactInformation from '../components/ContactInformation'

const About = () => {
  return (
    <>
     <Navbar/>
     <Introduction/>
     <TeamMembers/>
     <ContactInformation/>
     <CompanyHistory/>
    </>
  )
}

export default About