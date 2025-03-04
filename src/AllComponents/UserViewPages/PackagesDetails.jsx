
// import '../Styles/PackagesDetailsStyle.css';
// import BenefitTickSvg from '../Assets/BenefitsTickSvg.svg';
// import React from "react";

// const packagesData = [
//   { 
//     name: "Enterprise Plan", 
//     price: "3599 Dhs", 
//     duration: "/month",
//     benefits: ["Unlimited access", "Priority support", "Advanced analytics", "Custom branding", "Multi-user support", "24/7 support", "Dedicated manager"]
//   },
//   { 
//     name: "Business Plan", 
//     price: "2599 Dhs", 
//     duration: "/month",
//     benefits: ["Access to analytics", "Email support", "Standard branding", "3 user accounts", "Basic reports"]
//   },
//   { 
//     name: "Starter Plan", 
//     price: "1599 Dhs", 
//     duration: "/month",
//     benefits: ["Basic access", "Community support", "Limited analytics"]
//   }
// ];

// const PackageCard = ({ name, price, duration, benefits }) => (
//   <div className="packages-details-column">
//     <div className="packages-details-column-card-view">
//       <span className="packages-details-column-card-text">{name}</span>
//       <div className="packages-details-column-card-row-view">
//         <span className="packages-details-column-card-text2">{price}</span>
//         <span className="packages-details-column-card-text3">{duration}</span>
//       </div>
//       <div className="packages-details-column-card-column">
//         {benefits.map((benefit, index) => (
//           <div className="package-benefits-data" key={index}>
//             <img src={BenefitTickSvg} alt="Benefit" />
//             <span>{benefit}</span>
//           </div>
//         ))}
//       </div>
//       <button className="packages-details-column-card-button" onClick={() => alert("Pressed!")}>Subscribe Now</button>
//     </div>
//   </div>
// );

// export const PackagesDetails = () => {
//   return (
//     <div className="packages-details-content-box">
//       <div className="packages-details-first-row">
//         <h1 className="packages-details-title">Packages</h1>
//         <p className="packages-details-subtitle">Select a package to optimize your influencer marketing experience</p>
//         <div className="packages-details-toggle-container">
//           <span className="packages-details-toggle-label">Monthly</span>
//           <label className="packages-details-toggle-switch">
//             <input type="checkbox" className="packages-details-toggle-input" />
//             <div className="packages-details-toggle-slider"></div>
//           </label>
//           <span className="toggle-label">Yearly</span>
//         </div>
//       </div>
//       <div className="packages-details-second-row">
//         {packagesData.map((pkg, index) => (
//           <PackageCard key={index} name={pkg.name} price={pkg.price} duration={pkg.duration} benefits={pkg.benefits} />
//         ))}
//       </div>
//     </div>
//   );
// };



import '../Styles/PackagesDetailsStyle.css';
import BenefitTickSvg from '../Assets/BenefitsTickSvg.svg';
import React, { useState } from "react";

const packagesData = {
  monthly: [
    { 
      name: "Enterprise Plan", 
      price: "3599 Dhs", 
      duration: "/month",
      benefits: ["Unlimited access", "Priority support", "Advanced analytics", "Custom branding", "Multi-user support", "24/7 support", "Dedicated manager"]
    },
    { 
      name: "Business Plan", 
      price: "2599 Dhs", 
      duration: "/month",
      benefits: ["Access to analytics", "Email support", "Standard branding", "3 user accounts", "Basic reports", "24/7 support", "Dedicated manager"]
    },
    { 
      name: "Starter Plan", 
      price: "1599 Dhs", 
      duration: "/month",
      benefits: ["Basic access", "Community support", "Limited analytics","Advanced analytics", "Custom branding", "Multi-user support","kuj to milega hi"]
    }
  ],
  yearly: [
    { 
      name: "Enterprise Plan", 
      price: "39999 Dhs", 
      duration: "/year",
      benefits: ["Unlimited access", "Priority support", "Advanced analytics", "Custom branding", "Multi-user support", "24/7 support", "Dedicated manager"]
    },
    { 
      name: "Business Plan", 
      price: "28999 Dhs", 
      duration: "/year",
      benefits: ["Access to analytics", "Email support", "Standard branding", "3 user accounts", "Basic reports", "Custom branding", "Multi-user support"]
    },
    { 
      name: "Starter Plan", 
      price: "17999 Dhs", 
      duration: "/year",
      benefits: ["Basic access", "Community support", "Limited analytics", "Custom branding", "Multi-user support", "Custom branding", "Multi-user support"]
    }
  ]
};

const PackageCard = ({ name, price, duration, benefits }) => (
  <div className="packages-details-column">
    <div className="packages-details-column-card-view">
      <span className="packages-details-column-card-text">{name}</span>
      <div className="packages-details-column-card-row-view">
        <span className="packages-details-column-card-text2">{price}</span>
        <span className="packages-details-column-card-text3">{duration}</span>
      </div>
      <div className="packages-details-column-card-column">
        {benefits.map((benefit, index) => (
          <div className="package-benefits-data" key={index}>
            <img src={BenefitTickSvg} alt="Benefit" />
            <span>{benefit}</span>
          </div>
        ))}
      </div>
      <button className="packages-details-column-card-button" onClick={() => alert("Pressed!")}>Subscribe Now</button>
    </div>
  </div>
);

export const PackagesDetails = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="packages-details-content-box">
      <div className="packages-details-first-row">
        <h1 className="packages-details-title">Packages</h1>
        <p className="packages-details-subtitle">Select a package to optimize your influencer marketing experience</p>
        <div className="packages-details-toggle-container">
          <span className="packages-details-toggle-label">Monthly</span>
          <label className="packages-details-toggle-switch">
            <input 
              type="checkbox" 
              className="packages-details-toggle-input" 
              checked={isYearly} 
              onChange={() => setIsYearly(!isYearly)} 
            />
            <div className="packages-details-toggle-slider"></div>
          </label>
          <span className="toggle-label">Yearly</span>
        </div>
      </div>
      <div className="packages-details-second-row">
        {packagesData[isYearly ? "yearly" : "monthly"].map((pkg, index) => (
          <PackageCard key={index} name={pkg.name} price={pkg.price} duration={pkg.duration} benefits={pkg.benefits} />
        ))}
      </div>
    </div>
  );
};
