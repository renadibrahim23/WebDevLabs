import "./CoursesSection.css";

function CoursesSection() {
  return (
    <div id="courses-section">
      <div id="side-text">
        <h2>Learn essential career and life skills</h2>
        <p>
          Udemy helps you build in-demand skills fast and advance your career in a changing job market.
        </p>
      </div>
      <div id="carousel">
        <div className="carousel-item">
          <img src="/generative-ai.webp" alt="Generative AI" />
          <div className="carousel-info">
            <p>1.7M+</p>
            <h3>Generative AI</h3>
            <a href="#">→</a>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/it-certifications.webp" alt="IT Certifications" />
          <div className="carousel-info">
            <p>14M+</p>
            <h3>IT Certifications</h3>
            <a href="#">→</a>
          </div>
        </div>
      </div>
      <div id="carousel-controls">
        <button className="prev">←</button>
        <button className="next">→</button>
      </div>
    </div>
  );
}

export default CoursesSection;