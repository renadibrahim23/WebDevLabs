function SearchBar() {
  return (
    <div className="navbar">

      <div className="left">
        <span id="udemy-logo">
          <img className="searchbar-logo" src="/logo-udemy.svg"></img></span>
        <button id="exploreBtn">Explore</button>
      </div>

      <div className="search">
        <input type="text" placeholder="Search for anything" />
        <span id="searchIcon">&#128269;</span>
      </div>

      <div className="links">
        <button id="prices-and-plans">Plans & Pricing</button>
        <button id="business">Udemy Business</button>
        <button id="teach">Teach on Udemy</button>
        <button id="cart">Cart</button>
      </div>

      <div className="auth">
        <button id="login">Log In</button>
        <button id="signup">Sign Up</button>
      </div>

    </div>
  );
}

export default SearchBar;
