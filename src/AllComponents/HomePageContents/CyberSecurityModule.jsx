import { useState } from "react";
import { motion } from "framer-motion";
import "../Styles/HomePageStyles/CyberSecurityModulesStyle.css";
import RightSideArrowSvg from '../Assets/rightSideArrowSvg.svg';
import RightSideUpArrowSvg from '../Assets/RightSideUpArrowSvvg.svg';
// import { img } from "framer-motion/client";

const topics = [
  {
    id: 1,
    title: "Network Security",
    description: "Understanding firewalls, VPNs, and secure protocols.",
    items: [
      { id: 1, text: "Firewalls", image: "https://via.placeholder.com/150" },
      { id: 2, text: "VPNs", image: "https://via.placeholder.com/150" },
      { id: 3, text: "Secure Protocols", image: "https://via.placeholder.com/150" }
    ]
  },
  {
    id: 2,
    title: "Network Security",
    description: "Understanding firewalls, VPNs, and secure protocols.",
    items: [
      { id: 1, text: "Firewalls", image: "https://via.placeholder.com/150" },
      { id: 2, text: "VPNs", image: "https://via.placeholder.com/150" },
      { id: 3, text: "Secure Protocols", image: "https://via.placeholder.com/150" }
    ]
  },
  {
    id: 3,
    title: "Ethical Hacking",
    description: "Learn about penetration testing and vulnerability assessment.",
    items: [
      { id: 1, text: "Pen Testing", image: "https://via.placeholder.com/150" },
      { id: 2, text: "Exploits", image: "https://via.placeholder.com/150" },
      { id: 3, text: "Bug Bounty", image: "https://via.placeholder.com/150" }
    ]
  },
  {
    id: 4,
    title: "Network Security",
    description: "Understanding firewalls, VPNs, and secure protocols.",
    items: [
      { id: 1, text: "Firewalls", image: "https://via.placeholder.com/150" },
      { id: 2, text: "VPNs", image: "https://via.placeholder.com/150" },
      { id: 3, text: "Secure Protocols", image: "https://via.placeholder.com/150" }
    ]
  },
];

export const CyberSecurityModules = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="cyber-container">
      <h2 className="cyber-title">Cybersecurity Modules</h2>
      <div className="cyber-list">
        {topics.map((topic, index) => (
          <div key={topic.id} className="cyber-topic">
            <button
              className="cyber-topic-btn"
              onClick={() => setExpanded(expanded === topic.id ? null : topic.id)}
            >
              <span className="cyber-left">
                <span className="cyber-index">{index + 1}. </span>
                {topic.title}
              </span>
              {expanded === topic.id? 
              <img className="cyber-arrow" src={RightSideUpArrowSvg} alt="right side arrow"/> 
              :<img src={RightSideArrowSvg} alt="right side up arrow"/>}
            </button>
            {expanded === topic.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="cyber-dropdown"
              >
                <p className="cyber-description">{topic.description}</p>
                <div className="cyber-boxes">
                  {topic.items.map((item) => (
                    <div
                      key={item.id}
                      className="cyber-box"
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <div className="cyber-box-text">{item.text}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};




