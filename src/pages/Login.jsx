import React, { useState } from 'react';
import '../pages/login.css'

const Form = () => {
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
      setError('All fields are required');
      alert(error);
    } else if (username === 'Priyanka' && email === 'abc@gmail.com' && password === '12345') {
      alert('Successfully logged in!');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <form id="form" className="form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder='Name'
          value={username}
          onChange={handleUsernameChange}
          required 
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder='Email-id'
          value={email}
          onChange={handleEmailChange}
          required 
        />
      </div>
      <div className="form-control">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder='Password'
          value={password}
          onChange={handlePasswordChange}
          required 
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

const Login = () => {
  return (
    <div className="form-container">
      <div className="image-section"></div> {/* Placeholder for the image */}
      <div className="form-section">
        <h2 style={{ color: 'blue', fontSize: '40px', textAlign: 'center'}}>Welcome to My Website</h2>
        <Form />
      </div>
    </div>
  );
};

export default Login;
