import React from 'react';
import '../Styles/DashboardStyle/TrainingModuleStyle.css';
import exampleImg from '../Assets/TrainingModuleSampleImg.svg';

export const TrainingModule = () => {
    return (
        <div className="training-module-container">
          {/* Page Title */}
          <h1 className="training-module-page-title">Training Modules</h1>
    
          {/* Training Modules Grid */}
          <div className="training-grid">
            {trainingModulesData.map((module) => (
              <div key={module.id} className="training-card">
                {/* Image */}
                <img src={module.image} alt={module.courseName} className="training-image" />
    
                {/* Course Name */}
                <h2 className="course-name">{module.courseName}</h2>
    
                {/* Studio Name & Rating */}
                <div className="info-row">
                  <span className="studio-name">{module.studioName}</span>
                  <span className="rating">
                    ⭐  <span className="rating-count">({module.ratingCount})</span>
                  </span>
                </div>
    
                {/* Pricing */}
                <div className="pricing-row">
                  <span className="discounted-price">{module.discountedPrice}</span>
                  <span className="initial-price">{module.initialPrice}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}


const trainingModulesData = [
    {
      id: 1,
      image:exampleImg,
      courseName: "React Advanced",
      studioName: "Code Academy",
      rating: 4.5,
      ratingCount: "12k",
      discountedPrice: "$49.99",
      initialPrice: "$99.99",
    },
    {
      id: 2,
      image:exampleImg,
      courseName: "Spring Boot Essentials",
      studioName: "Java Hub",
      rating: 4.7,
      ratingCount: "15k",
      discountedPrice: "$39.99",
      initialPrice: "$79.99",
    },
    {
      id: 3,
      image:exampleImg,
      courseName: "Node.js Mastery",
      studioName: "Backend Pro",
      rating: 4.8,
      ratingCount: "10k",
      discountedPrice: "$29.99",
      initialPrice: "$59.99",
    },
    {
      id: 4,
      image:exampleImg,
      courseName: "UI/UX Design Basics",
      studioName: "Design Academy",
      rating: 4.6,
      ratingCount: "8k",
      discountedPrice: "$19.99",
      initialPrice: "$49.99",
    },
    {
      id: 5,
      image:exampleImg,
      courseName: "Data Science with Python",
      studioName: "AI Hub",
      rating: 4.9,
      ratingCount: "20k",
      discountedPrice: "$59.99",
      initialPrice: "$119.99",
    },
    {
      id: 6,
      image:exampleImg,
      courseName: "Full Stack Web Development",
      studioName: "Code Masters",
      rating: 4.8,
      ratingCount: "18k",
      discountedPrice: "$89.99",
      initialPrice: "$179.99",
    },
    {
      id: 7,
      image:exampleImg,
      courseName: "Cyber Security Basics",
      studioName: "Security Lab",
      rating: 4.7,
      ratingCount: "9k",
      discountedPrice: "$44.99",
      initialPrice: "$89.99",
    },
    {
      id: 8,
      image:exampleImg,
      courseName: "Machine Learning Mastery",
      studioName: "AI Academy",
      rating: 4.9,
      ratingCount: "25k",
      discountedPrice: "$79.99",
      initialPrice: "$159.99",
    },
    {
      id: 9,
      image:exampleImg,
      courseName: "Blockchain for Beginners",
      studioName: "Crypto World",
      rating: 4.5,
      ratingCount: "7k",
      discountedPrice: "$34.99",
      initialPrice: "$69.99",
    },
    {
      id: 10,
      image:exampleImg,
      courseName: "AWS Cloud Computing",
      studioName: "Cloud Experts",
      rating: 4.8,
      ratingCount: "16k",
      discountedPrice: "$69.99",
      initialPrice: "$139.99",
    },
    {
      id: 11,
      image:exampleImg,
      courseName: "Kubernetes Essentials",
      studioName: "DevOps Hub",
      rating: 4.7,
      ratingCount: "12k",
      discountedPrice: "$54.99",
      initialPrice: "$109.99",
    },
    {
      id: 12,
      image:exampleImg,
      courseName: "C++ Programming",
      studioName: "Code Warriors",
      rating: 4.6,
      ratingCount: "14k",
      discountedPrice: "$24.99",
      initialPrice: "$49.99",
    },
    {
      id: 13,
      image:exampleImg,
      courseName: "Flutter Mobile App Development",
      studioName: "Mobile Devs",
      rating: 4.9,
      ratingCount: "20k",
      discountedPrice: "$59.99",
      initialPrice: "$119.99",
    },
    {
      id: 14,
      image:exampleImg,
      courseName: "Django Web Development",
      studioName: "Python Lab",
      rating: 4.8,
      ratingCount: "11k",
      discountedPrice: "$49.99",
      initialPrice: "$99.99",
    },
    {
      id: 15,
      image:exampleImg,
      courseName: "SQL & Database Management",
      studioName: "DBA Experts",
      rating: 4.6,
      ratingCount: "10k",
      discountedPrice: "$29.99",
      initialPrice: "$59.99",
    },
    {
      id: 16,
      image:exampleImg,
      courseName: "Artificial Intelligence Basics",
      studioName: "AI Research Lab",
      rating: 4.8,
      ratingCount: "22k",
      discountedPrice: "$74.99",
      initialPrice: "$149.99",
    },
    {
      id: 17,
      image:exampleImg,
      courseName: "GoLang for Backend Development",
      studioName: "Backend Experts",
      rating: 4.7,
      ratingCount: "8k",
      discountedPrice: "$39.99",
      initialPrice: "$79.99",
    },
    {
      id: 18,
      image:exampleImg,
      courseName: "Game Development with Unity",
      studioName: "Game Studio",
      rating: 4.6,
      ratingCount: "9k",
      discountedPrice: "$49.99",
      initialPrice: "$99.99",
    },
    {
      id: 19,
      image:exampleImg,
      courseName: "Swift & iOS Development",
      studioName: "Mobile Coders",
      rating: 4.9,
      ratingCount: "15k",
      discountedPrice: "$69.99",
      initialPrice: "$139.99",
    },
    {
      id: 20,
      image:exampleImg,
      courseName: "Rust for System Programming",
      studioName: "Systems Lab",
      rating: 4.5,
      ratingCount: "6k",
      discountedPrice: "$34.99",
      initialPrice: "$69.99",
    },
  ];
  
  


