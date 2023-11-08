import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import ImageSlider from '../components/ImageSlider'
import ServiceList from '../components/ServiceItem'
import ImageGallery from '../components/ImageGallery'
import Feedback from '../components/Feedback'

const Home = () => {
  return (
    <>
      <Navbar/>
      <ImageSlider />
      <ServiceList/>
      <ImageGallery/>
      <Feedback/>
    </>
  )
}

export default Home