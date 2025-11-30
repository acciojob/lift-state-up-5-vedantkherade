
import React, { useState } from "react";
import './../styles/App.css';
import Login from "./Login";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
         <h1>Parent Component</h1>

        {/* Do not remove the main div */}
        {isLoggedIn ? (
        <h2>You are logged in!</h2>
      ) : (
        <Login isLoggedIn={isLoggedIn} onLogin={handleLogin} />
      )}
    </div>
  )
}

export default App
