import React from 'react'
import '../assets/css/style.css'
const TeamMembers = () => {
  return (
    <div className='TeamMembers'>
    <h2>Our Team</h2>
    <ul>
      <li>
        <img src="team_member1.jpg" alt="Team Member 1" />
        <h3>John Doe</h3>
        <p>Role: Developer</p>
        <p>Bio: John is an experienced developer with a passion for...</p>
      </li>
      <li>
        <img src="team_member2.jpg" alt="Team Member 2" />
        <h3>Jane Smith</h3>
        <p>Role: Designer</p>
        <p>Bio: Jane is a talented designer known for her creative...</p>
      </li>

      <li>
        <img src="team_member2.jpg" alt="Team Member 2" />
        <h3>Jane Poltu</h3>
        <p>Role: Designer</p>
        <p>Bio: Jane is a talented designer known for her creative...</p>
      </li>
      
    </ul>
  </div>
  )
}

export default TeamMembers