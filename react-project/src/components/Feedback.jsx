import React from 'react';
// Import your CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood ,  faUtensils} from '@fortawesome/free-solid-svg-icons';



function FeedbackBox({ title, content, icon }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card feedback-box">
        <div className="card-body">
          <i className={icon}></i>
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{content}</p>
        </div>
      </div>
    </div>
  );
}

function Feedback() {
  return (
    <div className="container">
      <h4  className="text-left my-4  border-bottom">Feedback Boxes</h4>
      <div className="row">
        <FeedbackBox
          title="Great Service"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          icon="fa-solid fa-thumbs-up" // Replace with the actual icon class
        />
        <FeedbackBox
          title="Fast Delivery"
          content="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          icon="fa-solid fa-clock" // Replace with the actual icon class
        />
        <FeedbackBox
          title="Quality Food"
          content="Ut enim ad minim veniam, quis nostrud exercitation ullamco."
          icon="fa-solid fa-utensils" // Replace with the actual icon class
        />
      </div>
    </div>
  );
}

export default Feedback;

