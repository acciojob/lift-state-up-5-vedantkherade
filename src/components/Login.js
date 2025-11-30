import React from "react";

function Login({ isLoggedIn, onLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter username" required />
      <input type="password" placeholder="Enter password" required />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
