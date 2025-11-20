import "./SecondBanner.css";

function SecondBanner() {
  return (
    <div id="hero-banner">
      <div id="hero-text">
        <h2>Reimagine your career in the AI era</h2>
        <p>
          Future-proof your skills with Personal Plan. Get access to a variety of fresh content from real-world experts.
        </p>
        <ul>
          <li>
            <span>💡</span> Learn AI and more
          </li>
          <li>
            <span>📜</span> Prep for a certification
          </li>
          <li>
            <span>🤖</span> Practice with AI coaching
          </li>
          <li>
            <span>🚀</span> Advance your career
          </li>
        </ul>
        <button>Learn more</button>
        <p className="price">Starting at £204.00/month</p>
      </div>
      <div id="hero-images">
        <img src="/ai-career@2x.webp" alt="Hero Image 1" />
        
      </div>
    </div>
  );
}

export default SecondBanner;