import React, { useState } from 'react';

import './App.css';
import heroBg from './hero-bg.jpg'; 
import ResumeParsing from './Resume-Parsing.jpg'; 
import AutomatedSheduling from './automated-scheduling.jpg';
import AnalyticsDashboard from './Analytics-Dashboard.jpg'; 
import TeamCollaboration from './Team-Collaboration.jpg'; 
import FastHiring from './Fast-Hiring.jpg'; 
import FastTracking from './Fast-Tracking.jpg';
import ReduceHiringTime from './ReduceHiringTime.jpg';
import ImproveCandidateExperience from './ImproveCandidateExperience.jpg';
import EnhancedCollaboration from './EnhancedCollaboration.jpg';
import Login from './Login'; 


// Navbar Component
const Navbar = () => {
  return (
    <nav>
      <div className="navbar" style={{ color: 'white' }}>
        <h1>Codevocado ATS</h1>
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
        </ul>
        <div className="auth-buttons">
          <button onClick={() => window.location.href = '/login'}>Log In</button>
          <button>Sign Up</button>
        </div>
      </div>
    </nav>
  );
};


// Hero Component
const Hero = () => {
  return (
    <header className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <h1>Streamline Your Hiring Process with Codevocado ATS</h1>
      <button>Get Started</button>
    </header>
  );
};

// Features Component
const Features = () => {
  return (
    <section id="features" className="features">
      <h2>Core Features</h2>
      <div className="feature-list">
        <div className="feature">
          <img src={ResumeParsing} alt="Resume Parsing" style={{ height: '300px', marginRight: '10px', verticalAlign: 'middle' }} />      
          <h3>Resume Parsing</h3>
          <p>Automated resume screening and parsing.</p>
        </div>
        <div className="feature">
          <img src={AutomatedSheduling} alt="Automated Scheduling" style={{ height: '300px', marginRight: '10px', verticalAlign: 'middle' }} />
          <h3>Automated Scheduling</h3>
          <p>Manage interview scheduling with ease.</p>
        </div>
        <div className="feature">
          <img src={AnalyticsDashboard} alt="Analytics Dashboard" style={{ height: '300px', marginRight: '10px', verticalAlign: 'middle' }} />
          <h3>Analytics Dashboard</h3>
          <p>Track hiring performance and trends.</p>
        </div>
        <div className="feature">
          <img src={TeamCollaboration} alt="Team Collaboration" style={{ height: '300px', marginRight: '10px', verticalAlign: 'middle' }} />
          <h3>Team Collaboration</h3>
          <p>Seamless collaboration with your hiring team.</p>
        </div>
      </div>
    </section>
  );
};
// Testimonials Component
const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <h2>What our Clients Say</h2>
      <div className="testimonial-slider">
        <div className="testimonial-item">
          <blockquote className="testimonial-content">
            <img src={FastHiring} alt="Sarah, Hiring Manager" className="testimonial-image" />
            <p>"Codevocado ATS streamlined our hiring process, reducing our time-to-hire by 50%!"</p>
            <cite>- Sarah, Hiring Manager</cite>
          </blockquote>
        </div>
        <div className="testimonial-item">
          <blockquote className="testimonial-content">
            <img src={FastTracking} alt="John, HR Director" className="testimonial-image" />
            <p>"We loved how easy it was to schedule interviews and keep track of candidate progress."</p>
            <cite>- John, HR Director</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
};



// Benefits Component
const Benefits = () => {
  return (
    <section className="benefits">
      <h2>Why Choose Us?</h2>
      <div className="benefit-grid">
        <div className="benefit">
          <img src={ReduceHiringTime} alt="Reduce Hiring Time" style={{ height: '200px', marginBottom: '10px' }} />
          <h3>Reduce Hiring Time</h3>
          <p>Speed up your recruitment process with our automated tools.</p>
        </div>
        <div className="benefit">
          <img src={ImproveCandidateExperience} alt="Improve Candidate Experience" style={{ height: '200px', marginBottom: '10px' }} />
          <h3>Improve Candidate Experience</h3>
          <p>Create a better experience for candidates with streamlined communication.</p>
        </div>
        <div className="benefit">
          <img src={EnhancedCollaboration} alt="Enhanced Collaboration" style={{ height: '200px', marginBottom: '10px' }} />
          <h3>Enhanced Collaboration</h3>
          <p>Keep your team in sync with collaborative hiring tools.</p>
        </div>
      </div>
    </section>
  );
};
// Footer Component
const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>© 2024 Codevocado. All Rights Reserved.</p>
        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

// LoginModal Component
const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLoginClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <a href="#login" id="loginBtn" onClick={handleLoginClick}>Login</a>
      {isOpen && (
        <div className="modal" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={handleClose}>&times;</span>
            <h2>Login</h2>
            <form id="loginForm">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />
              
              <label htmlFor="password">Password</label>
              <input type="password" id="password" required />
              
              <button type="submit">Login</button>
              <p>Or login with:</p>
              <div className="social-login">
                <button>Google</button>
                <button>LinkedIn</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

// Main App Component
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Benefits />
      <Footer />
      <LoginModal />
    </div>
  );
};

export default App;
