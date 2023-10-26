import React from 'react'
import '../assets/css/style.css';
const About = () => {

    let city=['Dhaka','Sylhet','Khulna','Rajshahi', 'Rangpur'];
  return (
    <div className='ok'>

        <p>This is About Page :: how loops works</p>

        {
            city.map((item,index)=>{
                return(
                    <li key={index.toString()}>{item}</li>
                )
            })
        }

    </div>
  )
}

export default About