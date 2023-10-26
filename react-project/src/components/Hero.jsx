import React from 'react'
import '../assets/css/style.css';
const Hero = () => {
    let marks=50;
  return (
    <div className='ok'>

        <p>This is Hero  Page :: Short Hand If Else</p>
  
       {marks>=80?"Grade is A+": "Grade is not A+"}  

    </div>
  )
}

export default Hero