import React from 'react';
import '../Styles/HeaderAndFooterStyle.css';


const footerSections = [
  {
    title: "About us",
    links: ["About WebTech", "Our Team", "Mission & Values", "Careers", "Blogs"],
  },
  {
    title: "Services",
    links: [
      "Software Development",
      "IT Consulting",
      "Web Design",
      "Digital Transformation",
      "Project Management",
    ],
  },
  {
    title: "Solutions",
    links: [
      "Industry Solutions",
      "Custom Solutions",
      "Case Studies",
      "Client Success",
      "Testimonials",
    ],
  },
  {
    title: "Resources",
    links: ["Blog", "Whitepapers", "Webinars", "FAQs", "Knowledge Base"],
  },
  {
    title: "Contact us",
    links: ["Get in Touch", "Support", "Sales", "Locations", "Contact Form"],
  },
  {
    title: "Connect",
    links: ["Newsletter", "Social Media", "Events", "Partnership", "Community Involvement"],
  },
];

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-frame">
        <div className="footer-sections">
          {footerSections.map((section, index) => (
            <div className="footer-column" key={index}>
              <div className="footer-title">{section.title}</div>
              <div className="footer-links">
                {section.links.map((link, idx) => (
                  <div className="footer-link" key={idx}>{link}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2023-24 WebTech | All Rights Reserved</p>
      </div>
    </div>
  );
};


