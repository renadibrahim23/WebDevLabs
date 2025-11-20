import "./Certifications.css";

function Certifications() {
  return (
    <div id="certifications">
      <div id="side-text">
        <h2>Learn essential career and life skills</h2>
        <p>
          Udemy helps you build in-demand skills fast and advance your career in a changing job market.
        </p>
      </div>
      <div id="certification-cards">
        <div className="certification-card">
          <img src="/generative-ai.webp" alt="Generative AI" />
          <div className="card-info">
            <p>1.7M+</p>
            <h3>Generative AI</h3>
            <a href="#">→</a>
          </div>
        </div>
        <div className="certification-card">
          <img src="/certifications.webp" alt="IT Certifications" />
          <div className="card-info">
            <p>14M+</p>
            <h3>IT Certifications</h3>
            <a href="#">→</a>
          </div>
        </div>
        <div className="certification-card">
          <img src="/data-science.webp" alt="Data Science" />
          <div className="card-info">
            <p>8.1M+</p>
            <h3>Data Science</h3>
            <a href="#">→</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certifications;