
import React, { useState, Fragment } from "react";
import '../Styles/TestimonilaSlider.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";


const testimonials = [
  [
    {
      photo: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
      name: "Akshay Kumar",
      rating: 3.5,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      photo: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
      name: "Arjun Kapur",
      rating: 4.5,
      content: "Dicta saepe praesentium eaque nobis corrupti aut, quibusdam provident.",
    },
  ],
  [
    {
      photo: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
      name: "Raima Sen",
      rating: 5,
      content: "Quaerat, dicta saepe praesentium eaque nobis corrupti aut.",
    },
    {
      photo: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
      name: "Akshay Kumar",
      rating: 3.5,
      content: "Delectus magni tempore provident quibusdam provident consequatur.",
    },
  ],
];

// Star Rating Component
const Rating = ({ rating }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <Fragment key={i}>
        <FontAwesomeIcon
          icon={i < Math.floor(rating) ? faStar : rating > i && rating < i + 1 ? faStarHalfAlt : faStar}
          className={i < rating ? "text-yellow-500 text-lg" : "text-gray-300 text-lg"}
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
  <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 transition hover:-translate-y-1">
    <div className="testimonial-card-box">
      <img className='testimonial-card-box-img' src={item.photo} alt={item.name}  />
      <div className="testimonial-card-box-info">
        <h5 className="">{item.name}</h5>
        <Rating rating={item.rating} />
        <p className="">{item.content}</p>
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
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Testimonials</h2>

        {/* Testimonials Grid */}
        <div className=" slider-box">
          {testimonials[index].map((testimonial, i) => (
            <TestimonialCard key={i} item={testimonial} />
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center mt-10">
          <button
            className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full shadow-md mx-2"
            onClick={() => handleNavigation("prev")}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button
            className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full shadow-md mx-2"
            onClick={() => handleNavigation("next")}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
  );
};

export default TestimonialSlider;

