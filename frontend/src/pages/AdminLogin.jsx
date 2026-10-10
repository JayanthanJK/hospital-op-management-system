import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AdminLogin.css";

function AdminLogin() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    if (
      username === "admin" &&
      password === "admin123"
    ) {

      navigate("/dashboard");

    } else {

      alert("Invalid Username or Password");

    }

  };

  return (

    <div className="login-container">

      <div className="login-card">

        <h1>🏥 Hospital Admin Login</h1>

        <p>Sign in to manage OP registrations</p>

        <form onSubmit={handleLogin}>

          <div className="input-group">

            <label>Username</label>

            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

          </div>

          <div className="input-group">

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

          </div>

          <button type="submit">
            Login
          </button>

        </form>

      </div>

    </div>

  );
}

export default AdminLogin;