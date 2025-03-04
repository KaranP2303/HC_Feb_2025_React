
import '../Styles/TestimonialsStyle.css';
// import TestimonialRightArrow from '../Assets/TestimonialRightArrow.svg';
// import TestimonialLeftArrow from '../Assets/TestimonialLeftArrow.svg';
import { TestimonialSlider } from './TestimonialSlider';


export const Testimonials = () => {
 

  return (
    // <Slide />
    <TestimonialSlider />
    // <ReactCardSlider slides={testimonialsData}/>
    // <div className="slider-container">
    //   <h2 className="slider-title">Testimonials</h2>
    //   <div ref={containerRef} className="slider-wrapper">
    //     {testimonialsData.map((testimonial) => (
    //       <div key={testimonial.id} className="card">
    //         <div className="card-image">
    //           <img src={testimonial.image} alt={testimonial.name} />
    //         </div>
    //         <div className="card-content">
    //           <h3>{testimonial.name}</h3>
    //           <p className="card-role">{testimonial.role}</p>
    //           <p className="card-feedback">{testimonial.feedback}</p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
      
    //   <div className="controll-buttons">
    //      <img src={TestimonialLeftArrow} className="testimonials-left-btn" alt="Testimonial Left Arrow" onClick={prevSlide} />
    //     <div className="dots">
    //       {testimonialsData.map((_, index) => (
    //         <span key={index} className={`dot ${index >= currentIndex && index < currentIndex + 2 ? "active" : ""}`}></span>
    //       ))}
    //     </div>
    //     <img src={TestimonialRightArrow} className="testimonials-right-btn" alt="Testimonial Right Arrow" onClick={nextSlide} />
    //   </div>
    // </div>
  );
};

