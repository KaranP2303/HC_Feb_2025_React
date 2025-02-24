import React from 'react'

import "../Styles/Testimonial.css";
import DoubleQuoteSvg from '../Assets/DoubleQuotesSvg.svg';
import TestimonialPerson from '../Assets/TestimonialPerson.jpeg'

const testimonials = [
  {
    text: "The team at Beyond is incredibly responsive and knowledgeable. They quickly addressed our vulnerabilities and implemented robust security measures.",
    name: "Sarah Johnson",
    title: "Chief Information Officer",
    image: TestimonialPerson,
    icon: DoubleQuoteSvg,
  },
  {
    text: "Beyond provided us with outstanding security solutions. Their expertise and dedication have significantly improved our infrastructure’s safety.",
    name: "Michael Roberts",
    title: "Head of IT Security",
    image: TestimonialPerson,
    icon: DoubleQuoteSvg,
  },
  {
    text: "Working with Beyond has been a game changer. Their proactive approach to cybersecurity has given us peace of mind.",
    name: "Emily Carter",
    title: "CTO",
    image: TestimonialPerson,
    icon: DoubleQuoteSvg,
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <div className="testimonials-header">
        <h3>Testimonials</h3>
        <div className="header-line"></div>
      </div>

      <div className="testimonials-list">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-text">"{testimonial.text}"</p>
            <div className="testimonial-footer">
              <div className="user-info">
                <img src={testimonial.image} alt={testimonial.name} className="user-img" />
                <div className="user-details">
                  <p className="user-name">{testimonial.name}</p>
                  <p className="user-title">{testimonial.title}</p>
                </div>
              </div>
              <img src={testimonial.icon} alt="icon" className="testimonial-icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

