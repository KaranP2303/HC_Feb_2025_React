import "../Styles/CyberStatsStyle.css";

const CyberStats = () => {
  return (
    <>
      <div className="cyber-stats-container">
        <div className=" card-primary">
          <div className="large-text">50%</div>
          <div className="cyber-stats-description">
            and more of significant cyber incidents are caused by a lack of skills
            or human failure. 
          </div>
        </div>
        <div className=" card-secondary">
          <div className="small-text">
            Beat the odds. Optimize your performance.
          </div>
        </div>
      </div>
      {/* stats numbers */}


      <div className="stats-container">
        <div className="stat">
          <div className="number">10k+</div>
          <div className="label">Satisfied Clients</div>
        </div>
        <div className="stat">
          <div className="number">10+</div>
          <div className="label">Years of Experience</div>
        </div>
        <div className="stat">
          <div className="number">30+</div>
          <div className="label">Professional Teams</div>
        </div>
        <div className="stat">
          <div className="number">100+</div>
          <div className="label">Projects Completed</div>
        </div>
      </div>
    </>
    
  );
};

export default CyberStats;
