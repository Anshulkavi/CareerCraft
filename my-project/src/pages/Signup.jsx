import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Logo from "../assets/Logo.jpg";
import styles from "./Signup.module.css"; // Ensure correct import

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = formData;

    if (!username || !email || !password) {
      setMessage({ text: "All fields are required!", color: "red" });
      return;
    }

    if (password.length < 6) {
      setMessage({ text: "Password must be at least 6 characters!", color: "red" });
      return;
    }

    setMessage({ text: "Signup successful!", color: "green" });

    setTimeout(() => {
      setFormData({ username: "", email: "", password: "" });
      setMessage("");
    }, 2000);
  };

  return (
    <div className={styles.signupPage}>
      <header>
      </header>

      <div className={styles.signupContainer}>
        <h2>Sign Up</h2>
        <form id="signupForm" onSubmit={handleSubmit}>
          <div className={styles.signupInputBox}>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <label>Username</label>
          </div>
          <div className={styles.signupInputBox}>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label>Email</label>
          </div>
          <div className={styles.signupInputBox}>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <label>Password</label>
          </div>
          <button type="submit" className={styles.signupBtn}>
            Sign Up
          </button>

          <div className={styles.signupOrSeparator}>
            <hr className={styles.signupFlexGrow} />
            <span className={styles.signupMx2}>or</span>
            <hr className={styles.signupFlexGrow} />
          </div>

          <Link to="/signup">
            <button type="button" className={styles.signupBtn}>
              Login
            </button>
          </Link>
        </form>

        {message && (
          <p className={styles.signupMessage} style={{ color: message.color }}>
            {message.text}
          </p>
        )}
      </div>
    </div>
  );
}

export default Signup;
