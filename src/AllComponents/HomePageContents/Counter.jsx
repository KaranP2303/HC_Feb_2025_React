import '../Styles/HomePageStyles/CounterStyle.css';

import React from "react";

const Counters = () => {
  const counterData = [
    { value: "400+", label: "Projects Completed" },
    { value: "15+", label: "Successful Years" },
    { value: "98%", label: "Client Retention" },
    { value: "30+", label: "Countries" },
  ];

  return (
    <div className="counters">
      {counterData.map((item, index) => (
        <React.Fragment key={index}>
          <div className="counter">
            <div className="frame-8">
              <div className="counter-value">{item.value}</div>
            </div>
            <div className="frame-9">
              <div className="counter-label">{item.label}</div>
            </div>
          </div>
          {index !== counterData.length - 1 && <div className="counter-divider"></div>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Counters;