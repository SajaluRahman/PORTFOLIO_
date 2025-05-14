import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Astrobyte Pvt Ltd</h5>
              </div>
              <h3>2024 - 2025</h3>
            </div>
            <p>
              Worked as a Full Stack Developer building scalable web applications using 
              the MERN stack, integrating APIs, implementing authentication systems, 
              and creating clean and responsive UI interfaces. Also contributed to project planning 
              and collaborated with cross-functional teams.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
