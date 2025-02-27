import { useState } from 'react';
import '../Styles/TestimonialsStyle.css';
import TestimonialRightArrow from '../Assets/TestimonialRightArrow.svg';
import TestimonialLeftArrow from '../Assets/TestimonialLeftArrow.svg';
import {motion, AnimatePresence } from 'framer-motion';

const testimonialsData = [
  {
    id: 1,
    name: "Jacob",
    role: "CEO - IT Solution Company",
    image: "https://c.animaapp.com/fcLLaRCR/img/rectangle-17-1@2x.png",
    feedback:
      "Lorem ipsum dolor sit amet consectetur. Bibendum quis fringilla odio maecenas magna eu ultrices aliquam egestas. Enim phasellus eu commodo nibh vitae amet elit. Ut natoque dui.",
  },
  {
    id: 2,
    name: "Sophia",
    role: "Founder - Tech Startup",
    image: "https://c.animaapp.com/fcLLaRCR/img/rectangle-17-1@2x.png",
    feedback:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 3,
    name: "Liam",
    role: "CTO - Software Agency",
    image: "https://c.animaapp.com/fcLLaRCR/img/rectangle-17-1@2x.png",
    feedback:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 4,
    name: "Emily",
    role: "Product Manager",
    image: "https://c.animaapp.com/fcLLaRCR/img/rectangle-17-1@2x.png",
    feedback:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    id: 5,
    name: "Daniel",
    role: "Marketing Director",
    image: "https://c.animaapp.com/fcLLaRCR/img/rectangle-17-1@2x.png",
    feedback:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    id: 6,
    name: "Olivia",
    role: "Freelance Designer",
    image: "https://c.animaapp.com/fcLLaRCR/img/rectangle-17-1@2x.png",
    feedback:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export  const Testimonials=()=> {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  const nextSlide = () => {
    if (index < testimonialsData.length - 2) {
      setDirection(1);
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setDirection(-1);
      setIndex(index - 1);
    }
  };

  return (
    <div className="testimonial-section">
      <div className="testimonial-title">
          Testimonials
        {/* <h3>Testimonials</h3> */}
      </div>
      <div className="testimonial-slider-container">
        <AnimatePresence mode="wait" custom={direction}>
          {testimonialsData.slice(index, index + 2).map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card"
              initial={{ x: direction === 1 ? "100%" : "-100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: direction === 1 ? "-100%" : "100%", opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Left Column - Image */}
              <div className="testimonial-image">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>

              {/* Right Column - Content */}
              <div className="testimonial-content">
                <h3>{testimonial.name}</h3>
                <p className="testimonial-role">{testimonial.role}</p>
                <p className="testimonial-feedback">"{testimonial.feedback}"</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="testimonials-control-buttons">
        <img src={TestimonialLeftArrow} className="testimonials-left-btn" alt="Testimonial Left Arrow" onClick={prevSlide} disabled={index === 0} />
        <img src={TestimonialRightArrow} className="testimonials-right-btn" alt="Testimonial Right Arrow" onClick={nextSlide} disabled={index >= testimonialsData.length - 2}/>
      </div>
    </div>
  );
}






