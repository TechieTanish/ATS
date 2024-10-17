import React, { useState } from 'react';
import './Login.css'; // Import CSS for animations

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', email, password);
  };

  const handleGoogleLogin = () => {
    console.log('Google Login');
    // Implement Google login logic here
  };

  const handleLinkedInLogin = () => {
    console.log('LinkedIn Login');
    // Implement LinkedIn login logic here
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <div className="social-login">
        <button className="google-btn" onClick={handleGoogleLogin}>
          Login with Google
        </button>
        <button className="linkedin-btn" onClick={handleLinkedInLogin}>
          Login with LinkedIn
        </button>
      </div>
    </div>
  );
};

export default Login;
