import React, { useState } from 'react';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [handle, setHandle] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        return;
      case 'password':
        setPassword(value);
        return;
      case 'confirmPassword':
        setConfirmPassword(value);
        return;
      case 'handle':
        setHandle(value);
        return;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log({
      email,
      password,
      confirmPassword,
      handle
    });
  };
  return (
    <div>
      <h2>SignUp</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Enter email"
          onChange={handleChange}
          value={email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={password}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
          value={confirmPassword}
        />
        <input
          type="text"
          name="handle"
          placeholder="Nickname"
          onChange={handleChange}
          value={handle}
        />
        <button type="submit">signup</button>
      </form>
    </div>
  );
}

export default Signup;
