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


      <div class="stats-container">
        <div class="stat">
          <div class="number">10k+</div>
          <div class="label">Satisfied Clients</div>
        </div>
        <div class="stat">
          <div class="number">10+</div>
          <div class="label">Years of Experience</div>
        </div>
        <div class="stat">
          <div class="number">30+</div>
          <div class="label">Professional Teams</div>
        </div>
        <div class="stat">
          <div class="number">100+</div>
          <div class="label">Projects Completed</div>
        </div>
      </div>
    </>
    
  );
};

export default CyberStats;
