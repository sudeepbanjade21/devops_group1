import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">DevOps Group1</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <h1>Welcome to the App</h1>
        <p>Your platform for innovation and testing.</p>
        <button className="cta-button">Learn More</button>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>Our Features</h2>
        <div className="card-container">
          <div className="card">
            <h3>Modern Design</h3>
            <p>Build attractive and responsive interfaces with ease.</p>
          </div>
          <div className="card">
            <h3>Continuous Integration</h3>
            <p>Streamline your workflows with built-in CI/CD.</p>
          </div>
          <div className="card">
            <h3>Scalability</h3>
            <p>Easily adapt and expand your projects for the future.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Our App</h2>
        <p>
          Our App provides a simple yet powerful foundation for building React applications.
          Customize it to suit your project's needs and scale effortlessly.
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 DevOps_Group1. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
