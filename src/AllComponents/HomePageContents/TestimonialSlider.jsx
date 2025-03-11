
import React, { useState, Fragment } from "react";
import '../Styles/HomePageStyles/TestimonilaSlider.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import TestimonialRightArrow from '../Assets/TestimonialRightArrow.svg';
import TestimonialLeftArrow from '../Assets/TestimonialLeftArrow.svg';

const testimonials = [
  [
    {
      photo: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
      name: "Rohan Mehta",
      rating: 4.2,
      content: "Absolutely loved the service! The team was professional and efficient.",
    },
    {
      photo: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
      name: "Sanya Verma",
      rating: 4.8,
      content: "Exceptional quality and attention to detail. Highly recommended!",
    },
  ],
  [
    {
      photo: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
      name: "Vikram Singh",
      rating: 5,
      content: "A fantastic experience! I will definitely be coming back.",
    },
    {
      photo: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_4.jpeg",
      name: "Neha Kapoor",
      rating: 3.9,
      content: "Great service, but I felt the response time could be improved.",
    },
  ],
  [
    {
      photo: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_5.jpeg",
      name: "Amit Sharma",
      rating: 4.5,
      content: "They exceeded my expectations! Everything was smooth and hassle-free.",
    },
    {
      photo: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_6.jpeg",
      name: "Priya Rao",
      rating: 4.1,
      content: "Loved the customer support, very friendly and helpful.",
    },
  ],
  [
    {
      photo: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_7.jpeg",
      name: "Rajesh Khanna",
      rating: 5,
      content: "Top-notch service, I couldn’t ask for more!",
    },
    {
      photo: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_8.jpeg",
      name: "Simran Choudhary",
      rating: 3.7,
      content: "Good overall, but there is some room for improvement in response time.",
    },
  ],
];


// const testimonials = [
//   [
//     {
//       photo: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
//       name: "Akshay Kumar 1",
//       rating: 3.5,
//       content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     },
//     {
//       photo: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
//       name: "Arjun Kapur 2",
//       rating: 4.5,
//       content: "Dicta saepe praesentium eaque nobis corrupti aut, quibusdam provident.",
//     },
//   ],
//   [
//     {
//       photo: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
//       name: "Raima Sen 3",
//       rating: 5,
//       content: "Quaerat, dicta saepe praesentium eaque nobis corrupti aut.",
//     },
//     {
//       photo: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
//       name: "Akshay Kumar 4",
//       rating: 3.5,
//       content: "Delectus magni tempore provident quibusdam provident consequatur.",
//     },
//   ],
//   [
//     {
//       photo: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
//       name: "Raima Sen 5",
//       rating: 5,
//       content: "Quaerat, dicta saepe praesentium eaque nobis corrupti aut.",
//     },
//     {
//       photo: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
//       name: "Akshay Kumar 6",
//       rating: 3.5,
//       content: "Delectus magni tempore provident quibusdam provident consequatur.",
//     },
//   ],
//   [
//     {
//       photo: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
//       name: "Raima Sen 7",
//       rating: 5,
//       content: "Quaerat, dicta saepe praesentium eaque nobis corrupti aut.",
//     },
//     {
//       photo: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
//       name: "Akshay Kumar 8",
//       rating: 3.5,
//       content: "Delectus magni tempore provident quibusdam provident consequatur.",
//     },
//   ],
// ];

// Star Rating Component
const Rating = ({ rating }) => (
  <div className='testimonial-card-box-rating'>
    {[...Array(5)].map((_, i) => (
      <Fragment key={i}>
        <FontAwesomeIcon
          icon={i < Math.floor(rating) ? faStar : rating > i && rating < i + 1 ? faStarHalfAlt : faStar}
          className={i < rating ? "star" : "star-inactive"}
        />
      </Fragment>
    ))}
  </div>
);

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

// Testimonial Card Component
const TestimonialCard = ({ item }) => (
  <div className="testimonial-card-section">
    <div className="testimonial-card-box">
      <img className='testimonial-card-box-img' src={item.photo} alt={item.name}  />
      <div className="testimonial-card-box-info">
        <h5 className="testimonial-card-box-name">{item.name}</h5>
        <Rating  rating={item.rating} />
        <p className="testimonial-card-box-feedback">{item.content}</p>
      </div>
    </div>
  </div>
);

TestimonialCard.propTypes = {
  item: PropTypes.object.isRequired,
};

// Main Testimonial Slider Component
export const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  // Handle Next & Previous Controls
  const handleNavigation = (direction) => {
    setIndex((prevIndex) =>
      direction === "prev"
        ? prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        : prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
      <div className="container-slider mx-auto px-4 text-center">
        <h2 className="testimonial-card-box-title">Testimonials</h2>

        {/* Testimonials Grid */}
        <div className=" slider-box">
          {testimonials[index].map((testimonial, i) => (
            <TestimonialCard key={i} item={testimonial} />
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="controll-buttons">
          
            <img src={TestimonialLeftArrow} alt="left arrow" className="testimonials-left-btn" onClick={() => handleNavigation("prev")}/>
            <img src={TestimonialRightArrow} alt="right arrow" className="testimonials-right-btn" onClick={() => handleNavigation("next")}/>
          
        </div>
      </div>
  );
};

export default TestimonialSlider;

