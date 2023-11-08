import React from 'react'
import Navbar from '../components/Navbar'
import ServiceElement from '../components/ServieElement'
import ServiceDetails from '../components/ServiceDetails'
import ServiceRating from '../components/ServiceRating'
import ServiceFeature from '../components/ServiceFeature'

const Service = () => {
  return (
    <>
       <Navbar/>
       <ServiceElement/>
       <ServiceDetails/>
       <ServiceRating title="Rate our services" />
       <ServiceFeature icon={'Good'}/>
    </>
  )
}

export default Service