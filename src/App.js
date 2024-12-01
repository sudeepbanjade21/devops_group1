import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import About from './pages/About';

function App() {
  return (
    <Router>
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">DevOps_Group1</div>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </header>

      {/* Routes */}
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <div>
              {/* Hero Section */}
              <section id="home" className="hero">
                <h1>Welcome to DevOps_Group1</h1>
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
                <h2>About DevOps_Group1</h2>
                <p>
                  DevOps_Group1 provides a simple yet powerful foundation for building React applications.
                  Customize it to suit your project's needs and scale effortlessly.
                </p>
              </section>
            </div>
          }
        />

        {/* About Route */}
        <Route path="/about" element={<About />} />
      </Routes>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 DevOps_Group1. All rights reserved.</p>
      </footer>
    </Router>
  );
}

export default App;
